var l = Object.defineProperty;
var u = (e, t, n) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var a = (e, t, n) => u(e, typeof t != "symbol" ? t + "" : t, n);
function v(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
const w = (e, t) => (n) => (t.forEach((r) => {
  (n[e] ?? n[r]) !== void 0 && (n[e] = n[e] ?? n[r]);
}), n), j = (e) => {
  const t = {};
  for (const n in e)
    e[n] !== void 0 && (t[n] = e[n]);
  return t;
}, U = (e) => (t) => {
  const n = { ...t };
  return e.forEach((r) => delete n[r]), n;
}, P = (e, t = process.env) => {
  const n = e.filter((r) => !t[r]);
  if (n.length > 0)
    throw new Error(`Missing environment variables: ${n.join(", ")}`);
}, T = (e, t, n = { replace: !0 }) => e.replace(/\$\{([^}]+)\}/g, (r, o) => {
  const s = o.trim(), c = t[s];
  return c !== void 0 ? c : n != null && n.replace ? "" : `\${${s}}`;
}), p = async (e) => {
  if (!e.ok) {
    let t;
    try {
      t = await e.json();
    } catch {
      throw e;
    }
    throw t || e;
  }
  return e;
}, g = async (e) => {
  let t;
  try {
    t = await e.json();
  } catch {
    t = {};
  }
  return t;
}, f = (e, t) => e ? (typeof t == "object" ? Object.entries(t).reduce((r, [o, s]) => r.replace(
  `:${o}`,
  s === void 0 ? "" : s
), e) : e).replace(/\/:[^/]+/g, "") : "", m = (e) => !!e && Object.keys(e).length === 0, y = (e, t, n) => {
  const r = n ? `${n}${e}` : e, o = f(r, t);
  let s;
  try {
    s = new URL(o);
  } catch {
    s = new URL(o, window.location.origin);
  }
  if (!m(t)) {
    const c = E(r, t), d = new URLSearchParams(c);
    s.search = d.toString();
  }
  return s.toString();
}, E = (e, t) => Object.entries(t ?? {}).reduce((r, [o, s]) => (e.includes(`:${o}`) || (r[o] = s), r), {}), i = ({ url: e, urlParams: t, baseUrl: n, ...r }) => {
  const o = y(e, t, n), { body: s, method: c, headers: d } = r;
  return fetch(o, {
    body: typeof s != "string" ? JSON.stringify(s) : s,
    headers: {
      ...d,
      "Content-Type": "application/json"
    },
    method: c
  }).then(p).then(g);
}, S = (e) => i({ ...e, method: "GET" }), $ = (e) => i({ ...e, method: "POST" }), _ = (e) => i({ ...e, method: "PUT" }), L = (e) => i({ ...e, method: "DELETE" });
class h {
  constructor(t) {
    a(this, "read", this.get);
    a(this, "create", this.post);
    a(this, "update", this.put);
    a(this, "remove", this.delete);
    this.config = t, this.config = t ?? { url: "" };
  }
  get(t, n) {
    const r = Object.assign({}, this.config, n, { method: "GET", urlParams: t });
    return i(r);
  }
  post(t, n, r) {
    const o = Object.assign({}, this.config, r, { method: "POST", body: JSON.stringify(t), urlParams: n });
    return i(o);
  }
  put(t, n, r) {
    const o = Object.assign({}, this.config, r, { method: "PUT", body: JSON.stringify(t), urlParams: n });
    return i(o);
  }
  delete(t, n) {
    const r = Object.assign({}, this.config, n, { method: "DELETE", urlParams: t });
    return i(r);
  }
}
class J {
  constructor(t = [], n) {
    a(this, "_endpoints");
    this._endpoints = new Map(t.map((r) => {
      const { name: o, ...s } = r, c = Object.assign({}, s, n);
      return [o, new h(c)];
    }));
  }
  add(t, n) {
    const r = new h(n);
    this._endpoints.set(t, r);
  }
  remove(t) {
    this._endpoints.delete(t);
  }
  get(t) {
    return this._endpoints.get(t);
  }
}
export {
  h as Endpoint,
  J as RestApi,
  y as buildUrl,
  P as checkEnvVars,
  L as del,
  i as fetcher,
  S as get,
  T as getStrTemplate,
  p as handleError,
  g as handleJson,
  v as pipe,
  $ as post,
  _ as put,
  U as removeProps,
  j as removeUndefined,
  f as replaceUrlParams,
  w as setPropValueFromPriority
};
