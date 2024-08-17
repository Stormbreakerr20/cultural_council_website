import { MainCarousel } from "./MainCarousel";
function LandingSection() {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center text-white pt-12">
          <div>This is the Cultural Society, IIT Mandi</div>
          <h1 className="text-4xl font-medium">Where raw talent meets</h1>
          <h1 className="text-4xl mt-2 font-medium">global exposure</h1>
          <div>
            <MainCarousel/>
          </div>
        </div>
        <div className="flex mt-16">
          <div className="w-1/6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2c_FRV37DXM9XNUXC7lDY5jc_AxhvcwJBA&s"
              alt=""
              className="w-[200px] h-[200px] shadow-lg object-cover"
            />
          </div>
          <div className="w-1/6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDHgg-LVXh_A0RqYuiR07GhlvLJtZUwIgIpw&s"
              alt=""
              className="w-[200px] h-[200px] shadow-lg object-cover"
            />
          </div>
          <div className="w-1/6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2c_FRV37DXM9XNUXC7lDY5jc_AxhvcwJBA&s"
              alt=""
              className="w-[200px] h-[200px] shadow-lg object-cover"
            />
          </div>
          <div className="w-1/6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2c_FRV37DXM9XNUXC7lDY5jc_AxhvcwJBA&s"
              alt=""
              className="w-[200px] h-[200px] shadow-lg object-cover"
            />
          </div>
          <div className="w-1/6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2c_FRV37DXM9XNUXC7lDY5jc_AxhvcwJBA&s"
              alt=""
              className="w-[200px] h-[200px] shadow-lg object-cover"
            />
          </div>
          <div className="w-1/6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2c_FRV37DXM9XNUXC7lDY5jc_AxhvcwJBA&s"
              alt=""
              className="w-[200px] h-[200px] shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingSection;
