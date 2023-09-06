import NavBar from "../Main/NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import Applylist from "../Detail/Applylist";
import FindSitter_Sitter from "../Detail/FindSitter_Sitter";
// import {useUserData} from "../Detail/UserDataContext";

const CareApplySelect = () => {
  const divStyle = {
    width: "600px",
    marginTop: "200px",
    height: "600px",
  };

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
      <div className="flex justify-center items-center min-h-screen mt-[-200px]">
        <div className="bg-white rounded-3xl" style={divStyle}>
          <div className="mt-10 ml-10">
            <p className="text-5C5C5C text-left font-Pretendard">
              모든 신청은 이곳에서,
            </p>
            <p className="text-left font-Pretendard text-2xl">케어 지원하기</p>
          </div>
          <div>
            <button
              onClick={FS}
              className="bg-FF6B6B text-white rounded-3xl font-Pretendard text-xl py-20 px-[30px] hover:bg-00694E transition duration-300 mt-10"
              style={{ whiteSpace: "normal" }}
            >
              베이비시터/부모
              <br></br>
              지원하기
            </button>

            <button
              onClick={FC}
              className="bg-9ACD32 text-white rounded-3xl font-Pretendard text-xl py-20 px-[30px] hover:bg-00694E transition duration-300 mt-4 ml-6"
            >
              어르신/요양보호사
              <br></br>
              지원하기
            </button>
            <div className="flex mt-4">
              <button
                onClick={openModal}
                className="bg-FAAE2B text-white rounded-3xl font-Pretendard text-xl mt-[5px] py-20 px-[155px] hover:bg-00694E transition duration-300 mt-4 ml-[90px]"
              >
                나의 지원현황
              </button>
              {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="bg-gray-600 bg-opacity-75 absolute inset-0"></div>
                  <div className="relative z-10 bg-white rounded-lg overflow-hidden w-full max-w-md">
                    <div className="p-4 sm:p-10 text-center">
                      <h3 className="mb-2 text-2xl font-bold font-Pretendard text-gray-800">
                        비밀번호 입력
                      </h3>
                      <p className="text-gray-500">
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
          </div>
          {userData && (
            <Applylist userData={userData} />
          )}
        </div>
      </div>
      <footer className="top-[140px] w-full min-h-[170wh] relative flex items-center justify-center bg-neutral-600 ">
        <div className="w-[390px] h-[363px] relative bg-neutral-600">
          <div className="w-[181px] h-[78px] left-[105px] top-[285px] absolute text-center text-yellow-400 text-[23px] font-extrabold">
            AgeBloomers
          </div>
        </div>
      </footer>
    </div>
     )}
    </>
  );
};

export default CareApplySelect;