function i(...n) {
  return (r) => n.reduce((e, t) => t(e), r);
}
const c = (n, r) => (e) => (r.forEach((t) => {
  (e[n] ?? e[t]) !== void 0 && (e[n] = e[n] ?? e[t]);
}), e), s = (n) => {
  const r = {};
  for (const e in n)
    n[e] !== void 0 && (r[e] = n[e]);
  return r;
}, v = (n) => (r) => {
  const e = { ...r };
  return n.forEach((t) => delete e[t]), e;
}, a = (n) => {
  const r = n.filter((e) => !process.env[e]);
  if (r.length > 0)
    throw new Error(`Missing environment variables: ${r.join(", ")}`);
};
export {
  a as checkEnvVars,
  i as pipe,
  v as removeProps,
  s as removeUndefined,
  c as setPropValueFromPriority
};
