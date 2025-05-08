import { useState as s, useRef as g, useEffect as m, useCallback as y } from "react";
import { onSnapshot as S, DocumentSnapshot as x } from "firebase/firestore";
function p(r, { inmediate: l } = { inmediate: !1 }) {
  const [o, t] = s(null), [c, n] = s(null), [i, a] = s(!1), u = g(!0);
  m(() => () => {
    u.current = !1;
  }, []);
  const e = y(async (...f) => {
    u.current && (a(!0), n(null), t(null), r(...f).then((d) => t(d)).catch((d) => n(d)).finally(() => a(!1)));
  }, [r]);
  return m(() => {
    l && e();
  }, [l, e]), { data: o, error: c, loading: i, execute: e };
}
function L(r, l = { disabled: !1 }) {
  const [o, t] = s(null), [c, n] = s(!1), [i, a] = s(null);
  return m(() => {
    if (!l.disabled) {
      n(!0);
      const u = S(
        r,
        (e) => {
          if (e instanceof x)
            e.exists() && t(null), t(e.data());
          else if (e.empty)
            t([]);
          else {
            const f = e.docs.map((b) => b.data());
            t(f);
          }
          n(!1);
        },
        (e) => {
          a(e), n(!1);
        }
      );
      return () => u();
    }
  }, [JSON.stringify(r), l.disabled]), { data: o, loading: c, error: i };
}
export {
  p as useAsync,
  L as useFirequery
};
