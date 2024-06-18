import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const ContactPage = () => {
  return (
    <section>
      <div className="container ma-auto">
        <div className="grid md:grid-cols-2 pt-12 md:h-[480px] mb-6 md:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[3px] bg-primary"></span>
              Say Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let&apos;s Grow Together.</h1>
            <p className="subtitle max-w-[400px]">
              {" "}
              Get in touch with us today to discuss your project needs, ask
              questions, or request a quote. We&apos;re here to help you achieve
              your goals and bring your ideas to life. Fill out the form below,
              and our team will get back to you as soon as possible.
            </p>
          </div>
          <div className="hidden md:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text and form */}
        <div className="grid md:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>dreampromoter@gmail.com</div>
            </div>
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Bangladesh</div>
            </div>
            <div className="flex items-center gap-x-8 mb-16">
              <PhoneCall size={18} className="text-primary" />
              <div>+8801671927960</div>
            </div>
          </div>

          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
