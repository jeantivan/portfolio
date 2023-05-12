import Container from "@components/common/Container";
import Text from "@components/common/Text";

export const metadata = {
  title: "Contact | JeanTivan.dev",
  description: "Let's connect and work together!",
};

function Contact() {
  return (
    <Container className="my-8 md:my-16">
      <Text Component="h1" variant="title" className="uppercase">
        Let<span className="text-primary-9">{"'"}</span>s connect and work
        together
        <span className="text-primary-9">!</span>
      </Text>
    </Container>
  );
}

export default Contact;
