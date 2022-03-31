import IllustrationImg from "../assets/images/login.svg";
import Illustration from "../componenets/Illustration";
import LoginForm from "../componenets/LoginForm";
function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration src={IllustrationImg} />
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
