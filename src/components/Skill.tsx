import Card from "./common/Card";
import Image from "next/image";

import { TSkill } from "@/utils/types";
import Text from "./common/Text";
import { urlForImage } from "../sanity/utils";

type SkillProps = {
  skill: TSkill;
  showName: boolean;
};

function Skill({ skill, showName = false }: SkillProps) {
  const { name, image } = skill;

  const imageUrl = urlForImage(image)?.width(256).url() ?? "";
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="w-28 md:w-32 aspect-square relative">
        <Image
          alt={(image.alt as string) || `${name}`}
          src={imageUrl}
          fill
          className="rounded-xl object-contain"
        />
      </div>
      {showName && <Text variant="body2">{name}</Text>}
    </div>
  );
}

export default Skill;
