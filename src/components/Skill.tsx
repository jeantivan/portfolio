import { ReactNode } from "react";
import NextImage from "next/image";
import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";
import { styled, keyframes } from "@config/stitches.config";
import Card from "@components/Card";
import { TSkill } from "@src/types";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

const Image = styled(NextImage, {});

const Name = styled("span", {
  fontSize: 18,
  marginTop: 12,
  textAlign: "center",
  color: "$text",
  fontFamily: "$mont",
  fontWeight: "500",
});

const Container = styled(Card, {
  textDecoration: "none",
  padding: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  "&:hover": {
    boxShadow: "0px 0px 16px $colors$primary",
  },

  variants: {
    rotate: {
      true: {
        "& img": {
          animation: `${spin} infinite 20s linear`,
        },
      },
    },
  },
});

{
  /* <Tooltip.Root>
  <Tooltip.Trigger asChild>
    <button className="IconButton">
      <PlusIcon />
    </button>
  </Tooltip.Trigger>
  <Tooltip.Portal>
    <Tooltip.Content className="TooltipContent" sideOffset={5}>
      Add to library
      <Tooltip.Arrow className="TooltipArrow" />
    </Tooltip.Content>
  </Tooltip.Portal>
</Tooltip.Root>; */
}

const TooltipArrow = styled(Tooltip.Arrow, {
  fill: "$sand12",
});

const StyledTooltipContent = styled(Tooltip.Content, {
  padding: "6px 12px",
  backgroundColor: "$sand12",
  color: "$sand1",
  zIndex: 99,
  borderRadius: 4,
});

const TooltipContent = ({ children }: { children: ReactNode }) => {
  return (
    <StyledTooltipContent sideOffset={5}>
      {children}
      <TooltipArrow className="TooltipArrow" />
    </StyledTooltipContent>
  );
};

const Skill = ({ name, image, slug }: TSkill) => {
  const isReact = name === "React";

  return (
    <Tooltip.Root>
      <Link href={`/projects/skill/${slug}`} legacyBehavior passHref>
        <Tooltip.Trigger asChild>
          <Container
            css={{ gridArea: name.toLowerCase().replace(" ", "-") }}
            rotate={isReact}
            as="a"
          >
            <Image
              alt={`${name} logo`}
              src={image}
              height={isReact ? 80 : 40}
              width={isReact ? 80 : 40}
            />
            {isReact && <Name>React.js</Name>}
          </Container>
        </Tooltip.Trigger>
      </Link>
      <TooltipContent>{name}</TooltipContent>
    </Tooltip.Root>
  );
};

export default Skill;
