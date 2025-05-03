import { useCallback, useEffect, useRef, useState } from "react";

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

function useAsync<U, T>(asyncFn: UseAsyncFunction<U, T>, {inmediate}: AsyncOpts = {inmediate: false}): UseAsyncReturn<U, T> {
  const [data, setData] = useState<U | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const mountRef = useRef(true);


  useEffect(() => {
    return () => {
      mountRef.current = false;
    };
  }, []);


  const execute = useCallback(async (...args: T[]) => {
    const isMounted = mountRef.current;
    if (!isMounted) return;

    setLoading(true);
    setError(null);
    setData(null);
      asyncFn(...args)
        .then((res) => setData(res))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));

  }, [asyncFn]);

  useEffect(() => {
    if (inmediate) {
      execute();
    }
  }, [inmediate, execute]);

  return { data, error, loading, execute };
}

export default useAsync;