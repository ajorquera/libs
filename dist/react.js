var T = Object.defineProperty;
var S = (n, t, e) => t in n ? T(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var x = (n, t, e) => S(n, typeof t != "symbol" ? t + "" : t, e);
import { jsx as l, jsxs as v } from "react/jsx-runtime";
import { useActionState as C, useState as m, useRef as D, useEffect as w, useCallback as E } from "react";
import { onSnapshot as F, DocumentSnapshot as j, doc as h, where as P, query as y, Timestamp as q, setDoc as B, getDoc as A, getDocs as L, deleteDoc as H, writeBatch as O } from "firebase/firestore";
function u(...n) {
  return (t) => n.reduce((e, o) => o(e), t);
}
const i = (n, t) => (e) => (t.forEach((o) => {
  (e[n] ?? e[o]) !== void 0 && (e[n] = e[n] ?? e[o]);
}), e), b = (n) => (t) => {
  const e = { ...t };
  return n.forEach((o) => delete e[o]), e;
}, W = (n) => {
  const t = u(
    i("marginTop", ["marginTop", "mt", "my"]),
    i("marginRight", ["marginRight", "mr", "mx"]),
    i("marginBottom", ["marginBottom", "mb", "my"]),
    i("marginLeft", ["marginLeft", "ml", "mx"]),
    i("margin", ["margin", "m"])
  )({ ...n });
  return { ...b(["marginTop", "marginRight", "marginBottom", "marginLeft", "margin", "mt", "mr", "mb", "ml", "my", "mx"])(n), style: { ...n.style, ...t } };
}, N = (n) => {
  const t = u(
    i("paddingTop", ["paddingTop", "pt", "py"]),
    i("paddingRight", ["paddingRight", "pr", "px"]),
    i("paddingBottom", ["paddingBottom", "pb", "py"]),
    i("paddingLeft", ["paddingLeft", "pl", "px"]),
    i("padding", ["padding", "p"])
  )({ ...n });
  return { ...b(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "padding", "pt", "pr", "pb", "pl", "px", "py"])(n), style: { ...n.style, ...t } };
}, X = (n) => {
  const t = u(
    i("width", ["width", "w"]),
    i("height", ["height", "h"]),
    i("minWidth", ["minWidth", "minW"]),
    i("minHeight", ["minHeight", "minH"])
  )({ ...n });
  return { ...b(["width", "height", "minWidth", "minHeight"])(n), style: { ...n.style, ...t } };
}, Y = (n) => {
  const t = u(
    i("borderTop", ["borderTop", "borderY"]),
    i("borderRight", ["borderRight", "borderX"]),
    i("borderBottom", ["borderBottom", "borderY"]),
    i("borderLeft", ["borderLeft", "borderX"])
  )({ ...n });
  return { ...b(["borderTop", "borderRadius", "borderRight", "borderBottom", "borderLeft", "borderY", "borderX"])(t), style: { ...n.style, ...t } };
}, k = (n) => {
  const t = u(
    i("backgroundColor", ["backgroundColor", "bg"])
  )({ ...n });
  return { ...b(["backgroundColor", "bg"])(n), style: { ...t, ...n.style } };
}, K = ({ as: n, style: t, ...e }) => {
  const o = u(
    W,
    N,
    X,
    Y,
    k
  )(e);
  return /* @__PURE__ */ l(
    n ?? "div",
    {
      ...o,
      style: {
        ...o.style,
        ...t
      }
    }
  );
}, M = () => /* @__PURE__ */ l("span", { children: "Text" }), z = ({ children: n, ...t }) => /* @__PURE__ */ l("button", { ...t, children: n }), J = (n, t) => n.reduce(
  (e, o) => (e[o.name] = t, e),
  {}
), U = (n) => async (t, e) => {
  const o = Object.fromEntries(e.entries());
  n(o);
}, Q = ({ onSubmit: n, error: t, fields: e, componentMap: o }) => {
  const [
    r,
    s,
    g
  ] = C(U(n), J(e, "")), d = t || Object.values(r).pop();
  return /* @__PURE__ */ v("form", { action: s, children: [
    e.map((c, a) => {
      const f = o[c.type] ?? o.default;
      return /* @__PURE__ */ l(f, { label: c.label, ...c.options }, a);
    }),
    d && /* @__PURE__ */ l(M, { children: d }),
    /* @__PURE__ */ l(z, { type: "submit", children: g ? "Loading..." : "Submit" })
  ] });
};
function Z(n, { inmediate: t } = { inmediate: !1 }) {
  const [e, o] = m(null), [r, s] = m(null), [g, d] = m(!1), c = D(!0);
  w(() => () => {
    c.current = !1;
  }, []);
  const a = E(async (...f) => {
    c.current && (d(!0), s(null), o(null), n(...f).then((p) => o(p)).catch((p) => s(p)).finally(() => d(!1)));
  }, []);
  return w(() => {
    t && a();
  }, [t, a]), { data: e, error: r, loading: g, execute: a };
}
function $(n, t = { disabled: !1 }) {
  const [e, o] = m(null), [r, s] = m(!1), [g, d] = m(null);
  return w(() => {
    if (!t.disabled) {
      s(!0);
      const c = F(
        n,
        (a) => {
          if (a instanceof j)
            a.exists() && o(null), o(a.data());
          else if (a.empty)
            o([]);
          else {
            const f = a.docs.map((R) => R.data());
            o(f);
          }
          s(!1);
        },
        (a) => {
          d(a), s(!1);
        }
      );
      return () => c();
    }
  }, [JSON.stringify(n), t.disabled]), { data: e, loading: r, error: g };
}
class tt {
  constructor(t, e) {
    x(this, "collectionName");
    this.collectionRef = t, this.db = e, this.collectionName = this.collectionRef.path;
  }
  query(t) {
    return (...e) => {
      let o;
      if (typeof e[0] == "string") {
        const [r] = e;
        o = h(t, r);
      } else if (e.some((r) => r.every(Boolean))) {
        const r = e.map((s) => P(...s));
        o = y(t, ...r);
      } else
        o = y(t);
      return o;
    };
  }
  async create(t) {
    const e = h(this.collectionRef), o = { ...t, id: e.id, createdAt: q.now() };
    return await B(e, o), o;
  }
  async read(t) {
    const e = h(this.collectionRef, t);
    let o;
    if (t) {
      const r = await A(e);
      r.exists() && (o = r.data());
    } else {
      const r = await L(this.collectionRef);
      r.empty || (o = r.docs.map((s) => s.data()));
    }
    return o;
  }
  async update(t, e) {
    const o = h(this.collectionRef, t);
    await B(o, e, { merge: !0 });
  }
  async delete(t) {
    const e = h(this.collectionRef, t);
    await H(e);
  }
  async deleteAll(...t) {
    const e = t.map((r) => P(...r)), o = await L(y(this.collectionRef, ...e));
    if (this.db || console.error("db is not available"), !o.empty && this.db) {
      const r = O(this.db);
      o.forEach((s) => {
        r.delete(s.ref);
      }), await r.commit();
    }
  }
}
export {
  K as Box,
  tt as FireCrud,
  Q as Form,
  Z as useAsync,
  $ as useFirequery
};
