import Card from "./ui/Card";
import SectionWrapper from "./ui/SectionWrapper";

const certifications = [
  {
    title: "Cyberx Technologies, Kanpur",
    date: "Aug 2022-Aug 2023",
    description:
      "As part of B.Tech. Research Project (6th Semester, team of two), we used techniques like Otsu's method and a Multi-Layer Perceptron, to achieve an accuracy of 95.6% in detecting legible Handwritten Numerical Digits. I was responsible for the GUI for the application that I developed using J2SE (Java).",
  },
  {
    title: "Certified Ethical Hacker ( CEH ), EC-Council",
    date: "July 2024-July 2027 ",
    description:
      "Trained in ethical hacking, penetration testing, and vulnerability assessment using industry-standard tools.",
  },
];

const Certifications = () => {
  return (
    <SectionWrapper
      id="certifications"
      className="mt-24"
      position={3}
      title="Trainings & Certificates"
    >
      <div className="flex flex-col gap-6">
        {certifications.map((certificate, index) => {
          return (
            <Card key={index} className="flex flex-col p-8">
              <h4 className="text-xl font-bold">{certificate.title}</h4>
              <p className="font-medium">{certificate.date}</p>
              <div className="mt-6 flex flex-col gap-4 text-subtle">
                <p className="">{certificate.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
