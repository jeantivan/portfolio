import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { styled } from "@config/stitches.config";

import BaseCard from "@components/Card";
import Text from "@components/Text";
import IconButton from "@components/IconButton";
import Button from "@components/Button";

import { TProject } from "@utils/types";

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

const Small = (props: TProject) => {
  const { name, description, slug, githubLink } = props;

  return (
    <Card as="article">
      <Text as="h4" heading css={{ fontSize: 18, marginBottom: 8 }}>
        {name}
      </Text>
      <Text secondary css={{ fontSize: 14, marginBottom: 16 }}>
        {description.slice(0, 140)}...
      </Text>
      <Flex css={{ justifyContent: "flex-end" }}>
        <Link
          legacyBehavior
          href={`/projects/?project=project-example`}
          as={`/project/project-example`}
        >
          <Button css={{ marginRight: 16 }}>Details</Button>
        </Link>
        <IconButton as="a" href={githubLink}>
          <GitHubLogoIcon />
        </IconButton>
      </Flex>
    </Card>
  );
};

export default Small;
