import { useState, useEffect } from "react";

const CareMore_carehelper = ({ onClose, selectedCard }) => {
  // 카드 데이터 배열
  const cardData = [
    {
      id: 1,
      title: "이름 : 김수정",
      area: "지역 : 경북",
      type: "유형 : 요양보호사",
      age: "나이 : 3세",
      sex: "성별 : 여자",
      call: "연락처 : 010-0000-0000",
      day: "희망일 : 2023/07/23 ~ 2023/09/03",
      time: "희망 시간 : 09:00 ~ 17:00",
      coment: "코멘트 : ㅇㅇ",
    },
    {
      id: 2,
      title: "이름 : 이수연",
      area: "지역 : 경북",
      type: "유형 : 요양보호사",
      age: "나이 : 2세",
      sex: "성별 : 여자",
      call: "연락처 : 010-0000-0000",
      day: "희망일 : 2023/07/23 ~ 2023/09/03",
      time: "희망 시간 : 09:00 ~ 17:00",
      coment: "코멘트 : ㅇㅇㅇ",
    },
    {
        id: 3,
        title: "이름 : 이예지",
        area: "지역 : 대구",
        type: "유형 : 요양보호사",
        age: "나이 : 4세",
        sex: "성별 : 여자",
        call: "연락처 : 010-0000-0000",
        day: " 희망일 : 2023/07/23 ~ 2023/09/03",
        time: "희망 시간 : 09:00 ~ 17:00",
        coment: "코멘트 : ㅇㅇㅇ",
      },
      {
        id: 4,
        title: "이름 : 조혜원",
        area: "지역 : 경북",
        type: "유형 : 요양보호사",
        age: "나이 : 3세",
        sex: "성별 : 여자",
        call: "연락처 : 010-0000-0000",
        day: "희망일 : 2023/07/23 ~ 2023/09/03",
        time: "희망 시간 : 09:00 ~ 17:00",
        coment: "코멘트 : ㅇㅇㅇ",
      },
      {
        id: 5,
        title: "이름 : 두부",
        area: "지역 : 경북",
        type: "유형 : 요양보호사",
        age: "나이 : 2세",
        sex: "성별 : 여자",
        call: "연락처 : 010-0000-0000",
        day: "희망일 : 2023/07/23 ~ 2023/09/03",
        time: "희망 시간 : 09:00 ~ 17:00",
        coment: "코멘트 : ㅇㅇㅇ",
      },
      {
        id: 6,
        title: "이름 : 루스",
        area: "지역 : 경북",
        type: "유형 : 요양보호사",
        age: "나이 : 23세",
        sex: "성별 : 여자",
        call: "연락처 : 010-0000-0000",
        day: "업무 희망일 : 2023/07/23 ~ 2023/09/03",
        time: "희망 시간 : 09:00 ~ 17:00",
        coment: "코멘트 : ㅇㅇ.",
      },
    // 더미임
  ];

  // 선택된 카드에 해당하는 데이터를 찾기
  const selectedCardData = cardData.find((card) => card.id === selectedCard);

// FindMore 컴포넌트 내에서 divStyle 초기화를 다음과 같이 수정
const [divStyle, setDivStyle] = useState({
    width: "600px",
  });
  
  // ...
  
  // divStyle의 height 값을 조절하는 useEffect 부분을 다음과 같이 수정
  useEffect(() => {
    // 컴포넌트 내용에 따라 높이를 동적으로 계산
    const contentHeight = document.getElementById("find-more-content").offsetHeight;
    setDivStyle((prevStyle) => ({
      ...prevStyle,
      height: `${contentHeight}px`,
    }));
  }, [selectedCard]);

  const handleFoldClick = () => {
    // "접기" 버튼 클릭 시 컴포넌트를 숨기도록 onClose 함수 호출
    onClose();
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-3xl" style={divStyle}>
          {selectedCardData && (
            <div key={selectedCardData.id} className="p-4" id="find-more-content">
              <div className="bg-gray-100 rounded-3xl p-4 flex items-center ">
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
                <button
                  onClick={handleFoldClick}
                  className="bg-525151 text-FFD700 w-24 h-10 rounded-full hover:bg-00473E font-Pretendard ml-auto"
                >
                  접기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareMore_carehelper;
