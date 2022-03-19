import Image from "next/image";

const skills = [
  {
    name: "React",
    dropShadow: "rgb(97, 218, 251)",
    imgUrl: "/icons/react.svg",
    className: "top-3 left-2.5",
  },
  {
    name: "Next.js",
    dropShadow: "rgb(250, 250, 250)",
    imgUrl: "/icons/next.svg",
  },
  {
    name: "Javascript",
    dropShadow: "rgb(239, 216, 25)",
    imgUrl: "/icons/javascript.svg",
  },
  {
    name: "HTML",
    dropShadow: "rgb(234, 99, 40)",
    imgUrl: "/icons/html.svg",
  },
  {
    name: "CSS",
    dropShadow: "rgb(39, 99, 233)",
    imgUrl: "/icons/css1.svg",
    width: 50,
    height: 50,
    className: "relative top-4 left-4",
  },
  {
    name: "Storybook",
    dropShadow: "rgb(255, 70, 133)",
    imgUrl: "/icons/storybook.svg",
    className: "top-4 left-4",
    width: 50,
    height: 50,
  },
  {
    name: "NodeJs",
    dropShadow: "rgb(114, 171, 99)",
    imgUrl: "/icons/nodeJs.svg",
  },
  {
    name: "Typescript",
    dropShadow: "rgb(48, 116, 191)",
    imgUrl: "/icons/typescript.svg",
    width: 50,
    height: 50,
    className: "top-3.5 left-4",
  },
  {
    name: "Tailwind CSS",
    dropShadow: "rgb(255, 70, 133)",
    imgUrl: "/icons/tailwind.svg",
  },
  {
    name: "Redux",
    dropShadow: "rgb(114, 72, 182)",
    imgUrl: "/icons/redux.svg",
  },
  {
    name: "Styled Component",
    dropShadow: "rgb(114, 72, 182)",
    imgUrl: "/icons/styledComponent.svg",
  },
  {
    name: "Git",
    dropShadow: "rgb(250, 250, 250)",
    imgUrl: "/icons/git.svg",
  },
  {
    name: "Webpack",
    dropShadow: "rgb(139, 206, 241)",
    imgUrl: "/icons/webpack.svg",
  },
  {
    name: "Cypress",
    dropShadow: "rgb(250, 250, 250)",
    imgUrl: "/icons/cypress.svg",
  },
  {
    name: "Babel",
    dropShadow: "rgb(249, 220, 60)",
    imgUrl: "/icons/babel.svg",
  },
  {
    name: "Openlayers",
    dropShadow: "rgb(48, 116, 191)",
    imgUrl: "/icons/openlayers.svg",
  },
  {
    name: "Jest",
    dropShadow: "#c63d14",
    imgUrl: "/icons/jest.svg",
  },
  {
    name: "Recoil",
    dropShadow: "rgb(39, 99, 233)",
    imgUrl: "/icons/recoil.svg",
  },

];

export const Skills = () => {
  return (
    <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start">
      {skills.map((skill) => {
        return (
          <div
            key={skill.name}
            className="flex w-fit flex-col gap-2 h-34"
          >
            <div
              className="rounded-full bg-gray-100 h-20 w-20"
              style={{
                filter: skill.dropShadow
                  ? `drop-shadow(${skill.dropShadow} 0px 0px 0.75rem) !important`
                  : "none",
              }}
            >
              <div
                className={`${skill.className || "top-2.5 left-2.5"} relative`}
              >
                <Image
                  src={skill.imgUrl}
                  width={skill.width || 60}
                  height={skill.height || 60}
                  layout="fixed"
                  alt="react"
                  className={`p-5 text-night`}
                />
              </div>
            </div>
            <span className="self-center w-20 text-center">{skill.name}</span>
          </div>
        );
      })}
    </div>
  );
};
