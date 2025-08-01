var V = Object.defineProperty;
var G = (n, o, i) => o in n ? V(n, o, { enumerable: !0, configurable: !0, writable: !0, value: i }) : n[o] = i;
var C = (n, o, i) => G(n, typeof o != "symbol" ? o + "" : o, i);
import { jsx as h, jsxs as D } from "react/jsx-runtime";
import H, { useEffect as L, useCallback as S, createContext as $, useContext as Y, useId as W, useState as b, useActionState as z, useRef as K } from "react";
import { onSnapshot as X, DocumentSnapshot as J, doc as R, where as M, query as x, Timestamp as Q, setDoc as A, getDoc as Z, getDocs as k, deleteDoc as ee, writeBatch as te } from "firebase/firestore";
function O(...n) {
  return (o) => n.reduce((i, s) => s(i), o);
}
const y = (n, o) => (i) => (o.forEach((s) => {
  (i[n] ?? i[s]) !== void 0 && (i[n] = i[n] ?? i[s]);
}), i), T = (n) => (o) => {
  const i = { ...o };
  return n.forEach((s) => delete i[s]), i;
}, re = (n) => {
  const o = O(
    y("marginTop", ["marginTop", "mt", "my"]),
    y("marginRight", ["marginRight", "mr", "mx"]),
    y("marginBottom", ["marginBottom", "mb", "my"]),
    y("marginLeft", ["marginLeft", "ml", "mx"]),
    y("margin", ["margin", "m"])
  )({ ...n });
  return { ...T(["marginTop", "marginRight", "marginBottom", "marginLeft", "margin", "mt", "mr", "mb", "ml", "my", "mx"])(n), style: { ...n.style, ...o } };
}, ne = (n) => {
  const o = O(
    y("paddingTop", ["paddingTop", "pt", "py"]),
    y("paddingRight", ["paddingRight", "pr", "px"]),
    y("paddingBottom", ["paddingBottom", "pb", "py"]),
    y("paddingLeft", ["paddingLeft", "pl", "px"]),
    y("padding", ["padding", "p"])
  )({ ...n });
  return { ...T(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "padding", "pt", "pr", "pb", "pl", "px", "py"])(n), style: { ...n.style, ...o } };
}, oe = (n) => {
  const o = O(
    y("width", ["width", "w"]),
    y("height", ["height", "h"]),
    y("minWidth", ["minWidth", "minW"]),
    y("minHeight", ["minHeight", "minH"])
  )({ ...n });
  return { ...T(["width", "height", "minWidth", "minHeight"])(n), style: { ...n.style, ...o } };
}, ie = (n) => {
  const o = O(
    y("borderTop", ["borderTop", "borderY"]),
    y("borderRight", ["borderRight", "borderX"]),
    y("borderBottom", ["borderBottom", "borderY"]),
    y("borderLeft", ["borderLeft", "borderX"])
  )({ ...n });
  return { ...T(["borderTop", "borderRadius", "borderRight", "borderBottom", "borderLeft", "borderY", "borderX"])(o), style: { ...n.style, ...o } };
}, se = (n) => {
  const o = O(
    y("backgroundColor", ["backgroundColor", "bg"])
  )({ ...n });
  return { ...T(["backgroundColor", "bg"])(n), style: { ...o, ...n.style } };
}, w = ({ as: n, style: o, ...i }) => {
  const s = O(
    re,
    ne,
    oe,
    ie,
    se
  )(i);
  return /* @__PURE__ */ h(
    n ?? "div",
    {
      ...s,
      style: {
        ...s.style,
        ...o
      }
    }
  );
}, ae = "_Text_swquu_1", ce = "_h1_swquu_6 _Text_swquu_1", de = "_h2_swquu_12 _Text_swquu_1", ue = "_h3_swquu_18 _Text_swquu_1", le = "_span_swquu_24 _Text_swquu_1", j = {
  Text: ae,
  h1: ce,
  h2: de,
  h3: ue,
  span: le
}, U = ({ children: n, variant: o = "span", ...i }) => {
  const s = o || "span", c = j[o] || j.span;
  return /* @__PURE__ */ h(s, { className: c, ...i, children: n });
}, fe = "_Card_10517_1", ge = {
  Card: fe
}, ye = (n) => /* @__PURE__ */ h(w, { ...n, className: [ge.Card, n.className].join(" ") }), me = ({ children: n, ...o }) => /* @__PURE__ */ h("button", { ...o, children: n }), pe = "_box_d9rgh_2", he = "_overlay_d9rgh_8", _e = "_container_d9rgh_18", N = {
  box: pe,
  overlay: he,
  container: _e
}, ve = ({ children: n, onClose: o, title: i, ...s }) => {
  const { dismiss: c } = F();
  L(() => {
    document.body.style.overflow = "hidden";
    const f = (g) => {
      g.key === "Escape" && c();
    };
    return window.addEventListener("keyup", f), () => {
      window.removeEventListener("keyup", f), document.body.style.overflow = "unset";
    };
  }, []);
  const l = S(() => {
    o ? o(c) : c();
  }, [o, c]);
  return /* @__PURE__ */ D(w, { className: N.container, children: [
    /* @__PURE__ */ h("div", { className: N.overlay, onClick: l }),
    /* @__PURE__ */ D(ye, { className: N.box, ...s, children: [
      /* @__PURE__ */ h(w, { display: "flex", justifyContent: "space-between", alignItems: "center", children: /* @__PURE__ */ h(U, { variant: "h2", children: i }) }),
      /* @__PURE__ */ h(w, { mt: 3, children: n })
    ] })
  ] });
};
var E = { exports: {} }, m = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q;
function be() {
  if (q) return m;
  q = 1;
  var n = H;
  function o(a) {
    var t = "https://react.dev/errors/" + a;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + a + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function i() {
  }
  var s = {
    d: {
      f: i,
      r: function() {
        throw Error(o(522));
      },
      D: i,
      C: i,
      L: i,
      m: i,
      X: i,
      S: i,
      M: i
    },
    p: 0,
    findDOMNode: null
  }, c = Symbol.for("react.portal");
  function l(a, t, u) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: r == null ? null : "" + r,
      children: a,
      containerInfo: t,
      implementation: u
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(a, t) {
    if (a === "font") return "";
    if (typeof t == "string")
      return t === "use-credentials" ? t : "";
  }
  return m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, m.createPortal = function(a, t) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
      throw Error(o(299));
    return l(a, t, null, u);
  }, m.flushSync = function(a) {
    var t = f.T, u = s.p;
    try {
      if (f.T = null, s.p = 2, a) return a();
    } finally {
      f.T = t, s.p = u, s.d.f();
    }
  }, m.preconnect = function(a, t) {
    typeof a == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, s.d.C(a, t));
  }, m.prefetchDNS = function(a) {
    typeof a == "string" && s.d.D(a);
  }, m.preinit = function(a, t) {
    if (typeof a == "string" && t && typeof t.as == "string") {
      var u = t.as, r = g(u, t.crossOrigin), e = typeof t.integrity == "string" ? t.integrity : void 0, d = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
      u === "style" ? s.d.S(
        a,
        typeof t.precedence == "string" ? t.precedence : void 0,
        {
          crossOrigin: r,
          integrity: e,
          fetchPriority: d
        }
      ) : u === "script" && s.d.X(a, {
        crossOrigin: r,
        integrity: e,
        fetchPriority: d,
        nonce: typeof t.nonce == "string" ? t.nonce : void 0
      });
    }
  }, m.preinitModule = function(a, t) {
    if (typeof a == "string")
      if (typeof t == "object" && t !== null) {
        if (t.as == null || t.as === "script") {
          var u = g(
            t.as,
            t.crossOrigin
          );
          s.d.M(a, {
            crossOrigin: u,
            integrity: typeof t.integrity == "string" ? t.integrity : void 0,
            nonce: typeof t.nonce == "string" ? t.nonce : void 0
          });
        }
      } else t == null && s.d.M(a);
  }, m.preload = function(a, t) {
    if (typeof a == "string" && typeof t == "object" && t !== null && typeof t.as == "string") {
      var u = t.as, r = g(u, t.crossOrigin);
      s.d.L(a, u, {
        crossOrigin: r,
        integrity: typeof t.integrity == "string" ? t.integrity : void 0,
        nonce: typeof t.nonce == "string" ? t.nonce : void 0,
        type: typeof t.type == "string" ? t.type : void 0,
        fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
        referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
        imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
        imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
        media: typeof t.media == "string" ? t.media : void 0
      });
    }
  }, m.preloadModule = function(a, t) {
    if (typeof a == "string")
      if (t) {
        var u = g(t.as, t.crossOrigin);
        s.d.m(a, {
          as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
          crossOrigin: u,
          integrity: typeof t.integrity == "string" ? t.integrity : void 0
        });
      } else s.d.m(a);
  }, m.requestFormReset = function(a) {
    s.d.r(a);
  }, m.unstable_batchedUpdates = function(a, t) {
    return a(t);
  }, m.useFormState = function(a, t, u) {
    return f.H.useFormState(a, t, u);
  }, m.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, m.version = "19.1.0", m;
}
var p = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B;
function Oe() {
  return B || (B = 1, process.env.NODE_ENV !== "production" && function() {
    function n() {
    }
    function o(r) {
      return "" + r;
    }
    function i(r, e, d) {
      var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        o(_);
        var v = !1;
      } catch {
        v = !0;
      }
      return v && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && _[Symbol.toStringTag] || _.constructor.name || "Object"
      ), o(_)), {
        $$typeof: t,
        key: _ == null ? null : "" + _,
        children: r,
        containerInfo: e,
        implementation: d
      };
    }
    function s(r, e) {
      if (r === "font") return "";
      if (typeof e == "string")
        return e === "use-credentials" ? e : "";
    }
    function c(r) {
      return r === null ? "`null`" : r === void 0 ? "`undefined`" : r === "" ? "an empty string" : 'something with type "' + typeof r + '"';
    }
    function l(r) {
      return r === null ? "`null`" : r === void 0 ? "`undefined`" : r === "" ? "an empty string" : typeof r == "string" ? JSON.stringify(r) : typeof r == "number" ? "`" + r + "`" : 'something with type "' + typeof r + '"';
    }
    function f() {
      var r = u.H;
      return r === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), r;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var g = H, a = {
      d: {
        f: n,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: n,
        C: n,
        L: n,
        m: n,
        X: n,
        S: n,
        M: n
      },
      p: 0,
      findDOMNode: null
    }, t = Symbol.for("react.portal"), u = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), p.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, p.createPortal = function(r, e) {
      var d = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return i(r, e, null, d);
    }, p.flushSync = function(r) {
      var e = u.T, d = a.p;
      try {
        if (u.T = null, a.p = 2, r)
          return r();
      } finally {
        u.T = e, a.p = d, a.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, p.preconnect = function(r, e) {
      typeof r == "string" && r ? e != null && typeof e != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        l(e)
      ) : e != null && typeof e.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        c(e.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        c(r)
      ), typeof r == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, a.d.C(r, e));
    }, p.prefetchDNS = function(r) {
      if (typeof r != "string" || !r)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          c(r)
        );
      else if (1 < arguments.length) {
        var e = arguments[1];
        typeof e == "object" && e.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          l(e)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          l(e)
        );
      }
      typeof r == "string" && a.d.D(r);
    }, p.preinit = function(r, e) {
      if (typeof r == "string" && r ? e == null || typeof e != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        l(e)
      ) : e.as !== "style" && e.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        l(e.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        c(r)
      ), typeof r == "string" && e && typeof e.as == "string") {
        var d = e.as, _ = s(d, e.crossOrigin), v = typeof e.integrity == "string" ? e.integrity : void 0, P = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
        d === "style" ? a.d.S(
          r,
          typeof e.precedence == "string" ? e.precedence : void 0,
          {
            crossOrigin: _,
            integrity: v,
            fetchPriority: P
          }
        ) : d === "script" && a.d.X(r, {
          crossOrigin: _,
          integrity: v,
          fetchPriority: P,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0
        });
      }
    }, p.preinitModule = function(r, e) {
      var d = "";
      if (typeof r == "string" && r || (d += " The `href` argument encountered was " + c(r) + "."), e !== void 0 && typeof e != "object" ? d += " The `options` argument encountered was " + c(e) + "." : e && "as" in e && e.as !== "script" && (d += " The `as` option encountered was " + l(e.as) + "."), d)
        console.error(
          "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
          d
        );
      else
        switch (d = e && typeof e.as == "string" ? e.as : "script", d) {
          case "script":
            break;
          default:
            d = l(d), console.error(
              'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
              d,
              r
            );
        }
      typeof r == "string" && (typeof e == "object" && e !== null ? (e.as == null || e.as === "script") && (d = s(
        e.as,
        e.crossOrigin
      ), a.d.M(r, {
        crossOrigin: d,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0,
        nonce: typeof e.nonce == "string" ? e.nonce : void 0
      })) : e == null && a.d.M(r));
    }, p.preload = function(r, e) {
      var d = "";
      if (typeof r == "string" && r || (d += " The `href` argument encountered was " + c(r) + "."), e == null || typeof e != "object" ? d += " The `options` argument encountered was " + c(e) + "." : typeof e.as == "string" && e.as || (d += " The `as` option encountered was " + c(e.as) + "."), d && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        d
      ), typeof r == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
        d = e.as;
        var _ = s(
          d,
          e.crossOrigin
        );
        a.d.L(r, d, {
          crossOrigin: _,
          integrity: typeof e.integrity == "string" ? e.integrity : void 0,
          nonce: typeof e.nonce == "string" ? e.nonce : void 0,
          type: typeof e.type == "string" ? e.type : void 0,
          fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0,
          referrerPolicy: typeof e.referrerPolicy == "string" ? e.referrerPolicy : void 0,
          imageSrcSet: typeof e.imageSrcSet == "string" ? e.imageSrcSet : void 0,
          imageSizes: typeof e.imageSizes == "string" ? e.imageSizes : void 0,
          media: typeof e.media == "string" ? e.media : void 0
        });
      }
    }, p.preloadModule = function(r, e) {
      var d = "";
      typeof r == "string" && r || (d += " The `href` argument encountered was " + c(r) + "."), e !== void 0 && typeof e != "object" ? d += " The `options` argument encountered was " + c(e) + "." : e && "as" in e && typeof e.as != "string" && (d += " The `as` option encountered was " + c(e.as) + "."), d && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        d
      ), typeof r == "string" && (e ? (d = s(
        e.as,
        e.crossOrigin
      ), a.d.m(r, {
        as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0,
        crossOrigin: d,
        integrity: typeof e.integrity == "string" ? e.integrity : void 0
      })) : a.d.m(r));
    }, p.requestFormReset = function(r) {
      a.d.r(r);
    }, p.unstable_batchedUpdates = function(r, e) {
      return r(e);
    }, p.useFormState = function(r, e, d) {
      return f().useFormState(r, e, d);
    }, p.useFormStatus = function() {
      return f().useHostTransitionStatus();
    }, p.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), p;
}
var I;
function Re() {
  if (I) return E.exports;
  I = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (o) {
        console.error(o);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (n(), E.exports = be()) : E.exports = Oe(), E.exports;
}
var Se = Re();
const Te = () => {
  const n = $({
    isRendered: !1,
    render: () => {
    },
    dismiss: () => {
    },
    update: () => {
    }
  });
  return { Provider: ({
    children: s,
    dom: c,
    component: l,
    defaultProps: f
  }) => {
    const g = W(), [a, t] = b(!1), [u, r] = b(f ?? {}), e = S(
      (v) => {
        v && r({ ...v, ...f }), t(!0);
      },
      [r, t, f]
    ), d = S(() => {
      t(!1);
    }, [t]), _ = S(
      (v) => {
        r({ ...u, ...v });
      },
      [r, u]
    );
    return /* @__PURE__ */ D(n.Provider, { value: { render: e, isRendered: a, dismiss: d, update: _ }, children: [
      a && Se.createPortal(/* @__PURE__ */ h(l, { id: g, ...u }), c ?? document.body),
      s
    ] });
  }, useContext: () => Y(n) };
}, { Provider: Ee, useContext: F } = Te(), Ce = ({ children: n }) => /* @__PURE__ */ h(Ee, { component: ve, children: n }), Me = (n, o) => {
  const { render: i, isRendered: s, dismiss: c, update: l } = F();
  return { open: S(
    (g) => {
      const a = Object.assign({}, o, g);
      i({
        ...a,
        children: /* @__PURE__ */ h(n, { close: c, ...a })
      });
    },
    [i, JSON.stringify(o), n, c]
  ), close: c, isOpen: s, updateProps: l };
}, we = (n, o) => n.reduce(
  (i, s) => (i[s.name] = o, i),
  {}
), De = (n) => async (o, i) => {
  const s = Object.fromEntries(i.entries());
  n(s);
}, Ae = ({
  onSubmit: n,
  error: o,
  fields: i,
  componentMap: s
}) => {
  const [c, l, f] = z(De(n), we(i, "")), g = o || Object.values(c).pop();
  return /* @__PURE__ */ D("form", { action: l, children: [
    i.map((a, t) => {
      const u = s[a.type] ?? s.default;
      return /* @__PURE__ */ h(u, { label: a.label, ...a.options }, t);
    }),
    g && /* @__PURE__ */ h(U, { children: g }),
    /* @__PURE__ */ h(me, { type: "submit", children: f ? "Loading..." : "Submit" })
  ] });
};
function ke(n, { inmediate: o } = { inmediate: !1 }) {
  const [i, s] = b(null), [c, l] = b(null), [f, g] = b(!!o), a = K(!0);
  L(() => () => {
    a.current = !1;
  }, []);
  const t = async (...u) => {
    a.current && (g(!0), l(null), s(null), n(...u).then((e) => s(e)).catch((e) => l(e)).finally(() => g(!1)));
  };
  return L(() => {
    o && t();
  }, [o]), { data: i, error: c, loading: f, execute: t };
}
function je(n, o = { disabled: !1 }) {
  const [i, s] = b(null), [c, l] = b(!o.disabled), [f, g] = b(null);
  return L(() => {
    if (!o.disabled) {
      l(!0);
      const a = X(
        n,
        (t) => {
          if (t instanceof J)
            t.exists() && s(null), s(t.data());
          else if (t.empty)
            s([]);
          else {
            const u = t.docs.map((r) => r.data());
            s(u);
          }
          l(!1);
        },
        (t) => {
          g(t), l(!1);
        }
      );
      return () => a();
    }
  }, [JSON.stringify(n), o.disabled]), { data: i, loading: c, error: f };
}
class qe {
  constructor(o, i) {
    C(this, "collectionName");
    this.collectionRef = o, this.db = i, this.collectionName = this.collectionRef.path;
  }
  query(o) {
    return (...i) => {
      let s;
      if (typeof i[0] == "string") {
        const [c] = i;
        s = R(o, c);
      } else if (i.some((c) => c.every(Boolean))) {
        const c = i.map((l) => M(...l));
        s = x(o, ...c);
      } else
        s = x(o);
      return s;
    };
  }
  async create(o, i) {
    const s = R(this.collectionRef, ...i || []), c = { ...o, id: s.id, createdAt: Q.now() };
    return await A(s, c), c;
  }
  async read(o) {
    const i = R(this.collectionRef, o);
    let s;
    if (o) {
      const c = await Z(i);
      c.exists() && (s = c.data());
    } else {
      const c = await k(this.collectionRef);
      c.empty || (s = c.docs.map((l) => l.data()));
    }
    return s;
  }
  async update(o, i) {
    const s = R(this.collectionRef, o);
    await A(s, i, { merge: !0 });
  }
  async delete(o) {
    const i = R(this.collectionRef, o);
    await ee(i);
  }
  async deleteAll(...o) {
    const i = o.map((c) => M(...c)), s = await k(x(this.collectionRef, ...i));
    if (this.db || console.error("db is not available"), !s.empty && this.db) {
      const c = te(this.db);
      s.forEach((l) => {
        c.delete(l.ref);
      }), await c.commit();
    }
  }
}
export {
  w as Box,
  me as Button,
  ye as Card,
  qe as FireCrud,
  Ae as Form,
  Ce as ModalProvider,
  U as Text,
  ke as useAsync,
  je as useFirequery,
  Me as useModal,
  F as useModalContext
};
