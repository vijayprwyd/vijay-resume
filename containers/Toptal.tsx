import Experience from "../components/Experience";
import { ExternalLink } from "../components/ExternalLink";

export const Toptal = () => (
  <Experience>
    <Experience.Title>
      {"Fullstack consultant at "}
      <Experience.Company
        className="text-toptal-blue"
        companyUrl="https://www.toptal.com/"
      >
        Toptal
      </Experience.Company>
    </Experience.Title>
    <Experience.Duration>Sep 2021 - Present</Experience.Duration>
    <Experience.Logo src="/companies/toptal.png" />

    <Experience.Summary className="mt-4">
      <Experience.Description>
        Working for{" "}
        <ExternalLink href="https://www.getcruise.com/">Cruise</ExternalLink>, a
        self-driving car company. Working on various tools that help AV
        engineers to build and test software running in autonomous vehicles.
      </Experience.Description>
    </Experience.Summary>

    <Experience.Summary className="mt-4">
      <Experience.Description>
        Worked for{" "}
        <ExternalLink href="https://www.xysense.com/">XYSense</ExternalLink>, an
        AI powered workplace occupancy sensor, changing the way companies
        measure office utilization. Implemented an image annotation React
        library from scratch on top of Openlayers to annotate objects in an
        image to analyze the space utilization in an area. Seamlessly handled
        annotating thousands of images with bulk edits and transformations.
      </Experience.Description>
    </Experience.Summary>

    <Experience.Summary className="mt-4">
      <Experience.Description>
        Worked for{" "}
        <ExternalLink href="https://www.contiamo.com/">Contiamo</ExternalLink>,
        a data catalogue application which enables companies to ship new data
        projects quickly. Implemented high performant, interactive and
        accessible tables for rendering millions of records, visualizations for
        lineage diagram and a dashboard for{" "}
        <ExternalLink href="https://www.cbre.com/">CBRE</ExternalLink>
      </Experience.Description>
    </Experience.Summary>
  </Experience>
);
