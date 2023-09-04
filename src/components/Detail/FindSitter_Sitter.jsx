import { useState, useEffect } from "react";
import FindMore_Sitter from "./FindMore_Sitter";

const FindSitter_Sitter = () => {
  // 선택된 카드의 ID를 추적하는 상태 변수
  const [selectedCard, setSelectedCard] = useState(null);

  // 카드 데이터 배열
  const cards = [
    {
      id: 1,
      title: "이름 : 김수정",
      area: "지역 : 경북",
      type: "유형 : 베이비시터",
    },
    {
      id: 2,
      title: "이름 : 이수연",
      area: "지역 : 경북",
      type: "유형 : 베이비시터",
    },
    {
      id: 3,
      title: "이름 : 이예지",
      area: "지역 : 대구",
      type: "유형 : 베이비시터",
    },
    {
      id: 4,
      title: "이름 : 조혜원",
      area: "지역 : 경북",
      type: "유형 : 베이비시터",
    },
    {
      id: 5,
      title: "이름 : 두부",
      area: "지역 : 대구",
      type: "유형 : 베이비시터",
    },
    {
      id: 6,
      title: "이름 : 루스",
      area: "지역 : 경북",
      type: "유형 : 베이비시터",
    },
    // 더미임
  ];

  // 카드를 클릭했을 때 실행되는 함수
  const handleCardClick = (id) => {
    setSelectedCard(id); // 선택된 카드의 ID를 저장하여 FindMore를 렌더링하게 함
  };

  // FindMore 컴포넌트를 닫는 함수
  const handleExpandClose = () => {
    setSelectedCard(null); // 선택된 카드의 ID를 초기화하여 FindMore를 닫음
  };

  // 카드 개수에 따라 divStyle의 height 계산
  const [divStyle, setDivStyle] = useState({
    width: "600px",
    height: `${cards.length * 200}px`, // 카드 하나당 약 200px 높이로 가정
  });

  useEffect(() => {
    setDivStyle((prevStyle) => ({
      ...prevStyle,
      height: `${cards.length * 200}px`, // 카드 개수에 따라 높이 업데이트
    }));
  }, [cards.length]);

  const findMoreStyle = {
    marginTop: "-250px", // 원하는 여백 크기로 조절
    marginBottom:"-250px"
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-3xl" style={divStyle}>
          {cards.map((card) => (
            <div key={card.id} className="p-2">
              {/* 선택된 카드와 현재 카드의 ID가 일치하면 FindMore를 렌더링, 그렇지 않으면 일반 카드를 렌더링 */}
              {selectedCard === card.id ? (
                <div style={findMoreStyle}>
                <FindMore_Sitter onClose={handleExpandClose} selectedCard={selectedCard} />
                </div>
              ) : (
                <div className="bg-gray-100 rounded-3xl p-4 flex items-center">
                  <div>
                    <h2 className="text-lg font-Pretendard font-semibold text-left">
                      {card.title}
                    </h2>
                    <h2 className="text-lg font-Pretendard font-semibold text-left">
                      {card.area}
                    </h2>
                    <h2 className="text-lg font-Pretendard font-semibold text-left">
                      {card.type}
                    </h2>
                    <p className="text-gray-500">{card.content}</p>
                  </div>
                  {/* 카드를 클릭하면 해당 카드의 ID를 setSelectedCard로 전달 */}
                  <button
                    onClick={() => handleCardClick(card.id)}
                    className="bg-525151 text-FFD700 w-24 h-10 rounded-full hover:bg-00473E font-Pretendard ml-auto"
                  >
                    상세
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindSitter_Sitter;
