interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className? :string
}
export const ExternalLink = ({ href, children, className }: ExternalLinkProps) => (
  <a href={href} className={`text-purple ${className || ''}`} target="_blank"  rel="noreferrer">
    {children}
  </a>
);
