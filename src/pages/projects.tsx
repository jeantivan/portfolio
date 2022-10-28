import type { NextPage } from "next";
import Head from "next/head";
import { styled } from "@config/stitches.config";
import Container from "@components/Container";
import IconButton from "@src/components/IconButton";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

const Grid = styled("div", {
  width: "100%",
  height: "100%",
  paddingTop: 32,
  paddingBottom: 32,
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gridTemplateRows: "min-content min-content",
  gridGap: "16px 16px",
  alignItems: "start",
});
const Content = styled("div", {
  gridColumn: "span 5",
});
const Title = styled("h1", {
  fontFamily: "$mont",
  fontWeight: 700,
  fontSize: 72,
  color: "$text",
  margin: 0,
  //marginBottom: 16,
  paddingBottom: 12,
  gridColumn: "span 5",
  gridRow: "span 1",
});

const Span = styled("span", {
  position: "relative",

  "&:after": {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 6,
    width: "50%",
    backgroundColor: "$primary",
    clipPath: "polygon(0 0, 100% 0%, 80% 100%, 0% 100%)",
    transform: "translate(0, 12px)",
  },
});

const Cards = styled("div", {
  gridColumn: "span 6",
});

const Card = styled("article", {
  gridColumn: "span 6",
  display: "flex",
  flexDirection: "column",

  padding: 8,
  borderRadius: 6,
  border: "1px solid $sand7",

  "@lg": {
    gridColumn: "span 2",
  },
});

const CardImage = styled("div", {
  width: "100%",
  height: "0",
  background: "#D9D9D9",
  borderRadius: 3,
  position: "relative",
  paddingTop: "75%",
  marginBottom: 10,

  "& .placeholder": {
    position: "absolute",
    inset: 0,
    width: "100%",
    background: "#D9D9D9",
    borderRadius: "inherit",
  },
});

const CardContent = styled("div", {
  display: "flex",
  flexFlow: "row wrap",
  marginBottom: 10,
});

const CartTitle = styled("h2", {
  margin: 0,
  fontFamily: "$mont",
  fontSize: 18,
  fontWeight: 700,
  color: "$text",
  flex: 1,
  marginBottom: 8,
});

const CardDescription = styled("p", {
  margin: 0,
  color: "$textSecondary",
  fontSize: 14,
});

const CardFooter = styled("footer", {
  flex: 1,
  display: "flex",
});

const Button = styled("button", {
  all: "unset",
  flex: 1,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 8,
  background: "$primary",
  borderRadius: 6,
  marginRight: 8,
});

const Projects: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Projects | JeanTivan</title>
      </Head>
      <Grid>
        <Title>
          <Span>Projects</Span>
        </Title>
        <Card>
          <CardImage>
            <span className="placeholder" />
          </CardImage>
          <CardContent>
            <CartTitle>Project title</CartTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button>Ver más</Button>
            <IconButton>
              <ExternalLinkIcon />
            </IconButton>
          </CardFooter>
        </Card>
        <Card>
          <CardImage>
            <span className="placeholder" />
          </CardImage>
          <CardContent>
            <CartTitle>Project title</CartTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              aspernatur beatae autem?
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button>Ver más</Button>
            <IconButton>
              <ExternalLinkIcon />
            </IconButton>
          </CardFooter>
        </Card>
        <Card>
          <CardImage>
            <span className="placeholder" />
          </CardImage>
          <CardContent>
            <CartTitle>Project title</CartTitle>
            <CardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
              sint!
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Button>Ver más</Button>
            <IconButton>
              <ExternalLinkIcon />
            </IconButton>
          </CardFooter>
        </Card>
      </Grid>
    </Container>
  );
};

export default Projects;
