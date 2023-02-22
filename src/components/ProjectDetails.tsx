import { useRouter } from "next/router";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { Cross2Icon, GitHubLogoIcon, GlobeIcon } from "@radix-ui/react-icons";

import { styled } from "@config/stitches.config";

import Flex from "@components/Flex";
import IconButton from "@components/IconButton";
import Text from "@components/Text";
import Button from "@components/Button";
import CoverImage from "@components/CoverImage";
import Tag from "@components/Tag";

import { TProject } from "@utils/types";

const Div = styled("div", {});

const Overlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: "rgba(0,0,0, 0.25)",
  width: "100%",
  position: "fixed",
  inset: 0,
  padding: 16,
  display: "grid",
  placeItems: "center",
  gridAutoFlow: "dense",
  overflowY: "auto",
  zIndex: 999,

  "@md": {
    padding: 32,
  },
  "@lg": {
    padding: 64,
  },
});

const Content = styled(DialogPrimitive.Content, {
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "$menu",
  width: "100%",
  color: "$text",
  borderRadius: 6,
  padding: 25,
  //overflow: "hidden",
  "&:focus": { outline: "none" },

  "@lg": {
    width: "70%",
  },
});

const ProjectDetails = (props: TProject) => {
  const router = useRouter();
  const isOpenModal = router.query.project ? true : false;

  const { name, description, slug, githubLink, liveLink, coverImage, skills } =
    props;

  return (
    <DialogPrimitive.Root
      defaultOpen
      open={isOpenModal}
      onOpenChange={(open) => {
        if (!open) {
          router.push("/projects");
        }
      }}
    >
      <Overlay>
        <Content>
          <div>
            <Flex css={{ justifyContent: "flex-end" }}>
              <DialogPrimitive.Close asChild>
                <IconButton>
                  <Cross2Icon />
                </IconButton>
              </DialogPrimitive.Close>
            </Flex>
            <Text
              heading
              as="h1"
              css={{ flex: 1, fontSize: 32, marginBottom: 16 }}
            >
              {name}
            </Text>
            <Text secondary css={{ marginBottom: 32 }}>
              {description}
            </Text>
            <Flex css={{ marginBottom: 32 }}>
              <Button
                css={{
                  width: "100%",
                  marginRight: 8,
                  "& svg": { marginRight: 12 },
                }}
                as="a"
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogoIcon /> Github
              </Button>
              <Button
                css={{
                  width: "100%",
                  marginLeft: 8,
                  "& svg": { marginRight: 12 },
                }}
                as="a"
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobeIcon /> Preview
              </Button>
            </Flex>
            <Div
              css={{
                marginBottom: 32,
              }}
            >
              <Div
                css={{
                  width: "100%",
                  height: 603.5,
                  borderRadius: 6,
                  backgroundColor: "red",
                }}
              ></Div>
              {/* <CoverImage
                layout="fill"
                src={coverImage!}
                alt={`Image from: ${name}`}
              /> */}
            </Div>
            <div>
              <Text heading secondary css={{ fontSize: 14, marginBottom: 12 }}>
                Tech used
              </Text>
              <Flex css={{ flexFlow: "row wrap", width: "100%" }}>
                {skills.map((skill) => (
                  <Tag key={skill.slug}>{skill.name}</Tag>
                ))}
              </Flex>
              <Text
                secondary
                css={{ fontSize: 14, fontStyle: "italic", marginTop: 16 }}
              >
                Finished: 21/01/2022
              </Text>
            </div>
          </div>
        </Content>
      </Overlay>
    </DialogPrimitive.Root>
  );
};

export default ProjectDetails;
