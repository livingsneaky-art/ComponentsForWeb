import MainHeader from "./MainHeader";

const Header3 = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1280px] h-[62px] text-left text-xs text-gray-500 font-inter">
      <MainHeader />
      <div className="absolute top-[7px] left-[169px] w-[130px] h-[42px] flex flex-row items-center justify-start gap-[18px] text-5xl text-white">
        <div className="relative w-[42px] h-[38.53px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-195xl w-[42px] h-[38.53px] object-cover"
            alt=""
            src="/image-12@2x.png"
          />
        </div>
        <div className="relative font-extrabold">ACES</div>
      </div>
    </div>
  );
};

export default Header3;
