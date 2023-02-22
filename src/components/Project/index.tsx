import Featured from "./Featured";
import Small from "./Small";

import ProjectDetails from "@components/ProjectDetails";
import { TProject } from "@utils/types";

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
