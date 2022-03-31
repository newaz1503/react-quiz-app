import Classes from "../styles/Form.module.css";
function Form({ className, children, ...rest }) {
  return (
    <form className={`${Classes.form} ${className}`} action="#" {...rest}>
      {children}
    </form>
  );
}

export default Form;
