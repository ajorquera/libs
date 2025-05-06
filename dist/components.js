import ie, { useState as h, useRef as ce, useEffect as Y, useCallback as le } from "react";
import { onSnapshot as ue, DocumentSnapshot as fe } from "firebase/firestore";
var O = { exports: {} }, w = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V;
function de() {
  if (V) return w;
  V = 1;
  var r = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function t(a, c, l) {
    var g = null;
    if (l !== void 0 && (g = "" + l), c.key !== void 0 && (g = "" + c.key), "key" in c) {
      l = {};
      for (var m in c)
        m !== "key" && (l[m] = c[m]);
    } else l = c;
    return c = l.ref, {
      $$typeof: r,
      type: a,
      key: g,
      ref: c !== void 0 ? c : null,
      props: l
    };
  }
  return w.Fragment = n, w.jsx = t, w.jsxs = t, w;
}
var P = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J;
function me() {
  return J || (J = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === oe ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case x:
          return "Fragment";
        case H:
          return "Profiler";
        case G:
          return "StrictMode";
        case ee:
          return "Suspense";
        case re:
          return "SuspenseList";
        case ne:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case X:
            return "Portal";
          case Q:
            return (e.displayName || "Context") + ".Provider";
          case Z:
            return (e._context.displayName || "Context") + ".Consumer";
          case K:
            var o = e.render;
            return e = e.displayName, e || (e = o.displayName || o.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case te:
            return o = e.displayName || null, o !== null ? o : r(e.type) || "Memo";
          case $:
            o = e._payload, e = e._init;
            try {
              return r(e(o));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function t(e) {
      try {
        n(e);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var s = o.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), n(e);
      }
    }
    function a(e) {
      if (e === x) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === $)
        return "<...>";
      try {
        var o = r(e);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = S.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function g(e) {
      if (F.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, o) {
      function s() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function R() {
      var e = r(this.type);
      return M[e] || (M[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function d(e, o, s, u, E, b, j, N) {
      return s = b.ref, e = {
        $$typeof: D,
        type: e,
        key: o,
        props: b,
        _owner: E
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: R
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function v(e, o, s, u, E, b, j, N) {
      var f = o.children;
      if (f !== void 0)
        if (u)
          if (ae(f)) {
            for (u = 0; u < f.length; u++)
              _(f[u]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(f);
      if (F.call(o, "key")) {
        f = r(e);
        var T = Object.keys(o).filter(function(se) {
          return se !== "key";
        });
        u = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", U[f + u] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          f,
          T,
          f
        ), U[f + u] = !0);
      }
      if (f = null, s !== void 0 && (t(s), f = "" + s), g(o) && (t(o.key), f = "" + o.key), "key" in o) {
        s = {};
        for (var C in o)
          C !== "key" && (s[C] = o[C]);
      } else s = o;
      return f && m(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), d(
        e,
        f,
        b,
        E,
        c(),
        s,
        j,
        N
      );
    }
    function _(e) {
      typeof e == "object" && e !== null && e.$$typeof === D && e._store && (e._store.validated = 1);
    }
    var p = ie, D = Symbol.for("react.transitional.element"), X = Symbol.for("react.portal"), x = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), Z = Symbol.for("react.consumer"), Q = Symbol.for("react.context"), K = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), re = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), ne = Symbol.for("react.activity"), oe = Symbol.for("react.client.reference"), S = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, ae = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var I, M = {}, W = p["react-stack-bottom-frame"].bind(
      p,
      l
    )(), B = A(a(l)), U = {};
    P.Fragment = x, P.jsx = function(e, o, s, u, E) {
      var b = 1e4 > S.recentlyCreatedOwnerStacks++;
      return v(
        e,
        o,
        s,
        !1,
        u,
        E,
        b ? Error("react-stack-top-frame") : W,
        b ? A(a(e)) : B
      );
    }, P.jsxs = function(e, o, s, u, E) {
      var b = 1e4 > S.recentlyCreatedOwnerStacks++;
      return v(
        e,
        o,
        s,
        !0,
        u,
        E,
        b ? Error("react-stack-top-frame") : W,
        b ? A(a(e)) : B
      );
    };
  }()), P;
}
var q;
function be() {
  return q || (q = 1, process.env.NODE_ENV === "production" ? O.exports = de() : O.exports = me()), O.exports;
}
var ge = be();
function y(...r) {
  return (n) => r.reduce((t, a) => a(t), n);
}
const i = (r, n) => (t) => (n.forEach((a) => {
  (t[r] ?? t[a]) !== void 0 && (t[r] = t[r] ?? t[a]);
}), t), _e = (r) => {
  const n = {};
  for (const t in r)
    r[t] !== void 0 && (n[t] = r[t]);
  return n;
}, k = (r) => (n) => {
  const t = { ...n };
  return r.forEach((a) => delete t[a]), t;
}, L = (r) => r && typeof r == "object" && !Array.isArray(r), z = (r, ...n) => {
  if (!n.length) return r;
  const t = n.shift();
  if (L(r) && L(t))
    for (const a in t)
      L(t[a]) ? (r[a] || Object.assign(r, { [a]: {} }), z(r[a], t[a])) : Object.assign(r, { [a]: t[a] });
  return z(r, ...n);
}, we = (r) => {
  const n = r.filter((t) => !process.env[t]);
  if (n.length > 0)
    throw new Error(`Missing environment variables: ${n.join(", ")}`);
}, pe = (r) => {
  const n = y(
    i("marginTop", ["marginTop", "mt", "my"]),
    i("marginRight", ["marginRight", "mr", "mx"]),
    i("marginBottom", ["marginBottom", "mb", "my"]),
    i("marginLeft", ["marginLeft", "ml", "mx"]),
    i("margin", ["margin", "m"])
  )({ ...r });
  return { ...k(["marginTop", "marginRight", "marginBottom", "marginLeft", "margin", "mt", "mr", "mb", "ml", "my", "mx"])(r), style: { ...r.style, ...n } };
}, Ee = (r) => {
  const n = y(
    i("paddingTop", ["paddingTop", "pt", "py"]),
    i("paddingRight", ["paddingRight", "pr", "px"]),
    i("paddingBottom", ["paddingBottom", "pb", "py"]),
    i("paddingLeft", ["paddingLeft", "pl", "px"]),
    i("padding", ["padding", "p"])
  )({ ...r });
  return { ...k(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "padding", "pt", "pr", "pb", "pl", "px", "py"])(r), style: { ...r.style, ...n } };
}, Re = (r) => {
  const n = y(
    i("width", ["width", "w"]),
    i("height", ["height", "h"]),
    i("minWidth", ["minWidth", "minW"]),
    i("minHeight", ["minHeight", "minH"])
  )({ ...r });
  return { ...k(["width", "height", "minWidth", "minHeight"])(r), style: { ...r.style, ...n } };
}, ve = (r) => {
  const n = y(
    i("borderTop", ["borderTop", "borderY"]),
    i("borderRight", ["borderRight", "borderX"]),
    i("borderBottom", ["borderBottom", "borderY"]),
    i("borderLeft", ["borderLeft", "borderX"])
  )({ ...r });
  return { ...k(["borderTop", "borderRadius", "borderRight", "borderBottom", "borderLeft", "borderY", "borderX"])(n), style: { ...r.style, ...n } };
}, Te = (r) => {
  const n = y(
    i("backgroundColor", ["backgroundColor", "bg"])
  )({ ...r });
  return { ...k(["backgroundColor", "bg"])(r), style: { ...n, ...r.style } };
}, Pe = ({ as: r, style: n, ...t }) => {
  const a = y(
    pe,
    Ee,
    Re,
    ve,
    Te
  )(t), c = r ?? "div";
  return /* @__PURE__ */ ge.jsx(
    c,
    {
      ...a,
      style: {
        ...a.style,
        ...n
      }
    }
  );
};
function ke(r, { inmediate: n } = { inmediate: !1 }) {
  const [t, a] = h(null), [c, l] = h(null), [g, m] = h(!1), R = ce(!0);
  Y(() => () => {
    R.current = !1;
  }, []);
  const d = le(async (...v) => {
    R.current && (m(!0), l(null), a(null), r(...v).then((p) => a(p)).catch((p) => l(p)).finally(() => m(!1)));
  }, [r]);
  return Y(() => {
    n && d();
  }, [n, d]), { data: t, error: c, loading: g, execute: d };
}
function Oe(r, n = { disabled: !1 }) {
  const [t, a] = h(null), [c, l] = h(!1), [g, m] = h(null);
  return Y(() => {
    if (!n.disabled) {
      l(!0);
      const R = ue(
        r,
        (d) => {
          if (d instanceof fe)
            d.exists() && a(null), a(d.data());
          else if (d.empty)
            a([]);
          else {
            const v = d.docs.map((_) => _.data());
            a(v);
          }
          l(!1);
        },
        (d) => {
          m(d), l(!1);
        }
      );
      return () => R();
    }
  }, [JSON.stringify(r), n.disabled]), { data: t, loading: c, error: g };
}
export {
  Pe as Box,
  we as checkEnvVars,
  z as mergeDeep,
  y as pipe,
  k as removeProps,
  _e as removeUndefined,
  i as setPropValueFromPriority,
  ke as useAsync,
  Oe as useFirequery
};
