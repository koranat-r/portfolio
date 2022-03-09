import React from "react";

import Intro from "../../components/intro/Intro";
import AboutMe from "../../components/aboutMe/AboutMe";

const Home = () => {
  const [currentScrollY, setCurrentScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setCurrentScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  console.log(currentScrollY);

  return (
    <>
      <Intro currentScrollY={currentScrollY} />
      <AboutMe currentScrollY={currentScrollY} />
    </>
  );
};

export default Home;
