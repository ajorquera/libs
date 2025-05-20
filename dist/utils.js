var l = Object.defineProperty;
var u = (t, e, n) => e in t ? l(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var a = (t, e, n) => u(t, typeof e != "symbol" ? e + "" : e, n);
function v(...t) {
  return (e) => t.reduce((n, r) => r(n), e);
}
const w = (t, e) => (n) => (e.forEach((r) => {
  (n[t] ?? n[r]) !== void 0 && (n[t] = n[t] ?? n[r]);
}), n), U = (t) => {
  const e = {};
  for (const n in t)
    t[n] !== void 0 && (e[n] = t[n]);
  return e;
}, j = (t) => (e) => {
  const n = { ...e };
  return t.forEach((r) => delete n[r]), n;
}, P = (t, e = process.env) => {
  const n = t.filter((r) => !e[r]);
  if (n.length > 0)
    throw new Error(`Missing environment variables: ${n.join(", ")}`);
}, T = (t, e, n = { replace: !0 }) => t.replace(/\$\{([^}]+)\}/g, (r, o) => {
  const s = o.trim(), c = e[s];
  return c !== void 0 ? c : n != null && n.replace ? "" : `\${${s}}`;
}), S = (t) => typeof t != "string" ? t : t.charAt(0).toUpperCase() + t.slice(1), p = async (t) => {
  if (!t.ok) {
    let e;
    try {
      e = await t.json();
    } catch {
      throw t;
    }
    throw e || t;
  }
  return t;
}, g = async (t) => {
  let e;
  try {
    e = await t.json();
  } catch {
    e = {};
  }
  return e;
}, f = (t, e) => t ? (typeof e == "object" ? Object.entries(e).reduce((r, [o, s]) => r.replace(
  `:${o}`,
  s === void 0 ? "" : s
), t) : t).replace(/\/:[^/]+/g, "") : "", m = (t) => !!t && Object.keys(t).length === 0, y = (t, e, n) => {
  const r = n ? `${n}${t}` : t, o = f(r, e);
  let s;
  try {
    s = new URL(o);
  } catch {
    s = new URL(o, window.location.origin);
  }
  if (!m(e)) {
    const c = E(r, e), h = new URLSearchParams(c);
    s.search = h.toString();
  }
  return s.toString();
}, E = (t, e) => Object.entries(e ?? {}).reduce((r, [o, s]) => (t.includes(`:${o}`) || (r[o] = s), r), {}), i = ({ url: t, urlParams: e, baseUrl: n, ...r }) => {
  const o = y(t, e, n), { body: s, method: c, headers: h } = r;
  return fetch(o, {
    body: typeof s != "string" ? JSON.stringify(s) : s,
    headers: {
      ...h,
      "Content-Type": "application/json"
    },
    method: c
  }).then(p).then(g);
}, $ = (t) => i({ ...t, method: "GET" }), _ = (t) => i({ ...t, method: "POST" }), L = (t) => i({ ...t, method: "PUT" }), J = (t) => i({ ...t, method: "DELETE" });
class d {
  constructor(e) {
    a(this, "read", this.get);
    a(this, "create", this.post);
    a(this, "update", this.put);
    a(this, "remove", this.delete);
    this.config = e, this.config = e ?? { url: "" };
  }
  get(e, n) {
    const r = Object.assign({}, this.config, n, { method: "GET", urlParams: e });
    return i(r);
  }
  post(e, n, r) {
    const o = Object.assign({}, this.config, r, { method: "POST", body: JSON.stringify(e), urlParams: n });
    return i(o);
  }
  put(e, n, r) {
    const o = Object.assign({}, this.config, r, { method: "PUT", body: JSON.stringify(e), urlParams: n });
    return i(o);
  }
  delete(e, n) {
    const r = Object.assign({}, this.config, n, { method: "DELETE", urlParams: e });
    return i(r);
  }
}
class N {
  constructor(e = [], n) {
    a(this, "_endpoints");
    this._endpoints = new Map(e.map((r) => {
      const { name: o, ...s } = r, c = Object.assign({}, s, n);
      return [o, new d(c)];
    }));
  }
  add(e, n) {
    const r = new d(n);
    this._endpoints.set(e, r);
  }
  remove(e) {
    this._endpoints.delete(e);
  }
  get(e) {
    return this._endpoints.get(e);
  }
}
export {
  d as Endpoint,
  N as RestApi,
  y as buildUrl,
  S as capitalize,
  P as checkEnvVars,
  J as del,
  i as fetcher,
  $ as get,
  T as getStrTemplate,
  p as handleError,
  g as handleJson,
  v as pipe,
  _ as post,
  L as put,
  j as removeProps,
  U as removeUndefined,
  f as replaceUrlParams,
  w as setPropValueFromPriority
};
