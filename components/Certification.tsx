import { Section } from "./Section";

interface CertificationsProps {
  children: React.ReactNode;
}

interface NameProps {
  children: React.ReactNode;
}

const Certification = ({ children }: NameProps) => (
  <li className="text-2xl dotted-hover"> {children} </li>
);

const Certifications = ({ children }: CertificationsProps) => (
  <ul className="list-disc ml-6 flex flex-col gap-2"> {children} </ul>
);

Certifications.Certification = Certification;

export default Certifications;
