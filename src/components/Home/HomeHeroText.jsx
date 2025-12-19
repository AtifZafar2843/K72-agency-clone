import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="text-white text-[8.2rem] uppercase font-[Lausanne] leading-30 pt-3">
      <div className="text-center">The spark for</div>
      <div className="flex items-center justify-center">
        all
        <div className="h-26 w-58 object-cover rounded-full overflow-hidden ml-2">
          <Video />
        </div>
        things
      </div>
      <div className="text-center">creative</div>
    </div>
  );
};

export default HomeHeroText;
