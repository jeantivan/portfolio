import { useForm, Controller } from "react-hook-form";
import { styled } from "@config/stitches.config";
import Button from "@components/Button";
import Input from "@components/Input";
import { TContactFormValues } from "@src/types";

const Form = styled("form", {
  display: "grid",
  gridGap: "16px",
  gridTemplateAreas: `
    "name"
    "email"
    "message"
    "button"
  `,
  marginBottom: 64,

  "@md": {
    gridTemplateAreas: `
    "name email"
    "message message"
    "button button"
  `,
  },
});

const ContactForm = () => {
  const { control, handleSubmit } = useForm<TContactFormValues>();

  const onSubmit = (data: TContactFormValues) => console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="fullName"
        control={control}
        rules={{ required: true, minLength: 3 }}
        render={({ field }) => {
          console.log(field);
          return (
            <Input label="Full name" css={{ gridArea: "name" }} {...field} />
          );
        }}
      />

      <Controller
        name="email"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input label="Email" css={{ gridArea: "email" }} {...field} />
        )}
      />
      <Controller
        name="message"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <Input
            textarea
            label="Message"
            css={{ gridArea: "message", minHeight: 200 }}
            {...field}
          />
        )}
      />
      <Button type="submit" css={{ gridArea: "button" }}>
        Send message
      </Button>
    </Form>
  );
};

export default ContactForm;
