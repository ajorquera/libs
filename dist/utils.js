var We = Object.defineProperty;
var ze = (i, r, c) => r in i ? We(i, r, { enumerable: !0, configurable: !0, writable: !0, value: c }) : i[r] = c;
var Z = (i, r, c) => ze(i, typeof r != "symbol" ? r + "" : r, c);
function et(...i) {
  return (r) => i.reduce((c, d) => d(c), r);
}
const tt = (i, r) => (c) => (r.forEach((d) => {
  (c[i] ?? c[d]) !== void 0 && (c[i] = c[i] ?? c[d]);
}), c), nt = (i) => {
  const r = {};
  for (const c in i)
    i[c] !== void 0 && (r[c] = i[c]);
  return r;
}, rt = (i) => (r) => {
  const c = { ...r };
  return i.forEach((d) => delete c[d]), c;
}, ot = (i, r = process.env) => {
  const c = i.filter((d) => !r[d]);
  if (c.length > 0)
    throw new Error(`Missing environment variables: ${c.join(", ")}`);
}, ut = (i, r) => i.replace(/\$\{([^}]+)\}/g, (c, d) => {
  const T = r[d.trim()];
  return T !== void 0 ? T : "";
});
var de = { exports: {} }, p = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ne;
function Ge() {
  if (Ne) return p;
  Ne = 1;
  var i = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), S = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), P = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), B = Symbol.iterator;
  function U(t) {
    return t === null || typeof t != "object" ? null : (t = B && t[B] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var x = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, F = Object.assign, ue = {};
  function D(t, o, l) {
    this.props = t, this.context = o, this.refs = ue, this.updater = l || x;
  }
  D.prototype.isReactComponent = {}, D.prototype.setState = function(t, o) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, t, o, "setState");
  }, D.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = D.prototype;
  function J(t, o, l) {
    this.props = t, this.context = o, this.refs = ue, this.updater = l || x;
  }
  var N = J.prototype = new Q();
  N.constructor = J, F(N, D.prototype), N.isPureReactComponent = !0;
  var se = Array.isArray, R = { H: null, A: null, T: null, S: null, V: null }, ee = Object.prototype.hasOwnProperty;
  function te(t, o, l, f, E, b) {
    return l = b.ref, {
      $$typeof: i,
      type: t,
      key: o,
      ref: l !== void 0 ? l : null,
      props: b
    };
  }
  function I(t, o) {
    return te(
      t.type,
      o,
      void 0,
      void 0,
      void 0,
      t.props
    );
  }
  function Y(t) {
    return typeof t == "object" && t !== null && t.$$typeof === i;
  }
  function ye(t) {
    var o = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(l) {
      return o[l];
    });
  }
  var O = /\/+/g;
  function ne(t, o) {
    return typeof t == "object" && t !== null && t.key != null ? ye("" + t.key) : o.toString(36);
  }
  function W() {
  }
  function z(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(W, W) : (t.status = "pending", t.then(
          function(o) {
            t.status === "pending" && (t.status = "fulfilled", t.value = o);
          },
          function(o) {
            t.status === "pending" && (t.status = "rejected", t.reason = o);
          }
        )), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function j(t, o, l, f, E) {
    var b = typeof t;
    (b === "undefined" || b === "boolean") && (t = null);
    var y = !1;
    if (t === null) y = !0;
    else
      switch (b) {
        case "bigint":
        case "string":
        case "number":
          y = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case i:
            case r:
              y = !0;
              break;
            case $:
              return y = t._init, j(
                y(t._payload),
                o,
                l,
                f,
                E
              );
          }
      }
    if (y)
      return E = E(t), y = f === "" ? "." + ne(t, 0) : f, se(E) ? (l = "", y != null && (l = y.replace(O, "$&/") + "/"), j(E, o, l, "", function(X) {
        return X;
      })) : E != null && (Y(E) && (E = I(
        E,
        l + (E.key == null || t && t.key === E.key ? "" : ("" + E.key).replace(
          O,
          "$&/"
        ) + "/") + y
      )), o.push(E)), 1;
    y = 0;
    var M = f === "" ? "." : f + ":";
    if (se(t))
      for (var C = 0; C < t.length; C++)
        f = t[C], b = M + ne(f, C), y += j(
          f,
          o,
          l,
          b,
          E
        );
    else if (C = U(t), typeof C == "function")
      for (t = C.call(t), C = 0; !(f = t.next()).done; )
        f = f.value, b = M + ne(f, C++), y += j(
          f,
          o,
          l,
          b,
          E
        );
    else if (b === "object") {
      if (typeof t.then == "function")
        return j(
          z(t),
          o,
          l,
          f,
          E
        );
      throw o = String(t), Error(
        "Objects are not valid as a React child (found: " + (o === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : o) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return y;
  }
  function H(t, o, l) {
    if (t == null) return t;
    var f = [], E = 0;
    return j(t, f, "", "", function(b) {
      return o.call(l, b, E++);
    }), f;
  }
  function re(t) {
    if (t._status === -1) {
      var o = t._result;
      o = o(), o.then(
        function(l) {
          (t._status === 0 || t._status === -1) && (t._status = 1, t._result = l);
        },
        function(l) {
          (t._status === 0 || t._status === -1) && (t._status = 2, t._result = l);
        }
      ), t._status === -1 && (t._status = 0, t._result = o);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var K = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var o = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(o)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function ie() {
  }
  return p.Children = {
    map: H,
    forEach: function(t, o, l) {
      H(
        t,
        function() {
          o.apply(this, arguments);
        },
        l
      );
    },
    count: function(t) {
      var o = 0;
      return H(t, function() {
        o++;
      }), o;
    },
    toArray: function(t) {
      return H(t, function(o) {
        return o;
      }) || [];
    },
    only: function(t) {
      if (!Y(t))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return t;
    }
  }, p.Component = D, p.Fragment = c, p.Profiler = T, p.PureComponent = J, p.StrictMode = d, p.Suspense = L, p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = R, p.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return R.H.useMemoCache(t);
    }
  }, p.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, p.cloneElement = function(t, o, l) {
    if (t == null)
      throw Error(
        "The argument must be a React element, but you passed " + t + "."
      );
    var f = F({}, t.props), E = t.key, b = void 0;
    if (o != null)
      for (y in o.ref !== void 0 && (b = void 0), o.key !== void 0 && (E = "" + o.key), o)
        !ee.call(o, y) || y === "key" || y === "__self" || y === "__source" || y === "ref" && o.ref === void 0 || (f[y] = o[y]);
    var y = arguments.length - 2;
    if (y === 1) f.children = l;
    else if (1 < y) {
      for (var M = Array(y), C = 0; C < y; C++)
        M[C] = arguments[C + 2];
      f.children = M;
    }
    return te(t.type, E, void 0, void 0, b, f);
  }, p.createContext = function(t) {
    return t = {
      $$typeof: S,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: w,
      _context: t
    }, t;
  }, p.createElement = function(t, o, l) {
    var f, E = {}, b = null;
    if (o != null)
      for (f in o.key !== void 0 && (b = "" + o.key), o)
        ee.call(o, f) && f !== "key" && f !== "__self" && f !== "__source" && (E[f] = o[f]);
    var y = arguments.length - 2;
    if (y === 1) E.children = l;
    else if (1 < y) {
      for (var M = Array(y), C = 0; C < y; C++)
        M[C] = arguments[C + 2];
      E.children = M;
    }
    if (t && t.defaultProps)
      for (f in y = t.defaultProps, y)
        E[f] === void 0 && (E[f] = y[f]);
    return te(t, b, void 0, void 0, null, E);
  }, p.createRef = function() {
    return { current: null };
  }, p.forwardRef = function(t) {
    return { $$typeof: A, render: t };
  }, p.isValidElement = Y, p.lazy = function(t) {
    return {
      $$typeof: $,
      _payload: { _status: -1, _result: t },
      _init: re
    };
  }, p.memo = function(t, o) {
    return {
      $$typeof: P,
      type: t,
      compare: o === void 0 ? null : o
    };
  }, p.startTransition = function(t) {
    var o = R.T, l = {};
    R.T = l;
    try {
      var f = t(), E = R.S;
      E !== null && E(l, f), typeof f == "object" && f !== null && typeof f.then == "function" && f.then(ie, K);
    } catch (b) {
      K(b);
    } finally {
      R.T = o;
    }
  }, p.unstable_useCacheRefresh = function() {
    return R.H.useCacheRefresh();
  }, p.use = function(t) {
    return R.H.use(t);
  }, p.useActionState = function(t, o, l) {
    return R.H.useActionState(t, o, l);
  }, p.useCallback = function(t, o) {
    return R.H.useCallback(t, o);
  }, p.useContext = function(t) {
    return R.H.useContext(t);
  }, p.useDebugValue = function() {
  }, p.useDeferredValue = function(t, o) {
    return R.H.useDeferredValue(t, o);
  }, p.useEffect = function(t, o, l) {
    var f = R.H;
    if (typeof l == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return f.useEffect(t, o);
  }, p.useId = function() {
    return R.H.useId();
  }, p.useImperativeHandle = function(t, o, l) {
    return R.H.useImperativeHandle(t, o, l);
  }, p.useInsertionEffect = function(t, o) {
    return R.H.useInsertionEffect(t, o);
  }, p.useLayoutEffect = function(t, o) {
    return R.H.useLayoutEffect(t, o);
  }, p.useMemo = function(t, o) {
    return R.H.useMemo(t, o);
  }, p.useOptimistic = function(t, o) {
    return R.H.useOptimistic(t, o);
  }, p.useReducer = function(t, o, l) {
    return R.H.useReducer(t, o, l);
  }, p.useRef = function(t) {
    return R.H.useRef(t);
  }, p.useState = function(t) {
    return R.H.useState(t);
  }, p.useSyncExternalStore = function(t, o, l) {
    return R.H.useSyncExternalStore(
      t,
      o,
      l
    );
  }, p.useTransition = function() {
    return R.H.useTransition();
  }, p.version = "19.1.0", p;
}
var oe = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
oe.exports;
var Me;
function Be() {
  return Me || (Me = 1, function(i, r) {
    process.env.NODE_ENV !== "production" && function() {
      function c(e, n) {
        Object.defineProperty(w.prototype, e, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              n[0],
              n[1]
            );
          }
        });
      }
      function d(e) {
        return e === null || typeof e != "object" ? null : (e = ve && e[ve] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function T(e, n) {
        e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
        var u = e + "." + n;
        Ee[u] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          n,
          e
        ), Ee[u] = !0);
      }
      function w(e, n, u) {
        this.props = e, this.context = n, this.refs = _e, this.updater = u || ge;
      }
      function S() {
      }
      function A(e, n, u) {
        this.props = e, this.context = n, this.refs = _e, this.updater = u || ge;
      }
      function L(e) {
        return "" + e;
      }
      function P(e) {
        try {
          L(e);
          var n = !1;
        } catch {
          n = !0;
        }
        if (n) {
          n = console;
          var u = n.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return u.call(
            n,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            s
          ), L(e);
        }
      }
      function $(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === De ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case t:
            return "Fragment";
          case l:
            return "Profiler";
          case o:
            return "StrictMode";
          case y:
            return "Suspense";
          case M:
            return "SuspenseList";
          case Ue:
            return "Activity";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case ie:
              return "Portal";
            case E:
              return (e.displayName || "Context") + ".Provider";
            case f:
              return (e._context.displayName || "Context") + ".Consumer";
            case b:
              var n = e.render;
              return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case C:
              return n = e.displayName || null, n !== null ? n : $(e.type) || "Memo";
            case X:
              n = e._payload, e = e._init;
              try {
                return $(e(n));
              } catch {
              }
          }
        return null;
      }
      function B(e) {
        if (e === t) return "<>";
        if (typeof e == "object" && e !== null && e.$$typeof === X)
          return "<...>";
        try {
          var n = $(e);
          return n ? "<" + n + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function U() {
        var e = m.A;
        return e === null ? null : e.getOwner();
      }
      function x() {
        return Error("react-stack-top-frame");
      }
      function F(e) {
        if (ce.call(e, "key")) {
          var n = Object.getOwnPropertyDescriptor(e, "key").get;
          if (n && n.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function ue(e, n) {
        function u() {
          be || (be = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            n
          ));
        }
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
      function D() {
        var e = $(this.type);
        return Ce[e] || (Ce[e] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), e = this.props.ref, e !== void 0 ? e : null;
      }
      function Q(e, n, u, s, a, v, h, g) {
        return u = v.ref, e = {
          $$typeof: K,
          type: e,
          key: n,
          props: v,
          _owner: a
        }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(e, "ref", {
          enumerable: !1,
          get: D
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
          value: h
        }), Object.defineProperty(e, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: g
        }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
      }
      function J(e, n) {
        return n = Q(
          e.type,
          n,
          void 0,
          void 0,
          e._owner,
          e.props,
          e._debugStack,
          e._debugTask
        ), e._store && (n._store.validated = e._store.validated), n;
      }
      function N(e) {
        return typeof e == "object" && e !== null && e.$$typeof === K;
      }
      function se(e) {
        var n = { "=": "=0", ":": "=2" };
        return "$" + e.replace(/[=:]/g, function(u) {
          return n[u];
        });
      }
      function R(e, n) {
        return typeof e == "object" && e !== null && e.key != null ? (P(e.key), se("" + e.key)) : n.toString(36);
      }
      function ee() {
      }
      function te(e) {
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
          default:
            switch (typeof e.status == "string" ? e.then(ee, ee) : (e.status = "pending", e.then(
              function(n) {
                e.status === "pending" && (e.status = "fulfilled", e.value = n);
              },
              function(n) {
                e.status === "pending" && (e.status = "rejected", e.reason = n);
              }
            )), e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
            }
        }
        throw e;
      }
      function I(e, n, u, s, a) {
        var v = typeof e;
        (v === "undefined" || v === "boolean") && (e = null);
        var h = !1;
        if (e === null) h = !0;
        else
          switch (v) {
            case "bigint":
            case "string":
            case "number":
              h = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case K:
                case ie:
                  h = !0;
                  break;
                case X:
                  return h = e._init, I(
                    h(e._payload),
                    n,
                    u,
                    s,
                    a
                  );
              }
          }
        if (h) {
          h = e, a = a(h);
          var g = s === "" ? "." + R(h, 0) : s;
          return Re(a) ? (u = "", g != null && (u = g.replace(Ae, "$&/") + "/"), I(a, n, u, "", function(q) {
            return q;
          })) : a != null && (N(a) && (a.key != null && (h && h.key === a.key || P(a.key)), u = J(
            a,
            u + (a.key == null || h && h.key === a.key ? "" : ("" + a.key).replace(
              Ae,
              "$&/"
            ) + "/") + g
          ), s !== "" && h != null && N(h) && h.key == null && h._store && !h._store.validated && (u._store.validated = 2), a = u), n.push(a)), 1;
        }
        if (h = 0, g = s === "" ? "." : s + ":", Re(e))
          for (var _ = 0; _ < e.length; _++)
            s = e[_], v = g + R(s, _), h += I(
              s,
              n,
              u,
              v,
              a
            );
        else if (_ = d(e), typeof _ == "function")
          for (_ === e.entries && (Se || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Se = !0), e = _.call(e), _ = 0; !(s = e.next()).done; )
            s = s.value, v = g + R(s, _++), h += I(
              s,
              n,
              u,
              v,
              a
            );
        else if (v === "object") {
          if (typeof e.then == "function")
            return I(
              te(e),
              n,
              u,
              s,
              a
            );
          throw n = String(e), Error(
            "Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return h;
      }
      function Y(e, n, u) {
        if (e == null) return e;
        var s = [], a = 0;
        return I(e, s, "", "", function(v) {
          return n.call(u, v, a++);
        }), s;
      }
      function ye(e) {
        if (e._status === -1) {
          var n = e._result;
          n = n(), n.then(
            function(u) {
              (e._status === 0 || e._status === -1) && (e._status = 1, e._result = u);
            },
            function(u) {
              (e._status === 0 || e._status === -1) && (e._status = 2, e._result = u);
            }
          ), e._status === -1 && (e._status = 0, e._result = n);
        }
        if (e._status === 1)
          return n = e._result, n === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            n
          ), "default" in n || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            n
          ), n.default;
        throw e._result;
      }
      function O() {
        var e = m.H;
        return e === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), e;
      }
      function ne() {
      }
      function W(e) {
        if (fe === null)
          try {
            var n = ("require" + Math.random()).slice(0, 7);
            fe = (i && i[n]).call(
              i,
              "timers"
            ).setImmediate;
          } catch {
            fe = function(s) {
              je === !1 && (je = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var a = new MessageChannel();
              a.port1.onmessage = s, a.port2.postMessage(void 0);
            };
          }
        return fe(e);
      }
      function z(e) {
        return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
      }
      function j(e, n) {
        n !== le - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), le = n;
      }
      function H(e, n, u) {
        var s = m.actQueue;
        if (s !== null)
          if (s.length !== 0)
            try {
              re(s), W(function() {
                return H(e, n, u);
              });
              return;
            } catch (a) {
              m.thrownErrors.push(a);
            }
          else m.actQueue = null;
        0 < m.thrownErrors.length ? (s = z(m.thrownErrors), m.thrownErrors.length = 0, u(s)) : n(e);
      }
      function re(e) {
        if (!me) {
          me = !0;
          var n = 0;
          try {
            for (; n < e.length; n++) {
              var u = e[n];
              do {
                m.didUsePromise = !1;
                var s = u(!1);
                if (s !== null) {
                  if (m.didUsePromise) {
                    e[n] = u, e.splice(0, n);
                    return;
                  }
                  u = s;
                } else break;
              } while (!0);
            }
            e.length = 0;
          } catch (a) {
            e.splice(0, n + 1), m.thrownErrors.push(a);
          } finally {
            me = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var K = Symbol.for("react.transitional.element"), ie = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), f = Symbol.for("react.consumer"), E = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), X = Symbol.for("react.lazy"), Ue = Symbol.for("react.activity"), ve = Symbol.iterator, Ee = {}, ge = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(e) {
          T(e, "forceUpdate");
        },
        enqueueReplaceState: function(e) {
          T(e, "replaceState");
        },
        enqueueSetState: function(e) {
          T(e, "setState");
        }
      }, we = Object.assign, _e = {};
      Object.freeze(_e), w.prototype.isReactComponent = {}, w.prototype.setState = function(e, n) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, n, "setState");
      }, w.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      var k = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, ae;
      for (ae in k)
        k.hasOwnProperty(ae) && c(ae, k[ae]);
      S.prototype = w.prototype, k = A.prototype = new S(), k.constructor = A, we(k, w.prototype), k.isPureReactComponent = !0;
      var Re = Array.isArray, De = Symbol.for("react.client.reference"), m = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, ce = Object.prototype.hasOwnProperty, Te = console.createTask ? console.createTask : function() {
        return null;
      };
      k = {
        "react-stack-bottom-frame": function(e) {
          return e();
        }
      };
      var be, Oe, Ce = {}, Ie = k["react-stack-bottom-frame"].bind(k, x)(), Ye = Te(B(x)), Se = !1, Ae = /\/+/g, ke = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var n = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(n)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, je = !1, fe = null, le = 0, pe = !1, me = !1, Pe = typeof queueMicrotask == "function" ? function(e) {
        queueMicrotask(function() {
          return queueMicrotask(e);
        });
      } : W;
      k = Object.freeze({
        __proto__: null,
        c: function(e) {
          return O().useMemoCache(e);
        }
      }), r.Children = {
        map: Y,
        forEach: function(e, n, u) {
          Y(
            e,
            function() {
              n.apply(this, arguments);
            },
            u
          );
        },
        count: function(e) {
          var n = 0;
          return Y(e, function() {
            n++;
          }), n;
        },
        toArray: function(e) {
          return Y(e, function(n) {
            return n;
          }) || [];
        },
        only: function(e) {
          if (!N(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        }
      }, r.Component = w, r.Fragment = t, r.Profiler = l, r.PureComponent = A, r.StrictMode = o, r.Suspense = y, r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m, r.__COMPILER_RUNTIME = k, r.act = function(e) {
        var n = m.actQueue, u = le;
        le++;
        var s = m.actQueue = n !== null ? n : [], a = !1;
        try {
          var v = e();
        } catch (_) {
          m.thrownErrors.push(_);
        }
        if (0 < m.thrownErrors.length)
          throw j(n, u), e = z(m.thrownErrors), m.thrownErrors.length = 0, e;
        if (v !== null && typeof v == "object" && typeof v.then == "function") {
          var h = v;
          return Pe(function() {
            a || pe || (pe = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(_, q) {
              a = !0, h.then(
                function(V) {
                  if (j(n, u), u === 0) {
                    try {
                      re(s), W(function() {
                        return H(
                          V,
                          _,
                          q
                        );
                      });
                    } catch (qe) {
                      m.thrownErrors.push(qe);
                    }
                    if (0 < m.thrownErrors.length) {
                      var He = z(
                        m.thrownErrors
                      );
                      m.thrownErrors.length = 0, q(He);
                    }
                  } else _(V);
                },
                function(V) {
                  j(n, u), 0 < m.thrownErrors.length && (V = z(
                    m.thrownErrors
                  ), m.thrownErrors.length = 0), q(V);
                }
              );
            }
          };
        }
        var g = v;
        if (j(n, u), u === 0 && (re(s), s.length !== 0 && Pe(function() {
          a || pe || (pe = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), m.actQueue = null), 0 < m.thrownErrors.length)
          throw e = z(m.thrownErrors), m.thrownErrors.length = 0, e;
        return {
          then: function(_, q) {
            a = !0, u === 0 ? (m.actQueue = s, W(function() {
              return H(
                g,
                _,
                q
              );
            })) : _(g);
          }
        };
      }, r.cache = function(e) {
        return function() {
          return e.apply(null, arguments);
        };
      }, r.captureOwnerStack = function() {
        var e = m.getCurrentStack;
        return e === null ? null : e();
      }, r.cloneElement = function(e, n, u) {
        if (e == null)
          throw Error(
            "The argument must be a React element, but you passed " + e + "."
          );
        var s = we({}, e.props), a = e.key, v = e._owner;
        if (n != null) {
          var h;
          e: {
            if (ce.call(n, "ref") && (h = Object.getOwnPropertyDescriptor(
              n,
              "ref"
            ).get) && h.isReactWarning) {
              h = !1;
              break e;
            }
            h = n.ref !== void 0;
          }
          h && (v = U()), F(n) && (P(n.key), a = "" + n.key);
          for (g in n)
            !ce.call(n, g) || g === "key" || g === "__self" || g === "__source" || g === "ref" && n.ref === void 0 || (s[g] = n[g]);
        }
        var g = arguments.length - 2;
        if (g === 1) s.children = u;
        else if (1 < g) {
          h = Array(g);
          for (var _ = 0; _ < g; _++)
            h[_] = arguments[_ + 2];
          s.children = h;
        }
        for (s = Q(
          e.type,
          a,
          void 0,
          void 0,
          v,
          s,
          e._debugStack,
          e._debugTask
        ), a = 2; a < arguments.length; a++)
          v = arguments[a], N(v) && v._store && (v._store.validated = 1);
        return s;
      }, r.createContext = function(e) {
        return e = {
          $$typeof: E,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, e.Provider = e, e.Consumer = {
          $$typeof: f,
          _context: e
        }, e._currentRenderer = null, e._currentRenderer2 = null, e;
      }, r.createElement = function(e, n, u) {
        for (var s = 2; s < arguments.length; s++) {
          var a = arguments[s];
          N(a) && a._store && (a._store.validated = 1);
        }
        if (s = {}, a = null, n != null)
          for (_ in Oe || !("__self" in n) || "key" in n || (Oe = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), F(n) && (P(n.key), a = "" + n.key), n)
            ce.call(n, _) && _ !== "key" && _ !== "__self" && _ !== "__source" && (s[_] = n[_]);
        var v = arguments.length - 2;
        if (v === 1) s.children = u;
        else if (1 < v) {
          for (var h = Array(v), g = 0; g < v; g++)
            h[g] = arguments[g + 2];
          Object.freeze && Object.freeze(h), s.children = h;
        }
        if (e && e.defaultProps)
          for (_ in v = e.defaultProps, v)
            s[_] === void 0 && (s[_] = v[_]);
        a && ue(
          s,
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e
        );
        var _ = 1e4 > m.recentlyCreatedOwnerStacks++;
        return Q(
          e,
          a,
          void 0,
          void 0,
          U(),
          s,
          _ ? Error("react-stack-top-frame") : Ie,
          _ ? Te(B(e)) : Ye
        );
      }, r.createRef = function() {
        var e = { current: null };
        return Object.seal(e), e;
      }, r.forwardRef = function(e) {
        e != null && e.$$typeof === C ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof e != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          e === null ? "null" : typeof e
        ) : e.length !== 0 && e.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), e != null && e.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var n = { $$typeof: b, render: e }, u;
        return Object.defineProperty(n, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return u;
          },
          set: function(s) {
            u = s, e.name || e.displayName || (Object.defineProperty(e, "name", { value: s }), e.displayName = s);
          }
        }), n;
      }, r.isValidElement = N, r.lazy = function(e) {
        return {
          $$typeof: X,
          _payload: { _status: -1, _result: e },
          _init: ye
        };
      }, r.memo = function(e, n) {
        e == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          e === null ? "null" : typeof e
        ), n = {
          $$typeof: C,
          type: e,
          compare: n === void 0 ? null : n
        };
        var u;
        return Object.defineProperty(n, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return u;
          },
          set: function(s) {
            u = s, e.name || e.displayName || (Object.defineProperty(e, "name", { value: s }), e.displayName = s);
          }
        }), n;
      }, r.startTransition = function(e) {
        var n = m.T, u = {};
        m.T = u, u._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var s = e(), a = m.S;
          a !== null && a(u, s), typeof s == "object" && s !== null && typeof s.then == "function" && s.then(ne, ke);
        } catch (v) {
          ke(v);
        } finally {
          n === null && u._updatedFibers && (e = u._updatedFibers.size, u._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), m.T = n;
        }
      }, r.unstable_useCacheRefresh = function() {
        return O().useCacheRefresh();
      }, r.use = function(e) {
        return O().use(e);
      }, r.useActionState = function(e, n, u) {
        return O().useActionState(
          e,
          n,
          u
        );
      }, r.useCallback = function(e, n) {
        return O().useCallback(e, n);
      }, r.useContext = function(e) {
        var n = O();
        return e.$$typeof === f && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), n.useContext(e);
      }, r.useDebugValue = function(e, n) {
        return O().useDebugValue(e, n);
      }, r.useDeferredValue = function(e, n) {
        return O().useDeferredValue(e, n);
      }, r.useEffect = function(e, n, u) {
        e == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var s = O();
        if (typeof u == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return s.useEffect(e, n);
      }, r.useId = function() {
        return O().useId();
      }, r.useImperativeHandle = function(e, n, u) {
        return O().useImperativeHandle(e, n, u);
      }, r.useInsertionEffect = function(e, n) {
        return e == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), O().useInsertionEffect(e, n);
      }, r.useLayoutEffect = function(e, n) {
        return e == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), O().useLayoutEffect(e, n);
      }, r.useMemo = function(e, n) {
        return O().useMemo(e, n);
      }, r.useOptimistic = function(e, n) {
        return O().useOptimistic(e, n);
      }, r.useReducer = function(e, n, u) {
        return O().useReducer(e, n, u);
      }, r.useRef = function(e) {
        return O().useRef(e);
      }, r.useState = function(e) {
        return O().useState(e);
      }, r.useSyncExternalStore = function(e, n, u) {
        return O().useSyncExternalStore(
          e,
          n,
          u
        );
      }, r.useTransition = function() {
        return O().useTransition();
      }, r.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(oe, oe.exports)), oe.exports;
}
var $e;
function Qe() {
  return $e || ($e = 1, process.env.NODE_ENV === "production" ? de.exports = Ge() : de.exports = Be()), de.exports;
}
var G = Qe();
function st(i, { inmediate: r } = { inmediate: !1 }) {
  const [c, d] = G.useState(null), [T, w] = G.useState(null), [S, A] = G.useState(!1), L = G.useRef(!0);
  G.useEffect(() => () => {
    L.current = !1;
  }, []);
  const P = G.useCallback(async (...$) => {
    L.current && (A(!0), w(null), d(null), i(...$).then((U) => d(U)).catch((U) => w(U)).finally(() => A(!1)));
  }, [i]);
  return G.useEffect(() => {
    r && P();
  }, [r, P]), { data: c, error: T, loading: S, execute: P };
}
const Ke = async (i) => {
  if (!i.ok) {
    let r;
    try {
      r = await i.json();
    } catch {
      throw i;
    }
    throw r || i;
  }
  return i;
}, Xe = async (i) => {
  let r;
  try {
    r = await i.json();
  } catch {
    r = {};
  }
  return r;
}, Ve = (i, r) => i ? (typeof r == "object" ? Object.entries(r).reduce((d, [T, w]) => d.replace(
  `:${T}`,
  w === void 0 ? "" : w
), i) : i).replace(/\/:[^/]+/g, "") : "", Ze = (i) => !!i && Object.keys(i).length === 0, xe = (i, r, c) => {
  const d = c ? `${c}${i}` : i, T = Ve(d, r);
  let w;
  try {
    w = new URL(T);
  } catch {
    w = new URL(T, window.location.origin);
  }
  if (!Ze(r)) {
    const S = Fe(d, r), A = new URLSearchParams(S);
    w.search = A.toString();
  }
  return w.toString();
}, Fe = (i, r) => Object.entries(r ?? {}).reduce((d, [T, w]) => (i.includes(`:${T}`) || (d[T] = w), d), {}), he = ({ url: i, urlParams: r, baseUrl: c, ...d }) => {
  const T = xe(i, r, c), { body: w, method: S, headers: A } = d;
  return fetch(T, {
    body: typeof w != "string" ? JSON.stringify(w) : w,
    headers: {
      ...A,
      "Content-Type": "application/json"
    },
    method: S
  }).then(Ke).then(Xe);
};
class Le {
  constructor(r) {
    Z(this, "read", this.get);
    Z(this, "create", this.post);
    Z(this, "update", this.put);
    Z(this, "remove", this.delete);
    this.config = r, this.config = r ?? { url: "" };
  }
  get(r, c) {
    const d = Object.assign({}, this.config, c, { method: "GET", urlParams: r });
    return he(d);
  }
  post(r, c, d) {
    const T = Object.assign({}, this.config, d, { method: "POST", body: JSON.stringify(r), urlParams: c });
    return he(T);
  }
  put(r, c, d) {
    const T = Object.assign({}, this.config, d, { method: "PUT", body: JSON.stringify(r), urlParams: c });
    return he(T);
  }
  delete(r, c) {
    const d = Object.assign({}, this.config, c, { method: "DELETE", urlParams: r });
    return he(d);
  }
}
class it {
  constructor(r = [], c) {
    Z(this, "_endpoints");
    this._endpoints = new Map(r.map((d) => {
      const { name: T, ...w } = d, S = Object.assign({}, w, c);
      return [T, new Le(S)];
    }));
  }
  add(r, c) {
    const d = new Le(c);
    this._endpoints.set(r, d);
  }
  remove(r) {
    this._endpoints.delete(r);
  }
  get(r) {
    return this._endpoints.get(r);
  }
}
export {
  it as RestApi,
  ot as checkEnvVars,
  ut as getStrTemplate,
  et as pipe,
  rt as removeProps,
  nt as removeUndefined,
  tt as setPropValueFromPriority,
  st as useAsync
};
