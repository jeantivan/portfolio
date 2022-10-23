import { styled } from "@config/stitches.config";
import IconButton from "./IconButton";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

const Flex = styled("div", {
  display: "flex",
});

const SocialLinks = () => {
  return (
    <Flex
      css={{
        marginTop: "auto",
        justifyContent: "center",
        [`& ${IconButton}:not(:last-child)`]: { marginRight: 16 },
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
