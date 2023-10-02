import { useMemo } from "react";

const ContactForm = ({
  dimensionLabel,
  dimensionValue,
  dimensionCode,
  propTop,
}) => {
  const footerStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[857px] left-[0px] w-[1293px] h-[411px] text-left text-xs text-black font-roboto"
      style={footerStyle}
    >
      <div className="absolute top-[331px] left-[0px] bg-mediumseagreen-200 w-[1293px] h-20" />
      <div className="absolute top-[0px] left-[0px] bg-mediumaquamarine-100 w-[1293px] h-[331px]" />
      <b className="absolute top-[144px] left-[931px] inline-block w-[78px] h-3">
        123-456-789
      </b>
      <b className="absolute top-[91px] left-[931px] text-17xl">Contact Us</b>
      <b className="absolute top-[144px] left-[931px] inline-block w-[78px] h-3">
        123-456-789
      </b>
      <img
        className="absolute top-[144px] left-[912px] w-4 h-[13px] overflow-hidden opacity-[0.75]"
        alt=""
        src="/phonesolid-1-2.svg"
      />
      <b className="absolute top-[169px] left-[931px] inline-block w-[78px] h-3">
        123-456-789
      </b>
      <b className="absolute top-[169px] left-[931px] inline-block w-[78px] h-3">
        123-456-789
      </b>
      <img
        className="absolute top-[169px] left-[912px] w-4 h-[13px] overflow-hidden opacity-[0.75]"
        alt=""
        src="/phonesolid-1-2.svg"
      />
      <b className="absolute top-[199px] left-[931px] inline-block w-[78px] h-3">
        123-456-789
      </b>
      <b className="absolute top-[199px] left-[931px] inline-block w-[78px] h-3">
        123-456-789
      </b>
      <img
        className="absolute top-[199px] left-[912px] w-4 h-[13px] overflow-hidden opacity-[0.75]"
        alt=""
        src="/phonesolid-1-2.svg"
      />
      <b className="absolute top-[225px] left-[931px] inline-block w-[78px] h-3">
        123-456-789
      </b>
      <b className="absolute top-[225px] left-[931px] inline-block w-[78px] h-3">
        123-456-789
      </b>
      <img
        className="absolute top-[225px] left-[912px] w-4 h-[13px] overflow-hidden opacity-[0.75]"
        alt=""
        src="/phonesolid-1-2.svg"
      />
      <b className="absolute top-[144px] left-[931px] inline-block w-[78px] h-3">
        123-456-789
      </b>
      <b className="absolute top-[144px] left-[931px] inline-block w-[78px] h-3">
        123-456-789
      </b>
      <img
        className="absolute top-[144px] left-[912px] w-4 h-[13px] overflow-hidden opacity-[0.75]"
        alt=""
        src="/phonesolid-1-2.svg"
      />
      <div className="absolute top-[134px] left-[1032px] bg-mediumaquamarine-200 w-28 h-[34px]" />
      <a
        className="absolute top-[145px] left-[1064px] text-3xs [text-decoration:underline] font-bold text-[inherit]"
        href="mailto:mon@usc.edu.ph"
        target="_blank"
      >
        mon@usc.edu.ph
      </a>
      <img
        className="absolute top-[138px] left-[1037px] w-[27px] h-[26px] overflow-hidden"
        alt=""
        src="/phonesolid-1-25.svg"
      />
      <div className="absolute top-[213px] left-[1032px] bg-mediumaquamarine-200 w-28 h-[34px]" />
      <a
        className="absolute top-[224px] left-[1064px] text-3xs [text-decoration:underline] font-bold text-[inherit]"
        href="mailto:mon@usc.edu.ph"
        target="_blank"
      >
        mon@usc.edu.ph
      </a>
      <img
        className="absolute top-[217px] left-[1037px] w-[27px] h-[26px] overflow-hidden"
        alt=""
        src="/phonesolid-1-25.svg"
      />
      <div className="absolute top-[158px] left-[1032px] bg-mediumaquamarine-200 w-28 h-[34px]" />
      <a
        className="absolute top-[169px] left-[1064px] text-3xs [text-decoration:underline] font-bold text-[inherit]"
        href="mailto:mon@usc.edu.ph"
        target="_blank"
      >
        mon@usc.edu.ph
      </a>
      <img
        className="absolute top-[162px] left-[1037px] w-[27px] h-[26px] overflow-hidden"
        alt=""
        src="/phonesolid-1-25.svg"
      />
      <div className="absolute top-[189px] left-[1032px] bg-mediumaquamarine-200 w-28 h-[34px]" />
      <a
        className="absolute top-[200px] left-[1064px] text-3xs [text-decoration:underline] font-bold text-[inherit]"
        href="mailto:mon@usc.edu.ph"
        target="_blank"
      >
        mon@usc.edu.ph
      </a>
      <img
        className="absolute top-[193px] left-[1037px] w-[27px] h-[26px] overflow-hidden"
        alt=""
        src="/phonesolid-1-25.svg"
      />
      <b className="absolute top-[85px] left-[677px] text-17xl">Cares</b>
      <div className="absolute top-[138px] left-[677px] bg-mediumaquamarine-200 w-[119px] h-[33px]" />
      <b className="absolute top-[148px] left-[714px] inline-block w-[37px] h-3">
        HOME
      </b>
      <img
        className="absolute top-[148px] left-[690px] w-[17px] h-[15px] overflow-hidden"
        alt=""
        src={dimensionLabel}
      />
      <div className="absolute top-[171px] left-[677px] bg-mediumaquamarine-200 w-[119px] h-[33px]" />
      <div className="absolute top-[171px] left-[704px] flex flex-row items-start justify-start p-2.5">
        <b className="relative">ABOUT US</b>
      </div>
      <img
        className="absolute top-[181px] left-[690px] w-[17px] h-[15px] overflow-hidden"
        alt=""
        src={dimensionValue}
      />
      <div className="absolute top-[204px] left-[677px] bg-gainsboro w-[119px] h-[33px] hidden" />
      <div className="absolute top-[204px] left-[704px] flex flex-row items-start justify-start p-2.5">
        <b className="relative">LOGIN</b>
      </div>
      <img
        className="absolute top-[214px] left-[690px] w-[17px] h-[15px] overflow-hidden"
        alt=""
        src={dimensionCode}
      />
      <div className="absolute top-[77px] left-[124px] rounded-56xl bg-white1 w-[188px] h-[69px]" />
      <img
        className="absolute top-[85px] left-[138px] rounded-51xl w-[65px] h-[53px] object-cover"
        alt=""
        src="/334907105-529316682689690-7193717349981916223-n-6@2x.png"
      />
      <b className="absolute top-[102px] left-[213px] text-5xl inline-block [background:linear-gradient(180deg,_#79c16e,_rgba(126,_199,_100,_0.94)_5.73%,_#1dc776_5.74%,_rgba(180,_254,_2,_0.35)_65.32%,_rgba(255,_254,_2,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] w-[76px] h-[27px]">
        CARES
      </b>
      <div className="absolute top-[153px] left-[124px] bg-mediumaquamarine-200 w-[327px] h-[59px]" />
      <div className="absolute top-[163px] left-[138px] text-mini font-medium">
        <p className="m-0">University of San Carlos - Talamban Campus</p>
        <p className="m-0">Nasipit, Cebu City 6000</p>
      </div>
      <div className="absolute top-[348px] left-[19px] bg-mediumseagreen-200 w-[376px] h-[46px]" />
      <img
        className="absolute top-[357px] left-[44px] w-[33px] h-[30px] overflow-hidden"
        alt=""
        src="/copyrightregular-1.svg"
      />
      <div className="absolute top-[368px] left-[124px] font-medium">
        Copyright 2023 CARES. All Rights Reserved
      </div>
    </div>
  );
};

export default ContactForm;
