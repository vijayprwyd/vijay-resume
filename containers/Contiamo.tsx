import Experience from "../components/Experience";
import { ExternalLink } from "../components/ExternalLink";

export const Contiamo = () => (
  <Experience>
    <Experience.Title>
      {"Frontend developer at "}
      <Experience.Company
        className="text-contiamo-blue"
        companyUrl="https://www.contiamo.com/"
      >
        Contiamo
      </Experience.Company>
    </Experience.Title>
    <Experience.Duration>Aug 2021 - November 2021</Experience.Duration>
    <Experience.Logo src="/companies/contiamo.png" />

    <Experience.Summary className="mt-4">
      <Experience.Description>
        Contiamo provides a data catalogue application which enables companies
        to ship new data projects quickly.
      </Experience.Description>
      <Experience.Description>
        Implemented high performant, interactive and accessible tables with
        ag-grid for rendering millions of tablular record data, tool for
        visualizaing lineage diagram with dagre and the dashboard application of {" "}
        <ExternalLink href="https://www.cbre.com/">CBRE</ExternalLink> {" "}
        with support for dynamic columns, column re-ordering and map
        visualizations of real estate data with mapbox.
      </Experience.Description>
    </Experience.Summary>
  </Experience>
);
