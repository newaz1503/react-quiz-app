import Classes from "../styles/Question.module.css";
import Answers from "./Answers";
function Question({ answers = [] }) {
  return answers.map((answer, index) => (
    <div className={Classes.question} key={index}>
      <div className={Classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers options={answer.options} input={false} />
    </div>
  ));
}

export default Question;
