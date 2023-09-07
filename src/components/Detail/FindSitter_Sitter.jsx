import { useState, useEffect } from "react";
<<<<<<< HEAD
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

=======

const FindSitter_Sitter = ({dataProps}) => {
  const userId = dataProps.userData.result.parents.id;
  const usertype = dataProps.userData.type;
  
  const [cards, setCards] = useState([]);
  const [getData, setGetData] = useState({});
  const [openCardId, setOpenCardId] = useState(null);

  
  useEffect(() => {

  }, [dataProps]);
  
>>>>>>> yeji
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

<<<<<<< HEAD
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
=======
  const handleCardClose = () => {
    setGetData({});
    setOpenCardId(null);
  };

    const handleApply = async (id) => {
      try {
        const apiUrl = `http://43.201.76.22:8080/api/babysitter_match`;
    
        // 신청에 필요한 데이터를 JSON 형태로 준비
        const requestData = {
          usertype,
          id,
          userId,
        };
        console.log(
          usertype,
          id,
          userId,
          )
    
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData), // 데이터를 JSON 문자열로 변환하여 전송
        });
    
        if (response.ok) {
          alert("신청이 완료되었습니다.");
          // 성공적으로 신청을 보냈을 때 필요한 동작을 수행하세요.
        } else {
          console.error("신청 실패:", response.status, response.statusText);
          // 실패 시 필요한 동작을 수행하세요.
        }
      } catch (error) {
        console.error("신청 실패:", error);
        // 실패 시 필요한 동작을 수행하세요.
      }
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
>>>>>>> yeji
      } catch (error) {
        console.error("상세 정보 요청 실패:", error);
      }
    }
  };
<<<<<<< HEAD
  

  const handleExpandClose = () => {
    setSelectedCard(null);
  };
=======
>>>>>>> yeji

  const divStyle = {
    width: "600px",
    height: `${cards.length * 200}px`,
  };

<<<<<<< HEAD
  const findMoreStyle = {
    marginTop: "-250px",
    marginBottom: "-250px",
  };

=======
>>>>>>> yeji
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-3xl" style={divStyle}>
          {cards.map((card) => (
            <div key={card.id} className="p-2">
<<<<<<< HEAD
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
=======
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
>>>>>>> yeji
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default FindSitter_Sitter;
=======
export default FindSitter_Sitter;
>>>>>>> yeji
