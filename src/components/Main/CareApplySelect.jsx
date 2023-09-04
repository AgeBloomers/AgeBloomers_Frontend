import NavBar from "../Main/NavBar";
import { useState } from "react";

const Form_carehelper = () => {
  const divStyle = {
    width: "600px",
    marginTop: "200px",
    height: "600px",
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState(""); // 입력된 비밀번호 상태 추가
  const [password, setPassword] = useState(""); // 입력된 비밀번호 상태 추가
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCheck = () => {
    // 사용자 이름과 비밀번호를 서버로 보내거나 다른 처리를 수행할 수 있음
    // 예를 들어, 서버로 API 요청을 보내서 사용자 인증을 수행하는 등... 일단 이건 임시로
    console.log("사용자 이름:", username);
    console.log("비밀번호:", password);

    // 비밀번호 확인 후 처리를 수행한 후 모달을 닫을 수 있음
    window.location.href = "/CareApplySelect/Applylist";
    closeModal();
  };

  // const handleCheck = () => {
  //   window.location.href = "/CareApplySelect/Applylist";
  //   closeModal();
  // };

  // const handleCheck = async () => {
  //   try {
  //     // 사용자 이름과 비밀번호를 API에 전달하여 인증 확인하고
  //     const response = await axios.post("/api/auth", {
  //       username: username,
  //       password: password,
  //     });

  //     // API 응답에 따라 처리
  //     if (response.status === 200 && response.data.authenticated) {
  //       // 인증 성공 시 신청현황 볼수있고
  //       window.location.href = "/CareApplySelect/Applylist";
  //     } else {
  //       // 인증 실패시 메세지 띄움
  //       alert("사용자 이름 또는 비밀번호가 일치하지 않습니다.");
  //     }
  //   } catch (error) {
  //     console.error("API 호출 오류:", error);
  //   }

  //   // 비밀번호 확인 후 처리를 수행한 후 모달닫음
  //   closeModal();
  // };

  const FS = () => {
    window.location.href = "/CareApplySelect/Form_sitter";
  };

  const FC = () => {
    window.location.href = "/CareApplySelect/Form_carehelper";
  };

  return (
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
            {/* 베이비시터/부모 신청서 작성 버튼 */}
            <button
              onClick={FS}
              className="bg-FF6B6B text-white rounded-3xl font-Pretendard text-xl py-20 px-[30px] hover:bg-00694E transition duration-300 mt-10"
              style={{ whiteSpace: "normal" }}
            >
              베이비시터/부모
              <br></br>
              지원하기
            </button>

            {/* 어르신/요양보호사 신청서 작성 버튼 */}
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
                        value={username}
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
                          href="javascript:;"
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
  );
};

export default Form_carehelper;
