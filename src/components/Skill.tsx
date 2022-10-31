import NextImage from "next/image";
import { styled, keyframes } from "@config/stitches.config";

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

const Container = styled("div", {
  borderRadius: 6,
  backgroundColor: "$menu",
  boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
  width: "100%",
  height: "100%",
  zIndex: 1,
  transition: "all 150ms ease-in",
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

const Skill = ({ name, image }: { name: string; image: string }) => {
  const isReact = name === "React";

  return (
    <Container
      css={{ gridArea: name.toLowerCase().replace(" ", "-") }}
      rotate={isReact}
    >
      <Image
        alt={`${name} logo`}
        src={image}
        height={isReact ? 80 : 40}
        width={isReact ? 80 : 40}
      />
      {isReact && <Name>React.js</Name>}
    </Container>
  );
};

export default Skill;
