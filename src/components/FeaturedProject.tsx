import Image from "next/image";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import Card from "./common/Card";
import Text from "./common/Text";
import IconButton from "./common/IconButton";
import Button from "./common/Button";

// Imagen de ejemplo
import chat_me from "@assets/images/chat-me.png";

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
    <Card as="article" className="overflow-hidden relative z-0">
      <main className="flex flex-wrap">
        <div className="w-full max-w-[410px] max-h-[230px] aspect-video bg-gray-400">
          <Image
            alt="Imagen de prueba"
            width={410}
            height={230}
            style={{ objectFit: "contain" }}
            src={chat_me}
          />
        </div>
        <div className="flex-1 flex flex-col p-4">
          <header className="mb-2 md:mb-4">
            <Text variant="subheading" weight="medium">
              Example project name.
            </Text>
          </header>
          <Text
            color="secondary"
            className="mb-6 line-clamp-2 md:line-clamp-none"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            quod ab dolores nulla, sapiente quam.
          </Text>
          <div className="w-full justify-between flex mt-auto">
            <div className="flex gap-4">
              <IconButton
                label="Link to project source code"
                icon={GitHubLogoIcon}
                variant="outlined"
                color="secondary"
                size="small"
              />
              <IconButton
                label="Link to project source code"
                icon={ExternalLinkIcon}
                variant="outlined"
                color="secondary"
                size="small"
              />
            </div>
            <Button color="primary" variant="outlined" size="small">
              View more
            </Button>
          </div>
        </div>
      </main>
    </Card>
  );
}

export default FeaturedProject;
