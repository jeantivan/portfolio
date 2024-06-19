import Card from "./common/Card";

import { TSkill } from "@/utils/types";
import Text from "./common/Text";

type SkillProps = {
  skill: TSkill;
  showName: boolean;
};

function Skill({ skill, showName = false }: SkillProps) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="w-28 md:w-32 aspect-square rounded-full bg-background-10"></div>
      {showName && <Text variant="body2">{skill.name}</Text>}
    </div>
  );
}

export default Skill;
