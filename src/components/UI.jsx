/** Shared UI atoms: buttons and section headers. */
import { Icon } from "./Icons.jsx";

export function Btn({ as = "a", variant = "orange", size, className = "", children, icon, ...rest }) {
  const Tag = as;
  const cls = [
    "btn",
    `btn-${variant}`,
    size === "sm" ? "btn-sm" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <Tag className={cls} {...rest}>
      {icon && <Icon name={icon} size={size === "sm" ? 15 : 18} />}
      {children}
    </Tag>
  );
}

export function SectionHead({ eyebrow, title, text }) {
  return (
    <div className="sec-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
