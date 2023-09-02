import NavBar from "../Main/NavBar";

const Form_carehelper = () => {
  const divStyle = {
    width: "600px",
    height: "600px",
  };

  const FS = () => {
    window.location.href = "/CareApplySelect/Form_sitter";
  };

  const FC = () => {
    window.location.href = "/CareApplySelect/Form_carehelper";
  };

  const AL = () => {
    window.location.href = "/CareApplySelect/Applylist";
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen mt-[-200px]">
        <div className="bg-white rounded-3xl" style={divStyle}>
          <div className="mt-10 ml-10">
            <p className="text-5C5C5C text-left font-Pretendard">
              모든 신청은 이곳에서,
            </p>
            <p className="text-left font-Pretendard text-2xl">케어 지원하기</p>
          </div>
          <div>
            {/* 베이비시터/부모 신청서 작성 버튼 */}
            <button
              onClick={FS}
              className="bg-FF6B6B text-white rounded-3xl font-Pretendard text-xl py-20 px-[30px] hover:bg-00694E transition duration-300 mt-10"
              style={{ whiteSpace: "normal" }}
            >
              베이비시터/부모
              <br></br>
              지원하기
            </button>

            {/* 어르신/요양보호사 신청서 작성 버튼 */}
            <button
              onClick={FC}
              className="bg-9ACD32 text-white rounded-3xl font-Pretendard text-xl py-20 px-[30px] hover:bg-00694E transition duration-300 mt-4 ml-6"
            >
              어르신/요양보호사
              <br></br>
              지원하기
            </button>
            <div className="flex mt-4">
              <button onClick={AL} className="bg-FAAE2B text-white rounded-3xl font-Pretendard text-xl mt-[5px] py-20 px-[155px] hover:bg-00694E transition duration-300 mt-4 ml-[90px]">
                나의 지원현황
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="top-[140px] w-full min-h-[170wh] relative flex items-center justify-center bg-neutral-600 ">
        <div className="w-[390px] h-[363px] relative bg-neutral-600">
          <div className="w-[181px] h-[78px] left-[105px] top-[285px] absolute text-center text-yellow-400 text-[23px] font-extrabold">
            AgeBloomers
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Form_carehelper;
