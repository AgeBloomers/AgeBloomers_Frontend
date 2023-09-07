import { useState, useEffect } from "react";
import NavBar from "./NavBar";
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
        // closeModal(); // 모달 닫기
        setIsLoggedIn(true); // 사용자 인증 상태 변경

        const data = await response.json();
        setUserData(data);
        dataEvent();

      } else {
        // 로그인 실패
        alert("로그인 실패: 사용자 이름 또는 비밀번호가 일치하지 않습니다.");
        setIsLoggedIn(false); // 사용자 인증 상태 변경
      }
    } catch (error) {
      console.error("로그인 에러:", error);
    }
  };


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
};

export default Finder;
