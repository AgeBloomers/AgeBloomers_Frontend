import React, { useEffect, useRef, useState } from 'react';
import YoutubeVideo from './YoutubeVideo';
import Webcam from 'react-webcam'; // react-webcam 라이브러리 추가
import Footer from "../../Main/Footer";


const Stretching_view = ({ urlOption, descript }) => {
  const [boxHidden, setBoxHidden] = useState(false)
  const [isHovered, setIsHovered] = useState(false);
  const webcamRef = useRef(null); // 웹카메라 레퍼런스 추가

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const motionClick = () => {
    if(boxHidden === false) {
      setBoxHidden(true);
    } else {
      setBoxHidden(false);
    }
  };


  useEffect(() => {
    return () => {
      motionClick()
    }
  }, [boxHidden])
  

  return (
    <>
  <main className="sm:h-screen bg-neutral-600 font-[Pretendard]">
    <header className="fixed w-full top-0 z-50 bg-neutral-200">
      <section className="w-[355px] sm:w-[755px] h-[110px] relative bg-neutral-200 left-1/2 transform -translate-x-1/2">
      <div className="w-[181px] h-11 left-[3px] top-[8px] absolute text-center text-emerald-900 text-[23px] font-extrabold">
        AgeBloomers
      </div>
      </section>
    </header>



  {/* Wrapper */}

     <div className="top-[110px] min-w-full h-[615px] sm:h-[1120px] flex justify-center relative bg-neutral-100 text-white font-bold text-[30px] sm:text-[45px]">
      <p className='top-[30px] hidden sm:block sm:p-[26px] text-neutral-600 absolute'>노인 스트레칭</p>
      <button 
      onClick={motionClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`top-[120px] right-[150px] w-[200px] text-[30px] sm:p-[10px] text-neutral-600 absolute rounded-[20px] shadow border-2 bg-amber-400 ${isHovered ? 'bg-amber-500 ' : ''} button-transition`}
      style={{ transitionDuration: '0.15s', transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
    >
      {boxHidden ? '설명 보기' : '자세 모니터링'}
    </button>

    
      
      <div className="p-[20px] flex flex-row justify-center items-center sm:space-x-10">
        {/* YouTube 동영상 임베드 컴포넌트 */}
          <div className="top-[70px] justify-center flex text-left w-[200px] sm:w-[780px] h-[180px] sm:h-[720px] relative">
          <YoutubeVideo urlOption={urlOption}/>
          </div>

        {/* 설명 */}
        {boxHidden === false ? (
          <div className="justify-center items-center hidden sm:block text-left w-[200px] sm:w-[780px] h-[180px] sm:h-[720px] rounded-[20px] relative ">

          <div dangerouslySetInnerHTML={{ __html: descript }}></div>
          </div>
        ) : (
          <div className="justify-center items-center flex text-left w-[200px] sm:w-[780px] h-[180px] sm:h-[720px] relative">
           <Webcam
                audio={false}
                ref={webcamRef} // 웹카메라 레퍼런스 연결
                screenshotFormat="image/jpeg"
                width={780}
                height={480}
              />
          </div>
        )}
        
        </div>
      </div>
        

  


      {/* Footer */}
      <Footer />
    </main>

    </>
  );
};

export default Stretching_view;
