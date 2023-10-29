import { useState, useEffect } from "react";
import NavBar from "../../Main/NavBar";
import ButtonWrapper from "../buttonWrapper";
import { Link } from "react-router-dom";
import IsModalOpen from "../IsModalOpen";

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

  const closeModal = () => {
    window.history.back()
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
      <IsModalOpen 
        handleCheck={handleCheck}
        closeModal={closeModal}
        setUsername={setUsername}
        setPassword={setPassword}
        name={name}
        password={password}
      />
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