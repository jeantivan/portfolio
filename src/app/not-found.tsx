import Container from "@components/common/Container";
import Text from "@components/common/Text";
import React from "react";

function NotFound() {
  return (
    <Container className="grid place-items-center h-full">
      <Text variant="heading">Error 404: NotFound</Text>
    </Container>
  );
}

export default NotFound;
