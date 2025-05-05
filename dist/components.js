import ae, { useState as _, useRef as se, useEffect as L, useCallback as ie } from "react";
import { onSnapshot as ue, DocumentSnapshot as le } from "firebase/firestore";
var x = { exports: {} }, P = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function ce() {
  if (U) return P;
  U = 1;
  var r = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function o(a, u, l) {
    var g = null;
    if (l !== void 0 && (g = "" + l), u.key !== void 0 && (g = "" + u.key), "key" in u) {
      l = {};
      for (var m in u)
        m !== "key" && (l[m] = u[m]);
    } else l = u;
    return u = l.ref, {
      $$typeof: r,
      type: a,
      key: g,
      ref: u !== void 0 ? u : null,
      props: l
    };
  }
  return P.Fragment = n, P.jsx = o, P.jsxs = o, P;
}
var w = {};
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
function de() {
  return J || (J = 1, process.env.NODE_ENV !== "production" && function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === te ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case S:
          return "Fragment";
        case X:
          return "Profiler";
        case V:
          return "StrictMode";
        case Q:
          return "Suspense";
        case K:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case z:
            return "Portal";
          case H:
            return (e.displayName || "Context") + ".Provider";
          case G:
            return (e._context.displayName || "Context") + ".Consumer";
          case Z:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ee:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case D:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function o(e) {
      try {
        n(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var s = t.error, c = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), n(e);
      }
    }
    function a(e) {
      if (e === S) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === D)
        return "<...>";
      try {
        var t = r(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function u() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function g(e) {
      if (F.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, t) {
      function s() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function R() {
      var e = r(this.type);
      return W[e] || (W[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function f(e, t, s, c, E, b, j, N) {
      return s = b.ref, e = {
        $$typeof: Y,
        type: e,
        key: t,
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
    function T(e, t, s, c, E, b, j, N) {
      var d = t.children;
      if (d !== void 0)
        if (c)
          if (ne(d)) {
            for (c = 0; c < d.length; c++)
              y(d[c]);
            Object.freeze && Object.freeze(d);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(d);
      if (F.call(t, "key")) {
        d = r(e);
        var v = Object.keys(t).filter(function(oe) {
          return oe !== "key";
        });
        c = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", B[d + c] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          d,
          v,
          d
        ), B[d + c] = !0);
      }
      if (d = null, s !== void 0 && (o(s), d = "" + s), g(t) && (o(t.key), d = "" + t.key), "key" in t) {
        s = {};
        for (var C in t)
          C !== "key" && (s[C] = t[C]);
      } else s = t;
      return d && m(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), f(
        e,
        d,
        b,
        E,
        u(),
        s,
        j,
        N
      );
    }
    function y(e) {
      typeof e == "object" && e !== null && e.$$typeof === Y && e._store && (e._store.validated = 1);
    }
    var p = ae, Y = Symbol.for("react.transitional.element"), z = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), H = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), K = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), re = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), O = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, ne = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var I, W = {}, $ = p["react-stack-bottom-frame"].bind(
      p,
      l
    )(), M = A(a(l)), B = {};
    w.Fragment = S, w.jsx = function(e, t, s, c, E) {
      var b = 1e4 > O.recentlyCreatedOwnerStacks++;
      return T(
        e,
        t,
        s,
        !1,
        c,
        E,
        b ? Error("react-stack-top-frame") : $,
        b ? A(a(e)) : M
      );
    }, w.jsxs = function(e, t, s, c, E) {
      var b = 1e4 > O.recentlyCreatedOwnerStacks++;
      return T(
        e,
        t,
        s,
        !0,
        c,
        E,
        b ? Error("react-stack-top-frame") : $,
        b ? A(a(e)) : M
      );
    };
  }()), w;
}
var q;
function fe() {
  return q || (q = 1, process.env.NODE_ENV === "production" ? x.exports = ce() : x.exports = de()), x.exports;
}
var me = fe();
function h(...r) {
  return (n) => r.reduce((o, a) => a(o), n);
}
const i = (r, n) => (o) => (n.forEach((a) => {
  (o[r] ?? o[a]) !== void 0 && (o[r] = o[r] ?? o[a]);
}), o), k = (r) => (n) => {
  const o = { ...n };
  return r.forEach((a) => delete o[a]), o;
}, be = (r) => {
  const n = h(
    i("marginTop", ["marginTop", "mt", "my"]),
    i("marginRight", ["marginRight", "mr", "mx"]),
    i("marginBottom", ["marginBottom", "mb", "my"]),
    i("marginLeft", ["marginLeft", "ml", "mx"]),
    i("margin", ["margin", "m"])
  )({ ...r });
  return { ...k(["marginTop", "marginRight", "marginBottom", "marginLeft", "margin", "mt", "mr", "mb", "ml", "my", "mx"])(r), style: { ...r.style, ...n } };
}, ge = (r) => {
  const n = h(
    i("paddingTop", ["paddingTop", "pt", "py"]),
    i("paddingRight", ["paddingRight", "pr", "px"]),
    i("paddingBottom", ["paddingBottom", "pb", "py"]),
    i("paddingLeft", ["paddingLeft", "pl", "px"]),
    i("padding", ["padding", "p"])
  )({ ...r });
  return { ...k(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "padding", "pt", "pr", "pb", "pl", "px", "py"])(r), style: { ...r.style, ...n } };
}, pe = (r) => {
  const n = h(
    i("width", ["width", "w"]),
    i("height", ["height", "h"]),
    i("minWidth", ["minWidth", "minW"]),
    i("minHeight", ["minHeight", "minH"])
  )({ ...r });
  return { ...k(["width", "height", "minWidth", "minHeight"])(r), style: { ...r.style, ...n } };
}, Ee = (r) => {
  const n = h(
    i("borderTop", ["borderTop", "borderY"]),
    i("borderRight", ["borderRight", "borderX"]),
    i("borderBottom", ["borderBottom", "borderY"]),
    i("borderLeft", ["borderLeft", "borderX"])
  )({ ...r });
  return { ...k(["borderTop", "borderRadius", "borderRight", "borderBottom", "borderLeft", "borderY", "borderX"])(n), style: { ...r.style, ...n } };
}, Re = (r) => {
  const n = h(
    i("backgroundColor", ["backgroundColor", "bg"])
  )({ ...r });
  return { ...k(["backgroundColor", "bg"])(r), style: { ...n, ...r.style } };
}, _e = ({ as: r, style: n, ...o }) => {
  const a = h(
    be,
    ge,
    pe,
    Ee,
    Re
  )(o), u = r ?? "div";
  return /* @__PURE__ */ me.jsx(
    u,
    {
      ...a,
      style: {
        ...a.style,
        ...n
      }
    }
  );
};
function he(r, { inmediate: n } = { inmediate: !1 }) {
  const [o, a] = _(null), [u, l] = _(null), [g, m] = _(!1), R = se(!0);
  L(() => () => {
    R.current = !1;
  }, []);
  const f = ie(async (...T) => {
    R.current && (m(!0), l(null), a(null), r(...T).then((p) => a(p)).catch((p) => l(p)).finally(() => m(!1)));
  }, [r]);
  return L(() => {
    n && f();
  }, [n, f]), { data: o, error: u, loading: g, execute: f };
}
function ye(r, n = { disabled: !1 }) {
  const [o, a] = _(null), [u, l] = _(!1), [g, m] = _(null);
  return L(() => {
    if (!n.disabled) {
      l(!0);
      const R = ue(
        r,
        (f) => {
          if (f instanceof le)
            f.exists() && a(null), a(f.data());
          else if (f.empty)
            a([]);
          else {
            const T = f.docs.map((y) => y.data());
            a(T);
          }
          l(!1);
        },
        (f) => {
          m(f), l(!1);
        }
      );
      return () => R();
    }
  }, [JSON.stringify(r), n.disabled]), { data: o, loading: u, error: g };
}
export {
  _e as Box,
  he as useAsync,
  ye as useFirequery
};
