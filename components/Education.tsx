import { Section } from "./Section";

interface EducationProps {
  children: React.ReactNode;
}

const Institution = ({ children }: EducationProps) => (
  <div className="font-bold text-lg">{children}</div>
);

const Subject = ({ children }: EducationProps) => (
  <div className="text-xs">{children}</div>
);

const Score = ({ children }: EducationProps) => (
  <div className="text-xs">{children}</div>
);

const Education = ({ children }: EducationProps) => (
  <Section> {children} </Section>
);

Education.Institution = Institution;
Education.Subject = Subject;
Education.Score = Score;

export default Education;
