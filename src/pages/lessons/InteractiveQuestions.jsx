import { useEffect, useReducer, useState } from "react";
import { BsFileEarmarkPdf, BsPerson, BsPlayCircle } from "react-icons/bs";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";
import { StyledTopHeader } from "../../ui/TopHeader";
import Heading from "../../ui/Heading";
import { motion } from "framer-motion";
import { useFetch } from "../../hooks/useFetch";
import { interactiveQuestionsServices } from "../../data/api";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import Profile from "../../ui/Profile";
import { date } from "zod";
import Progress from "../../ui/Progress";
import Question from "../../ui/Question";
import NextButton from "../../ui/NextBtn";
import Timer from "../../ui/Timer";
import FinishedScreen from "../../ui/FinishedScreen";
import Empty from "../../ui/Empty";
import Button from "../../ui/Button";

const initState = {
  questions: [],
  status: "loading",
  index: 0,
  points: 0,
  answer: null,
  remainingSeconds: null,
};

function reducer(currentState, action) {
  switch (action.type) {
    case "success":
      return {
        ...currentState,
        questions: action.payload,
        status: "ready",
        points: 0,
      };
    case "Error":
      return { ...currentState, status: "Error" };
    case "start":
      return {
        ...currentState,
        status: "active",
        remainingSeconds: currentState.questions.length * 20,
      };
    case "newAnswer":
      const question = currentState.questions.at(currentState.index);
      console.log(question, "queeeeeeeees");
      console.log(action.payload, "payloooooooooad");
      return {
        ...currentState,
        answer: action.payload,
        points:
          Number(action.payload) === Number(question.correct_choice)
            ? Number(currentState.points) + Number(10)
            : currentState.points,
      };
    case "nextQues":
      return { ...currentState, index: currentState.index + 1, answer: null };
    case "finished": {
      return { ...currentState, status: "finished" };
    }
    case "restart":
      return {
        ...initState,
        questions: currentState.questions,
        status: "ready",
      };
    case "tick":
      return {
        ...currentState,
        remainingSeconds: currentState.remainingSeconds - 1,
        status:
          currentState.remainingSeconds === 0
            ? "finished"
            : currentState.status,
      };
    default:
      return currentState;
  }
}
const ResponsiveContainer = styled(Container)`
  max-width: 70%;
  margin: auto;
  margin-block: 40px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default function InteractiveQuestions() {
  const [searchParams] = useSearchParams();

  const [state, dispatch] = useReducer(reducer, initState);
  const { questions, status, index, answer, points, remainingSeconds } = state;
  const numOfQuestions = questions.length;
  const maxPoints = questions.reduce((prev, cur) => prev + 10, 0);

  const { subjectId = "", grade = "" } = useParams();

  const {
    data: { data: lessons } = {},
    data,
    isError,
    isLoading,
  } = useFetch({
    key: "interactive-questions",
    service: interactiveQuestionsServices.getAll,
    params: { grade, subject_id: subjectId },
  });

  useEffect(() => {
    if (data?.results?.length) {
      dispatch({ type: "success", payload: data.results });
    }
  }, [data, lessons]);

  const subjectName = data?.data?.[0]?.subject?.name;

  if (isLoading) {
    return <div>Loading lessons...</div>;
  }

  if (isError) {
    return <div>Failed to load lessons. Please try again later.</div>;
  }
  if (!data.results?.length) return <Empty resource="اسئله" />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Container>
        <StyledTopHeader>
          <Profile size={70} />
          <div>
            <Heading color="light" as="h1">
              منصة نهل أكاديمي
            </Heading>
          </div>
          <div /> {/* Empty column to balance layout */}
        </StyledTopHeader>

        <ResponsiveContainer>
          <Heading
            color="light"
            style={{
              textAlign: "center",
              fontSize: "3rem",
              marginTop: "30px",
            }}
          >
            {subjectName}
          </Heading>
          {status === "loading" && <div>loading...</div>}
          {status === "ready" && (
            <div>
              <div className="start">
                <h3> عدد {numOfQuestions} من الاسئلة التفاعلية </h3>
                <button
                  className="btn btn-ui"
                  onClick={() => {
                    dispatch({ type: "start" });
                  }}
                >
                  إبدإ الاختبار
                </button>
              </div>
            </div>
          )}

          {status === "active" && (
            <>
              <Progress
                maxPoints={maxPoints}
                points={points}
                index={index}
                numOfQues={numOfQuestions}
                answer={answer}
              />
              <Question
                answer={answer}
                dispatch={dispatch}
                question={questions[index]}
              />
              <Timer remainingSeconds={remainingSeconds} dispatch={dispatch} />
              <NextButton
                answer={answer}
                dispatch={dispatch}
                index={index}
                numOfQues={numOfQuestions}
              />
            </>
          )}
          {status === "finished" && (
            <FinishedScreen
              points={points}
              maxPoints={maxPoints}
              dispatch={dispatch}
            />
          )}
        </ResponsiveContainer>
      </Container>
    </motion.div>
  );
}
