import Experience from "../components/Experience";

export const Intuit = () => (
  <Experience>
    <Experience.Title>
      {"Full-stack developer at "}
      <Experience.Company
        className="text-intuit-blue"
        companyUrl="https://www.intuit.com/"
      >
        Intuit
      </Experience.Company>
    </Experience.Title>
    <Experience.Duration>Aug 2016 - March 2021</Experience.Duration>
    <Experience.Logo src="/companies/intuit.png" />

    <Experience.Summary className="mt-4">
      <Experience.Description>
        Intuit is a Fortune 500 company which develops financial, accounting and
        tax filing softwares. 
      </Experience.Description>
      <Experience.Description>
        My tasks included test driven development, documentation, integrating
        components with storybooks, design discussions and code
        reviews, weekly releases, deployments and monitoring post
        deployment, analytics integration.
      </Experience.Description>
      <Experience.Description>
        Analyse performance issues and improve it with techniques like code
        splitting, lazy loading, caching, parallelization of network calls,
        preloading and pre-fetching, bringing down page loads from 8 sec to less
        than 3 sec.
      </Experience.Description>
    </Experience.Summary>
  </Experience>
);
