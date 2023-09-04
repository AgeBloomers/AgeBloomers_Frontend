import NavBar from "../Main/NavBar";
import { useState, useEffect } from "react";
import FindCare_carehelper from "./FindCare_carehelper";
import FindCare_old from "./FindCare_old";

const FindCareHelper = () => {
  const [divHeight, setDivHeight] = useState(600); // 초기 높이 설정

  const [selectedTab, setSelectedTab] = useState("carehelper");

  const handleAllClick = () => {
    setSelectedTab("carehelper");
    // 요양보호사 버튼을 클릭했을 때 수행할 동작을 작성
  };

  const handleCarehelperClick = () => {
    setSelectedTab("old");
    // 보호자/어르신 버튼을 클릭했을 때 수행할 동작을 작성
  };

  // 컴포넌트가 렌더링될 때마다 높이를 계산
  useEffect(() => {
    const contentHeight = document.getElementById("content").scrollHeight;
    setDivHeight(contentHeight);
  }, [selectedTab]); // selectedTab이 변경될 때마다 높이를 다시 계산

  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center min-h-screen mt-[2px]">
        {" "}
        {/* marginTop 값 변경 */}
        <div
          className="bg-white rounded-3xl"
          style={{ width: "600px", minHeight: `${divHeight}px` }}
        >
          <div className="mt-10 ml-10">
            <p className="text-5C5C5C text-left font-Pretendard">
              이만큼 지원했어요!
            </p>
            <p className="text-left font-Pretendard text-2xl">
              내 주변 요양보호사/어르신 찾기
            </p>
          </div>
          {/* 네비게이션 바 */}
          <div className="ml-10 mt-4 flex space-x-4">
            <button
              onClick={handleAllClick}
              className={`bg-525151 text-FFD700 rounded-full font-Pretendard py-1 px-8 hover:bg-00473E transition duration-300 ${
                selectedTab === "carehelper" ? "bg-00694E" : ""
              }`}
            >
              요양보호사
            </button>

            <button
              onClick={handleCarehelperClick}
              className={`bg-525151 text-FFD700 rounded-full font-Pretendard py-1 px-8 hover:bg-00473E transition duration-300 ${
                selectedTab === "old" ? "bg-00694E" : ""
              }`}
            >
              어르신
            </button>

          </div>
          {/* 선택한 탭에 따라 컴포넌트 조건부 렌더링 */}
          <div id="content">
            {selectedTab === "carehelper" && <FindCare_carehelper />}
            {selectedTab === "old" && <FindCare_old />}
            {/* 다른 탭들에 따른 컴포넌트 추가 가능 */}
          </div>
        </div>
      </div>

      <footer className="top-[140px] w-full min-h-[170wh] relative flex items-center justify-center bg-neutral-600">
        <div className="w-[390px] h-[363px] relative bg-neutral-600">
          <div className="w-[181px] h-[78px] left-[105px] top-[285px] absolute text-center text-yellow-400 text-[23px] font-extrabold">
            AgeBloomers
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FindCareHelper;
