interface UseAsyncReturn<T, U> {
    data: T | null;
    error: Error | null;
    loading: boolean;
    execute: UseAsyncFunction<void, U>;
}
type UseAsyncFunction<T, U> = (...args: U[]) => Promise<T>;
interface AsyncOpts {
    inmediate?: boolean;
}
declare function useAsync<U, T>(asyncFn: UseAsyncFunction<U, T>, { inmediate }?: AsyncOpts): UseAsyncReturn<U, T>;
export default useAsync;
