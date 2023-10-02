import { useMemo } from "react";

const Header1 = ({ propLeft }) => {
  const logoStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="absolute top-[0px] left-[0px] w-[1280px] h-[62px] text-left text-xs text-white1 font-inter">
      <div className="absolute top-[0px] left-[0px] w-[1280px] h-[62px]">
        <div className="absolute top-[0px] left-[0px] bg-midnightblue w-[1280px] h-[62px]" />
        <div className="absolute top-[0px] left-[804px] bg-whitesmoke w-20 h-[62px]" />
        <div className="absolute top-[11px] left-[669px] w-[28.39px] h-[25px] mix-blend-normal" />
        <img
          className="absolute top-[9px] left-[1065px] rounded-31xl w-[30px] h-[30px] object-cover"
          alt=""
          src="/image-6@2x.png"
        />
        <b className="absolute top-[41px] left-[1060px]">Profile</b>
        <b className="absolute top-[41px] left-[987px]">Help</b>
        <b className="absolute top-[41px] left-[905px]">Notifs</b>
        <b className="absolute top-[40px] left-[748px]">Events</b>
        <b className="absolute top-[41px] left-[830px] text-darkslategray-100">
          Jobs
        </b>
        <img
          className="absolute top-[11px] left-[988px] w-[25px] h-[25px] object-cover"
          alt=""
          src="/questioncirclefill-2@2x.png"
        />
        <img
          className="absolute top-[11px] left-[755px] w-[28.39px] h-[25px] object-cover"
          alt=""
          src="/newspaper-3@2x.png"
        />
      </div>
      <img
        className="absolute top-[11px] left-[912px] w-[22.01px] h-[25px] object-cover"
        alt=""
        src="/bellfill-4@2x.png"
      />
      <img
        className="absolute top-[11px] left-[829px] w-[30.45px] h-[25px] object-cover"
        alt=""
        src="/briefcasefilldark-2@2x.png"
      />
      <div
        className="absolute top-[9px] left-[163px] w-[130px] h-[42px] flex flex-row items-center justify-start gap-[18px] text-5xl text-white"
        style={logoStyle}
      >
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

export default Header1;
