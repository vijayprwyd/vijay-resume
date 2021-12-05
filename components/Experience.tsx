import Image from "next/image";

interface RenderProp {
  children: React.ReactNode;
}

interface CompanyProps {
  children: React.ReactNode;
  className?: string;
  companyUrl: string;
}

interface LogoProps {
  src: string;
}

interface SummaryProps extends RenderProp {
  className?: string;
}

const Title = ({ children }: RenderProp) => (
  <h3 className="text-2xl md:text-3xl"> {children} </h3>
);

const Company = ({ className, children, companyUrl }: CompanyProps) => (
  <a
    href={companyUrl}
    className={`${className || ""} underline`}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

const Duration = ({ children }: RenderProp) => (
  <div className="text-mist text-xs"> {children} </div>
);

const Summary = ({ children, className }: SummaryProps) => (
  <ul className={`${className || ""} list-disc ml-6 flex flex-col gap-4`}>
    {children}
  </ul>
);

const Description = ({ children }: RenderProp) => <li> {children} </li>;

const Logo = ({ src }: LogoProps) => (
  <div className="absolute right-4 -top-8 hidden md:block">
    <Image src={src} layout="fixed" width={64} height={64} alt="Company" className="rounded" />
  </div>
);

export const Experience = ({ children }: RenderProp) => (
  <div className="bg-dusk px-6 pt-8 pb-6 rounded-lg mb-10 relative"> {children} </div>
);

Experience.Title = Title;
Experience.Company = Company;
Experience.Duration = Duration;
Experience.Summary = Summary;
Experience.Description = Description;
Experience.Logo = Logo;

export default Experience;
