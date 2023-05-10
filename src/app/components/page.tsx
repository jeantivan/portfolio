import React from "react";
import { BookmarkIcon } from "@radix-ui/react-icons";

import Button from "@components/common/Button";
import IconButton from "@components/common/IconButton";
import Input from "@components/common/Input";
import Text from "@components/common/Text";
import Container from "@components/common/Container";
import Navbar from "@components/Navbar";

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
      <div className="mb-12">
        <Navbar />
      </div>
      <div className="my-12">
        <Container className="h-32 ">
          <div className="bg-gold-7 flex-1 h-full"></div>
        </Container>
      </div>
      <div className="w-11/12 mx-auto mb-12">
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
            <strong>Sub Heading:</strong> Other small projects.
          </Text>
        </div>
        <div className="mb-6 mx-3">
          <Text variant="subheading" color="primary" className="uppercase">
            <strong>Heading:</strong> Projects.
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
      </div>
      <div className="w-2/3 mx-auto mb-12">
        <Button size="small" className="mx-3">
          Small
        </Button>
        <Button size="medium" className="mx-3">
          Medium
        </Button>
        <Button size="large" className="mx-3">
          Large
        </Button>
      </div>
      <div className="w-2/3 mx-auto mb-12">
        <IconButton label="Label de ejemplo" size="small" className="mx-3">
          <BookmarkIcon />
        </IconButton>
        <IconButton label="Label de ejemplo" size="medium" className="mx-3">
          <BookmarkIcon />
        </IconButton>
        <IconButton label="Label de ejemplo" size="large" className="mx-3">
          <BookmarkIcon />
        </IconButton>
        <IconButton
          label="Label de ejemplo"
          size="medium"
          variant="outlined"
          color="secondary"
          className="mx-3"
        >
          <BookmarkIcon />
        </IconButton>
        <IconButton
          label="Label de ejemplo"
          size="medium"
          variant="outlined"
          color="primary"
          className="mx-3"
        >
          <BookmarkIcon />
        </IconButton>
        <IconButton
          label="Label de ejemplo"
          size="medium"
          color="secondary"
          className="mx-3"
        >
          <BookmarkIcon />
        </IconButton>
      </div>
      <div className="w-2/3 mx-auto flex mb-12">
        <div className="w-1/3 mx-3">
          <Input label="Full name" name="fullName" placeholder="John doe..." />
        </div>
        <div className="w-1/3 mx-3">
          <Input label="Full name" name="fullName" placeholder="John doe..." />
        </div>
        <div className="w-1/3 mx-3">
          <Input
            label="Full name"
            name="fullName"
            placeholder="John doe..."
            error={"Ups! Mensaje de error"}
          />
        </div>
      </div>
      <div className="w-2/3 mx-auto flex mb-12">
        <div className="h-52 mx-3 w-full">
          <Input
            label="Message"
            name="message"
            placeholder="Enter your message here...."
            textarea
          />
        </div>
      </div>
    </div>
  );
}

export default CommonComponents;
