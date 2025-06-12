import { BsPerson, BsPlayCircle } from "react-icons/bs";
import { Profile } from "../../ui/AuthContainer";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";
import { StyledTopHeader } from "../../ui/TopHeader";
import Heading from "../../ui/Heading";
import { motion } from "framer-motion";
import { useFetch } from "../../hooks/useFetch";
import {
  lessonsServices,
  subjectsServices,
  videosServices,
} from "../../data/api";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

export default function Videos() {
  const [searchParams] = useSearchParams();
  const stage = searchParams.get("grade") ?? "";
  const { id: subjectId } = useParams();

  const {
    data: { results: lessons } = {},
    data,
    isError,
    isLoading,
    isFetching,
  } = useFetch({
    key: "vedios",
    service: videosServices.getAll,
    params: { stage, subject_id: subjectId },
  });

  if (isLoading || isFetching) {
    return <div>Loading lessons...</div>;
  }

  if (isError) {
    return <div>Failed to load lessons. Please try again later.</div>;
  }
  const subjectName = data?.results?.[0]?.subject?.name;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Container>
        <StyledTopHeader>
          <Profile>
            <BsPerson
              style={{ display: "block", color: "#d4dbdb" }}
              size={70}
            />
          </Profile>
          <div>
            <Heading color="light" as="h1">
              منصة نهل أكاديمي
            </Heading>
          </div>
          <div /> {/* Empty column to balance layout */}
        </StyledTopHeader>

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

        <Row $margin="50px 0" type="vertical" gap="20px">
          {lessons?.length > 0 ? (
            lessons.map((lesson) => (
              <LessonRow key={lesson.id}>
                <LessonTitle>{lesson.title}</LessonTitle>
                <VideoLink
                  href={lesson.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsPlayCircle size={62} color="#5cb85c" />
                </VideoLink>
              </LessonRow>
            ))
          ) : (
            <p>No lessons available for this subject.</p>
          )}
        </Row>
      </Container>
    </motion.div>
  );
}

// Styled components
const LessonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-radius: 12px;
`;

const LessonTitle = styled.span`
  font-size: 3rem;
  font-weight: 600;
  color: var(--color-light);
`;

const VideoLink = styled.a`
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
