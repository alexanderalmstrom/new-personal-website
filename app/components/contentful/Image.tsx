import Image, { ImageProps } from "next/image";

export interface ContentfulImageProps extends ImageProps {}

export default function ContentfulImage({
  src,
  ...props
}: ContentfulImageProps) {
  return <Image src={`https:${src}`} {...props} />;
}
