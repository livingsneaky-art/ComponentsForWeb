const MainHeader = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1280px] h-[62px] text-left text-xs text-gray-500 font-inter">
      <div className="absolute top-[0px] left-[0px] bg-midnightblue w-[1280px] h-[62px]" />
      <img
        className="absolute top-[11px] left-[746px] w-[28.39px] h-[25px] object-cover opacity-[0.8]"
        alt=""
        src="/newspaper-1@2x.png"
      />
      <b className="absolute top-[42px] left-[1062px]">Profile</b>
      <b className="absolute top-[41px] left-[987px] text-white1 opacity-[0.8]">
        Help
      </b>
      <b className="absolute top-[41px] left-[740px] text-white1 opacity-[0.8]">
        Events
      </b>
      <img
        className="absolute top-[11px] left-[988px] w-[25px] h-[25px] object-cover opacity-[0.8]"
        alt=""
        src="/questioncirclefill-1@2x.png"
      />
      <img
        className="absolute top-[9px] left-[1066px] rounded-31xl w-[30px] h-[30px] object-cover"
        alt=""
        src="/untitledogzkmkhintransformed-1-copy-11@2x.png"
      />
      <b className="absolute top-[41px] left-[902px]">Notifs</b>
      <img
        className="absolute top-[11px] left-[909px] w-[21.43px] h-[25px] object-cover opacity-[0.8]"
        alt=""
        src="/bellfill-2@2x.png"
      />
      <div className="absolute top-[0px] left-[802px] bg-whitesmoke w-20 h-[62px]" />
      <b className="absolute top-[41px] left-[828px] text-darkslategray-100">
        Jobs
      </b>
      <img
        className="absolute top-[11px] left-[827px] w-[30.45px] h-[25px] object-cover"
        alt=""
        src="/briefcasefilldark-2@2x.png"
      />
    </div>
  );
};

export default MainHeader;
