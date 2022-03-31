import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import Analysis from "../componenets/Analysis";
import Summary from "../componenets/Summary";
import useAnswers from "../hooks/useAnswers";
function Result() {
  const { id } = useParams();
  const { state } = useLocation();
  const { qna } = state;
  const { loading, error, answers } = useAnswers(id);

  function calculation() {
    let score = 0;
    answers.forEach((question, index1) => {
      const correctIndexes = [];
      const checkedIndexes = [];
      question.options.forEach((option, index2) => {
        if (option.correct) {
          correctIndexes.push(index2);
        }
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });
    return score;
  }

  const userscore = calculation();

  return (
    <>
      {loading && <div>Loading ...</div>}
      {error && <div>Error ...</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary userscore={userscore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}

export default Result;
