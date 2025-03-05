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
  width = 600,
  height = 300,
  className = ""
}) => (
  <div className={`absolute top-0 left-0 ${className}`}>
    <Image src={background || "/img/frame.png"} alt="Background" width={width} height={height} priority />
  </div>
);

export default BackgroundImage;