import { useState, useEffect } from "react";
import NavBar from "./NavBar";
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

  // 아이디와 비밀번호 확인 함수
  const handleCheck = async () => {
    try {
      console.log("전송할 데이터:", { name, password });

      const apiUrl =
        "http://43.201.76.22:8080/api/login/" + name + "/" + btoa(password);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
      }
    } catch (error) {
      console.error("로그인 에러:", error);
    }
  };

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
};

export default Finder;
