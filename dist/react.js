var L = Object.defineProperty;
var T = (o, t, e) => t in o ? L(o, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : o[t] = e;
var w = (o, t, e) => T(o, typeof t != "symbol" ? t + "" : t, e);
import { jsx as c, jsxs as v } from "react/jsx-runtime";
import { useState as b, useRef as C, useEffect as R, useCallback as S, useActionState as E } from "react";
import { doc as u, where as P, query as y, Timestamp as D, setDoc as x, getDoc as j, getDocs as B, deleteDoc as q, writeBatch as A } from "firebase/firestore";
function d(...o) {
  return (t) => o.reduce((e, n) => n(e), t);
}
const i = (o, t) => (e) => (t.forEach((n) => {
  (e[o] ?? e[n]) !== void 0 && (e[o] = e[o] ?? e[n]);
}), e), g = (o) => (t) => {
  const e = { ...t };
  return o.forEach((n) => delete e[n]), e;
};
function I(o, { inmediate: t } = { inmediate: !1 }) {
  const [e, n] = b(null), [r, s] = b(null), [h, l] = b(!1), a = C(!0);
  R(() => () => {
    a.current = !1;
  }, []);
  const m = S(async (...f) => {
    a.current && (l(!0), s(null), n(null), o(...f).then((p) => n(p)).catch((p) => s(p)).finally(() => l(!1)));
  }, [o]);
  return R(() => {
    t && m();
  }, [t, m]), { data: e, error: r, loading: h, execute: m };
}
const F = (o) => {
  const t = d(
    i("marginTop", ["marginTop", "mt", "my"]),
    i("marginRight", ["marginRight", "mr", "mx"]),
    i("marginBottom", ["marginBottom", "mb", "my"]),
    i("marginLeft", ["marginLeft", "ml", "mx"]),
    i("margin", ["margin", "m"])
  )({ ...o });
  return { ...g(["marginTop", "marginRight", "marginBottom", "marginLeft", "margin", "mt", "mr", "mb", "ml", "my", "mx"])(o), style: { ...o.style, ...t } };
}, H = (o) => {
  const t = d(
    i("paddingTop", ["paddingTop", "pt", "py"]),
    i("paddingRight", ["paddingRight", "pr", "px"]),
    i("paddingBottom", ["paddingBottom", "pb", "py"]),
    i("paddingLeft", ["paddingLeft", "pl", "px"]),
    i("padding", ["padding", "p"])
  )({ ...o });
  return { ...g(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "padding", "pt", "pr", "pb", "pl", "px", "py"])(o), style: { ...o.style, ...t } };
}, W = (o) => {
  const t = d(
    i("width", ["width", "w"]),
    i("height", ["height", "h"]),
    i("minWidth", ["minWidth", "minW"]),
    i("minHeight", ["minHeight", "minH"])
  )({ ...o });
  return { ...g(["width", "height", "minWidth", "minHeight"])(o), style: { ...o.style, ...t } };
}, O = (o) => {
  const t = d(
    i("borderTop", ["borderTop", "borderY"]),
    i("borderRight", ["borderRight", "borderX"]),
    i("borderBottom", ["borderBottom", "borderY"]),
    i("borderLeft", ["borderLeft", "borderX"])
  )({ ...o });
  return { ...g(["borderTop", "borderRadius", "borderRight", "borderBottom", "borderLeft", "borderY", "borderX"])(t), style: { ...o.style, ...t } };
}, X = (o) => {
  const t = d(
    i("backgroundColor", ["backgroundColor", "bg"])
  )({ ...o });
  return { ...g(["backgroundColor", "bg"])(o), style: { ...t, ...o.style } };
}, J = ({ as: o, style: t, ...e }) => {
  const n = d(
    F,
    H,
    W,
    O,
    X
  )(e);
  return /* @__PURE__ */ c(
    o ?? "div",
    {
      ...n,
      style: {
        ...n.style,
        ...t
      }
    }
  );
}, Y = () => /* @__PURE__ */ c("span", { children: "Text" }), k = ({ children: o, ...t }) => /* @__PURE__ */ c("button", { ...t, children: o }), M = (o, t) => o.reduce(
  (e, n) => (e[n.name] = t, e),
  {}
), N = (o) => async (t, e) => {
  const n = Object.fromEntries(e.entries());
  o(n);
}, K = ({ onSubmit: o, error: t, fields: e, componentMap: n }) => {
  const [
    r,
    s,
    h
  ] = E(N(o), M(e, "")), l = t || Object.values(r).pop();
  return /* @__PURE__ */ v("form", { action: s, children: [
    e.map((a, m) => {
      const f = n[a.type] ?? n.default;
      return /* @__PURE__ */ c(f, { label: a.label, ...a.options }, m);
    }),
    l && /* @__PURE__ */ c(Y, { children: l }),
    /* @__PURE__ */ c(k, { type: "submit", children: h ? "Loading..." : "Submit" })
  ] });
};
class Q {
  constructor(t, e) {
    w(this, "collectionName");
    this.collectionRef = t, this.db = e, this.collectionName = this.collectionRef.path;
  }
  query(t) {
    return (...e) => {
      let n;
      if (typeof e[0] == "string") {
        const [r] = e;
        n = u(t, r);
      } else if (e.some((r) => r.every(Boolean))) {
        const r = e.map((s) => P(...s));
        n = y(t, ...r);
      } else
        n = y(t);
      return n;
    };
  }
  async create(t) {
    const e = u(this.collectionRef), n = { ...t, id: e.id, createdAt: D.now() };
    return await x(e, n), n;
  }
  async read(t) {
    const e = u(this.collectionRef, t);
    let n;
    if (t) {
      const r = await j(e);
      r.exists() && (n = r.data());
    } else {
      const r = await B(this.collectionRef);
      r.empty || (n = r.docs.map((s) => s.data()));
    }
    return n;
  }
  async update(t, e) {
    const n = u(this.collectionRef, t);
    await x(n, e, { merge: !0 });
  }
  async delete(t) {
    const e = u(this.collectionRef, t);
    await q(e);
  }
  async deleteAll(...t) {
    const e = t.map((r) => P(...r)), n = await B(y(this.collectionRef, ...e));
    if (this.db || console.error("db is not available"), !n.empty && this.db) {
      const r = A(this.db);
      n.forEach((s) => {
        r.delete(s.ref);
      }), await r.commit();
    }
  }
}
export {
  J as Box,
  Q as FireCrud,
  K as Form,
  I as useAsync
};
