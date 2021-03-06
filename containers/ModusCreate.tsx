import Experience from "../components/Experience";
import { ExternalLink } from "../components/ExternalLink";

export const ModusCreate = () => (
  <Experience>
    <Experience.Title>
      Front-end consultant at{" "}
      <Experience.Company companyUrl="https://moduscreate.com/">
        Modus Create
      </Experience.Company>
    </Experience.Title>
    <Experience.Duration>June 2021 - Present</Experience.Duration>
    <Experience.Logo src="/companies/modus.png" />

    <Experience.Summary className="mt-4">
      <Experience.Description>
        Worked for{" "}
        <ExternalLink href="https://askcoral.co/">
          Coral Marketplace
        </ExternalLink>{" "}
        , the future for wholesale grocery stock ordering. Developed the entire
        frontend and marketing pages from scratch in Next Js, helping store
        owners place wholesale orders from high quality ethical brands.
      </Experience.Description>

      <Experience.Description>
        Worked for{" "}
        <ExternalLink href="https://www.workiva.com/">Workiva</ExternalLink>{" "}
        Created framework to capture browser interactions, metrics, web vitals,
        JS errors, session traces, real time memory monitoring and load times
        and developed custom New relic React dashboard application with
        nerdpacks, nerdlets and NRQL in NewRelic.
      </Experience.Description>
    </Experience.Summary>
  </Experience>
);
