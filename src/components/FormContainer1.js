const FormContainer1 = () => {
  return (
    <div className="absolute top-[470px] left-[456px] w-[408px] h-[120px] text-left text-sm text-black font-inter">
      <div className="absolute top-[94px] left-[149px] rounded-3xs bg-whitesmoke box-border w-[198px] h-[26px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[94px] left-[149px] rounded-3xs bg-darkgray-100 box-border w-[72px] h-[26px] border-[1px] border-solid border-gray-100" />
      <div className="absolute top-[99px] left-[152px] text-xs">
        Choose File
      </div>
      <b className="absolute top-[0px] left-[150px] inline-block text-gray-200 w-[258px] h-[86px]">
        <p className="[margin-block-start:0] [margin-block-end:13px]">
          Resume(1).docx
        </p>
        <p className="[margin-block-start:0] [margin-block-end:13px]">
          Resume(1).pdf
        </p>
        <p className="m-0">Portfolio.pdf</p>
      </b>
      <div className="absolute top-[6px] left-[0px]">
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          Select Files to
        </p>
        <p className="m-0">Include as Resume:</p>
      </div>
      <img
        className="absolute top-[0px] left-[299px] w-5 h-5 overflow-hidden"
        alt=""
        src="/eyefill-1.svg"
      />
      <img
        className="absolute top-[30px] left-[299px] w-5 h-5 overflow-hidden"
        alt=""
        src="/eyefill-1.svg"
      />
      <img
        className="absolute top-[59px] left-[299px] w-5 h-5 overflow-hidden"
        alt=""
        src="/eyefill-1.svg"
      />
      <img
        className="absolute top-[0px] left-[327px] w-5 h-[80.1px]"
        alt=""
        src="/vector.svg"
      />
    </div>
  );
};

export default FormContainer1;
