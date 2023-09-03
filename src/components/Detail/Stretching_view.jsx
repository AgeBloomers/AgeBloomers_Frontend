import React from 'react';
import YoutubeVideo from './YoutubeVideo';


const Stretching_view = () => {
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
      <div className="top-[140px] sm:pt-[20px] min-w-full h-[600px] sm:h-[650px] flex justify-center relative bg-neutral-100 text-white font-bold text-[20px] sm:text-[28px]">
      <p className='hidden sm:block text-neutral-600 absolute'>노인 스트레칭</p>
      <div className=' absolute top-[100px]'>
      {/* YouTube 동영상 임베드 컴포넌트 */}
            <YoutubeVideo />
        </div>
      </div>
      <div className="top-[140px] sm:pt-[20px] min-w-full h-[720px] sm:h-[500px] flex justify-center relative bg-neutral-100 text-white font-bold text-[20px] sm:text-[28px]">
      <p className='hidden sm:block text-neutral-600 absolute'>설명</p>
      
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
  )
}

export default Stretching_view;
