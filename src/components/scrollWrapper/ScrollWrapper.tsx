import { useEffect } from "react";

interface ScrollWrapperProps {
  handleScroll: () => void;
  children: JSX.Element;
}

const ScrollWrapper = ({ handleScroll, children }: ScrollWrapperProps) => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return children;
};

export default ScrollWrapper;
