import Experience from "../components/Experience";
import { ExternalLink } from "../components/ExternalLink";

export const ModusCreate = () => (
  <Experience>
    <Experience.Title>
      Frontend consultant at{" "}
      <Experience.Company companyUrl="https://moduscreate.com/">
        Modus Create
      </Experience.Company>
    </Experience.Title>
    <Experience.Duration>June 2021 - Present</Experience.Duration>
    <Experience.Logo src="/companies/modus.png" />

    <Experience.Summary className="mt-4">
      <Experience.Description>
        Worked for{" "}
        <ExternalLink href="https://www.workiva.com/">Workiva</ExternalLink> on
        their product Wdesk, which is similar to Google docs enabling users to
        create and edit documents. Created framework to capture browser
        interactions, metrices, web vitals, JS errors, session traces, real time
        memory monitoring and load times in New relic. Developed custom New
        relic dashboard application with nerdpacks, nerdlets and NRQL( New Relic
        Query Language) which were consumed by care team to troubleshoot
        performance issues.
      </Experience.Description>

      <Experience.Description>
        Worked for{" "}
        <ExternalLink href="https://askcoral.co/">
          Coral Marketplace
        </ExternalLink>{" "}
        , the future for wholesale grocery stock ordering. Devleoped the entire
        fronend and marketing pages from scrach in Next Js, helping store owners
        place wholesale orders from high quality ethical brands.
      </Experience.Description>
    </Experience.Summary>
  </Experience>
);
