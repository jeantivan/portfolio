import type { ImageProps } from "next/image";
import Image from "next/image";
import { styled } from "@config/stitches.config";

const Root = styled("div", {
  width: "100%",
  position: "relative",
  height: 0,
  paddingTop: "75%",
  overflow: "hidden",
  borderRadius: 6,
});

const Wrapper = styled("div", {
  background: "$sand9",
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
});

const CoverImage = (props: ImageProps) => {
  return (
    <Root>
      <Wrapper>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image {...props} />
        </div>
      </Wrapper>
    </Root>
  );
};

export default CoverImage;
