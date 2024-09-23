import Heading from "@/components/Heading";

import Container from "@/components/common/Container";
import Text from "@/components/common/Text";
import { getSiteSettings } from "@/src/sanity/queries";

import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Contact",
  description: "Let's connect and work together!"
};

type PageProps = {
  params: {
    locale: string;
  };
};
async function Contact({ params: { locale } }: PageProps) {
  const t = await getTranslations("ContactPage");

  const { authorEmail, github, linkedin } = await getSiteSettings();
  return (
    <Container className="my-8 md:my-16">
      <section className="">
        <Heading
          text={t("title")}
          Component="h1"
          variant="title"
          display
          className="uppercase mb-4 text-center"
        />

        <Text variant="body3" color="secondary" className="mb-6 text-center">
          {t("subtitle")}
        </Text>
        <Heading
          text={authorEmail}
          variant="title"
          className="mb-8 text-center"
        />
        <Text variant="body2" color="secondary" className="text-center">
          {t("social-cta.description")}{" "}
          <a className="text-primary-9 hover:underline" href={linkedin}>
            LinkedIn
          </a>{" "}
          {t("social-cta.or")}{" "}
          <a className="text-primary-9 hover:underline" href={github}>
            Github
          </a>
          {t("social-cta.end")}
        </Text>
      </section>
    </Container>
  );
}

export default Contact;
