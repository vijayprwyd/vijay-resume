interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}
export const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a href={href} className="text-purple" target="_blank" rel="noreferrer">
    {children}
  </a>
);
