import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link className="flex justify-center items-center gap-4" href="/">
      <Image
        src="/assets/images/logo.svg"
        width={32}
        height={32}
        priority
        alt="Promotopea Logo"
      />
      Promotopea
    </Link>
  );
};

export default Logo;
