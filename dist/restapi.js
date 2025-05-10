var d = Object.defineProperty;
var l = (e, t, n) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var i = (e, t, n) => l(e, typeof t != "symbol" ? t + "" : t, n);
const u = async (e) => {
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
}, f = (e, t) => e ? (typeof t == "object" ? Object.entries(t).reduce((s, [o, r]) => s.replace(
  `:${o}`,
  r === void 0 ? "" : r
), e) : e).replace(/\/:[^/]+/g, "") : "", m = (e) => !!e && Object.keys(e).length === 0, y = (e, t, n) => {
  const s = n ? `${n}${e}` : e, o = f(s, t);
  let r;
  try {
    r = new URL(o);
  } catch {
    r = new URL(o, window.location.origin);
  }
  if (!m(t)) {
    const a = b(s, t), h = new URLSearchParams(a);
    r.search = h.toString();
  }
  return r.toString();
}, b = (e, t) => Object.entries(t ?? {}).reduce((s, [o, r]) => (e.includes(`:${o}`) || (s[o] = r), s), {}), c = ({ url: e, urlParams: t, baseUrl: n, ...s }) => {
  const o = y(e, t, n), { body: r, method: a, headers: h } = s;
  return fetch(o, {
    body: typeof r != "string" ? JSON.stringify(r) : r,
    headers: {
      ...h,
      "Content-Type": "application/json"
    },
    method: a
  }).then(u).then(g);
}, w = (e) => c({ ...e, method: "GET" }), U = (e) => c({ ...e, method: "POST" }), E = (e) => c({ ...e, method: "PUT" }), P = (e) => c({ ...e, method: "DELETE" });
class p {
  constructor(t) {
    i(this, "read", this.get);
    i(this, "create", this.post);
    i(this, "update", this.put);
    i(this, "remove", this.delete);
    this.config = t, this.config = t ?? { url: "" };
  }
  get(t, n) {
    const s = Object.assign({}, this.config, n, { method: "GET", urlParams: t });
    return c(s);
  }
  post(t, n, s) {
    const o = Object.assign({}, this.config, s, { method: "POST", body: JSON.stringify(t), urlParams: n });
    return c(o);
  }
  put(t, n, s) {
    const o = Object.assign({}, this.config, s, { method: "PUT", body: JSON.stringify(t), urlParams: n });
    return c(o);
  }
  delete(t, n) {
    const s = Object.assign({}, this.config, n, { method: "DELETE", urlParams: t });
    return c(s);
  }
}
class T {
  constructor(t = [], n) {
    i(this, "_endpoints");
    this._endpoints = new Map(t.map((s) => {
      const { name: o, ...r } = s, a = Object.assign({}, r, n);
      return [o, new p(a)];
    }));
  }
  add(t, n) {
    const s = new p(n);
    this._endpoints.set(t, s);
  }
  remove(t) {
    this._endpoints.delete(t);
  }
  get(t) {
    return this._endpoints.get(t);
  }
}
export {
  p as Endpoint,
  y as buildUrl,
  T as default,
  P as del,
  c as fetcher,
  w as get,
  u as handleError,
  g as handleJson,
  U as post,
  E as put,
  f as replaceUrlParams
};
