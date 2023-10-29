import NavBar from "../Main/NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import Applylist from "../Detail/Applylist";
import FindSitter_Sitter from "../Detail/FindSitter_Sitter";
import Footer from "./Footer";
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

  const FS = () => {
    window.location.href = "/CareApplySelect/Form_sitter";
  };

  const FC = () => {
    window.location.href = "/CareApplySelect/Form_carehelper";
  };

  return (
    <>
    {userData != null && (
      <Applylist userData={userData}/>

    )}

    {userData === null && (
      <div>
      <NavBar />
      <div className="sm:h-screen bg-neutral-600 font-[Pretendard]">
          {/* Button Wrapper */}
        <div className="top-[140px]">

<div className="top-[140px] pt-[30px] min-w-full h-[450px] sm:h-[450px] flex justify-center relative bg-neutral-100 text-white font-bold text-[30px] sm:text-[45px]">
    <div className="h-full relative p-[20px] flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
    {/* 베이비시터/부모 지원하기 */}
      <button 
      onClick={FS}
      className="bg-9ACD32 text-left sm:text-[40px] w-[200px] sm:w-[240px] h-[180px] sm:h-[324px] p-[20px] rounded-[20px] shadow border-4">
      베이비시터 / 부모
      <br></br>
      지원하기
      </button>

        {/* 베이비시터/부모 지원하기 */}
            <button 
            onClick={FC}
            className="bg-FF6B6B text-left sm:text-[40px] w-[200px] sm:w-[240px] h-[180px] sm:h-[324px] p-[20px] rounded-[20px] relative shadow border-4">
             요양보호사 / 어르신
            <br></br>
              지원하기
            </button>
        </div>
        </div>
        <div className="top-[120px] min-w-full h-[150px] sm:h-[160px] flex justify-center relative bg-neutral-100 text-white font-bold text-[30px] sm:text-[45px]">
        <div className="w-[390px] sm:w-[1000px] h-full relative p-[20px] flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            onClick={openModal}
            className="mt-[-30px] sm:mt-[-50px] p-[5px] bg-FAAE2B text-center w-[200px] sm:w-[480px] h-[100px] sm:h-[120px] rounded-[20px] text-[28px] sm:text-[40px] relative shadow border-4"
            >
            나의 지원 현황
          </button>
        </div>
        </div>
        </div>
        <div>


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
          </div>
          {userData && (
            <Applylist userData={userData} />
          )}
          <Footer />
        </div>
      </div>
     )}
    </>
  );
};

export default CareApplySelect;