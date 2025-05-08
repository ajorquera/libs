function t(...n) {
  return (r) => n.reduce((e, i) => i(e), r);
}
const f = (n, r) => (e) => (r.forEach((i) => {
  (e[n] ?? e[i]) !== void 0 && (e[n] = e[n] ?? e[i]);
}), e), u = (n) => {
  const r = {};
  for (const e in n)
    n[e] !== void 0 && (r[e] = n[e]);
  return r;
}, v = (n) => (r) => {
  const e = { ...r };
  return n.forEach((i) => delete e[i]), e;
}, o = (n) => n && typeof n == "object" && !Array.isArray(n), c = (n, ...r) => {
  if (!r.length) return n;
  const e = r.shift();
  if (o(n) && o(e))
    for (const i in e)
      o(e[i]) ? (n[i] || Object.assign(n, { [i]: {} }), c(n[i], e[i])) : Object.assign(n, { [i]: e[i] });
  return c(n, ...r);
}, l = (n) => {
  const r = n.filter((e) => !process.env[e]);
  if (r.length > 0)
    throw new Error(`Missing environment variables: ${r.join(", ")}`);
};
export {
  l as checkEnvVars,
  c as mergeDeep,
  t as pipe,
  v as removeProps,
  u as removeUndefined,
  f as setPropValueFromPriority
};
