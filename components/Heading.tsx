interface HeadingProps {
  children: React.ReactNode;
}
const Heading2 = ({ children }: HeadingProps) => (
  <h2 className="text-4xl font-bold"> {children} </h2>
);
export default Heading2;
