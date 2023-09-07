import { useEffect, useState } from "react";
import NavBar from "../Main/NavBar";
import FindSitter_Sitter from "./FindSitter_Sitter";
import FindCareHelper from "./FindCareHelper";

const ButtonWrapper = ({ userData }) => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const dataProps = { userData };

  const divStyle = {
    width: "600px",
    marginTop: "200px",
    height: "600px",
  };

  useEffect(() => {
    // 이 부분에 필요한 효과 추가
  }, [selectedComponent]);

  return (
    <div>
      {selectedComponent === null && (
        <>
          <NavBar />
          <div className="flex justify-center items-center min-h-screen mt-[-200px]">
            <div className="bg-white rounded-3xl" style={divStyle}>
              <div className="mt-10 ml-10">
                <p className="text-5C5C5C text-left font-Pretendard">
                  지금 나의 주변에는?
                </p>
                <p className="text-left font-Pretendard text-2xl">
                  내 주변 케어 찾기
                </p>
              </div>
              <div>
                {/* 베이비시터/부모 신청서 작성 버튼 */}
                <button
                  onClick={() => setSelectedComponent("FindSitter_Sitter")}
                  className="bg-FF6B6B text-white rounded-3xl font-Pretendard text-xl py-36 px-[30px] hover:bg-00694E transition duration-300 mt-[60px]"
                  style={{ whiteSpace: "normal" }}
                >
                  베이비시터/부모
                  <br></br>
                  찾아보기
                </button>

                {/* 어르신/요양보호사 신청서 작성 버튼 */}
                <button
                  onClick={() => setSelectedComponent("findCareHelper")}
                  className="bg-9ACD32 text-white rounded-3xl font-Pretendard text-xl py-36 px-[30px] hover:bg-00694E transition duration-300 mt-4 ml-6"
                >
                  요양보호사/어르신
                  <br></br>
                  찾아보기
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* 조건부 렌더링 */}
      {selectedComponent === "FindSitter_Sitter" && (
        <FindSitter_Sitter dataProps={dataProps} />
      )}
      {selectedComponent === "findCareHelper" && (
        <FindCareHelper dataProps={dataProps} />
      )}
    </div>
  );
};

export default ButtonWrapper;
