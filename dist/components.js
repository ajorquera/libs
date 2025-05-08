import { jsx as m } from "react/jsx-runtime";
function i(...t) {
  return (r) => t.reduce((e, n) => n(e), r);
}
const o = (t, r) => (e) => (r.forEach((n) => {
  (e[t] ?? e[n]) !== void 0 && (e[t] = e[t] ?? e[n]);
}), e), d = (t) => (r) => {
  const e = { ...r };
  return t.forEach((n) => delete e[n]), e;
}, a = (t) => {
  const r = i(
    o("marginTop", ["marginTop", "mt", "my"]),
    o("marginRight", ["marginRight", "mr", "mx"]),
    o("marginBottom", ["marginBottom", "mb", "my"]),
    o("marginLeft", ["marginLeft", "ml", "mx"]),
    o("margin", ["margin", "m"])
  )({ ...t });
  return { ...d(["marginTop", "marginRight", "marginBottom", "marginLeft", "margin", "mt", "mr", "mb", "ml", "my", "mx"])(t), style: { ...t.style, ...r } };
}, s = (t) => {
  const r = i(
    o("paddingTop", ["paddingTop", "pt", "py"]),
    o("paddingRight", ["paddingRight", "pr", "px"]),
    o("paddingBottom", ["paddingBottom", "pb", "py"]),
    o("paddingLeft", ["paddingLeft", "pl", "px"]),
    o("padding", ["padding", "p"])
  )({ ...t });
  return { ...d(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "padding", "pt", "pr", "pb", "pl", "px", "py"])(t), style: { ...t.style, ...r } };
}, c = (t) => {
  const r = i(
    o("width", ["width", "w"]),
    o("height", ["height", "h"]),
    o("minWidth", ["minWidth", "minW"]),
    o("minHeight", ["minHeight", "minH"])
  )({ ...t });
  return { ...d(["width", "height", "minWidth", "minHeight"])(t), style: { ...t.style, ...r } };
}, p = (t) => {
  const r = i(
    o("borderTop", ["borderTop", "borderY"]),
    o("borderRight", ["borderRight", "borderX"]),
    o("borderBottom", ["borderBottom", "borderY"]),
    o("borderLeft", ["borderLeft", "borderX"])
  )({ ...t });
  return { ...d(["borderTop", "borderRadius", "borderRight", "borderBottom", "borderLeft", "borderY", "borderX"])(r), style: { ...t.style, ...r } };
}, b = (t) => {
  const r = i(
    o("backgroundColor", ["backgroundColor", "bg"])
  )({ ...t });
  return { ...d(["backgroundColor", "bg"])(t), style: { ...r, ...t.style } };
}, h = ({ as: t, style: r, ...e }) => {
  const n = i(
    a,
    s,
    c,
    p,
    b
  )(e);
  return /* @__PURE__ */ m(
    t ?? "div",
    {
      ...n,
      style: {
        ...n.style,
        ...r
      }
    }
  );
};
export {
  h as Box
};
