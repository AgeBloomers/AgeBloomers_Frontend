import { useState, useEffect } from "react";

const FindSitter_Sitter = () => {
  const [cards, setCards] = useState([]);
  const [getData, setGetData] = useState({});
  const [openCardId, setOpenCardId] = useState(null);

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

  const handleCardClose = () => {
    setGetData({});
    setOpenCardId(null);
  };

  const handleApply = (id) => {
    console.log(id),
    console.log(openCardId)
    
  };


  const handleCardOpen = async (id) => {
    if (id !== null) {
      try {
        const apiUrl = `http://43.201.76.22:8080/api/detail/babysitters/${id}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("상세 정보 요청에 실패했습니다.");
        }

        const data = await response.json();
        setGetData(data);
        setOpenCardId(id);
      } catch (error) {
        console.error("상세 정보 요청 실패:", error);
      }
    }
  };

  const divStyle = {
    width: "600px",
    height: `${cards.length * 200}px`,
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-3xl" style={divStyle}>
          {cards.map((card) => (
            <div key={card.id} className="p-2">
              <div className="bg-gray-100 rounded-3xl p-4 flex items-center">
                
                {openCardId !== card.id ? (
                  <>
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
                <button
                    onClick={() => handleCardOpen(card.id)}
                    className="bg-525151 text-FFD700 w-24 h-10 rounded-full hover:bg-00473E font-Pretendard ml-auto"
                  >
                    열기
                  </button>
                  </>
                  
                 
                ) : (
                  <div className="bg-gray-100 w-[550px] h-[220px] p-[5px] rounded-3xl p-4 flex items-center">
                    <div className=" p-[20px] ">
                      <h2 className="text-[28px] font-Pretendard font-bold text-left">상세정보</h2>
                      <h2 className="text-lg font-Pretendard font-semibold text-left p-[5px]">
                        날짜 : {Object.values(getData)[0][0]}
                      </h2>
                      <h2 className="text-lg font-Pretendard font-semibold text-left p-[5px]">
                        코멘트 : {Object.values(getData)[0][1]}
                      </h2>
                      <h2 className="text-lg font-Pretendard font-semibold text-left p-[5px] ">
                        희망일 : {Object.values(getData)[0][2]} ~ {Object.values(getData)[0][3]}
                      </h2>
                    </div>
                    <div className="flex flex-col p-[20px]">
                    <button
                      onClick={() => handleCardClose(card.id)}
                      className="bg-525151 text-FFD700 w-[120px] h-[40px] rounded-full hover:bg-00473E font-Pretendard ml-auto"
                    >
                      <div>닫기</div>
                    </button>
                      <div className="w-[150px] h-[10px]"></div>
                    <button
                      onClick={() => handleApply(card.id)}
                      className="mb-[20px] bg-525151 text-FFD700 w-[120px] h-[40px] rounded-full hover:bg-00473E font-Pretendard ml-auto"
                    >
                      <div className="">신청</div>
                    </button>
                  </div>

                    </div>
                   
                 
                  
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindSitter_Sitter;
