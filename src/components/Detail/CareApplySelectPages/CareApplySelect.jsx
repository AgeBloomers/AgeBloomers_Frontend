import NavBar from "../../Main/NavBar";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate 추가
import Applylist from "../Applylist";
import FindSitter_Sitter from "../FindSitter_Sitter";
import Footer from "../../Main/Footer";
import IsModalOpen from "../IsModalOpen";
// import {useUserData} from "../Detail/UserDataContext";

const CareApplySelect = () => {
 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate(); // useNavigate를 사용하여 라우터 네비게이션 함수 생성


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

        const data = await response.json();
        setUserData(data);
        // navigate("/CareApplySelect/Applylist"); // useNavigate를 사용하여 페이지 이동
      } else {
        // 로그인 실패
        alert("로그인 실패: 사용자 이름 또는 비밀번호가 일치하지 않습니다.");
        closeModal(); // 모달 닫기
      }
    } catch (error) {
      console.error("로그인 에러:", error);
    }
  };

  useEffect(() => {

  }, [userData])



  return (
    <>
    {userData != null && (
      <Applylist userData={userData}/>
    )}

    {userData === null && (
      <main className="sm:h-screen bg-neutral-600 font-[Pretendard]">
      <NavBar />
      
       {/* Button Wrapper */}
       <div className="top-[140px] sm:pt-[20px] min-w-full h-[615px] sm:h-[500px] flex justify-center relative bg-neutral-100 text-white font-bold text-[30px] sm:text-[45px]">
          <div className="w-[390px] sm:w-[1000px] h-full relative p-[20px] flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          {/*  베이비시터/부모 지원하기 */}
          <Link to="/CareApplySelect/Form_sitter">
              <button className="bg-lime-400 text-left w-[200px] sm:w-[240px] h-[180px] sm:h-[324px] p-[20px] rounded-[20px] shadow border-4">
              베이비시터/부모<br />
              지원하기
              </button>
            </Link>

          {/* 요양보호사 / 어르신 스트레칭 지원하기*/}
          <Link to="/CareApplySelect/Form_carehelper">
              <button className=" bg-red-400 text-left w-[200px] sm:w-[240px] h-[180px] sm:h-[324px] p-[20px] rounded-[20px] relative shadow border-4">
              요양보호 /어르신<br />
              지원하기
              </button>
            </Link>

          {/* 나의 지원 현황 */}
              <button 
                onClick={openModal}
                className="bg-amber-400 text-left w-[200px] sm:w-[240px] h-[180px] sm:h-[324px] p-[20px]  rounded-[20px] relative shadow border-4">
                   나의 지원 현황
              </button>
          </div>
        </div>
      <div>

              {isModalOpen && (
                <IsModalOpen 
                handleCheck={handleCheck}
                closeModal={closeModal}
                setUsername={setUsername}
                setPassword={setPassword}
                name={name}
                password={password}
                />
              )}
            </div>

          {userData && (
            <Applylist userData={userData} />
          )}


      {/* Footer */}
      <Footer />
    </main>
     )}
    </>
  );
};

export default CareApplySelect;