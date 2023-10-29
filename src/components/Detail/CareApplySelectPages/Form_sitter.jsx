import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Main/NavBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Footer from "../../Main/Footer";

const Form_sitter = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [endDate, setEndDate] = useState(null);


  useEffect(() => {

  }, [])

  // Date 객체로 날짜 및 시간 값 저장
  // const [registerDate, setRegisterDate] = useState(null);

  // 폼 유효성 상태 및 에러 메시지를 추가
  const [formValid, setFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAgeChange = (e) => {
    // 입력된 값이 숫자가 아니면 입력 못하도록 함
    const age = e.target.value;
    if (!/^\d*$/.test(age)) {
      return;
    }

    // 숫자만 입력되도록 설정
    e.target.value = age;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 필수 입력 필드를 확인하고 유효성 검사
    if (
      !selectedDate ||
      !endDate ||
      !e.target.type.value ||
      !e.target.name.value ||
      !e.target.age.value ||
      !e.target.gender.value ||
      !e.target.address.value ||
      !e.target.contact.value ||
      !e.target.email.value ||
      !e.target.comment.value ||
      !e.target.password.value
    ) {
      setFormValid(false);
      alert("신청서의 모든 정보를 입력해주세요.");
      return;
    }

    try {
      // Date 객체를 문자열로 변환하여 서버에 전송할 수 있도록 함
      const data = e.target.type.value
      const formattedStartDate = selectedDate.toISOString();
      const formattedEndDate = endDate.toISOString();
      const currentDateTime = new Date();
      currentDateTime.setMinutes(
        currentDateTime.getMinutes() - currentDateTime.getTimezoneOffset()
      );
      const formattedRegisterDate = currentDateTime.toISOString();

      const formData = {
        name: e.target.name.value,
        age: e.target.age.value,
        gender: e.target.gender.value,
        address: e.target.address.value,
        contact: e.target.contact.value,
        email: e.target.email.value,
        password: e.target.password.value,
        comment: e.target.comment.value,
        startTime: formattedStartDate,
        endTime: formattedEndDate,
        registerDate: formattedRegisterDate,
      };

      // 데이터 출력
      console.log("전송할 데이터:", formData);

      const jsonData = JSON.stringify(formData);

      // URL에서 {type} 변수를 올바른 값으로 대체
      const url = `http://43.201.76.22:8080/api/careinfo/upload/${data}`;
  
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      });

      if (response.ok) {
        alert("신청이 완료되었습니다.");
        navigate("/");
      } else {
        console.error("신청 실패:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("신청 실패:", error);
    }
    // 유효한 경우
    setFormValid(true); // 폼이 유효하다고 설정
    setErrorMessage(""); // 에러 메시지
  };

  return (
            
        <>
        <main className="sm:min-h-screen bg-neutral-600 font-Pretendard">
        <NavBar />
        <div className="top-[140px] min-w-full sm:min-h-[1200px] flex justify-center relative bg-neutral-100 text-5C5C5C font-bold text-[15px] sm:text-[16px]">
        <div className="flex justify-center items-center w-full mx-4 sm:mx-0">
          <div className="bg-white sm:rounded-3xl w-[390px] sm:w-[600px] h-auto sm:h-[1050px]">
            <p className="m-[25px] text-left">
              간단한 인적사항을 작성해주세요!
              <p className="text-2xl">
              케어 지원 신청서 작성
            </p>
            </p>
        

          {/* 폼 유효성 메시지를 표시 */}
          {!formValid && (
            <p className="ml-20 text-ef4444 text-left font-Pretendard">
              {errorMessage}
            </p> )}


        <form onSubmit={handleSubmit}>
          {/* 유형 */}
            <div className="m-[10px] sm:m-[20px] mx-7 sm:mx-10"> 유형
              <div className="sm:ml-20 -mt-5">
                <label className="mr-4 ml-20">
                  <input type="radio" name="type" value="babysitters" />{" "}
                  베이비시터
                </label>
                <label className="ml-20">
                  <input type="radio" name="type" value="parents" /> 부모
                </label>
              </div>
            </div>
            <div className="border-t m-[25px] mx-10"></div>

            {/* 이름 */}
            <div className="m-[10px] sm:m-[20px] mx-7 sm:mx-10"> 이름
              <input
                type="text"
                name="name"
                className="border border-gray-300 rounded-lg ml-10 p-2 w-[265px] sm:w-96 text-[13px] sm:text-sm"
                placeholder="부모님은 자녀 이름을 입력해주세요"
              />
            </div>
            <div className="border-t m-[25px] mx-10"></div>

            {/* 나이 */}
            <div className="sm-[10px] sm:m-[20px] mx-7 sm:mx-10 flex items-center"> 나이
              <input
                type="number"
                name="age"
                className="border border-gray-300 rounded-lg ml-7 p-2 w-10 sm:w-20 text-[13px] sm:text-sm"
                placeholder=""
                onChange={handleAgeChange}
              />
              <div className="ml-2">세</div>
              <div className="ml-5 sm:ml-2 text-ef4444 text-[13px] sm:text-[15px]">
                * 부모님은 자녀 정보를 입력해주세요
              </div>
            </div>
            <div className="border-t m-[25px] mx-10"></div>

            {/* 성별 */}
            <div className="sm-[10px] sm:m-[20px] mx-7 sm:mx-10 "> 성별
              <div className="ml-20 -mt-5">
                <label className="mr-4 sm:ml-20">
                  <input type="radio" name="gender" value="F" /> 여성
                </label>
                <label className="ml-20">
                  <input type="radio" name="gender" value="M" /> 남성
                </label>
              </div>
            </div>
            <div className="border-t m-[25px] mx-10"></div>

          {/* 지역 */}    
            <div className="sm-[10px] sm:m-[20px] mx-7 sm:mx-10 flex items-center"> 지역
              <select
                className="border border-gray-300 rounded-lg ml-7 p-2 w-[265px] sm:w-96 text-[13px] sm:text-sm"
                placeholder="지역을 선택해주세요"
                name="address"
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
            <div className="sm-[10px] sm:m-[20px] mx-7 sm:mx-10 "> 연락처
              <input
                type="number"
                name="contact"
                className="border border-gray-300 rounded-lg ml-7 p-2 w-[265px] sm:w-96 text-[13px] sm:text-sm"
                placeholder="- 없이 01012345678 형식으로 입력해주세요"
              />
            </div>
            <div className="border-t m-[25px] mx-10"></div>
          
          {/* 이메일 */}
            <div className="sm-[10px] sm:m-[20px] mx-7 sm:mx-10 "> 이메일
              <input
                type="email"
                name="email"
                className="border border-gray-300 rounded-lg ml-7 p-2 w-[265px] sm:w-96 text-[13px] sm:text-sm"
                placeholder="ex) example@naver.com"
              />
            </div>
            <div className="border-t m-[25px] mx-10"></div>

            {/* 희망 날짜 */}
            <div className="sm-[10px] sm:m-[20px] mx-7 sm:mx-10 flex items-center"> 이메일
              <DatePicker
                className="border border-gray-300 rounded-lg ml-7 p-2 sm:w-36 w-[43px] text-[13px] sm:text-sm"
                placeholderText="시작 날짜 및 시간 선택"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy/MM/dd h:mm aa"
                showTimeSelect
                timeFormat="HH:mm"
                name="startDate"
              />
              <div className="mt-2 ml-2">부터</div>
              <DatePicker
                className="border border-gray-300 rounded-lg ml-2 p-2 sm:w-36 w-[43px] text-[13px] sm:text-sm"
                placeholderText="종료 날짜 및 시간 선택"
                selected={endDate}
                onChange={handleEndDateChange}
                dateFormat="yyyy/MM/dd h:mm aa"
                showTimeSelect
                timeFormat="HH:mm"
                name="endDate"
              />
                  <p className="mt-2 ml-2">까지</p>
                </div>
                <div className="border-t m-[25px] mx-10"></div>
            {/* 코멘트 */}
            <div className="sm-[10px] sm:m-[20px] mx-7 sm:mx-10"> 코멘트
              <input
                type="text"
                name="comment"
                className="border border-gray-300 rounded-lg ml-6 p-2 text-[13px] sm:text-sm w-[265px] sm:w-96"
                placeholder="특이사항, 바라는점, 약력 등 무엇이든 남겨보세요"
              />
            </div>
            
            <div className="border-t m-[25px] mx-10"></div>
          {/* 비밀번호 */}
            <div className="sm-[10px] sm:m-[20px] mx-7 sm:mx-10"> 비밀번호
              <input
                type="password"
                name="password"
                className="border border-gray-300 rounded-lg ml-7 p-2 w-60 sm:w-80 text-[13px] sm:text-sm"
                placeholder="신청 조회용 비밀번호를 입력해주세요"
              />
            </div>
          

          {/* "신청하기" 버튼 */}
          <div className="m-[25px] text-right">
            <button
              type="submit"
              className="bg-525151 text-FFD700 rounded-full py-3 px-8 hover:FFD700 transition duration-300"
            > 신청하기
            </button>
          </div>
          </form>
        </div>
      </div>
      </div>

        {/* Footer */}
      <Footer />
      </main>
    </>
     
  );
};

export default Form_sitter;
