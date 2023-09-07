import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import FindSitter_Sitter from "../Detail/FindSitter_Sitter";

const Finder = () => {
  // const [userData, setUserData] = useState(null);
  const [nextPage, setNextPage] = useState(false);

  const divStyle = {
    width: "600px",
    marginTop: "200px",
    height: "600px",
  };

  // 모달 상태 및 사용자 정보 상태
  const [isModalOpen, setIsModalOpen] = useState(true); // 모달을 열도록 초기값을 true로 설정
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 사용자 인증 상태 추가
  // const [userData, setUserData] = useState({});

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const FS = () => {
    // 사용자가 로그인하지 않았을 때 찾아보기 버튼 클릭 시 모달 다시 열기
    if (!isLoggedIn) {
      setIsModalOpen(true);
      alert("사용자 인증을 해주세요.");
    } else {
      setNextPage(true)
      window.location.href = "/Finder/FindSitter";
    }
  };

  const FC = () => {
    // 사용자가 로그인하지 않았을 때 찾아보기 버튼 클릭 시 모달 다시 열기
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
      // 전송할 데이터 확인
      console.log("전송할 데이터:", { name, password });

      // API 서버의 엔드포인트 URL (실제로는 해당 서버의 주소를 사용)
      // const apiUrl = `http://43.201.76.22:8080/api/login/${name}`; // URL에 사용자 이름 추가
      const apiUrl =
        "http://43.201.76.22:8080/api/login/" + name + "/" + btoa(password);
      // POST 요청으로 사용자 비밀번호 전송
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ password }), // JSON 형태로 데이터를 보내도록 수정
      });
      // 서버로부터 응답을 받았을 때 처리
      if (response.status === 200) {
        // 로그인 성공
        alert("로그인 성공!");
        closeModal(); // 모달 닫기
        setIsLoggedIn(true); // 사용자 인증 상태 변경

        const data = await response.json();
        // setUserData(data);

        // setUserData(data);
        console.log(data);

      } else {
        // 로그인 실패
        alert("로그인 실패: 사용자 이름 또는 비밀번호가 일치하지 않습니다.");
        closeModal(); // 모달 닫기
        setIsLoggedIn(false); // 사용자 인증 상태 변경
      }
    } catch (error) {
      console.error("로그인 에러:", error);
    }
  };

  // 컴포넌트가 마운트될 때 모달 열기
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    // <>
    // {nextPage === true && (
    //   <FindSitter_Sitter userData={userData}/>
    // )}


    <div>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen mt-[-200px]">
        <div className="bg-white rounded-3xl" style={divStyle}>
          <div className="mt-10 ml-10">
            <p className="text-5C5C5C text-left font-Pretendard">
              지금 나의 주변에는?
            </p>
            <p className="text-left font-Pretendard text-2xl">
              내 주변 케어 찾기
            </p>
          </div>
          <div>
            {/* 베이비시터/부모 신청서 작성 버튼 */}
            <button
              onClick={FS}
              className="bg-FF6B6B text-white rounded-3xl font-Pretendard text-xl py-36 px-[30px] hover:bg-00694E transition duration-300 mt-[60px]"
              style={{ whiteSpace: "normal" }}
            >
              베이비시터/부모
              <br></br>
              찾아보기
            </button>

            {/* 어르신/요양보호사 신청서 작성 버튼 */}
            <button
              onClick={FC}
              className="bg-9ACD32 text-white rounded-3xl font-Pretendard text-xl py-36 px-[30px] hover:bg-00694E transition duration-300 mt-4 ml-6"
            >
              요양보호사/어르신
              <br></br>
              찾아보기
            </button>
          </div>
        </div>
      </div>
      {/* 모달 */}
      {isModalOpen && (
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
                <button
                  onClick={closeModal}
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
    // </>
  );
};

export default Finder;