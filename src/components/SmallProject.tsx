import { ArrowRightIcon } from "@radix-ui/react-icons";
import Card from "./common/Card";
import Text from "./common/Text";
import { TProject } from "@/utils/types";

type SmallProjectProps = {
  project: TProject;
};
function SmallProject({ project }: SmallProjectProps) {
  const { title, description } = project;
  return (
    <Card
      as="article"
      className="p-2 bg-background-2 flex items-center rounded-lg group"
    >
      <div className="flex-1">
        <Text
          Component="h3"
          variant="body1"
          className="flex-1 group-hover:underline decoration-primary-9 underline-offset-2 transition-all"
        >
          {title}
        </Text>
        <Text color="secondary" variant="subtitle" className="line-clamp-1">
          {description}
        </Text>
      </div>
      <span className="text-primary-9 w-10 inline-flex justify-end mr-1">
        <ArrowRightIcon className="w-5 h-5 md:group-hover:translate-x-1 transition-all" />
      </span>
    </Card>
  );
}

export default SmallProject;
