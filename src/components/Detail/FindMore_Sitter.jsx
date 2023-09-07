// import { data } from "autoprefixer";
import { data } from "autoprefixer";
import { useState, useEffect } from "react";

const FindMore_Sitter = async ({ onClose, selectedCard }) => {
  // const handleDetailClick = async () => {
    if (selectedCard !== null) {
      try {
<<<<<<< HEAD
        const apiUrl = "http://43.201.76.22:8080/api/babysitters/details/" + "Babysitters/" + selectedCard;
=======
        const apiUrl = "http://43.201.76.22:8080/api/babysitters/details/" + "babysitters/" + selectedCard;
>>>>>>> yeji

        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => response.json()).then((data) => {
          const newData = data;
          console.log(newData);
        }).catch((error) => {
          console.log(error);
        });

        if (!response.ok) {
          throw new Error("상세 정보 요청에 실패했습니다.");
        }

        // API로부터 상세 정보를 얻은 후, 원하는 동작 수행
        // 예시로 FindMore_Sitter 컴포넌트를 열어봅니다.
        // setSelectedCard(null); // 상세보기를 누르면 상세 정보를 보여주는 컴포넌트를 열고, 다시 목록으로 돌아오면 선택한 카드 초기화
      } catch (error) {
        console.error("상세 정보 요청 실패:", error);
      }
    }
  // };

  // 선택된 카드에 해당하는 데이터를 찾기
  // const selectedCardData = cardData.find((card) => card.id === selectedCard);

  // divStyle 초기화
  const [divStyle, setDivStyle] = useState({
    width: "600px",
  });

  // 모달 상태 초기화
  const [isModalOpen, setIsModalOpen] = useState(false);

  // divStyle의 height 값을 조절하는 useEffect
  useEffect(() => {
    // 컴포넌트 내용에 따라 높이를 동적으로 계산
    const contentHeight =
      document.getElementById("find-more-content").offsetHeight;
    setDivStyle((prevStyle) => ({
      ...prevStyle,
      height: `${contentHeight}px`,
    }));
  }, [selectedCard]);

  const handleFoldClick = () => {
    // "접기" 버튼 클릭 시 컴포넌트를 숨기도록 onClose 함수 호출
    onClose();
  };

  const handleApplyClick = () => {
    // "신청하기" 버튼 클릭 시 모달 열기
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    // 모달 닫기
    setIsModalOpen(false);
  };

  const handleConfirmApply = () => {
    // "신청하기" 모달에서 확인을 클릭했을 때 수행할 동작을 작성
    alert("신청 완료!");
    handleModalClose(); // 모달 닫기
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-3xl" style={divStyle}>
          {data && (
            <div
              key={data.id}
              className="p-4"
              id="find-more-content"
            >
              <div data="bg-gray-100 rounded-3xl p-4 flex items-center">
                <div>
                  <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {data.title}
                  </h2>
                  <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {data.area}
                  </h2>
                  <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {data.type}
                  </h2>
                  <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {data.age}
                  </h2>
                  <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {data.sex}
                  </h2>
                  <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {data.call}
                  </h2>
                  {/* <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {newData.day}
                  </h2>
                  <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {newData.time}
                  </h2>
                  <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {newData.comment}
                  </h2> */}
                  <p className="text-gray-500">{selectedCard.content}</p>
                </div>
                <div className="mt-[200px] ml-auto">
                  <div className="flex flex-col space-y-4">
                    <button
                      onClick={handleFoldClick}
                      className="bg-525151 text-FFD700 w-24 h-10 rounded-full hover:bg-00473E font-Pretendard"
                    >
                      접기
                    </button>
                    <button
                      onClick={handleApplyClick}
                      className="bg-525151 text-FFD700 w-24 h-10 rounded-full hover:bg-00473E font-Pretendard"
                    >
                      신청하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* "신청하기" 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-gray-600 bg-opacity-75 absolute inset-0"></div>
          <div className="relative z-10 bg-white rounded-lg overflow-hidden w-full max-w-md">
            <div className="p-4 sm:p-10 text-center">
              <h3 className="mb-2 text-2xl font-bold font-Pretendard text-gray-800">
                신청하기
              </h3>
              <p className="text-gray-500">신청하시겠습니까?</p>
              <div className="mt-6 flex justify-center gap-x-4">
                <button
                  onClick={handleConfirmApply}
                  type="button"
                  className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-525151 text-FFD700 font-Pretendard text-sm"
                  href="javascript:;"
                >
                  확인
                </button>
                <button
                  onClick={handleModalClose}
                  type="button"
                  className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-525151 text-FFD700 font-Pretendard text-sm"
                >
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindMore_Sitter;