import About from "@components/About";
import Background from "@components/Background";
import Certifications from "@components/Certifications";
import Contact from "@components/Contact";
import Experience from "@components/Experience";
import Hero from "@components/Hero";
import Navbar from "@components/Navbar";

const App = () => {
  return (
    <div className="relative min-h-screen w-full">
      <Background />
      <Navbar />
      <div className="max-w-[1080px] w-full mx-auto px-6 sm:px-10">
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
};

export default App;
