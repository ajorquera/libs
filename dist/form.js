import { jsx as o, jsxs as p } from "react/jsx-runtime";
import { useActionState as d } from "react";
const b = () => /* @__PURE__ */ o("span", { children: "Text" }), x = ({ children: t, ...e }) => /* @__PURE__ */ o("button", { ...e, children: t }), f = (t, e) => t.reduce(
  (r, n) => (r[n.name] = e, r),
  {}
), h = (t) => async (e, r) => {
  const n = Object.fromEntries(r.entries());
  t(n);
}, y = ({ onSubmit: t, error: e, fields: r, componentMap: n }) => {
  const [
    a,
    i,
    u
  ] = d(h(t), f(r, "")), c = e || Object.values(a).pop();
  return /* @__PURE__ */ p("form", { action: i, children: [
    r.map((s, m) => {
      const l = n[s.type] ?? n.default;
      return /* @__PURE__ */ o(l, { label: s.label, ...s.options }, m);
    }),
    c && /* @__PURE__ */ o(b, { children: c }),
    /* @__PURE__ */ o(x, { type: "submit", children: u ? "Loading..." : "Submit" })
  ] });
};
export {
  y as default
};
