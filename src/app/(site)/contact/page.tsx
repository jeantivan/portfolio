import Heading from "@/components/Heading";

import Container from "@/components/common/Container";
import Text from "@/components/common/Text";

export const metadata = {
  title: "Contact",
  description: "Let's connect and work together!"
};

function Contact() {
  return (
    <Container className="my-8 md:my-16">
      <section className="">
        <Heading
          text="Let's connect & work together"
          Component="h1"
          variant="title"
          className="uppercase mb-4 text-center"
        />

        <Text variant="subtitle" color="secondary" className="mb-6 text-center">
          Lorem ipsum dolor sit amet consectetur. Pharetra a in aliquet
          malesuada. Id interdum cursus mi in.
        </Text>
        <Heading
          text="jptivan52@gmail.com"
          variant="heading"
          className="mb-8 text-center"
        />
        <Text variant="body1" color="secondary" className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
          reprehenderit{" "}
          <a className="text-primary-9 hover:underline" href="">
            Linkedin
          </a>{" "}
          or{" "}
          <a className="text-primary-9 hover:underline" href="">
            Upwork
          </a>
        </Text>
      </section>
    </Container>
  );
}

export default Contact;
