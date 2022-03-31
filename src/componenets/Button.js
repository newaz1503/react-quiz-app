import Classes from "../styles/Button.module.css";
function Button({ children, className, ...rest }) {
  return (
    <button className={`${Classes.button} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
