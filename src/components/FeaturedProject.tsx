import Image from "next/image";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import Card from "./common/Card";
import Text from "./common/Text";
import IconButton from "./common/IconButton";
import Button from "./common/Button";

// Imagen de ejemplo
import chat_me from "@/assets/images/chat-me.jpg";
import Link from "next/link";

const SetAside = () => (
  <>
    <Image
      alt="Imagen de prueba"
      src={chat_me}
      className="absolute inset-0 pointer-events-none z-10"
    />
    <main className="z-20 absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-neutral-950 from-5% via-35% via-neutral-950/20 group-hover:via-neutral-950/60 group-hover:via-80%">
      <Text variant="body2" weight="medium">
        Example project name.
      </Text>
      <Text
        variant="subtitle"
        color="secondary"
        className="line-clamp-2 mt-3 hidden group-hover:block"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus quod
        ab dolores nulla, sapiente quam.
      </Text>
      <div className="w-full justify-between hidden group-hover:flex mt-3">
        <IconButton
          label="Link to project source code"
          icon={GitHubLogoIcon}
          variant="outlined"
          color="secondary"
          size="small"
          as="a"
        />
        <Button color="primary" variant="outlined" size="small">
          View more
        </Button>
      </div>
    </main>
  </>
);

type FeaturedProjectProps = {};
function FeaturedProject(props: FeaturedProjectProps) {
  return (
    <Card
      as="article"
      className="relative border border-primary-7 aspect-video"
    >
      <Link href="#">
        <div className="w-full bg-gray-400 absolute inset-0 overflow-hidden rounded">
          <Image alt="Imagen de prueba" fill src={chat_me} />
        </div>
        <header className="absolute inset-0 flex items-end py-2 px-4 bg-gradient-to-t from-neutral-950/70 from-5% via-neutral-950/10 via-15%">
          <div className="flex items-center gap-2">
            <span className="w-4 h-1 rounded-full bg-primary-9" />
            <Text variant="body2">Example project name.</Text>
          </div>
        </header>
      </Link>
    </Card>
  );
}

export default FeaturedProject;
