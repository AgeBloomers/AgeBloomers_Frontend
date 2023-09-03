import React from 'react';


const Yoga_view = () => {
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
      <p className='hidden sm:block text-neutral-600 absolute'>임산부 요가</p>
      <div className='absolute top-[100px]'>
      {/* YouTube 영상을 임베드하는 iframe */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/d79q-ciy7P8K0vro"
        title="고양이 영상"
        frameBorder="0"
        allowFullScreen
      ></iframe>
        </div>
      </div>
      <div className="top-[140px] sm:pt-[20px] min-w-full h-[615px] sm:h-[500px] flex justify-center relative bg-neutral-100 text-white font-bold text-[20px] sm:text-[28px]">
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

export default Yoga_view;
