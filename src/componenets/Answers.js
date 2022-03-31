import { Fragment } from "react";
import Classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";
function Answers({ options = [], handleChange, input }) {
  return (
    <div className={Classes.answers}>
      {options.map((option, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              key={index}
              className={Classes.answer}
              text={option.title}
              value={index}
              checked={option.checked}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <Checkbox
              key={index}
              className={`${Classes.answer} ${
                option.correct
                  ? Classes.correct
                  : option.checked
                  ? Classes.wrong
                  : null
              }`}
              text={option.title}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default Answers;
