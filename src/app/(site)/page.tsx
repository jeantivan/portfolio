import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import Heading from "@/components/Heading";
import Container from "@/components/common/Container";
import Text from "@/components/common/Text";
import Button from "@/components/common/Button";

export const metadata = {
  title: "About | JeanTivan.dev",
  description:
    "Welcome to my portfolio, my name is Jean Tivan a self-taught frontend developer passionate for react and next.js"
};

function Home() {
  return (
    <Container className="my-8 md:my-16">
      <section className="md:text-center mb-14">
        <div className="mb-4 md:mb-5">
          <Text Component="h1" variant="main" className="uppercase mb-1">
            Jean Tivan
          </Text>
          <Text
            Component="h2"
            variant="subheading"
            color="primary"
            weight="bold"
            className="uppercase tracking-widest"
          >
            Frontend Developer
          </Text>
        </div>
        <div className="mb-7 md:mb-9">
          <Text
            variant="body2"
            weight="light"
            color="secondary"
            className="text-justify"
          >
            Lorem ipsum dolor sit amet consectetur. Eget sed sed quam faucibus
            mi in nisl. Ut odio venenatis nunc tristique. Nunc pellentesque
            neque magna mauris. Bibendum egestas a leo massa elementum netus
            fringilla. Diam viverra augue mattis nibh lorem lorem maecenas
            porta. Interdum pulvinar ultrices tincidunt nisi eleifend hendrerit.
          </Text>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full md:px-10">
          <Button
            as={Link}
            href="/contact"
            variant="text"
            className="w-full md:w-1/3"
          >
            {"Let's work together!"}
          </Button>
          <Button as={Link} href="/projects" className="w-full md:w-1/3">
            My Projects <ArrowRightIcon className="w-5 h-5 fill-current" />
          </Button>
        </div>
      </section>
      <section className="mb-20 md:mb-32">
        <Heading
          text="Why should you hire me?"
          Component="h3"
          variant="title"
          className="mb-5"
        />

        <Text color="secondary" variant="body2" className="text-justify mb-7">
          Lorem ipsum dolor sit amet consectetur. Eget sed sed quam faucibus mi
          in nisl. Ut odio venenatis nunc tristique. Nunc pellentesque neque
          magna mauris. Bibendum egestas a leo massa elementum netus fringilla.
          Diam viverra augue mattis nibh lorem lorem maecenas porta. Interdum
          pulvinar ultrices tincidunt nisi eleifend hendrerit.
        </Text>
        <ul className="list-none grid gap-4 grid-cols-2 md:grid-cols-3 pl-5">
          <li className="text-lg text-gold-12">React.js</li>
          <li className="text-lg text-gold-12">Next.js</li>
          <li className="text-lg text-gold-12">Typescript</li>
          <li className="text-lg text-gold-12">TailwindCSS</li>
          <li className="text-lg text-gold-12">Framer motion</li>
          <li className="text-lg text-gold-12">Prisma ORM</li>
        </ul>
      </section>
      <section className="flex flex-col justify-center items-center gap-5 md:flex-row md:gap-10">
        <Heading text="Get a copy of my resume." weight="medium" />
        <ArrowRightIcon className="text-gold-11 w-7 h-7 rotate-90 md:rotate-0" />
        <Button size="large">Download resume</Button>
      </section>
    </Container>
  );
}

export default Home;
