import Featured from "./Featured";
import Small from "./Small";

const Project = (props: any) => {
  const { featured } = props;

  if (featured) {
    return <Featured {...props} />;
  }

  return <Small {...props} />;
};

export default Project;
