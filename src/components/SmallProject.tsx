import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Card from "./common/Card";
import Text from "./common/Text";
import IconButton from "./common/IconButton";
import Button from "./common/Button";

type SmallProjectProps = {};
function SmallProject(props: SmallProjectProps) {
  return (
    <Card as="article" className="p-4">
      <Text
        Component="h3"
        variant="body2"
        weight="medium"
        className="mb-2 md_mb-4"
      >
        Example Project Name
      </Text>

      <Text color="secondary" variant="subtitle" className="mb-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        voluptates?
      </Text>
      <footer className="w-full flex justify-between items-center">
        <IconButton
          label="Github Logo"
          color="secondary"
          size="small"
          variant="outlined"
          icon={GitHubLogoIcon}
        />
        <Button size="small" color="primary" variant="outlined">
          View more
        </Button>
      </footer>
    </Card>
  );
}

export default SmallProject;
