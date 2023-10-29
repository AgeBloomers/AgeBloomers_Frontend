import { useState, useEffect } from "react";
import FindMore_Sitter from "./FindMore_Sitter";

const FindSitter_Sitter = ({userData}) => {
  console.log(userData)
  // const type = Object.keys(userData)[2];
  // const id = parseInt(Object.values(userData)[2].id, 10);
  // const name = Object.values(userData)[2].name;
  // const typeAge = Object.values(userData)[2].age;
  // const typeComment = Object.values(userData)[2].comment;

  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);

  const fetchDataFromAPI = async () => {
    try {
      const apiUrl = "http://43.201.76.22:8080/api/babysitters";

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("API 요청에 실패했습니다.");
      }

      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const handleCardClick = async (id) => {
    // setSelectedCard(id);
    if (id !== null) {
      try {
        const apiUrl = "http://43.201.76.22:8080/api/babysitters/details/Babysitters/" + id;
  
        const response = await fetch(apiUrl);
  
        if (!response.ok) {
          throw new Error("상세 정보 요청에 실패했습니다.");
        }
  
        const data = await response.json();
        console.log(data);
  
        // API로부터 상세 정보를 얻은 후, 원하는 동작 수행
        // 예시로 FindMore_Sitter 컴포넌트를 열어봅니다.
        // setSelectedCard(null); // 상세보기를 누르면 상세 정보를 보여주는 컴포넌트를 열고, 다시 목록으로 돌아오면 선택한 카드 초기화
      } catch (error) {
        console.error("상세 정보 요청 실패:", error);
      }
    }
  };
  

  const handleExpandClose = () => {
    setSelectedCard(null);
  };

  const divStyle = {
    width: "600px",
    height: `${cards.length * 200}px`,
  };

  const findMoreStyle = {
    marginTop: "-250px",
    marginBottom: "-250px",
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-3xl" style={divStyle}>
          {cards.map((card) => (
            <div key={card.id} className="p-2">
              {selectedCard === card.id ? (
                <div style={findMoreStyle}>
                  <FindMore_Sitter
                    onClose={handleExpandClose}
                    selectedCard={card.id}
                    // card={card} // 선택된 카드의 데이터를 FindMore_Sitter 컴포넌트로 전달
                  />
                </div>
              ) : (
                <div className="bg-gray-100 rounded-3xl p-4 flex items-center">
                  <div>
                    <h2 className="text-lg font-Pretendard font-semibold text-left">
                      {/* 이름 : {name} */}
                    </h2>
                    <h2 className="text-lg font-Pretendard font-semibold text-left">
                      {/* 나이 : {typeAge} */}
                    </h2>
                    <h2 className="text-lg font-Pretendard font-semibold text-left">
                      {/* 주소 : {typeComment} */}
                    </h2>
                    <p className="text-gray-500">{card.content}</p>
                  </div>
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
