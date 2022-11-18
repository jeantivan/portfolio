import Image from "next/image";
import { styled } from "@config/stitches.config";
import { GitHubLogoIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import Text from "@components/Text";
import Button from "@components/Button";
import IconButton from "@components/IconButton";

import projectImage from "@src/assets/images/project-example.png";

const Flex = styled("div", {
  display: "flex",
});
const Container = styled("article", {
  display: "grid",
  gridGap: "16px",
  gridTemplateAreas: `
    "title"
    "image"
    "description"
    "links"  
  `,

  "&:not(:last-child)": {
    marginBottom: 24,
  },

  "@md": {
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(4, min-content)",
    gridTemplateAreas: `
     "image title"
    "image description"
    "image tags"
    "image links"
  `,
  },
});

const ImageWrapper = styled("div", {
  gridArea: "image",
  width: "100%",
  height: 0,
  paddingTop: "75%",
  borderRadius: 6,
  position: "relative",
  overflow: "hidden",
  background: "$sand7",
});

const Tag = styled("span", {
  fontSize: 10,
  color: "$primary",
  padding: "6px 24px",
  border: "1px solid $primary",
  borderRadius: 9999,

  "&:not(:last-child)": {
    marginRight: 16,
  },
});

const Featured = (props: any) => {
  return (
    <Container>
      <ImageWrapper>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        >
          <Image src={projectImage} alt="Example image" />
        </div>
      </ImageWrapper>
      <Text as="h2" heading css={{ gridArea: "title", fontSize: 32 }}>
        Project title, it can be a large title.
      </Text>
      <Text
        secondary
        css={{
          gridArea: "description",
          fontSize: 14,
          "@lg": {
            fontSize: 18,
          },
        }}
      >
        Vitae blandit dignissim lorem commodo amet in. Sed gravida ac est vitae
        vitae, viverra. Sed pulvinar tellus ut maecenas sit suspendisse euismod
        blandit. Sit nunc viverra aliquam sem amet, lorem et fames.
      </Text>
      <Flex
        css={{
          display: "none",
          "@md": {
            display: "flex",
            gridArea: "tags",
            alignItems: "flex-start",
          },
        }}
      >
        <Tag>React</Tag>
        <Tag>Javascript</Tag>
        <Tag>Material UI</Tag>
      </Flex>
      <Flex
        css={{
          gridArea: "links",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          "& :not(:last-child)": { marginRight: 16 },
        }}
      >
        <Button>Live</Button>
        <IconButton>
          <GitHubLogoIcon />
        </IconButton>
      </Flex>
    </Container>
  );
};

export default Featured;
