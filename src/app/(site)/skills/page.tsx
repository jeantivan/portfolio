import Card from "@/src/components/common/Card";
import Container from "@/src/components/common/Container";
import Text from "@/src/components/common/Text";
import Heading from "@/src/components/Heading";
import { mc } from "@/src/utils/helpers";
import { ArrowDownIcon } from "@radix-ui/react-icons";

// Tecnologias favoritas que uso para construir experiencias

const TempBox = ({ small = false }: { small?: boolean }) => (
  <div
    className={mc(
      "w-28 h-28 rounded-lg bg-background-6",
      small && "w-[72px] h-[72px]"
    )}
  ></div>
);

async function Skills() {
  return (
    <Container className="px-3 py-6 lg:py-10 grid gap-16 md:gap-24">
      <div>
        <Heading
          text="Mi caja de herramientas."
          variant="title"
          className="text-center mb-4"
          display
        />
        <Heading
          variant="subheading"
          text="Tecnologías que potencian mis proyectos."
          className="text-center"
        />
      </div>
      <div className="grid grid-cols-12 grid-rows-6 gap-4">
        <Card className="p-6 grid gap-6 bg-background-2 col-start-1 col-end-9 row-start-1 row-end-3">
          <Text variant="subheading">Main stack</Text>
          <div className="flex w-full justify-around">
            <TempBox></TempBox>
            <TempBox></TempBox>
            <TempBox></TempBox>
            <TempBox></TempBox>
          </div>
        </Card>
        <Card className="p-6 grid gap-4 bg-background-2 col-start-9 col-end-13 row-start-1 row-end-4">
          <Text variant="body2">Fundations</Text>
          <div className="flex flex-wrap justify-center w-full gap-3">
            <TempBox></TempBox>
            <TempBox></TempBox>
            <TempBox></TempBox>
          </div>
        </Card>
        <Card className="p-6 grid gap-4 justify-center bg-background-2 col-start-1 col-end-6 row-start-3 row-end-5">
          <Text variant="body2">Styling</Text>
          <div className="flex justify-center w-full gap-3">
            <TempBox></TempBox>
            <TempBox></TempBox>
            <TempBox></TempBox>
          </div>
        </Card>

        <Card className="p-6 grid gap-4 justify-center bg-background-2 col-start-6 col-end-9 row-start-3 row-end-6">
          <Text variant="body2">Animation</Text>
          <div className="flex w-full flex-col justify-between">
            <TempBox></TempBox>
            <TempBox></TempBox>
          </div>
        </Card>
        <Card className="p-6 grid gap-4 bg-background-2 col-start-9 col-end-13 row-start-4 row-end-6">
          <Text variant="body2">Control Version</Text>
          <div className="flex w-full justify-between">
            <TempBox></TempBox>
            <TempBox></TempBox>
          </div>
        </Card>
        <Card className="p-6 flex items-end bg-background-2 col-start-1 col-end-6 row-start-5 row-end-6">
          <Text className="flex-1" variant="subheading" display>
            Mas herramientas
          </Text>
          <ArrowDownIcon className="w-12 h-12 text-primary-9" />
        </Card>
        <Card className="p-3 grid items-center bg-background-2 col-start-1 col-end-11 row-start-6 row-end-7">
          <div className="w-full flex justify-around">
            <TempBox small></TempBox>
            <TempBox small></TempBox>
            <TempBox small></TempBox>
            <TempBox small></TempBox>
            <TempBox small></TempBox>
            <TempBox small></TempBox>
            <TempBox small></TempBox>
            <TempBox small></TempBox>
          </div>
        </Card>
        <Card className="p-3 grid items-center justify-center col-start-11 col-end-13 row-start-6 row-end-7">
          <Text
            className="tracking-wide -mt-4"
            variant="heading"
            color="primary"
            display
          >
            ...
          </Text>
        </Card>
      </div>
    </Container>
  );
}

export default Skills;
