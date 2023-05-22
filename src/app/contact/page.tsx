import Heading from "@/components/Heading";

import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Text from "@/components/common/Text";
import Input from "@/components/common/Input";

export const metadata = {
  title: "Contact | JeanTivan.dev",
  description: "Let's connect and work together!",
};

function Contact() {
  return (
    <Container className="my-8 md:my-16">
      <section className="mb-16 md:mb-20">
        <Heading
          text="Let's connect & work together"
          Component="h1"
          variant="title"
          className="uppercase mb-6 md:mb-8"
        />

        <Text variant="body2" color="secondary" className="mb-14">
          Lorem ipsum dolor sit amet consectetur. Pharetra a in aliquet
          malesuada. Id interdum cursus mi in. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Possimus, quas?
        </Text>
        <div className="flex flex-wrap gap-4">
          <Button color="primary" variant="outlined" className="flex-1">
            Linkedin
          </Button>
          <Button color="primary" variant="outlined" className="flex-1">
            Email
          </Button>
          <Button color="primary" variant="outlined" className="flex-1">
            Upwork
          </Button>
        </div>
      </section>
      <section>
        <Text Component="h2" variant="body2" className="uppercase mb-6">
          Also you can sent me a message using the next form
        </Text>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 md:w-1/2">
            <Input
              label="Full name"
              name="fullName"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex-1 md:w-1/2">
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="youremail@example.com"
            />
          </div>
          <div className="w-full">
            <Input
              label="Message"
              name="message"
              textarea
              type="email"
              placeholder="Start typing your message here..."
            />
          </div>
          <div className="flex-1">
            <Button className="w-full">Send message</Button>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Contact;
