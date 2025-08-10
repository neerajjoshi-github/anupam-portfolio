import Card from "./ui/Card";
import SectionWrapper from "./ui/SectionWrapper";

const images = Array.from(
  { length: 12 },
  (_, i) => `/bounty-companies/${i + 1}.svg`
);

const Experience = () => {
  return (
    <SectionWrapper
      id="experience"
      title=" Experience"
      position={2}
      className="mt-24"
    >
      <Card className="p-8 flex flex-col">
        <a
          target="_blank"
          href="https://www.lunacal.ai/"
          className="text-xl font-bold hover:underline block w-fit"
        >
          Lunacal.ai
        </a>
        <p className="text-primary mt-2 font-medium">
          Web App Penetration Tester
        </p>
        <p className="font-medium">December 2024 - Present </p>
        <div className="mt-6 flex flex-col gap-4 text-subtle">
          <p className="">
            As a Web App Penetration Testing Intern at Lunacal, I was
            responsible for identifying and reporting security vulnerabilities
            in the company's platform. I conducted manual and automated security
            tests.
          </p>
          <p className="">
            In addition to penetration testing, I performed manual QA testing to
            ensure new features met both security and functionality
            requirements. This included executing test cases, validating bug
            fixes, and documenting issues for the development team. My attention
            to detail helped in identifying hidden edge cases and improving
            overall product quality.
          </p>
          <p className="">
            I also collaborated closely with the development team, working in an
            agile environment to provide remediation guidance and verify fixes.
            This collaborative process not only ensured vulnerabilities were
            resolved efficiently but also strengthened the security awareness of
            the development team through knowledge sharing and best practices.
          </p>
        </div>
      </Card>
      <hr className="border border-primary/25 my-8" />

      <h3 className="text-xl font-bold text-white mb-6">
        Bounty Acknowledgement
      </h3>
      <div className="grid grid-cols-6 gap-6">
        {images.map((src, index) => (
          <Card
            key={index}
            className="aspect-square flex items-center justify-center p-2 hover:border-primary/40 transition duration-300"
          >
            <img
              src={src}
              alt={`Bounty Logo ${index + 1}`}
              className="w-full h-full object-contain rounded-md"
            />
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
