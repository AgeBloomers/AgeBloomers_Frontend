import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Main/NavBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form_sitter = () => {
  const divStyle = {
    width: "600px",
    height: "1100px",
  };
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
      const url = `http://43.201.76.22:8080/api/careinfo/upload/${e.target.type.value}`;

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
    <div>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white rounded-3xl" style={divStyle}>
          <div className="mt-10 ml-10">
            <p className="text-5C5C5C text-left font-Pretendard">
              간단한 인적사항을 작성해주세요!
            </p>
            <p className="text-left font-Pretendard text-2xl">
              케어 지원 신청서 작성
            </p>
          </div>
          {/* 폼 유효성 메시지를 표시 */}
          {!formValid && (
            <p className="ml-20 text-ef4444 text-left font-Pretendard">
              {errorMessage}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mt-10 ml-20 text-5C5C5C text-left font-Pretendard">
              유형
              <div className="ml-20 -mt-5">
                <label className="mr-4 ml-20">
                  <input type="radio" name="type" value="Babysitters" />{" "}
                  베이비시터
                </label>
                <label className="ml-20">
                  <input type="radio" name="type" value="Parents" /> 부모
                </label>
              </div>
            </div>
            <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
            <div className="ml-20 text-5C5C5C text-left font-Pretendard">
              이름
              <input
                type="text"
                name="name"
                className="border border-gray-300 rounded-lg ml-10 p-2 w-96"
                placeholder="부모님은 자녀 이름을 입력해주세요"
              />
            </div>
            <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
            <div className="ml-20 text-5C5C5C text-left font-Pretendard flex items-center">
              나이
              <input
                type="number"
                name="age"
                className="border border-gray-300 rounded-lg ml-10 p-2 w-20"
                placeholder=""
                onChange={handleAgeChange}
              />
              <div className="ml-2">세</div>
              <div className="ml-2 text-ef4444">
                * 부모님은 자녀 정보를 입력해주세요
              </div>
            </div>

            <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>

            <div className="ml-20 text-5C5C5C text-left font-Pretendard">
              성별
              <div className="ml-20 -mt-5">
                <label className="mr-4 ml-20">
                  <input type="radio" name="gender" value="F" /> 여성
                </label>
                <label className="ml-20">
                  <input type="radio" name="gender" value="M" /> 남성
                </label>
              </div>
            </div>
            <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
            <div className="ml-20 text-5C5C5C text-left font-Pretendard">
              지역
              <select
                className="border border-gray-300 rounded-lg ml-7 p-2 w-96"
                placeholder="지역을 선택해주세요"
                name="address"
              >
                <option value="">지역을 선택해주세요</option>
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
            <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
            <div className="ml-20 text-5C5C5C text-left font-Pretendard">
              연락처
              <input
                type="number"
                name="contact"
                className="border border-gray-300 rounded-lg ml-7 p-2 w-96"
                placeholder="- 없이 01012345678 형식으로 입력해주세요"
              />
            </div>
            <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
            <div className="ml-20 text-5C5C5C text-left font-Pretendard">
              이메일
              <input
                type="email"
                name="email"
                className="border border-gray-300 rounded-lg ml-7 p-2 w-96"
                placeholder="ex) example@naver.com"
              />
            </div>
            <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
            <div className="ml-20 text-5C5C5C text-left font-Pretendard flex">
              희망 날짜
              <DatePicker
                className="border border-gray-300 rounded-lg ml-7 p-2 w-36 text-sm"
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
                className="border border-gray-300 rounded-lg ml-2 p-2 w-36 text-sm"
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
            <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
            <div className="ml-20 text-5C5C5C text-left font-Pretendard">
              코멘트
              <input
                type="text"
                name="comment"
                className="border border-gray-300 rounded-lg ml-7 p-2 w-96"
                placeholder="특이사항, 바라는점, 약력 등 무엇이든 남겨보세요 !"
              />
            </div>
            <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
            <div className="ml-20 text-5C5C5C text-left font-Pretendard">
              비밀번호
              <input
                type="password"
                name="password"
                className="border border-gray-300 rounded-lg ml-7 p-2 w-80"
                placeholder="신청 조회용 비밀번호를 입력해주세요"
              />
            </div>

            {/* "신청하기" 버튼 */}
            <div className="mt-4 ml-20 mr-10 mt-[40px] text-right">
              <button
                type="submit"
                className="bg-525151 text-FFD700 rounded-full font-Pretendard py-3 px-8 hover:bg-00694E transition duration-300"
              >
                신청하기
              </button>
            </div>
          </form>
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

export default Form_sitter;
