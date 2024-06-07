import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-primary/20 py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyles="flex gap-x-6 max-auto xl:mx-0 mb-4"
            iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
          />
          <div className="text-muted-foreground">
            Copyright &copy; Promotopea. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
