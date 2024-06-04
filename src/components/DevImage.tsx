import Image from "next/image";
import { RiMedal2LineIcon } from "./Badges/BadgeIcons";

interface ImageProps {
  containerStyles?: string;
  imgSrc?: string;
}

const DevImage: React.FC<ImageProps> = ({ containerStyles = "", imgSrc }) => {
  const fallbackSrc = "/backdropLines.svg";

  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc || fallbackSrc} fill priority alt="Developer Image" />
    </div>
  );
};

export default DevImage;
