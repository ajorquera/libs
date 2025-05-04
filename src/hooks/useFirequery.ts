import { onSnapshot, QuerySnapshot, Query, DocumentReference, QueryDocumentSnapshot, DocumentSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

function useFirequery<T = Record<string, unknown>>(query: Query | DocumentReference) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const unsubscribe = onSnapshot(query as Query,
            (snapshot: QuerySnapshot | QueryDocumentSnapshot<T>) => {
                if (snapshot instanceof DocumentSnapshot) {
                    if (snapshot.exists()) setData(null);
                    setData(snapshot.data())
                } else {
                    if (snapshot.empty) {
                        setData([] as T);
                    } else {
                        const docs = snapshot.docs.map((doc) => doc.data());
                        setData(docs as T);
                    }
                }

                setLoading(false);
            },
            (err) => {
                setError(err)
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [JSON.stringify(query)]);

    return { data, loading, error };
}

export default useFirequery;