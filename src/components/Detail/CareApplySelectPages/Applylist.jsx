import { useEffect, useState } from "react";
import NavBar from "../../Main/NavBar";
import Footer from "../../Main/Footer";
// import {useUserData} from "../Detail/UserDataContext";

const Applylist = ({ userData }) => {
  console.log(userData);

  const type = Object.values(userData)[1];
  console.log(type);
  const detailTitle = `registerDetails_${type}`;
  console.log(detailTitle);

  const id = Object.values(userData)[0][`${type}`]?.id;
  const name = Object.values(userData)[0][`${type}`]?.name;
  const age = Object.values(userData)[0][`${type}`]?.age;
  const gender = Object.values(userData)[0][`${type}`]?.gender;
  const contact = Object.values(userData)[0][`${type}`]?.contact;
  const address = Object.values(userData)[0][`${type}`]?.address;
  const email = Object.values(userData)[0][`${type}`]?.email;
  const password = Object.values(userData)[0][`${type}`]?.password;
  const registerDate = userData?.result?.[detailTitle]?.[0]?.[0];
  const comment = userData?.result?.[detailTitle]?.[0]?.[1];
  const startTime = userData?.result?.[detailTitle]?.[0]?.[2];
  const endTime = userData?.result?.[detailTitle]?.[0]?.[3];

  const [editedName, setEditedName] = useState(name); // 수정된 이름을 저장하는 상태
  const [editedAge, setEditedAge] = useState(age);
  const [editedGender, setEditedGender] = useState(gender);
  const [editedContact, setEditedContact] = useState(contact);
  const [editedAddress, setEditedAddress] = useState(address);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedPassword, setEditedPassword] = useState(password);
  const [editedRegisterDate, setEditedRegisterDate] = useState(registerDate);
  const [editedComment, setEditedComment] = useState(comment);
  const [editedStarttime, setEditedStarttime] = useState(startTime);
  const [editedEndtime, setEditedEndtime] = useState(endTime);

  // console.log(type)
  // console.log(id)
  // console.log(userData)
  const divStyle = {
    width: "600px",
    marginTop: "200px",
    height: "2000px",
  };

  const handleDelete = async () => {
    // 삭제 버튼을 클릭할 때 수행할 작업 추가.
    try {
      {
        /* type이랑 id값 검색해서 필요 */
      }
      const formData = {
        id,
        type,
      };

      // 데이터 출력
      console.log("전송할 데이터:", formData);
      const url =
        "http://43.201.76.22:8080/api/careinfo/delete/" + type + "/" + id;

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

  const handleEdit = async () => {
    try {
      // 업데이트할 데이터 생성
      const updatedData = {
        // id,
        // type,
        name: editedName,
        age: editedAge,
        gender: editedGender,
        address: editedAddress,
        contact: editedContact,
        email: editedEmail,
        password: editedPassword,
        registerDate: editedRegisterDate,
        comment: editedComment,
        startTime: editedStarttime,
        endTime: editedEndtime,
      };

      // 데이터 출력 (테스트 목적)
      console.log("업데이트할 데이터:", updatedData);

      // API 엔드포인트 URL 설정 (백엔드 API에 맞게 수정 필요)
      const url = `http://43.201.76.22:8080/api/careinfo/edit/${type}/${id}`;

      // 데이터를 JSON 형식으로 변환
      const jsonData = JSON.stringify(updatedData);

      // PUT 메서드를 사용하여 데이터 업데이트 요청
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      });

      if (response.ok) {
        // 업데이트 성공
        alert("수정 성공!");
      } else {
        // 업데이트 실패
        alert("수정 실패");
      }
    } catch (error) {
      console.error("수정 에러:", error);
    }
  };

  const back = () => {
    window.location.href = "/CareApplySelect";
  };

  useEffect(() => {}, []);

  return (
    <main className="sm:min-h-screen bg-neutral-600 font-Pretendard">
    <NavBar />
    <div className="top-[140px] min-w-full sm:min-h-[1000px] flex justify-center relative bg-neutral-100 text-5C5C5C font-bold text-[15px] sm:text-[16px]">
      <div className="flex flex-col items-center w-full mx-4 sm:mx-0">
  
        {/* 나의 신청서 보기 */}
        <div className="bg-white sm:rounded-3xl sm:my-[50px] w-[390px] sm:w-[600px] h-auto sm:h-[1000px]">
          <p className="m-[25px] text-left">
              지원현황을 확인하세요
              <p className="text-2xl">
              나의 신청서
            </p>
          </p>
        

        
          {/* 유형 
            <div className="m-[10px] sm:m-[20px] mx-7 sm:mx-10"> 유형
              <div className="sm:ml-20 -mt-5">
                <label className="mr-4 ml-20">
                <input type="radio" name="type" value="caregivers" />{" "}
                  요양보호사
                </label>
                <label className="ml-[15px]">
                <input type="radio" name="type" value="elders" /> 보호자(어르신)
                </label>
              </div>
            </div>
            <div className="border-t m-[25px] mx-10"></div>
            */}

             {/* 이름 */}
             <div className="m-[10px] sm:m-[20px] mx-7 sm:mx-10"> 이름:
              <input
                type="text"
                value={editedName}
                className="border border-gray-300 rounded-lg ml-10 p-2 w-[260px] sm:w-96 text-[13px] sm:text-sm"
                placeholder="보호자님은 어르신 성함을 입력해 주세요"
              />
            </div>
            <div className="border-t m-[25px] mx-10"></div>

            {/* 나이 */}
            <div className="m-[10px] sm:m-[20px] mx-7 sm:mx-10 flex items-center"> 나이:
                <input
                  type="number"
                  value={editedAge}
                  className="border border-gray-300 rounded-lg ml-10 p-2 w-10 sm:w-20 text-[13px] sm:text-sm"
                  onChange={(e) => setEditedAge(e.target.value)}
                />
              <div className="ml-2">세</div>
              
            </div>
            <div className="border-t m-[25px] mx-10"></div>

           
           {/* 성별 */}
           <div className="sm-[10px] sm:m-[20px] mx-7 sm:mx-10 "> 성별
              <div className="ml-20 -mt-5">
                <label className="mr-4 sm:ml-20">
                  <input 
                  type="radio" 
                  name="gender" 
                  value="F"
                  checked={editedGender === "F"}
                  onChange={() => setEditedGender("F")}
                  /> 여성
                </label>
                <label className="ml-20">
                <input 
                  type="radio" 
                  name="gender" 
                  value="M"
                  checked={editedGender === "M"}
                  onChange={() => setEditedGender("M")}
                  /> 남성
                </label>
              </div>
            </div>
            <div className="border-t m-[25px] mx-10"></div>
           
          

          {/* 지역 */}    
            <div className="sm-[10px] sm:m-[20px] mx-7 sm:mx-10 flex items-center"> 주소:
            <select
                  value={editedAddress}
                  onChange={(e) => setEditedAddress(e.target.value)}
                  className="border border-gray-300 rounded-lg ml-7 p-2 w-[265px] sm:w-96 text-[13px] sm:text-sm"
                >
                <option value="">지역을 선택해주세요</option>
                <option value="서울">서울</option>
                <option value="부산">부산</option>
                <option value="대구">대구</option>
                <option value="인천">인천</option>
                <option value="광주">광주</option>
                <option value="대전">대전</option>
                <option value="울산">세종</option>
                <option value="경기">경기</option>
                <option value="강원">강원</option>
                <option value="충북">충북</option>
                <option value="충남">충남</option>
                <option value="전북">전북</option>
                <option value="전남">전남</option>
                <option value="경북">경북</option>
                <option value="경남">경남</option>
                <option value="제주">제주</option>
              </select>
            </div>
            <div className="border-t m-[25px] mx-10"></div>

            
          {/* 연락처 */}
            <div className="sm-[10px] sm:m-[20px] mx-7 sm:mx-10 ">  연락처:
            <input
                  type="number"
                  value={editedContact}
                className="border border-gray-300 rounded-lg ml-7 p-2 w-[260px] sm:w-96 text-[13px] sm:text-sm"
                  onChange={(e) => setEditedContact(e.target.value)}
                />
            </div>
            <div className="border-t m-[25px] mx-10"></div>
          
          {/* 이메일 */}
            <div className="sm-[10px] sm:m-[20px] mx-7 sm:mx-10 "> 이메일:
            <input
                  type="email"
                  value={editedEmail}
                  className="border border-gray-300 rounded-lg ml-7 p-2 w-[260px] sm:w-96 text-[13px] sm:text-sm"
                  onChange={(e) => setEditedEmail(e.target.value)}
                />
            </div>
            <div className="border-t m-[25px] mx-10"></div>

            {/* 코멘트 */}
            <div className="sm-[10px] sm:m-[20px] mx-7 sm:mx-10"> 코멘트:
                <input
                  type="text"
                  value={editedComment}
                  className="border border-gray-300 rounded-lg ml-7 p-2 w-[260px] sm:w-96 text-[13px] sm:text-sm"
                  onChange={(e) => setEditedComment(e.target.value)}
                />
            </div>
            
            <div className="border-t m-[25px] mx-10"></div>
          {/* 비밀번호 */}
            <div className="sm-[10px] sm:m-[20px] mx-7 sm:mx-10"> 비밀번호:
                <input
                  type="password"
                  value={editedPassword}
                  className="border border-gray-300 rounded-lg ml-7 p-2 w-[240px] sm:w-96 text-[13px] sm:text-sm"
                  onChange={(e) => setEditedPassword(e.target.value)}
                />
            </div>
          

            <div className="border-t m-[25px] mx-10"></div>
          {/* 희망 시작일 */}
            <div className="sm-[10px] sm:m-[20px] mx-7 sm:mx-10">  희망 시작일:
              {startTime}
            </div>
          {/* 희망 종료일 */}
          <div className="sm-[10px] sm:m-[20px] mx-7 sm:mx-10">  희망 종료일:
              {endTime}
            </div>

          {/* "신청하기" 버튼 */}
          <div className="m-[20px] text-center">
            <button
              onClick={handleEdit}
              className="bg-525151 mr-5 text-FFD700 rounded-full py-3 px-8 hover:FFD700 transition duration-300"
            > 수정
            </button>
            <button
              onClick={handleDelete}
              className="bg-525151 text-FFD700 rounded-full py-3 px-8 hover:FFD700 transition duration-300"
            > 삭제
            </button>
          </div>
        </div>
        
        {/* 나의 지원 현황 보기 */}
        <div className="bg-white sm:rounded-3xl sm:my-[50px] w-[390px] sm:w-[600px] h-[300px] sm:h-[300px]">
        <p className="m-[25px] text-left">
              나의 매칭 현황을 확인하세요
              <p className="text-2xl">
              매칭 확인
            </p>
          </p>
          <button
              onClick={back}
              className="bg-525151 text-FFD700 rounded-full py-3 px-8 hover:FFD700 transition duration-300"
            >
              확인 완료
            </button>
          </div>
          
          </div>
        </div>

        


        {/* Footer */}
      <Footer />
      </main>
  );
};

export default Applylist;
