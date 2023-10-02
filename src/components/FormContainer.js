const FormContainer = () => {
  return (
    <div className="absolute top-[82px] left-[165px] w-[585px] h-[445px] text-left text-base text-gray-200 font-inter">
      <img
        className="absolute top-[0px] left-[0px] rounded-3xs w-[585px] h-[445px]"
        alt=""
        src="/rectangle-64.svg"
      />
      <div className="absolute top-[20px] left-[129px] w-[419px] h-[355px]">
        <div className="absolute top-[313px] left-[0px] w-[400px] h-[42px] text-white1">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-darkslategray-200 w-[400px] h-[42px]" />
          <b className="absolute top-[11px] left-[151px] inline-block w-[107.54px]">{`EDIT PROFILE `}</b>
        </div>
        <div className="absolute top-[172px] left-[20px]">
          <p className="[margin-block-start:0] [margin-block-end:10px]">
            Contact Name
          </p>
          <p className="[margin-block-start:0] [margin-block-end:10px]">
            Contact No.
          </p>
          <p className="m-0">Contact Email</p>
        </div>
        <b className="absolute top-[172px] left-[161px] inline-block w-[258px]">
          <p className="[margin-block-start:0] [margin-block-end:10px]">
            John Stockton
          </p>
          <p className="[margin-block-start:0] [margin-block-end:10px]">
            09999999999
          </p>
          <p className="m-0">jstockton@spinneret.com</p>
        </b>
        <b className="absolute top-[135px] left-[19px] text-black">
          CONTACT PERSON INFORMATION
        </b>
        <div className="absolute top-[37px] left-[21px]">
          <p className="[margin-block-start:0] [margin-block-end:10px]">Name</p>
          <p className="[margin-block-start:0] [margin-block-end:10px]">
            Email
          </p>
        </div>
        <b className="absolute top-[37px] left-[163px]">
          <p className="[margin-block-start:0] [margin-block-end:10px]">
            Spinneret Inc.
          </p>
          <p className="m-0">support@spinneret.com</p>
        </b>
        <b className="absolute top-[0px] left-[21px] text-black">
          COMPANY INFORMATION
        </b>
      </div>
      <img
        className="absolute top-[49px] left-[30px] rounded-31xl w-[100px] h-[100px] object-cover"
        alt=""
        src="/untitledogzkmkhintransformed-1-copy-3@2x.png"
      />
    </div>
  );
};

export default FormContainer;
