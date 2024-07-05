import Experience from "../components/Experience";

export const Tekion = () => (
  <Experience>
    <Experience.Title>
      {"Software Engineer at "}

      <Experience.Company
        className="text-intuit-blue text-tekion-green"
        companyUrl="https://tekion.com/"
      >
        Tekion
      </Experience.Company>
    </Experience.Title>
    <Experience.Logo src="/companies/tekion.png" />
    <Experience.Summary className="mt-4">
      <Experience.Description>
        Tekion enables the entire vehicle sales cycle online and streamlines
        processes with expedited workflows for dealership staff and consumers.
      </Experience.Description>
      <Experience.Description>
        Implemented library for form validation and submission, web pages for
        Automotive Retail Cloud (ARC) parts where dealers can create
        sales/purchase/repair orders, invoices, view performance summary,
        productivity, manage inventory, customer relations and export sales
        reports.
      </Experience.Description>
      <Experience.Description>
        Developed auto-search components, virtualized tables rendering thousands
        of rows with bulk updates and bulk CSV data upload.
      </Experience.Description>
    </Experience.Summary>
  </Experience>
);
