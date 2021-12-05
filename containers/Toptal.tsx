import Experience from "../components/Experience";
import { ExternalLink } from "../components/ExternalLink";

export const Toptal = () => (
  <Experience>
    <Experience.Title>
      {"Fullstack consultant at "}
      <Experience.Company
        className="text-toptal-blue pl-2"
        companyUrl="https://www.toptal.com/"
      >
        Toptal
      </Experience.Company>
    </Experience.Title>
    <Experience.Duration>Sep 2021 - Present</Experience.Duration>
    <Experience.Logo src="/companies/toptal.png" />

    <Experience.Summary className="mt-4">
      <Experience.Description>
        Worked for{" "}
        <ExternalLink href="https://www.xysense.com/">
          XYSense
        </ExternalLink>
        , an AI powered workplace occupancy sensor, changing the way companies
        measure office utilization.
      </Experience.Description>
      <Experience.Description>
        Implemented an image annotation React library from scratch on top of
        Openlayers to annotate objects in an image to analyze the space
        utilization in an area. Seamlessly handled annotating thousands of
        images with bulk edits and transformations.
      </Experience.Description>
    </Experience.Summary>
  </Experience>
);
