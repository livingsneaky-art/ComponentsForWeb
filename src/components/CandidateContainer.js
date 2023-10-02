import { useMemo } from "react";

const CandidateContainer = ({
  personName,
  addressText,
  degreeTitle,
  studentNumber,
  propTop,
}) => {
  const candidate1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[744px] left-[461px] w-[354px] h-40 text-left text-inherit text-gray-200 font-inter"
      style={candidate1Style}
    >
      <b className="absolute top-[0px] left-[68px] font-inherit">
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          {personName}
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">Male</p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          {addressText}
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          {degreeTitle}
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          {studentNumber}
        </p>
        <ul className="m-0 pl-[13px]">
          <li className="mb-0">Office Excel</li>
          <li className="mb-0">Technical Writing</li>
          <li className="mb-0">Communication</li>
          <li>Management</li>
        </ul>
      </b>
      <div className="absolute top-[99px] left-[232px] rounded-3xs bg-steelblue w-[122px] h-[35px]" />
      <b className="absolute top-[109px] left-[243px] text-xs text-white1">
        View Application
      </b>
      <div className="absolute top-[159.5px] left-[-0.5px] box-border w-[351px] h-px border-t-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[66px] left-[4px] text-3xs">
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          Yrs of Exp:
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">Skills</p>
      </div>
      <img
        className="absolute top-[0px] left-[4px] rounded-31xl w-[50px] h-[50px] object-cover"
        alt=""
        src="/job-shifuku-man-1@2x.png"
      />
    </div>
  );
};

export default CandidateContainer;
