import Container from "@components/common/Container";
import Text from "@components/common/Text";

export const metadata = {
  title: "Projects | JeanTivan.dev",
  description: "Collection of projects that I've built",
};

function Projects() {
  return (
    <Container className="my-8 md:my-16">
      <Text Component="h1" variant="title" className="uppercase">
        The projects I<span className="text-primary-9">{"'"}</span>ve built
        <span className="text-primary-9">.</span>
      </Text>
    </Container>
  );
}

export default Projects;
