import Card from "./ui/Card";
import { CometCard } from "./ui/CometCard";
import SectionWrapper from "./ui/SectionWrapper";

const skillsData = [
  {
    category: "Penetration Testing Skills",
    items: [
      "WebApps & API Testing",
      "Vulnerability Assessment & Reporting",
      "Proof-of-Concept & Exploit Development",
      "Black Box & Gray Box Testing",
      "Business Logic Exploitation",
      "XSS",
      "IDOR",
      "Information Disclosure",
      "Lateral Movement",
      "Data Exfiltration Simulations",
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      "Burp Suite Pro",
      "OWASP ZAP",
      "Nessus",
      "Kali Linux",
      "Bash Scripting",
      "Postman",
      "SQLMap",
      "API Testing",
    ],
  },
];

const About = () => {
  return (
    <SectionWrapper id="about" title="About Me" position={1}>
      <div className="flex flex-col-reverse lg:flex-row gap-6">
        <div className="flex flex-col gap-6 text-subtle flex-1 min-w-0 text-sm lg:text-base">
          <p>
            I am <span className="text-primary">Anupam Singh</span>, a
            passionate
            <span className="text-primary"> Penetration Tester</span>, Security
            Researcher, and Bug Bounty Hunter with proven expertise in
            identifying and exploiting vulnerabilities through both manual and
            automated testing methods. My experience spans vulnerability
            assessments, web application penetration testing, API security
            testing, and business logic flaw exploitation.
          </p>

          <p>
            I hold a{" "}
            <span className="text-primary">Certified Ethical Hacker (CEH)</span>{" "}
            credential from EC-Council (valid through 2027) and have hands-on
            experience with tools such as
            <span className="text-primary"> Burp Suite Pro</span>, OWASP ZAP,
            Nessus, Kali Linux, SQLMap, and Postman. My bug hunting track record
            includes discoveries in XSS, IDOR, dependency confusion, information
            disclosure, open redirects, and critical business logic flaws,
            including a vulnerability in the official
            <span className="text-primary">
              {" "}
              California Government (ca.gov)
            </span>{" "}
            domain.
          </p>

          <p>
            Outside of professional engagements, I actively sharpen my skills on
            platforms like Hack The Box and TryHackMe, focusing on red teaming,
            exploit development, and lateral movement simulations. I am eager to
            contribute to high-impact security teams, deliver thorough
            penetration tests, and mentor emerging talent in cybersecurity.
          </p>
        </div>

        <CometCard className="w-full lg:w-[40%] rounded-lg p-1 max-w-[400px] mx-auto">
          <img
            src="https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-lg h-80 sm:h-[420px] w-full object-cover object-top"
          />
        </CometCard>
      </div>
      <hr className="border border-primary/25 my-8" />
      <div className="space-y-8">
        {skillsData.map(({ category, items }) => (
          <div key={category}>
            <h3 className="text-xl font-bold text-foreground mb-6">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <Card
                  key={item}
                  className="px-3 py-1 cursor-default text-xs sm:text-sm text-subtle rounded-md duration-300 font-medium w-fit hover:border-primary hover:text-primary transition-colors"
                >
                  {item}
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
