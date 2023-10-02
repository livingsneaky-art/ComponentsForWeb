import Header7 from "../components/Header7";
import FAQContainer from "../components/FAQContainer";

const HelpAlumniPage = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[720px] overflow-hidden text-left text-5xl text-white font-inter">
      <Header7 />
      <img
        className="absolute top-[632px] left-[290px] rounded-3xs w-[700px] h-[538px]"
        alt=""
        src="/rectangle-205.svg"
      />
      <FAQContainer />
      <img
        className="absolute top-[11px] left-[988px] w-[25px] h-[25px] object-cover"
        alt=""
        src="/questioncirclefilldark-1@2x.png"
      />
      <img
        className="absolute top-[11px] left-[751px] w-[28.39px] h-[25px] object-cover"
        alt=""
        src="/newspaper-3@2x.png"
      />
      <div className="absolute top-[9px] left-[193px] w-[130px] h-[42px] flex flex-row items-center justify-start gap-[18px]">
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

export default HelpAlumniPage;
