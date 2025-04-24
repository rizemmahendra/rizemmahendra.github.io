import { TITLE } from "@constants/index";

const About = () => {
  document.title = TITLE + "About Page";
  return (
    <>
      <h1 className="text-blue-600">About Page</h1>
    </>
  );
};

export default About;
