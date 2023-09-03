import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Yoga_view from "./Yoga_view";

const Yoga = () => {
  const [urlOption, setUrlOption] = useState('');


    const handleButtonClick = ( key ) => {
      // const newState = "k_P-iOeXcZE"; // 새로운 상태 값
      setUrlOption(key);
    };

    useEffect(() => {
    }, [urlOption])
    
  return (
    <>
    {urlOption!='' && (
      <div>
      <Yoga_view urlOption={urlOption} /> {/* prop으로 전달 */}
      </div>
    )
    }
    


    {urlOption === '' && (
    <main className="sm:h-screen bg-neutral-600 font-[Pretendard]">
    <header className=" fixed w-full top-0 z-50 bg-neutral-200 ">
      <section className="w-[355px] sm:w-[755px] h-[140px] relative bg-neutral-200 left-1/2 transform -translate-x-1/2">
      <div className="w-[181px] h-11 left-[3px] top-[8px] absolute text-center text-emerald-900 text-[23px] font-extrabold">
          AgeBloomers
        </div>
      </section>
      </header>


      {/* Button Wrapper */}
      <div className="top-[140px] sm:pt-[20px] min-w-full h-[615px] sm:h-[500px] flex justify-center relative bg-neutral-100 text-white font-bold text-[20px] sm:text-[28px]">
      <p className='hidden sm:block text-neutral-600 absolute'>임산부 요가</p>
      <div className="w-[390px] sm:w-[1000px] h-full relative p-[20px] flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="grid grid-cols-2 gap-4">

              {/* 아기 자세 버튼 */}
              
              <button 
                className="w-full bg-slate-400 rounded-[20px] relative shadow border-4"
                onClick={() => handleButtonClick('OA6l5X9RWMQ')}
                >
                <div className="p-[40px]">아기<br />자세</div>
              </button>

              {/* 사바 아바나 버튼 */}
              <button 
                className="w-full bg-slate-400 rounded-[20px] relative shadow border-4"
                onClick={() => handleButtonClick('gftwm-GrHrE')}
                >
                  <div className="p-[40px]">사바<br />아바나</div>
                  </button>

              {/* 고양이 자세 버튼 */}
                  <button 
                    className="w-full bg-slate-400 rounded-[20px] relative shadow border-4"
                    onClick={() => handleButtonClick('Kvc9R9ejXWQ')}
                  >
                  <div className="p-[40px]">고양이<br />자세</div>
                  </button>

              {/* 나비 자세 버튼 */}
                  <button 
                    className="w-full bg-slate-400 rounded-[20px] relative shadow border-4"
                    onClick={() => handleButtonClick('Yr1l330oMvE')}
                  >
                  <div className="p-[40px]">나비<br />자세</div>
                  </button>


              </div>
          </div>
      </div>


        {/* Footer */}
        <footer className="top-[140px] min-w-full h-[200px] sm:h-[200px] relative">
            <div className="w-full h-full relative flex justify-center bg-neutral-600 ">
              {/* 문구 영역 */}
              <div className="top-[25px] absolute text-yellow-400 text-[23px] font-extrabold">
                AgeBloomers
              </div>
            </div>
          </footer>
          </main>
          )}
      
          </>     
    );
}

export default Yoga;