import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FinishedScreen({ points, maxPoints, dispatch }) {
  const percentage = (points / maxPoints) * 100;
  const navigate = useNavigate();

  useEffect(() => {
    if (points > maxPoints / 2) {
      navigate("/success", {
        state: { points, maxPoints, percentage },
      });
    }
  }, [points, maxPoints, percentage, navigate]);

  // If user passed, they will be redirected — no need to render anything here
  if (points > maxPoints / 2) return null;

  return (
    <>
      <p className="result">
        للأسف لم تحرز النسبة المطلوبة. لقد أحرزت <strong>{points}</strong> من{" "}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <button
        className="btn"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        إعادة الإختبار
      </button>
    </>
  );
}
