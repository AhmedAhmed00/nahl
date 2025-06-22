import React, { memo } from "react";

const Progress = memo(function Progress({
  index,
  numOfQues,
  points,
  maxPoints,
  answer,
})
{
  console.log(points)

  return (
    <header className="progress">
      <progress max={numOfQues} value={index + Number(answer !== null)} />
      <p>
        Qeustion <strong>{index + 1}</strong> / {numOfQues}
      </p>
      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
});

export default Progress;
