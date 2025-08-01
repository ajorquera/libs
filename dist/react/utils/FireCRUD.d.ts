import { CollectionReference, DocumentData, DocumentReference, Firestore, Query, FieldPath, WhereFilterOp } from 'firebase/firestore';
export type WhereArgs = [fieldPath: string | FieldPath, opStr: WhereFilterOp, value: unknown];
export type QueryArgs = WhereArgs[] | [string];
declare class FireCRUD<T = Record<string, unknown>> {
    private collectionRef;
    private db?;
    collectionName: string;
    constructor(collectionRef: CollectionReference, db?: Firestore | undefined);
    query(collectionRef: CollectionReference): (...args: QueryArgs) => Query<DocumentData, DocumentData> | DocumentReference<DocumentData, DocumentData>;
    create(data: Partial<T>, pathSegments: string[]): Promise<T>;
    read(id: string): Promise<T | T[] | undefined>;
    update(id: string, data: Partial<T>): Promise<void>;
    delete(id: string): Promise<void>;
    deleteAll(...filters: QueryArgs): Promise<void>;
}
export default FireCRUD;
