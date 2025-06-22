import React, { memo } from "react";

const Question = memo(function Question({ question, dispatch, answer }) {
  const hasAnswerd = answer !== null;
  console.log(question);
  return (
    <div>
      <h3 style={{ 
        fontSize:"30px",
        color:"white",
        marginBottom:"20px"
      }}>{question.question_text}</h3>
      <div className="options">
        {question?.choices_list?.map((option) => (
          <button
            onClick={() => {
              dispatch({ type: "newAnswer", payload: option });
            }}
            disabled={hasAnswerd}
            key={option}
            className={`btn btn-option ${option === answer ? "answer" : ""} ${
              hasAnswerd
                ? option === question.correct_choice
                  ? "correct"
                  : "wrong"
                : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
});

export default Question;
