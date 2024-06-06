import DevImage from "@/components/DevImage";

const ProjectPage = () => {
  return (
    <section className="relative py-20 bg-gray-800 h-screen flex flex-col justify-center items-center">
      <div className="absolute top-0 right-0 w-full h-full flex justify-center items-center">
        <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[600px] h-[600px] bg-no-repeat">
          <DevImage
            containerStyles="bg-hero_shape w-full h-full bg-no-repeat relative bg-bottom"
            imgSrc="/backdropLines.svg"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <h3 className="text-white text-3xl lg:text-5xl mt-12">
          What is going on
        </h3>
      </div>
    </section>
  );
};

export default ProjectPage;
