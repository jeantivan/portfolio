import Image from "next/image";

import { TSkill } from "@/utils/types";
import { urlForImage } from "@/sanity/utils";
import { mc } from "@/utils/helpers";
import Text from "./common/Text";
import { Tooltip } from "./common/Tooltip";

type Size = "large" | "big" | "medium" | "small";

type SkillProps = {
  skill: TSkill;
  showName?: boolean;
  size?: Size;
};

const sizes: Record<Size, string> = {
  large: "w-[112px]",
  big: "w-24",
  medium: "w-[88px]",
  small: "w-[66px] "
};

function Skill({ skill, showName = false, size = "medium" }: SkillProps) {
  const { name, image } = skill;

  const imageUrl = urlForImage(image)?.width(176).url() ?? "";

  const Wrapper = showName ? "div" : Tooltip;
  return (
    <Wrapper
      content={name}
      className="flex flex-col gap-4 items-center justify-center"
    >
      <div
        className={mc(
          "aspect-square p-2 rounded-lg bg-background-3/50 dark:bg-background-8/50 grid place-items-center",
          sizes[size],
          ""
        )}
      >
        <div className="w-full h-full relative">
          <Image
            alt={(image.alt as string) || `${name}`}
            src={imageUrl}
            fill
            className="rounded-xl object-contain"
          />
        </div>
      </div>
      {showName && <Text variant="body2">{name}</Text>}
    </Wrapper>
  );
}

export default Skill;
