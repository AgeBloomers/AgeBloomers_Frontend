import { Link } from "react-router-dom";

const Stretching = () => {
    return (
        <>   
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
    <p className='hidden sm:block text-neutral-600 absolute'>노인 스트레칭</p>
    <div className="w-[390px] sm:w-[1000px] h-full relative p-[20px] flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
        <div className="grid grid-cols-2 gap-4">
            {/* 호흡 버튼 */}
            <Link to="/SelectCare/Stretching/Stretching_view">
            <button className="w-full bg-slate-400 rounded-[20px] relative shadow border-4">
                <div className="p-[40px]">호흡<br />하기</div>
                </button>
                </Link>
            
            {/* 명상 버튼 */}
            <Link to="/SelectCare/Stretching/Stretching_view">
            <button className="w-full bg-slate-400 rounded-[20px] relative shadow border-4">
                <div className="p-[40px]">명상<br />하기</div>
                </button>
                </Link>

            {/* 다리 운동 버튼 */}
            <Link to="/SelectCare/Stretching/Stretching_view">
                <button className="w-full bg-slate-400 rounded-[20px] relative shadow border-4">
                <div className="p-[40px]">다리 근육<br />운동</div>
                </button>
            </Link>
            {/* 팔 운동 버튼 */}
            <Link to="/SelectCare/Stretching/Stretching_view">
            <button className="w-full bg-slate-400 rounded-[20px] relative shadow border-4">
                        <div className="p-[40px]">팔 근육<br />운동</div>
                </button>
            </Link>

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
        </>
    );
};

export default Stretching;