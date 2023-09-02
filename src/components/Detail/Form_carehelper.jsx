import { useState } from "react";
import NavBar from "../Main/NavBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form_carehelper = () => {
  const divStyle = {
    width: "600px",
    height: "1000px",
  };
 
  const [selectedDate, setSelectedDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
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
            <p className="text-left font-Pretendard text-2xl">신청서 작성</p>
          </div>
          <p className="mt-10 ml-20 text-5C5C5C text-left font-Pretendard">
            이름
            <input
              type="text"
              className="border border-gray-300 rounded-lg ml-10 p-2 w-96"
              placeholder="요양보호사님 성함을 입력해주세요"
            />
          </p>
          <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
          <p className="ml-20 text-5C5C5C text-left font-Pretendard">
            나이
            <select
              className="border border-gray-300 rounded-lg ml-10 p-2 w-96 text-gray-400"
              defaultValue=""
            >
              <option value="" disabled hidden>
                나이를 선택해주세요
              </option>
              <option value="10">10대</option>
              <option value="20">20대</option>
              <option value="30">30대</option>
              <option value="40">40대</option>
              <option value="50">50대</option>
              <option value="60">60대</option>
            </select>
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
          <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
          <p className="ml-20 text-5C5C5C text-left font-Pretendard">
            연락처
            <input
              type="text"
              className="border border-gray-300 rounded-lg ml-7 p-2 w-96"
              placeholder="010-0000-0000 형식으로 입력해주세요"
            />
          </p>
          <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
          <p className="ml-20 text-5C5C5C text-left font-Pretendard">
            이메일
            <input
              type="email"
              className="border border-gray-300 rounded-lg ml-7 p-2 w-96"
              placeholder="ex) example@naver.com"
            />
          </p>
          <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
          <div className="ml-20 text-5C5C5C text-left font-Pretendard flex">
            희망 날짜 선택
            <DatePicker
              className="border border-gray-300 rounded-lg ml-7 p-2 w-28 text-sm " // text-sm 추가
              placeholderText="시작일 선택"
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy/MM/dd"
            />
            <p className="mt-2 ml-2">부터</p>
            <DatePicker
              className="border border-gray-300 rounded-lg ml-2 p-2 w-28 text-sm" // text-sm 추가
              placeholderText="종료일 선택"
              selected={endDate}
              onChange={handleEndDateChange}
              dateFormat="yyyy/MM/dd"
            />
            <p className="mt-2 ml-2">까지</p>
          </div>
          <div className="border-t border-FCFCFC mt-4 ml-16 mb-1 p-2 w-4/5"></div>
          <div className="ml-20 text-5C5C5C text-left font-Pretendard flex">
            희망 시간 선택
            <DatePicker
              className="border border-gray-300 rounded-lg ml-7 p-2 w-28 text-sm" // text-sm 추가
              placeholderText="시작일 선택"
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy/MM/dd"
            />
            <p className="mt-2 ml-2">부터</p>
            <DatePicker
              className="border border-gray-300 rounded-lg ml-2 p-2 w-28 text-sm" // text-sm 추가
              placeholderText="종료일 선택"
              selected={endDate}
              onChange={handleEndDateChange}
              dateFormat="yyyy/MM/dd"
            />
            <p className="mt-2 ml-2">까지</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form_carehelper;
