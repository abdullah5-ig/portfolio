import Nav from "../components/Nav";
import Hero from "../components/Hero";
import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
  Projects,
  Skills,
} from "../components/Sections";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
