import { MainCarousel } from "./MainCarousel";
function LandingSection() {
  return (
    <>
      <div className="flex h-full w-full justify-center items-center">
        <div className="flex flex-col items-center text-white pt-12">
          <div>This is the Cultural Society, IIT Mandi</div>
          <h1 className="text-4xl max-sm:text-3xl font-medium">
            Where raw talent meets
          </h1>
          <h1 className="text-4xl max-sm:text-3xl mt-2 font-medium">
            global exposure
          </h1>
          <div>
            <MainCarousel />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingSection;
