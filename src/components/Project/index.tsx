import { TProject } from "@src/types";
import ProjectDetails from "../ProjectDetails";
import Featured from "./Featured";
import Small from "./Small";

type ProjectProps = TProject & { featured?: boolean };

const Project = (props: ProjectProps) => {
  const { featured } = props;

  return (
    <>
      {featured ? <Featured {...props} /> : <Small {...props} />}
      <ProjectDetails {...props} />
    </>
  );
};

export default Project;
