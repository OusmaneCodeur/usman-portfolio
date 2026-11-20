export default function Button({ href, onClick, variant = "primary", icon, children, ...rest }) {
  const cls = `btn btn--${variant}`;
  const content = (<>{children}{icon}</>);
  if (href) return <a className={cls} href={href} onClick={onClick} {...rest}>{content}</a>;
  return <button className={cls} onClick={onClick} {...rest}>{content}</button>;
}
