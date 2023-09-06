import { useState, useEffect } from "react";
import FindMore_Sitter from "./FindMore_Sitter";

const FindSitter_Sitter = () => {
  // 선택된 카드의 ID를 추적하는 상태 변수
  const [selectedCard, setSelectedCard] = useState(null);

  // 카드 데이터 배열
  const [cards, setCards] = useState([]); // API에서 가져온 카드 데이터를 저장할 상태

  // API에서 데이터를 가져오는 함수
  const fetchDataFromAPI = async () => {
    try {
      // API 엔드포인트 URL 설정 (실제 URL로 대체해야 함)
      const apiUrl = "http://43.201.76.22:8080/api/babysitters"; // 예시 URL

      console.log
      // API에서 데이터 가져오기
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("API 요청에 실패했습니다.");
      }

      // JSON 데이터 파싱
      const data = await response.json();
      setCards(data); // 데이터를 cards 상태에 저장
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  };

  // 컴포넌트가 마운트될 때 API에서 데이터 가져오기
  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const handleCardClick = (id) => {
    setSelectedCard(id);
  };

  const handleExpandClose = () => {
    setSelectedCard(null);
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
                      이름 : {card.name}
                    </h2>
                    <h2 className="text-lg font-Pretendard font-semibold text-left">
                      나이 : {card.age}  
                    </h2>
                    <h2 className="text-lg font-Pretendard font-semibold text-left">
                      주소 : {card.address}
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
