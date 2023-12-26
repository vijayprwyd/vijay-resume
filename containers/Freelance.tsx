import Experience from "../components/Experience";
import { ExternalLink } from "../components/ExternalLink";

export const Freelance = () => (
  <Experience>
    <Experience.Title>
      Software Developer Consultant at{" "}
      <Experience.Company companyUrl="https://moduscreate.com/">
        Modus Create
      </Experience.Company>
    </Experience.Title>
    <Experience.Duration>September 2021 - Present</Experience.Duration>
    <Experience.Logo src="/companies/modus.png" />

    <div className="mt-4">
      I got a chance to work as a FullStack developer (FE heavy) consultant for
      many companies via Modus.
    </div>
    <Experience.Summary className="mt-4">
      <Experience.Description>
        Working for{" "}
        <ExternalLink href="https://www.xysense.com/">XYSense</ExternalLink>, an
        AI powered workplace occupancy sensor, changing the way companies
        measure office space utilization. Implemented an image annotation
        library in React and OpenLayers, to train AI algorithms for analyzing
        space utilization by annotating thousands of images with bulk edits and
        transformations. Implemeted conflict resolution of space assignments,
        floor statuses and org settings updation workflow
      </Experience.Description>
      <Experience.Description>
        Worked for{" "}
        <ExternalLink href="https://www.growthtribe.io/">
          GrowthTribe
        </ExternalLink>
        , a digital learning partner for individuals & organizations,
        specializing in data science, growth, innovation and customer experience
        on their web app which enables users to take online courses.
      </Experience.Description>
      <Experience.Description>
        Worked for{" "}
        <ExternalLink href="https://www.trili.tech/">Trili tech</ExternalLink>,
        a blockchain research and development hub focused on{" "}
        <ExternalLink href="https://tezos.com/">Tezos</ExternalLink>. Worked on
        digital collectbles for Manchester United, McLaren, Flosports, Sowvital,
        Gangbusters and quests for Ethereum users.
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
        <ExternalLink href="https://www.workiva.com/">Workiva</ExternalLink> ,
        in a product Wdesk, similar to google docs. Created framework to capture
        browser interactions, metrics, web vitals, JS errors, session traces,
        real time memory monitoring and load times and developed custom New
        relic React dashboard application with nerdpacks, nerdlets and NRQL in
        NewRelic.
      </Experience.Description>
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
