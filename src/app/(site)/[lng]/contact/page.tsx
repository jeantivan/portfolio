import Heading from "@/components/Heading";

import Container from "@/components/common/Container";
import Text from "@/components/common/Text";
import { useTranslation } from "@/src/app/i18n";

export const metadata = {
  title: "Contact",
  description: "Let's connect and work together!"
};

type PageProps = {
  params: {
    lng: string;
  };
};
async function Contact({ params: { lng } }: PageProps) {
  const { t } = await useTranslation(lng, "contact");

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

        <Text variant="body2" color="secondary" className="mb-6 text-center">
          {t("subtitle")}
        </Text>
        <Heading
          text="jptivan52@gmail.com"
          variant="title"
          className="mb-8 text-center"
        />
        <Text variant="body2" color="secondary" className="text-center">
          {t("social-cta.description")}{" "}
          <a
            className="text-primary-9 hover:underline"
            href="https://www.linkedin.com/"
          >
            LinkedIn
          </a>{" "}
          {t("social-cta.or")}{" "}
          <a
            className="text-primary-9 hover:underline"
            href="https://github.com/"
          >
            Github
          </a>
          {t("social-cta.end")}
        </Text>
      </section>
    </Container>
  );
}

export default Contact;
