"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiInstagramFill,
  RiTwitterXFill,
} from "react-icons/ri";

import Link from "next/link";

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const icons = [
  {
    path: "https://twitter.com/",
    name: <RiTwitterXFill />,
  },
  {
    path: "https://youtube.com/yourprofile",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://linkedin.com/in/yourprofile",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/yourprofile",
    name: <RiGithubFill />,
  },
  {
    path: "https://facebook.com/yourprofile",
    name: <RiFacebookBoxFill />,
  },
  {
    path: "https://instagram.com/yourprofile",
    name: <RiInstagramFill />,
  },
];

const Socials: React.FC<SocialProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link
          href={icon.path}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={`${iconStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
