var d = Object.defineProperty;
var l = (e, t, n) => t in e ? d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var c = (e, t, n) => l(e, typeof t != "symbol" ? t + "" : t, n);
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
}, f = (e, t) => e ? (typeof t == "object" ? Object.entries(t).reduce((s, [r, o]) => s.replace(
  `:${r}`,
  o === void 0 ? "" : o
), e) : e).replace(/\/:[^/]+/g, "") : "", m = (e) => !!e && Object.keys(e).length === 0, y = (e, t, n) => {
  const s = n ? `${n}${e}` : e, r = f(s, t);
  let o;
  try {
    o = new URL(r);
  } catch {
    o = new URL(r, window.location.origin);
  }
  if (!m(t)) {
    const i = b(s, t), p = new URLSearchParams(i);
    o.search = p.toString();
  }
  return o.toString();
}, b = (e, t) => Object.entries(t ?? {}).reduce((s, [r, o]) => (e.includes(`:${r}`) || (s[r] = o), s), {}), a = ({ url: e, urlParams: t, baseUrl: n, ...s }) => {
  const r = y(e, t, n), { body: o, method: i, headers: p } = s;
  return fetch(r, {
    body: typeof o != "string" ? JSON.stringify(o) : o,
    headers: {
      ...p,
      "Content-Type": "application/json"
    },
    method: i
  }).then(u).then(g);
};
class h {
  constructor(t) {
    c(this, "read", this.get);
    c(this, "create", this.post);
    c(this, "update", this.put);
    c(this, "remove", this.delete);
    this.config = t, this.config = t ?? { url: "" };
  }
  get(t, n) {
    const s = Object.assign({}, this.config, n, { method: "GET", urlParams: t });
    return a(s);
  }
  post(t, n, s) {
    const r = Object.assign({}, this.config, s, { method: "POST", body: JSON.stringify(t), urlParams: n });
    return a(r);
  }
  put(t, n, s) {
    const r = Object.assign({}, this.config, s, { method: "PUT", body: JSON.stringify(t), urlParams: n });
    return a(r);
  }
  delete(t, n) {
    const s = Object.assign({}, this.config, n, { method: "DELETE", urlParams: t });
    return a(s);
  }
}
class w {
  constructor(t = [], n) {
    c(this, "_endpoints");
    this._endpoints = new Map(t.map((s) => {
      const { name: r, ...o } = s, i = Object.assign({}, o, n);
      return [r, new h(i)];
    }));
  }
  add(t, n) {
    const s = new h(n);
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
  h as Endpoint,
  y as buildUrl,
  w as default,
  a as fetcher,
  u as handleError,
  g as handleJson,
  f as replaceUrlParams
};
