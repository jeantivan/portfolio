import { styled } from "@config/stitches.config";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import BaseCard from "@components/Card";
import Text from "@components/Text";
import IconButton from "@components/IconButton";
import Button from "@components/Button";

const Flex = styled("div", {
  display: "flex",
});

const Card = styled(BaseCard, {
  gridColumn: "span 6",
  display: "flex",
  flexDirection: "column",
  padding: 20,
  cursor: "auto",

  "@lg": {
    gridColumn: "span 3",
  },
});
const Small = (props: any) => {
  return (
    <Card as="article">
      <Text as="h4" heading css={{ fontSize: 18, marginBottom: 8 }}>
        Project title, it can be a large title
      </Text>
      <Text secondary css={{ fontSize: 14, marginBottom: 16 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        laudantium cum exercitationem.
      </Text>
      <Flex css={{ justifyContent: "flex-end" }}>
        <Button css={{ marginRight: 16 }}>Ver más</Button>
        <IconButton>
          <GitHubLogoIcon />
        </IconButton>
      </Flex>
    </Card>
  );
};

export default Small;
