import { Query, DocumentReference } from 'firebase/firestore';
interface UseFirequeryOptions {
    disabled?: boolean;
}
declare function useFirequery<T = Record<string, unknown>>(query: Query | DocumentReference, opts?: UseFirequeryOptions): {
    data: T | null;
    loading: boolean;
    error: Error | null;
};
export default useFirequery;
