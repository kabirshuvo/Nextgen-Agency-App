import Image from "next/image";

interface ImageProps {
  containerStyles?: string;
  imgSrc?: string;
}

const DevImage: React.FC<ImageProps> = ({ containerStyles = "", imgSrc }) => {
  const fallbackSrc = "/assets/hero/developer.png";

  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc || fallbackSrc} fill priority alt="Developer Image" />
    </div>
  );
};

export default DevImage;
