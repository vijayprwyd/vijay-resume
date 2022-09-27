import Experience from "../components/Experience";
import { ExternalLink } from "../components/ExternalLink";

export const Toptal = () => (
  <Experience>
    <Experience.Title>
      Front-end consultant at
      <Experience.Company
        className="text-toptal-blue"
        companyUrl="https://www.toptal.com/"
      >
        Toptal
      </Experience.Company>
    </Experience.Title>
    <Experience.Duration>
      June 2018 - Present ( Freelance, Currently not active )
    </Experience.Duration>
    <Experience.Logo src="/companies/toptal.png" />

    <Experience.Summary className="mt-4">
      <Experience.Description>
        Worked for{" "}
        <ExternalLink href="https://www.getcruise.com/">Cruise</ExternalLink>, a
        self-driving car company, on various tools that help AV engineers to
        build and test software running in autonomous vehicles.
      </Experience.Description>
    </Experience.Summary>

    <Experience.Summary className="mt-4">
      <Experience.Description>
        Worked for{" "}
        <ExternalLink href="https://www.xysense.com/">XYSense</ExternalLink>, an
        AI powered workplace occupancy sensor, changing the way companies
        measure office utilization. Implemented an image annotation library in
        React and OpenLayers, to train AI algorithms for analyzing space
        utilization. Seamlessly handled annotating thousands of images with bulk
        edits and transformations.
      </Experience.Description>
    </Experience.Summary>

    <Experience.Summary className="mt-4">
      <Experience.Description>
        Worked for{" "}
        <ExternalLink href="https://www.contiamo.com/">Contiamo</ExternalLink>,
        a data catalogue application which enables companies to ship new data
        projects quickly. Implemented high performant, interactive and
        accessible tables for rendering thousands of records, and a dashboard
        for <ExternalLink href="https://www.cbre.com/">CBRE</ExternalLink>
      </Experience.Description>
    </Experience.Summary>
  </Experience>
);
