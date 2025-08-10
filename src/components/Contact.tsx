import Button from "./Button";
import Card from "./ui/Card";
import SectionWrapper from "./ui/SectionWrapper";

const Contact = () => {
  return (
    <SectionWrapper
      className="my-16 sm:my-24"
      id="contact"
      title="Contact"
      position={4}
    >
      <Card className="flex flex-col items-center gap-8 text-center py-8 sm:py-20 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
          Get In Touch
        </h2>
        <p className="text-subtle max-w-[650px] text-sm md:text-base lg:text-lg text-balance">
          I'm seeking opportunities in Cybersecurity to apply my skills in
          penetration testing, vulnerability assessment, and security research.
          Reach me at{" "}
          <a
            href="mailto:theanupamsingh01@gmail.com"
            className="text-primary underline"
          >
            theanupamsingh01@gmail.com
          </a>{" "}
          or connect on{" "}
          <a
            href="https://www.linkedin.com/in/anupamas02/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
          >
            LinkedIn
          </a>
          .
        </p>
        <Button
          href="mailto:theanupamsingh01@gmail.com"
          className="w-fit text-base sm:text-lg h-12 sm:h-14 px-8 font-semibold"
        >
          Say Hello!
        </Button>
      </Card>
    </SectionWrapper>
  );
};

export default Contact;
