import Experience from "../components/Experience";
import { ExternalLink } from "../components/ExternalLink";

export const Adeva = () => (
  <Experience>
    <Experience.Title>
      Front-end consultant at{" "}
      <Experience.Company
        companyUrl="https://adevait.com/"
      >
        Adeva
      </Experience.Company>
    </Experience.Title>
    <Experience.Duration>June 2022 - Present</Experience.Duration>
    <Experience.Logo src="/companies/adeva.png" />

    <Experience.Summary className="mt-4">
      <Experience.Description>
        Working for{" "}
        <ExternalLink href="https://www.growthtribe.io/">
          GrowthTribe
        </ExternalLink>
        , a digital learning partner for individuals & organizations,
        specializing in data science, growth, innovation and customer
        experience. Working on their web app which enables users to take online
        courses
      </Experience.Description>
    </Experience.Summary>
  </Experience>
);
