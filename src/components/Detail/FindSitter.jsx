import NavBar from "../Main/NavBar";
import { useState, useEffect } from "react";
import FindSitter_sitter from "./FindSitter_sitter";
import FindSitter_Parent from "./FindSitter_Parent";
import Footer from "../Main/Footer";

const FindSitter = () => {
  const [divHeight, setDivHeight] = useState(600); // 초기 높이 설정

  const [selectedTab, setSelectedTab] = useState("babysitter");

  const handleBabysitterClick = () => {
    setSelectedTab("babysitter");
    // 베이비시터 버튼을 클릭했을 때 수행할 동작을 작성
  };

  const handleParentClick = () => {
    setSelectedTab("parent");
    // 부모 버튼을 클릭했을 때 수행할 동작을 작성
  };

  // 컴포넌트가 렌더링될 때마다 높이를 계산
  useEffect(() => {
    const contentHeight = document.getElementById("content").scrollHeight;
    setDivHeight(contentHeight);
  }, [selectedTab]); // selectedTab이 변경될 때마다 높이를 다시 계산

  return (
    <div>
      <NavBar />
      <div className="flex flex-col justify-center items-center min-h-screen mt-[2px]"> {/* marginTop 값 변경 */}
        <div className="bg-white rounded-3xl" style={{ width: "600px", minHeight: `${divHeight}px` }}>
          <div className="mt-10 ml-10">
            <p className="text-5C5C5C text-left font-Pretendard">
              이만큼 지원했어요!
            </p>
            <p className="text-left font-Pretendard text-2xl">
              내 주변 베이비시터/부모 찾기
            </p>
          </div>
          {/* 네비게이션 바 */}
          <div className="ml-10 mt-4 flex space-x-4">
            <button
              onClick={handleBabysitterClick}
              className={`bg-525151 text-FFD700 rounded-full font-Pretendard py-1 px-8 hover:bg-00473E transition duration-300 ${
                selectedTab === "babysitter" ? "bg-00694E" : ""
              }`}
            >
              베이비시터
            </button>

            <button
              onClick={handleParentClick}
              className={`bg-525151 text-FFD700 rounded-full font-Pretendard py-1 px-8 hover:bg-00473E transition duration-300 ${
                selectedTab === "parent" ? "bg-00694E" : ""
              }`}
            >
              부모
            </button>
          </div>
          {/* 선택한 탭에 따라 컴포넌트 조건부 렌더링 */}
          <div id="content">
            {selectedTab === "babysitter" && <FindSitter_sitter />}
            {selectedTab === "parent" && <FindSitter_Parent />}
            {/* 다른 탭들에 따른 컴포넌트 추가 가능 */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FindSitter;
