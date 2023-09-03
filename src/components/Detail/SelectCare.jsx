import { Link } from "react-router-dom";

const Select = () => {
    return (
        <>
        <main className="sm:h-screen bg-neutral-600 font-[Pretendard]">
        <header className=" fixed w-full top-0 z-50 bg-neutral-200 ">
          <section className="w-[355px] sm:w-[755px] h-[140px] relative bg-neutral-200 left-1/2 transform -translate-x-1/2">
          <div className="w-[181px] h-11 left-[3px] top-[8px] absolute text-center text-emerald-900 text-[23px] font-extrabold">
              AgeBloomers
            </div>
            <div className="left-[10px] bottom-[15px] absolute text-center justify-center text-emerald-900 text-2xl sm:text-3xl font-extrabold">
              어떤 것을 하시겠어요?
            </div>
          </section>
        </header>
        
        {/* Button Wrapper */}
        <div className="top-[140px] sm:pt-[20px] min-w-full h-[615px] sm:h-[500px] flex justify-center relative bg-neutral-100 text-white font-bold text-[30px] sm:text-[45px]">
          <div className="w-[390px] sm:w-[1000px] h-full relative p-[20px] flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          {/* 임산부 요가 */}
          <Link to="/SelectCare/Yoga">
              <button className="text-left w-[200px] sm:w-[240px] h-[180px] sm:h-[324px] p-[20px] bg-neutral-400 rounded-[20px] shadow border-4">
                임산부<br />
                요가
                
              </button>
            </Link>

          {/* 노인 스트레칭 */}
          <Link to="/SelectCare/Stretching">
              <button className="text-left w-[200px] sm:w-[240px] h-[180px] sm:h-[324px] p-[20px] bg-neutral-400 rounded-[20px] relative shadow border-4">
                  노인<br />
                  스트레칭
                
              </button>
            </Link>

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
       
        </>
    );
};

export default Select;