import { useState } from "react";
import NavBar from "../Main/NavBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form_sitter = () => {
  const divStyle = {
    width: "600px",
    height: "1100px",
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleStartTimeChange = (time) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        type: e.target.type.value,
        name: e.target.name.value,
        age: e.target.age.value,
        gender: e.target.gender.value,
        area: e.target.area.value,
        contact: e.target.contact.value,
        email: e.target.email.value,
        startDate: selectedDate,
        endDate: endDate,
        startTime: startTime,
        endTime: endTime,
        comment: e.target.comment.value,
        password: e.target.password.value,
      };
      // 데이터 출력
      console.log("전송할 데이터:", formData);

      const jsonData = JSON.stringify(formData);

      const response = await fetch("http://43.201.76.22:8080/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: jsonData,
      });

      if (response.ok) {
        alert("신청이 완료되었습니다.");
      } else {
        console.error("신청 실패:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("신청 실패:", error);
    }
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

          <form onSubmit={handleSubmit}>
            <p className="mt-10 ml-20 text-5C5C5C text-left font-Pretendard">
              유형
              <div className="ml-20 -mt-5">
                <label className="mr-4 ml-20">
                  <input type="radio" name="type" value="베이비시터" />{" "}
                  베이비시터
                </label>
                <label className="ml-20">
                  <input type="radio" name="type" value="부모" /> 부모
                </label>
              </div>
            </p>
            <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
            <p className="ml-20 text-5C5C5C text-left font-Pretendard">
              이름
              <input
                type="text"
                name="name"
                className="border border-gray-300 rounded-lg ml-10 p-2 w-96"
                placeholder="부모님은 자녀 이름을 입력해주세요"
              />
            </p>
            <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
            <p className="ml-20 text-5C5C5C text-left font-Pretendard flex items-center">
              나이
              <input
                type="text"
                name="age"
                className="border border-gray-300 rounded-lg ml-10 p-2 w-20"
                placeholder=""
              />
              <div className="ml-2">세</div>
              <div className="ml-2 text-ef4444">
                * 부모님은 자녀 정보를 입력해주세요
              </div>
            </p>

            <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>

            <p className="ml-20 text-5C5C5C text-left font-Pretendard">
              성별
              <div className="ml-20 -mt-5">
                <label className="mr-4 ml-20">
                  <input type="radio" name="gender" value="여성" /> 여성
                </label>
                <label className="ml-20">
                  <input type="radio" name="gender" value="남성" /> 남성
                </label>
              </div>
            </p>
            {/* "지역" 입력 요소에 name 속성 추가 */}
            <p className="ml-20 text-5C5C5C text-left font-Pretendard">
              지역
              <select
                className="border border-gray-300 rounded-lg ml-7 p-2 w-96"
                placeholder="지역을 선택해주세요"
                name="area" // name 속성 추가
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
            </p>
            <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
            <p className="ml-20 text-5C5C5C text-left font-Pretendard">
              연락처
              <input
                type="text"
                name="contact"
                className="border border-gray-300 rounded-lg ml-7 p-2 w-96"
                placeholder="010-0000-0000 형식으로 입력해주세요"
              />
            </p>
            <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
            <p className="ml-20 text-5C5C5C text-left font-Pretendard">
              이메일
              <input
                type="email"
                name="email"
                className="border border-gray-300 rounded-lg ml-7 p-2 w-96"
                placeholder="ex) example@naver.com"
              />
            </p>
            <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>

            {/* "희망 시간 선택" 부분 수정 */}
            <div className="ml-20 text-5C5C5C text-left font-Pretendard flex">
              희망 날짜 선택
              <DatePicker
                className="border border-gray-300 rounded-lg ml-7 p-2 w-28 text-sm"
                placeholderText="시작일 선택"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy/MM/dd"
                name="startDate"
              />
              <p className="mt-2 ml-2">부터</p>
              <DatePicker
                className="border border-gray-300 rounded-lg ml-2 p-2 w-28 text-sm"
                placeholderText="종료일 선택"
                selected={endDate}
                onChange={handleEndDateChange}
                dateFormat="yyyy/MM/dd"
                name="endDate"
              />
              <p className="mt-2 ml-2">까지</p>
            </div>

            {/* 시간 선택 */}
            <div className="ml-20 text-5C5C5C text-left font-Pretendard flex">
              희망 시간 선택
              <DatePicker
                selected={startTime}
                onChange={handleStartTimeChange}
                showTimeSelect
                showTimeSelectOnly
                dateFormat="h:mm aa"
                className="border border-gray-300 rounded-lg ml-7 p-2 w-24 text-sm"
                timeFormat="HH:mm"
                placeholderText="시작 시간 선택"
                name="startTime"
              />
              <p className="mt-2 ml-2">부터</p>
              <DatePicker
                selected={endTime}
                onChange={handleEndTimeChange}
                showTimeSelect
                showTimeSelectOnly
                dateFormat="h:mm aa"
                className="border border-gray-300 rounded-lg ml-2 p-2 w-24 text-sm"
                timeFormat="HH:mm"
                placeholderText="종료 시간 선택"
                name="endTime"
              />
              <p className="mt-2 ml-2">까지</p>
            </div>

            <p className="ml-20 text-5C5C5C text-left font-Pretendard">
              코멘트
              <input
                type="text"
                name="comment"
                className="border border-gray-300 rounded-lg ml-7 p-2 w-96"
                placeholder="특이사항, 바라는점, 약력 등 무엇이든 남겨보세요 !"
              />
            </p>
            <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
            <p className="ml-20 text-5C5C5C text-left font-Pretendard">
              비밀번호
              <input
                type="password"
                name="password"
                className="border border-gray-300 rounded-lg ml-7 p-2 w-80"
                placeholder="신청 조회용 비밀번호를 입력해주세요"
              />
            </p>

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
