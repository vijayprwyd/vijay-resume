import Experience from "../components/Experience";
import { ExternalLink } from "../components/ExternalLink";

export const Freelance = () => (
  <Experience>
    <Experience.Title>
      Software Developer Consultant at{" "}
      <Experience.Company companyUrl="https://www.toptal.com//">
        Toptal
      </Experience.Company>
    </Experience.Title>
    <Experience.Duration>Aug 2021 - Dec 2023</Experience.Duration>
    <Experience.Logo src="/companies/toptal.png" />
    <div className="mt-4">
      I got a chance to work as a FullStack developer for many companies via
      Toptal.
    </div>
    <Experience.Summary className="mt-4">
    <Experience.Description>
        Worked for{" "}
        <ExternalLink href="https://www.andritz.com/group-en">Andritz</ExternalLink>, an international technology group, offering plants, equipment, systems and services for various industries
        Developed a highly concurrent, scalable scenario manager in Node js for <ExternalLink href="https://extendsim.com/">Extendsim simulation software</ExternalLink>, allowing users to schedule
        scenarios with long running models and GBs of data transfer.
      </Experience.Description>
      <Experience.Description>
        Worked for{" "}
        <ExternalLink href="https://www.trili.tech/">Trili tech</ExternalLink>,
        a blockchain research and development hub focused on{" "}
        <ExternalLink href="https://tezos.com/">Tezos</ExternalLink>. Worked on
        digital collectbles for Manchester United, McLaren, Flosports, Sowvital,
        Gangbusters and quests for Ethereum users. Worked on admin portal and
        Zenbox product for auto tagging emails using an LLM model
      </Experience.Description>
      <Experience.Description>
        Worked for{" "}
        <ExternalLink href="https://www.growthtribe.io/">
          GrowthTribe{' '}
        </ExternalLink>
         on their web app which enables users to take online courses.
      </Experience.Description>
      <Experience.Description>
        Worked for{" "}
        <ExternalLink href="https://www.getcruise.com/">Cruise</ExternalLink>, a
        self-driving car company, on various tools that help AV engineers to
        build and test software running in autonomous vehicles.
      </Experience.Description>
      <Experience.Description>
        Worked for{" "}
        <ExternalLink href="https://audibusinessinnovation.com/en/">
          Audi Business Innovation GmbH
        </ExternalLink>
        . Developed the billing portal application to manage usage and billing
        of tools and softwares, place new orders, get forecasts and insights.
      </Experience.Description>
    </Experience.Summary>
  </Experience>
);
