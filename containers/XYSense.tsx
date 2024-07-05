import Experience from "../components/Experience";
import { ExternalLink } from "../components/ExternalLink";

export const XYSense = () => (
  <Experience>
    <Experience.Title>
      {"Software Engineer at "}

      <Experience.Company
        className="text-intuit-blue text-tekion-green"
        companyUrl="https://tekion.com/"
      >
        XYSense
      </Experience.Company>
    </Experience.Title>
    <Experience.Logo src="/companies/xysense.webp" />
    <Experience.Summary className="mt-4">
      <Experience.Description>
        Working for{" "}
        <ExternalLink href="https://www.xysense.com/">XYSense</ExternalLink>, an
        AI powered workplace occupancy sensor, changing the way companies
        measure office space utilization.
      </Experience.Description>
      <Experience.Description>
        Implemented an image annotation library in React and OpenLayers, to
        train AI algorithms for analyzing space utilization by annotating
        thousands of images with bulk edits and transformations.
      </Experience.Description>
      <Experience.Description>
        Working for Implemeted conflict resolution of space assignments, floor
        statuses, org settings updation workflow and Deck GL canvas
        visualizations
      </Experience.Description>
    </Experience.Summary>
  </Experience>
);
