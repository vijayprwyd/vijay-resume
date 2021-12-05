interface EducationProps {
  children: React.ReactNode;
}

const Institution = ({ children }: EducationProps) => (
  <div className="font-bold">{children}</div>
);

const Subject = ({ children }: EducationProps) => (
  <div className="text-xs">{children}</div>
);

const Score = ({ children }: EducationProps) => (
  <div className="text-xs">{children}</div>
);

const Education = ({ children }: EducationProps) => <div> {children} </div>;

Education.Institution = Institution;
Education.Subject = Subject;
Education.Score = Score;

export default Education;
