// import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Finder = () => {
  const divStyle = {
    width: "600px",
    marginTop: "200px",
    height: "600px",
  };

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const handleCheck = () => {
  //   // 사용자 이름과 비밀번호 확인 로직 추가해야함

  //   // 입력처리되면 모달 닫기
  //   closeModal();
  // };


  const FS = () => {
    window.location.href = "/Finder/FindSitter";
  };

  const FC = () => {
    window.location.href = "/Finder/FindCareHelper";
  };

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen mt-[-200px]">
        <div className="bg-white rounded-3xl" style={divStyle}>
          <div className="mt-10 ml-10">
            <p className="text-5C5C5C text-left font-Pretendard">
              지금 나의 주변에는?
            </p>
            <p className="text-left font-Pretendard text-2xl">내 주변 케어 찾기</p>
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

export default Finder;
