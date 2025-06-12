import { BsPerson } from "react-icons/bs";
import { Profile } from "../ui/AuthContainer";
import { Container } from "../ui/Container";
import NavigateCard from "../ui/NavigateCard"; // If unused, consider removing
import Row from "../ui/Row";
import { StyledTopHeader } from "../ui/TopHeader";
import Heading from "../ui/Heading";
import { motion } from "framer-motion";
import AnimatedBlockList from "../ui/AnimatedCards";
import { useFetch } from "../hooks/useFetch";
import { subjectsServices } from "../data/api";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

export default function Subjects() {
  const [searchParams] = useSearchParams();
  const stage = searchParams.get("grade") ?? "";
  const type = searchParams.get("type") ?? "";

  const {
    data: { results: subjects } = {},
    isError,
    isLoading,
    isFetching,
  } = useFetch({
    key: "subjects",
    service: subjectsServices.getAll,
    params: { stage },
  });

  const blocks = useMemo(() => {
    return (
      subjects?.map((subject) => ({
        id: subject.id,
        title: subject.name,
        to: `/subjects/${type}/${subject.id}?stage=${subject.stage}`,
      })) || []
    );
  }, [subjects]);

  if (isLoading || isFetching) {
    return <div>Loading subjects...</div>;
  }

  if (isError) {
    return <div>Failed to load subjects. Please try again later.</div>;
  }

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

        <Row $margin="100px 0px" type="horizontal" justify="space-between">
          {blocks.length > 0 ? (
            <AnimatedBlockList key={blocks.length} blocks={blocks} />
          ) : (
            <p>No subjects available for this stage.</p>
          )}
        </Row>
      </Container>
    </motion.div>
  );
}
