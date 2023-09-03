import React, { useEffect } from 'react';
import YoutubeVideo from './YoutubeVideo';

const Yoga_view = ( { urlOption, descript } ) => {
  return (
   
    <>
    
    <main className="sm:h-screen bg-neutral-600 font-[Pretendard]">
    <header className=" fixed w-full top-0 z-50 bg-neutral-200 ">
      <section className="w-[355px] sm:w-[755px] h-[110px] relative bg-neutral-200 left-1/2 transform -translate-x-1/2">
      <div className="w-[181px] h-11 left-[3px] top-[8px] absolute text-center text-emerald-900 text-[23px] font-extrabold">
          AgeBloomers
        </div>
      </section>
      </header>


      {/* Button Wrapper */}
      <div className="top-[110px] sm:p-[20px] min-w-full h-[600px] sm:h-[715px] flex justify-center relative bg-neutral-100 text-white font-bold text-[20px] sm:text-[38px]">
      <p className='hidden sm:block sm:p-[26px] text-neutral-600 absolute'>임산부 요가</p>
      <div className='top-[120px] relative'>
      {/* YouTube 동영상 임베드 컴포넌트 */}
            <YoutubeVideo urlOption={urlOption}/>

        </div>
      </div>
      <div className="top-[110px] sm:pt-[20px] min-w-full h-[740px] sm:h-[740px] flex justify-center relative bg-neutral-100 text-white font-extrabold text-[20px] sm:text-[28px]">
      <span className='hidden sm:block text-center text-neutral-600 absolute'>
        <div dangerouslySetInnerHTML={{ __html: descript }}></div>
      </span>
      
      </div>

        {/* Footer */}
        <footer className="top-[110px] min-w-full h-[200px] sm:h-[200px] relative">
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

export default Yoga_view;
