import NavBar from "../Main/NavBar";
// import {useUserData} from "../Detail/UserDataContext";

const Applylist = ({userData}) => {

  console.log("Applylist", userData);
  const divStyle = {
    width: "600px",
    marginTop: "200px",
    height: "800px",
  };


  const handleEdit = () => {
    // 수정 버튼을 클릭할 때 수행할 작업 추가.
  };

  const handleDelete = () => {
    // 삭제 버튼을 클릭할 때 수행할 작업 추가.
  };

  const back = () => {
    window.location.href = "/CareApplySelect";
  }

  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen mt-[-200px]">
        <div className="bg-white rounded-3xl" style={divStyle}>
          <div className="mt-10 ml-10">
            <p className="text-5C5C5C text-left font-Pretendard">
              나의 지원현황을 확인하세요
            </p>
            <p className="text-left font-Pretendard text-2xl">신청서</p>
            <div className="mt-20 text-5C5C5C  font-Pretendard">
              이름 : {userData.babysitters.name} {/*babyitters를 수동으로 넣는게 아니라 이름과 패스워드를 비교해서 테이블을 찾고 해당 테이블의 이름을 적어야함*/}
              <br/>
              나이 : {userData.babysitters.age}
              <br/>
              주소 : {userData.babysitters.address}

            </div>
          </div>
          <div className="flex flex justify-end mr-20 mt-[150px]">
            {/* 수정 버튼 */}
            <button
              onClick={handleEdit}
              className="bg-525151 text-FFD700 rounded-full font-Pretendard py-3 px-8 hover:bg-00694E transition duration-300 mr-4"
            >
              수정
            </button>

            {/* 삭제 버튼 */}
            <button
              onClick={handleDelete}
              className="bg-525151 text-FFD700 rounded-full font-Pretendard py-3 px-8 hover:bg-FF5252 transition duration-300"
            >
              삭제
            </button>
          </div>
          <div className="mt-10 border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
          <div className="ml-10">
            <p className="text-5C5C5C text-left font-Pretendard">
              나의 매칭 현황을 확인하세요
            </p>
            <p className="text-left font-Pretendard text-2xl">매칭 확인</p>
          </div>
          <div className="flex justify-end mr-20 mt-[200px]">
            <button
              onClick={back}
              className="bg-525151 text-FFD700 rounded-full font-Pretendard py-3 px-8 hover:bg-FF5252 transition duration-300"
            >
              확인 완료
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

export default Applylist;