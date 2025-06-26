import { BsFileEarmarkPdf, BsPerson, BsPlayCircle } from "react-icons/bs";
import Profile from "../../ui/Profile";
import { Container } from "../../ui/Container";
import Row from "../../ui/Row";
import { StyledTopHeader } from "../../ui/TopHeader";
import Heading from "../../ui/Heading";
import { motion } from "framer-motion";
import { useFetch } from "../../hooks/useFetch";
import { pastExamsServices, videosServices } from "../../data/api";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

export default function PastExams() {
  const [searchParams] = useSearchParams();
  const { stage = "", subjectId = "" } = useParams();

  const {
    data: { results: lessons } = {},
    data,
    isError,
    isLoading,
    isFetching,
  } = useFetch({
    key: "past-exams",
    service: pastExamsServices.getAll,
    params: { stage, subject_id: subjectId },
  });

  console.log(data);

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
          <Profile size={70} />
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

        <Row $margin="60px 0" type="vertical" gap="20px">
          {lessons?.length > 0 ? (
            lessons.map((lesson) => (
              <LessonRow key={lesson.id}>
                <LessonTitle>{lesson.title}</LessonTitle>
                <PdfLink
                  href={lesson.pdf_file}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFileEarmarkPdf size={62} color="#d9534f" />
                </PdfLink>
              </LessonRow>
            ))
          ) : (
            <p style={{ color: "white", fontSize: "30px" }}>
              لا تتوفر امتحانات الان لهذه المرحلة
            </p>
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

const PdfLink = styled.a`
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
