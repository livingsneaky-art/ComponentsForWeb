import FAQContainer from "../components/FAQContainer";
import Header4 from "../components/Header4";

const HelpCompanyPage = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[720px] overflow-hidden">
      <img
        className="absolute top-[632px] left-[290px] rounded-3xs w-[700px] h-[538px]"
        alt=""
        src="/rectangle-205.svg"
      />
      <FAQContainer />
      <Header4 />
      <img
        className="absolute top-[11px] left-[988px] w-[25px] h-[25px] object-cover"
        alt=""
        src="/questioncirclefilldark-1@2x.png"
      />
    </div>
  );
};

export default HelpCompanyPage;
