import { CollectionReference, deleteDoc, doc, DocumentData, DocumentReference, Firestore, getDoc, getDocs, query, Query, setDoc, Timestamp, where, writeBatch } from "firebase/firestore";
import { FieldPath, WhereFilterOp } from "firebase/firestore";

export type WhereArgs = [fieldPath: string | FieldPath, opStr: WhereFilterOp, value: unknown]
export type QueryArgs = WhereArgs[] | [string]

class FireCRUD<T = Record<string, unknown>> {
    public collectionName: string;

    constructor(private collectionRef: CollectionReference, private db?: Firestore) {
        this.collectionName = this.collectionRef.path;
    }

    query(collectionRef: CollectionReference) {
        return (...args: QueryArgs) => {
            let queryObj: Query | DocumentReference;
            if (typeof args[0] === 'string') {
                const [id] = args;
                queryObj = doc(collectionRef, id);
            } else if ((args as WhereArgs[]).some((arg) => arg.every(Boolean))) {
                const constraints = (args as WhereArgs[]).map((arg) => where(...arg));
                queryObj = query(collectionRef, ...constraints);
            } else {
                queryObj = query(collectionRef);
            }

            return queryObj;
        }
    }

    async create(data: Partial<T>, pathSegments: string[]): Promise<T> {
        const docRef = doc(this.collectionRef, ...(pathSegments ? pathSegments : []));
        const model = { ...data, id: docRef.id, createdAt: Timestamp.now() } as T;
        await setDoc(docRef, model as DocumentData);
        return model;
    }

    async read(id: string): Promise<T | T[] | undefined> {
        const docRef = doc(this.collectionRef, id);

        let data: T | T[] | undefined;

        if (id) {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                data = docSnap.data() as T;
            }
        } else {
            const querySnapshot = await getDocs(this.collectionRef);
            if (!querySnapshot.empty) {
                data = querySnapshot.docs.map((doc) => (doc.data())) as T[];
            }
        }

        return data;
    }

    async update(id: string, data: Partial<T>): Promise<void> {
        const docRef = doc(this.collectionRef, id);
        await setDoc(docRef, data, { merge: true });
    }

    async delete(id: string): Promise<void> {
        const docRef = doc(this.collectionRef, id);
        await deleteDoc(docRef);
    }

    async deleteAll(...filters: QueryArgs): Promise<void> {
        const constraints = (filters as WhereArgs[]).map((filter) => where(...filter));
        const querySnapshot = await getDocs(query(this.collectionRef, ...constraints));

        if (!this.db) {
            console.error("db is not available");
        }

        if (!querySnapshot.empty && this.db) {
            const batch = writeBatch(this.db);
            querySnapshot.forEach((doc) => {
                batch.delete(doc.ref);
            });
            await batch.commit();
        }
    }
}

export default FireCRUD;