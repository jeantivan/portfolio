import Image, { ImageProps } from "next/image";
import Card from "./common/Card";
import Text from "./common/Text";

type ProjectImageProps = ImageProps;
function ProjectImage({ alt, ...rest }: ProjectImageProps) {
  return (
    <div>
      <Card className="w-full aspect-video mb-2">
        <Image {...rest} alt={alt} />
      </Card>
      <Text variant="subtitle" color="secondary" className="pl-2">
        {alt}
      </Text>
    </div>
  );
}

export default ProjectImage;
