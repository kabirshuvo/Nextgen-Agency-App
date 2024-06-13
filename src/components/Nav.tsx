import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import AuthButton from "./AuthButton";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "projects" },
  { path: "/contact", name: "contact" },
];

interface NavProps {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
}

const Nav: React.FC<NavProps> = ({
  containerStyles,
  linkStyles,
  underlineStyles,
}) => {
  const path = usePathname();

  return (
    <div className={containerStyles}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`capitalize ${linkStyles}`}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ type: "tween" }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))}
      <AuthButton />
    </div>
  );
};

export default Nav;
