import { TITLE } from "@constants/index";

const Home = (): JSX.Element => {
  document.title = TITLE + "Home Page";
  return (
    <>
      <section
        id="hero-section"
        className="bg-grey-700 h-[100dvh] w-full"
      ></section>
      <section
        id="project-section"
        className="h-[100dvh] w-full bg-violet-700"
      ></section>
      <section
        id="about-section"
        className="h-[100dvh] w-full bg-blue-900"
      ></section>
      <section
        id="contact-section"
        className="h-[100dvh] w-full bg-green-900"
      ></section>
    </>
  );
};

export default Home;
