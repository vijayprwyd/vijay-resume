interface RenderProp {
  children: React.ReactNode;
  className?: string;
}

export const Section = ({ children, className }: RenderProp) => (
  <div className={`bg-dusk p-6 rounded-lg ${className || ""}`}> {children} </div>
);
