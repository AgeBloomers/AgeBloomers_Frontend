import { useState, useEffect } from "react";
import NavBar from "./NavBar";
<<<<<<< HEAD
import FindSitter_Sitter from "../Detail/FindSitter_Sitter";

const Finder = () => {
  const [userData, setUserData] = useState(null);
  const [nextPage, setNextPage] = useState(false);

  // 모달 상태 및 사용자 정보 상태
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const FS = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
      alert("사용자 인증을 해주세요.");
    } else {
      setNextPage(true);
      window.location.href = "/Finder/FindSitter";
    }
  };

  const FC = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
      alert("사용자 인증을 해주세요.");
    } else {
      window.location.href = "/Finder/FindCareHelper";
    }
  };
=======
import ButtonWrapper from "../Detail/buttonWrapper";

const Finder = () => {
  const [userData, setUserData] = useState(null);
  // const [nextPage, setNextPage] = useState(false);
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 사용자 인증 상태 추가

  useEffect(() => {
  }, [userData]);

  const dataEvent = () => {
    return (
      <div>
      <ButtonWrapper userData={userData}/>
      </div>
    )
  }
>>>>>>> yeji

  // 아이디와 비밀번호 확인 함수
  const handleCheck = async () => {
    try {
<<<<<<< HEAD
      console.log("전송할 데이터:", { name, password });

      const apiUrl =
        "http://43.201.76.22:8080/api/login/" + name + "/" + btoa(password);

=======
      // 전송할 데이터 확인
      console.log("전송할 데이터:", { name, password });

      // API 서버의 엔드포인트 URL (실제로는 해당 서버의 주소를 사용)
      // const apiUrl = `http://43.201.76.22:8080/api/login/${name}`; // URL에 사용자 이름 추가
      const apiUrl =
        "http://43.201.76.22:8080/api/login/" + name + "/" + btoa(password);
      // POST 요청으로 사용자 비밀번호 전송
>>>>>>> yeji
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
<<<<<<< HEAD
      });

      if (response.status === 200) {
        alert("로그인 성공!");
        closeModal();
        setIsLoggedIn(true);

        const data = await response.json();
        setUserData(data);

        console.log(data);
      } else {
        alert("로그인 실패: 사용자 이름 또는 비밀번호가 일치하지 않습니다.");
        closeModal();
        setIsLoggedIn(false);
=======
        // body: JSON.stringify({ password }), // JSON 형태로 데이터를 보내도록 수정
      });
      // 서버로부터 응답을 받았을 때 처리
      if (response.status === 200) {
        // 로그인 성공
        alert("로그인 성공!");
        // closeModal(); // 모달 닫기
        setIsLoggedIn(true); // 사용자 인증 상태 변경

        const data = await response.json();
        setUserData(data);
        dataEvent();

      } else {
        // 로그인 실패
        alert("로그인 실패: 사용자 이름 또는 비밀번호가 일치하지 않습니다.");
        setIsLoggedIn(false); // 사용자 인증 상태 변경
>>>>>>> yeji
      }
    } catch (error) {
      console.error("로그인 에러:", error);
    }
  };

<<<<<<< HEAD
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <>
      {nextPage === true && <FindSitter_Sitter userData={userData} />}
      <NavBar />
      <main className="sm:h-screen bg-neutral-600 font-[Pretendard]">
      <div className="top-[140px] sm:pt-[20px] min-w-full h-[615px] sm:h-[500px] flex justify-center relative bg-neutral-100 text-white font-bold text-[30px] sm:text-[45px]">
          <div className="w-[390px] sm:w-[1000px] h-full relative p-[20px] flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          {/* 임산부 및 육아*/}
              <button 
              onClick={FS}
              className="bg-FF6B6B text-[28px] sm:text-[35px] text-left w-[200px] sm:w-[240px] h-[180px] sm:h-[324px] p-[20px] rounded-[20px] relative shadow border-4">
              베이비시터 / 부모
                <br />
                찾아보기
              </button>

          {/* 노인 및 요양*/}
              <button 
              onClick={FC}
              className="bg-9ACD32 text-[28px] sm:text-[35px]  text-left w-[200px] sm:w-[240px] h-[180px] sm:h-[324px] p-[20px] rounded-[20px] relative shadow border-4">
              요양보호사 / 어르신
                <br />
                찾아보기
              </button>

          </div>
        </div>
   

        {isModalOpen && (
        <div className="font-[Pretendard] fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-gray-600 bg-opacity-75 absolute inset-0"></div>
            <div className="relative z-10 bg-white rounded-lg overflow-hidden w-[320px] sm:w-full max-w-lg">
              <div className="p-4 sm:p-10 text-center">
                <h3 className="mb-2 text-3xl font-extrabold text-gray-800">
                  비밀번호 입력
                </h3>
                  <p className="text-xl text-gray-600">
                    신청서에 작성한 성함과 비밀번호를 입력하세요.
                  </p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 w-full mt-4"
                  placeholder="사용자 이름 입력"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 w-full mt-4"
                  placeholder="비밀번호 입력"
                />

                <div className="mt-6 flex justify-center gap-x-3">
                  <button
                    onClick={handleCheck}
                    type="button"
                    className="text-lg py-2.5 px-5 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-neutral-600 text-yellow-400">
                    조회하기
                  </button>
                  <button
                    onClick={closeModal}
                    type="button"
                    className="text-lg py-2.5 px-5 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-neutral-600 text-yellow-400">
                    취소
                  </button>
                  </div>
                </div>
              </div>
            </div>

            
          )}
        <footer className="top-[140px] min-w-full h-[200px] sm:h-[200px] relative">
            <div className="w-full h-full relative flex justify-center bg-neutral-600 ">
              {/* 문구 영역 */}
              <div className="top-[25px] absolute text-yellow-400 text-[23px] font-extrabold">
                AgeBloomers
              </div>
            </div>
          </footer>
          </main>

      </>
  );
=======

  return (
    <>
     {/* 모달 */}
   {userData === null && (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-600 bg-opacity-75 absolute inset-0"></div>
      <div className="relative z-10 bg-white rounded-lg overflow-hidden w-full max-w-md">
        <div className="p-4 sm:p-10 text-center">
          {/* 모달 내용 */}
          <h3 className="mb-2 text-2xl font-bold font-Pretendard text-gray-800">
            비밀번호 입력
          </h3>
          <p className="text-gray-500">
            신청서에 작성한 성함과 비밀번호를 입력하세요.
          </p>
          {/* 사용자 이름 입력 창 */}
          <input
            type="text"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full mt-4"
            placeholder="사용자 이름 입력"
          />
          {/* 비밀번호 입력 창 */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 w-full mt-4"
            placeholder="비밀번호 입력"
          />

          <div className="mt-6 flex justify-center gap-x-4">
            <button
              onClick={handleCheck}
              type="button"
              className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-525151 text-FFD700 font-Pretendard text-sm"
            >
              조회하기
            </button>
            {/* <button
              onClick={closeModal}
              type="button"
              className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-525151 text-FFD700 font-Pretendard text-sm"
            >
              취소
            </button> */}
          </div>
        </div>
      </div>
    </div>
    )}

    {userData !== null && (
      // 렌더링할 내용 추가
      <div>
        {dataEvent()}
      </div>
    )}
    </>
  )
>>>>>>> yeji
};

export default Finder;
