import { ImageZoom } from "fumadocs-ui/components/image-zoom";

export const Image = ({
  alt,
  height = 385,
  width = 752,
  src,
}: {
  alt: string;
  height?: number;
  width?: number;
  src: string;
}) => {
  return (
    <div>
      <ImageZoom src={src} height={height} width={width} alt={alt} />
    </div>
  );
};
