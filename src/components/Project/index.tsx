import { TProject } from "@src/types";
import Featured from "./Featured";
import Small from "./Small";

type ProjectProps = TProject & { featured?: boolean };

const Project = (props: ProjectProps) => {
  const { featured } = props;

  if (featured) {
    return <Featured {...props} />;
  }

  return <Small {...props} />;
};

export default Project;
