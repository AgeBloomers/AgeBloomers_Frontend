import { useEffect, useState } from "react";
import NavBar from "../Main/NavBar";
import Footer from "../Main/Footer";
// import {useUserData} from "../Detail/UserDataContext";

const Applylist = ({userData}) => {
  const type = Object.keys(userData)[2];
  const id = parseInt(Object.values(userData)[2].id, 10);
  const name = Object.values(userData)[2].name;
  const typeAge = Object.values(userData)[2].age;
  // const contact = Object.values(userData)[1].address;
  // const typeAddress = Object.values(userData)[1].address;
  // const typeAddress = Object.values(userData)[1].address;

  console.log(type)
  console.log(id)
  console.log(userData)
  const divStyle = {
    width: "600px",
    marginTop: "200px",
    height: "800px",
  };


  const handleEdit = () => {
    // 수정 버튼을 클릭할 때 수행할 작업 추가.
  };

  const handleDelete = async () => {
    // 삭제 버튼을 클릭할 때 수행할 작업 추가.
    try {
      {/* type이랑 id값 검색해서 필요 */}
      const formData = {
        id,
        type,
      };
      
      // 데이터 출력
      console.log("전송할 데이터:", formData);
      const url =
        "http://43.201.76.22:8080/api/careinfo/delete/" + type + "/"+ id; 
        

      const jsonData = JSON.stringify(formData);

      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      });
      
      if (response.ok) {
        // 삭제 성공
        alert("삭제 성공!");
      } else {
        // 삭제 실패
        alert("삭제 실패");
      }
    } catch (error) {
      console.error("삭제 에러:", error);
    }
  };

  const back = () => {
    window.location.href = "/CareApplySelect";
  }

  useEffect(() => {
  }, [])

  return (
    <>
    <div>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen font-[Pretendard] mt-[-200px]">
        <div className="bg-white rounded-3xl" style={divStyle}>
          <div className="mt-10 ml-10">
            <p className="text-5C5C5C text-left font-[Pretendard]">
              나의 지원현황을 확인하세요
            </p>
            <p className="text-left text-2xl">신청서</p>
            <div className="mt-20 text-5C5C5C ">
              이름 : {name}
              <br/>
              나이 : {typeAge}
              <br/>
              {/* 주소 : {typeAddress} */}
              <br/>


            </div>
          </div>
          <div className="flex font-[Pretendard] justify-end mr-20 mt-[150px]">
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
          <div className="mt-10 border-t border-FCFCFC ml-16 mb-1 p-2 w-4/5"></div>
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
      <Footer />
    </div>
    </>
  );
};

export default Applylist;