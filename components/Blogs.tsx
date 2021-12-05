interface LinkProps {
  children: React.ReactNode;
  href: string;
}

interface BlogProps {
  children: React.ReactNode;
}

const Link = ({ children, href }: LinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-2xl hover:border-b-2 hover:border-dotted hover:border-white"
  >
    {children}
  </a>
);

const Blogs = ({ children }: BlogProps) => {
  return <div> {children} </div>;
};

Blogs.Link = Link;

export default Blogs;
