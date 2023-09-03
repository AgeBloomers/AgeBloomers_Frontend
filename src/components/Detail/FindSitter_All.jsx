import { useState, useEffect } from "react";

const FindSitter_All = () => {
  // 카드 데이터 배열
  const cardData = [
    {
      id: 1,
      title: "이름 : 김수정",
      area: "지역 : 경북",
      type: "유형 : 부모",
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
      type: "유형 : 부모",
    },
    {
      id: 4,
      title: "이름 : 조혜원",
      area: "지역 : 경북",
      type: "유형 : 베이비시터",
    },
    {
      id: 5,
      title: "이름 : 루스",
      area: "지역 : 경북",
      type: "유형 : 부모",
    },
    {
      id: 6,
      title: "이름 : 두부",
      area: "지역 : 경북",
      type: "유형 : 베이비시터",
    },
    {
      id: 7,
      title: "이름 : 콜라",
      area: "지역 : 경북",
      type: "유형 : 베이비시터",
    },
    // 더미임
  ];

  // 카드 개수에 따라 divStyle의 height 계산
  const [divStyle, setDivStyle] = useState({
    width: "600px",
    height: `${cardData.length * 150}px`, // 카드 하나당 약 150px 높이로 가정
  });

  useEffect(() => {
    setDivStyle((prevStyle) => ({
      ...prevStyle,
      height: `${cardData.length * 150}px`, // 카드 개수에 따라 높이 업데이트
    }));
  }, [cardData.length]);

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-3xl" style={divStyle}>
          {/* 카드 생성을 반복문으로 */}
          {cardData.map((card) => (
            <div key={card.id} className="p-4">
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
                <button className="bg-525151 text-FFD700 w-24 h-10 rounded-full hover:bg-00473E font-Pretendard ml-auto">
                  상세
                </button>
              </div>
            </div>
          ))}
          {/* 카드 생성 반복문 끝 */}
        </div>
      </div>
    </div>
  );
};

export default FindSitter_All;
