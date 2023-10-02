import FormContainer from "../components/FormContainer";
import Header from "../components/Header";

const ProfilePageCompanyDefault = () => {
  return (
    <div className="relative bg-whitesmoke w-full h-[720px] overflow-hidden text-left text-base text-black font-inter">
      <FormContainer />
      <div className="absolute top-[47px] left-[1087px] w-[7.66px] h-[5px]" />
      <Header />
      <img
        className="absolute top-[298px] left-[771px] rounded-3xs w-[345px] h-[447px]"
        alt=""
        src="/rectangle-63.svg"
      />
      <b className="absolute top-[318px] left-[795px] inline-block w-[237px]">
        Your Postings
      </b>
      <div className="absolute top-[215.5px] left-[313.5px] box-border w-[401px] h-px border-t-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[375px] left-[795px] text-xs inline-block w-[119px]">
        <p className="[margin-block-start:0] [margin-block-end:5px]">Company</p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          Location
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          Years of Exp
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">Salary</p>
        <p className="m-0">Slots</p>
      </div>
      <b className="absolute top-[376px] left-[971px] text-xs inline-block text-right w-[123px]">
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          Spinneret Inc.
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          Cebu City
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          1 (Pref.)
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          ₱19,000.00
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">25</p>
        <p className="[margin-block-start:0] [margin-block-end:5px] text-dodgerblue-100">
          View details
        </p>
        <p className="m-0 text-tomato-100">Remove posting</p>
      </b>
      <b className="absolute top-[351px] left-[795px] text-sm inline-block text-gray-200 w-[286px]">
        Web Developer based in Cebu City
      </b>
      <div className="absolute top-[577px] left-[795px] text-xs inline-block w-[119px]">
        <p className="[margin-block-start:0] [margin-block-end:5px]">Company</p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          Location
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          Years of Exp
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">Salary</p>
        <p className="m-0">Slots</p>
      </div>
      <b className="absolute top-[578px] left-[971px] text-xs inline-block text-right w-[123px]">
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          Spinneret Inc.
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          Cebu City
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          4 (Pref.)
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          ₱21,000.00
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">25</p>
        <p className="[margin-block-start:0] [margin-block-end:5px] text-dodgerblue-100">
          View details
        </p>
        <p className="m-0 text-tomato-100">Remove posting</p>
      </b>
      <b className="absolute top-[553px] left-[795px] text-sm inline-block text-gray-200 w-[286px]">
        Web Developer based in Cebu City
      </b>
      <div className="absolute top-[82px] left-[770px] rounded-3xs bg-white1 box-border w-[345px] h-[199px] border-[1px] border-solid border-gainsboro" />
      <div className="absolute top-[139px] left-[794px] text-gray-200">
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          Location
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          Start Date
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          End Date
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          Days Until
        </p>
        <p className="m-0">Status</p>
      </div>
      <b className="absolute top-[102px] left-[794px] inline-block w-[237px]">
        Upcoming Job Fair
      </b>
      <b className="absolute top-[139px] left-[945px] text-gray-200">
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          USC Talamban
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          August 20, 2023
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          August 22, 2025
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          2 Months, 4 days
        </p>
        <p className="m-0 text-mediumseagreen-100">Registered</p>
      </b>
      <div className="absolute top-[10px] left-[165px] w-[130px] h-[42px] flex flex-row items-center justify-start gap-[18px] text-5xl text-white">
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

export default ProfilePageCompanyDefault;
