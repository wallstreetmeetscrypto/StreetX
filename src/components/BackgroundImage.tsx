import Image from "next/image";
import { FC } from "react";


interface BackgroundImageProps {
  background?: string;
  width?: number;
  height?: number;
  className?: string;
}

const BackgroundImage: FC<BackgroundImageProps> = ({
  background = "",
  width = 100,
  height = 100,
  className = ""
}) => (
  <div className={`absolute top-0 right-0 bottom-0 ${className}`}>
    <Image src={background || ""} alt="Background" width={width} height={height} priority />
  </div>
);

export default BackgroundImage;