import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, DownloadIcon } from "@radix-ui/react-icons";
import { blackA } from "@radix-ui/colors";
import { styled } from "@config/stitches.config";
import Button from "@components/Button";
import Text from "@components/Text";
import IconButton from "@components/IconButton";
import Flex from "@components/Flex";

const Div = styled("div", {});

const Trigger = () => {
  return (
    <Dialog.Trigger asChild>
      <Button css={{ flexShrink: 0, "& svg": { marginRight: 8 } }}>
        <DownloadIcon /> Download CV
      </Button>
    </Dialog.Trigger>
  );
};

const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  zIndex: 9999,
  //animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const DialogContent = styled(Dialog.Content, {
  zIndex: 9999,
  backgroundColor: "$menu",
  color: "$text",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: 25,
  //animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  "&:focus": { outline: "none" },
});

const DownloadCV = () => {
  return (
    <Dialog.Root>
      <Trigger />
      <DialogOverlay />
      <DialogContent>
        <Flex css={{ justifyContent: "flex-end", marginBottom: 4 }}>
          <Dialog.Close asChild>
            <IconButton>
              <Cross2Icon />
            </IconButton>
          </Dialog.Close>
        </Flex>
        <Div css={{ marginBottom: 16 }}>
          <Text heading css={{ fontSize: 24, marginBottom: 4 }}>
            Download Curriculum Vitae
          </Text>
          <Text secondary>Choose the language of your preference</Text>
        </Div>

        <Flex>
          <Button css={{ flex: 1, marginRight: 8 }}>English</Button>
          <Button css={{ flex: 1 }}>Spanish</Button>
        </Flex>
      </DialogContent>
    </Dialog.Root>
  );
};

export default DownloadCV;
