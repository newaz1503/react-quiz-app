import IllustrationImg from "../assets/images/signup.svg";
import Illustration from "../componenets/Illustration";
import SignUpForm from "../componenets/SignUpForm";
function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration src={IllustrationImg} />
        <SignUpForm />
      </div>
    </>
  );
}

export default SignUp;
