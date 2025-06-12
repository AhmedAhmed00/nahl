import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import lottie from "lottie-web";
import animationData1 from "./../../public/animation/celeberation1.json";
import animationData2 from "./../../public/animation/celeberation3.json";
import animationData3 from "./../../public/animation/celeberation2.json";
import { StyledTopHeader } from "../ui/TopHeader";
import { BsPerson } from "react-icons/bs";
import Heading from "../ui/Heading";
import { Container } from "../ui/Container";
import graduation from "./../../public/graduation.png";
import Profile from "../ui/Profile";

export default function SuccessPage() {
  const containerRef = useRef(null);
  const animInstanceRef = useRef(null);
  const [currentAnimationIndex, setCurrentAnimationIndex] = useState(0);
  const [moveHeading, setMoveHeading] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const animations = [animationData1, animationData2, animationData3];

  useEffect(() => {
    if (!containerRef.current) return;

    if (animInstanceRef.current) {
      animInstanceRef.current.destroy();
    }

    animInstanceRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: animations[currentAnimationIndex],
    });

    const onComplete = () => {
      if (currentAnimationIndex < animations.length - 1) {
        setCurrentAnimationIndex((prev) => prev + 1);
      }
    };

    animInstanceRef.current.addEventListener("complete", onComplete);

    return () => {
      animInstanceRef.current?.removeEventListener("complete", onComplete);
      animInstanceRef.current?.destroy();
      animInstanceRef.current = null;
    };
  }, [currentAnimationIndex, animations]);

  // Trigger heading movement
  useEffect(() => {
    const timer = setTimeout(() => {
      setMoveHeading(true);

      // Delay graduation image until heading animation finishes
      setTimeout(() => {
        setShowImage(true);
      }, 1000); // match transition duration
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const headerWrapperStyles = {
    position: "relative",
    height: "auto",
    overflow: "visible",
  };

  const motionHeadingStyles = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    whiteSpace: "nowrap",
    textAlign: "center",
  };

  const graduationImageStyles = {
    position: "absolute",
    top: "-140px",
    left: "50%",

    transform: "translateX(-50%)",
    width: "160px",
    margin: "auto",
    zIndex: 2,
  };

  const lottieContainerStyles = {
    position: "absolute",
    top: "-120px",
    width: "100%",
    height: "160%",
    marginTop: "120px",
  };

  return (
    <Container style={{ width: "100%", height: "100vh", position: "relative" }}>
      <StyledTopHeader style={headerWrapperStyles}>
        <Profile size={70} />
        <motion.div
          initial={{ top: 0 }}
          animate={{ top: moveHeading ? "90%" : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={motionHeadingStyles}
        >
          {/* Graduation image appears only after heading movement */}

          {showImage && (
            <motion.img
              src={graduation}
              alt="Graduation"
              initial={{ opacity: 0 }}
              animate={moveHeading ? { opacity: 1, y: -40 } : { opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: "-100px", // vertical position
                left: "50%", // horizontal anchor
                x: "-50%", // shift left half its width
                y: "-50%", // shift up half its height
                zIndex: 10, // ensure it appears above the heading
                width: "160px", // or whatever size you want
              }}
            />
          )}

          <Heading color="light" as={"h1"}>
            منصة نهل أكاديمي
          </Heading>
        </motion.div>
        <div /> {/* Empty right column */}
      </StyledTopHeader>

      <div ref={containerRef} style={lottieContainerStyles} />
    </Container>
  );
}
