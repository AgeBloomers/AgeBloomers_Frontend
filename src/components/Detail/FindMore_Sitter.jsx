import { useState, useEffect } from "react";

const FindMore_Sitter = ({ onClose, selectedCard }) => {
   // 카드 데이터 배열
   const [cardData, setCardData] = useState([]);

   // useEffect를 사용하여 데이터를 가져옵니다.
   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch("http://43.201.76.22:8080/api/babysitters"); // API 엔드포인트를 사용자의 서버 주소로 변경하세요.
         if (response.ok) {
           const data = await response.json();
           setCardData(data);
         } else {
           console.error("데이터를 불러올 수 없습니다.");
         }
       } catch (error) {
         console.error("데이터를 불러오는 중 오류 발생:", error);
       }
     };
 
     fetchData();
   }, []); // [] 안에 의존성 배열을 빈 배열로 두어 한 번만 데이터를 불러오도록 합니다.
 
   // ... 나머지 코드는 동일합니다

  // 선택된 카드에 해당하는 데이터를 찾기
  const selectedCardData = cardData.find((card) => card.id === selectedCard);

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
          {selectedCardData && (
            <div
              key={selectedCardData.id}
              className="p-4"
              id="find-more-content"
            >
              <div className="bg-gray-100 rounded-3xl p-4 flex items-center">
                <div>
                  <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {selectedCardData.title}
                  </h2>
                  <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {selectedCardData.area}
                  </h2>
                  <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {selectedCardData.type}
                  </h2>
                  <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {selectedCardData.age}
                  </h2>
                  <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {selectedCardData.sex}
                  </h2>
                  <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {selectedCardData.call}
                  </h2>
                  <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {selectedCardData.day}
                  </h2>
                  <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {selectedCardData.time}
                  </h2>
                  <h2 className="text-lg font-Pretendard font-semibold text-left">
                    {selectedCardData.coment}
                  </h2>
                  <p className="text-gray-500">{selectedCardData.content}</p>
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
