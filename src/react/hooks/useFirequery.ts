import { onSnapshot, QuerySnapshot, Query, DocumentReference, QueryDocumentSnapshot, DocumentSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
interface UseFirequeryOptions {
    disabled?: boolean;
}
function useFirequery<T = Record<string, unknown>>(query: Query | DocumentReference, opts: UseFirequeryOptions = {disabled: false}) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if(!opts.disabled) {
            setLoading(true);
            const unsubscribe = onSnapshot(query as Query,
                (snapshot: QuerySnapshot | QueryDocumentSnapshot<T>) => {
                    if (snapshot instanceof DocumentSnapshot) {
                        if (snapshot.exists()) setData(null);
                        setData(snapshot.data())
                    } else {
                        if (snapshot.empty) {
                            setData([] as T);
                        } else {
                            const docs = snapshot.docs.map((doc: QueryDocumentSnapshot) => doc.data());
                            setData(docs as T);
                        }
                    }
    
                    setLoading(false);
                },
                (err: Error) => {
                    setError(err)
                    setLoading(false);
                }
            );
    
            return () => unsubscribe();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(query), opts.disabled]);

    return { data, loading, error };
}

export default useFirequery;