import {
  BookmarkIcon,
  MixerHorizontalIcon,
  ArchiveIcon,
} from "@radix-ui/react-icons";

import Button from "@/components/common/Button";
import IconButton from "@/components/common/IconButton";
import Input from "@/components/common/Input";
import Text from "@/components/common/Text";
import Container from "@/components/common/Container";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/common/DropdownMenu";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/common/Popover";
import { Tooltip } from "@/components/common/Tooltip";

export const metadata = {
  title: "Common components | JeanTivan.dev",
  description: "Collection of common components used in this project.",
};

function CommonComponents() {
  return (
    <div>
      <h1 className="text-primary-9 text-4xl text-center mb-12">
        Common Components
      </h1>
      <div className="my-12">
        <Container className="h-32 ">
          <div className="bg-gold-7 flex-1 h-full"></div>
        </Container>
      </div>
      <Container className="mb-12">
        <div className="mb-6 mx-3">
          <Text variant="main">
            <strong>Main:</strong> Jean Tivan
          </Text>
        </div>
        <div className="mb-6 mx-3">
          <Text variant="title">
            <strong>Title:</strong> The projects I&apos;ve built.
          </Text>
        </div>
        <div className="mb-6 mx-3">
          <Text variant="heading">
            <strong>Heading:</strong> Other small projects.
          </Text>
        </div>
        <div className="mb-6 mx-3">
          <Text variant="subheading" color="primary" className="uppercase">
            <strong>SubHeading:</strong> Projects.
          </Text>
        </div>
        <div className="mb-6 mx-3">
          <Text variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            laudantium qui eveniet aliquam cum, sunt cupiditate fugit maiores
            doloremque voluptates!
          </Text>
        </div>
        <div className="mb-6 mx-3">
          <Text variant="body2">
            <strong>Body 2:</strong> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptas laudantium qui eveniet aliquam cum, sunt
            cupiditate fugit maiores doloremque voluptates!
          </Text>
        </div>
      </Container>
      <Container className="flex gap-3 items-center mb-12">
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
        <Button
          as="a"
          size="small"
          href="https://es.react.dev/learn"
          variant="text"
        >
          As Link
        </Button>
        <Button
          as="a"
          size="medium"
          href="https://es.react.dev/learn"
          variant="text"
        >
          As Link
        </Button>
        <Button
          as="a"
          size="large"
          href="https://es.react.dev/learn"
          variant="text"
        >
          As Link
        </Button>
      </Container>
      <Container className="flex gap-3 items-center mb-12">
        <IconButton label="Label de ejemplo" size="small" icon={BookmarkIcon} />
        <IconButton
          label="Label de ejemplo"
          size="medium"
          icon={BookmarkIcon}
        />
        <IconButton label="Label de ejemplo" size="large" icon={BookmarkIcon} />
        <IconButton
          label="Label de ejemplo"
          icon={BookmarkIcon}
          size="small"
          variant="outlined"
          color="secondary"
        />
        <IconButton
          label="Label de ejemplo"
          icon={BookmarkIcon}
          size="medium"
          variant="outlined"
          color="secondary"
        />
        <IconButton
          label="Label de ejemplo"
          icon={BookmarkIcon}
          size="large"
          variant="outlined"
          color="secondary"
        />
        <IconButton
          label="Label de ejemplo"
          icon={BookmarkIcon}
          size="small"
          color="primary"
        />
        <IconButton
          label="Label de ejemplo"
          icon={BookmarkIcon}
          size="medium"
          color="primary"
        />
        <IconButton
          label="Label de ejemplo"
          icon={BookmarkIcon}
          size="large"
          color="primary"
        />
      </Container>
      <Container className="mb-12 flex flex-wrap gap-3">
        <div className="flex-auto w-1/3">
          <Input label="Full name" name="fullName" placeholder="John doe..." />
        </div>
        <div className="flex-auto w-1/3">
          <Input label="Full name" name="fullName" placeholder="John doe..." />
        </div>
        <div className="flex-auto w-1/3">
          <Input
            label="Full name"
            name="fullName"
            placeholder="John doe..."
            error={"Ups! Mensaje de error"}
          />
        </div>
      </Container>
      <Container className="mb-12">
        <div className="w-full">
          <Input
            label="Message"
            name="message"
            placeholder="Enter your message here...."
            textarea
          />
        </div>
      </Container>
      <Container className="flex justify-center gap-8 mx-auto mb-12">
        <div>
          <Text className="mb-3">Dropdown Menu</Text>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <IconButton
                variant="outlined"
                label="Abrir menu"
                icon={MixerHorizontalIcon}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Menu Item</DropdownMenuItem>
              <DropdownMenuItem>Menu Item</DropdownMenuItem>
              <DropdownMenuItem>Menu Item</DropdownMenuItem>
              <DropdownMenuItem>Menu Item</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <Text className="mb-3">Popover</Text>
          <Popover>
            <PopoverTrigger asChild>
              <IconButton
                label="Abrir popover"
                color="primary"
                variant="outlined"
                icon={ArchiveIcon}
              />
            </PopoverTrigger>
            <PopoverContent className="p-2">
              <Input
                label="Search term"
                name="search"
                placeholder="search..."
              />
            </PopoverContent>
          </Popover>
        </div>
        <div>
          <Text>Tooltip</Text>
          <Text variant="body2" color="primary">
            Show tooltip <Tooltip content="Hi I'm a tooltip!">here!</Tooltip>
          </Text>
        </div>
      </Container>
    </div>
  );
}

export default CommonComponents;
