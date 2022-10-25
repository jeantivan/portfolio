import NextImage from "next/image";
import { styled } from "@config/stitches.config";

const Image = styled(NextImage, {});

const Name = styled("span", {
  fontSize: 18,
  marginTop: 12,
  textAlign: "center",
});

const Container = styled("div", {
  minHeight: 72,
  padding: 12,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid $sand3",
  borderRadius: 6,

  "&:hover": {
    borderColor: "$primary",
  },

  variants: {
    list: {
      true: {
        flexDirection: "row",
        justifyContent: "flex-start",

        [`& ${Name}`]: {
          marginLeft: 32,
          marginTop: 0,
        },
      },
    },
  },
});

const Skill = ({
  name,
  image,
  list,
}: {
  name: string;
  image: string;
  list: boolean;
}) => {
  return (
    <Container list={list}>
      <Image alt={`${name} logo`} src={image} width={48} height={48} />
      <Name>{name}</Name>
    </Container>
  );
};

export default Skill;
