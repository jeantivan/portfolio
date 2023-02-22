import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

import { styled } from "@config/stitches.config";

import IconButton from "@components/IconButton";

const Flex = styled("footer", {
  gridArea: "footer",
  display: "flex",
});

const SocialLinks = () => {
  return (
    <Flex
      css={{
        padding: 16,
        justifyContent: "center",
        [`& ${IconButton}`]: { margin: "0 16px" },
      }}
    >
      <IconButton
        as="a"
        href="mailto:jptivan53@gmail.com"
        title="Send me an Email! :D"
      >
        <EnvelopeClosedIcon />
      </IconButton>
      <IconButton
        as="a"
        href="https://github.com/jeantivan/"
        title="Check all my projects on Github!"
      >
        <GitHubLogoIcon />
      </IconButton>
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/jean-tivan/"
        title="Let's connect on LinkedIn ;)"
      >
        <LinkedInLogoIcon />
      </IconButton>
    </Flex>
  );
};

export default SocialLinks;
