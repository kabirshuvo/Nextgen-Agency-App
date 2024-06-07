import Link from "next/link";
import { Button } from "../ui/button";

const Contact = () => {
  return (
    <section className="h-[40vh]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="h2 max-w-3xl text-center mb-8 xl:my-16">
            Tell me your <span className="text-primary">dream</span>s. <br /> We
            are transforming <span className="text-primary">ideas</span> into
            reality.
          </h2>
          <Link href="/contact">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
