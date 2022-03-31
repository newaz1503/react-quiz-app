import Classes from "../styles/Illustration.module.css";
function Illustration({ src }) {
  return (
    <div className={Classes.illustration}>
      <img src={src} alt="Signup" />
    </div>
  );
}

export default Illustration;
