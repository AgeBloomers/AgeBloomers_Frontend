import React, { useEffect, useRef, useState } from 'react';
import YoutubeVideo from './YoutubeVideo';
import Footer from '../../Main/Footer';
import NavBar from '../../Main/NavBar';
import Webcam from 'react-webcam'; // react-webcam 라이브러리 추가


const Yoga_view = ({ urlOption, descript }) => {
  const [boxHidden, setBoxHidden] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const webcamRef = useRef(null); // 웹 카메라 레퍼런스 추가

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Mouse Hover
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Motion Click
  const motionClick = () => {
    setBoxHidden(!boxHidden);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const videoWidth = windowSize.width > 390 && windowSize.height > 844 ? 780 : 345;
  const videoHeight = windowSize.width > 390 && windowSize.height > 844 ? 580 : 245;

  return (
    <main className=" bg-neutral-600 font-[Pretendard]">
      <NavBar />
      <div className="top-[140px] sm:top-[110px] min-w-full h-[755px] sm:h-[1120px] flex justify-center relative bg-neutral-100 text-white font-bold text-[30px] sm:text-[45px]">
        <div className="w-[380px] text-neutral-600 sm:w-[1000px] relative flex justify-center bg-neutral-100">
          <div className='sm:top-[50px] sm:right-[150px] sm:w-[500px] text-center justify-center sm:flex absolute'>
            <p className={`text-center p-[20px] text-[30px] sm:text-[45px]`}>임산부 요가</p>  
            <button 
              onClick={motionClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`w-[200px] sm:h-[70px] sm:mt-[100px] text-[23px] sm:text-[28px] rounded-[25px] sm:rounded-[40px] shadow border-2 sm:border-4 bg-amber-400
              ${isHovered ? 'bg-amber-500 ' : ''} button-transition`}
              style={{ transitionDuration: '0.15s', transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}>
              {boxHidden ? '돌아가기' : '자세 모니터링'}
            </button>  
  

          </div>

          <div className="p-[20px] sm:flex justify-center sm:space-x-5">
            {/* YouTube 동영상 임베드 컴포넌트 */}
           <div className={`top-[140px] sm:top-[300px] justify-center text-left relative sm:w-[780px] sm:h-[580px]`}>
              <YoutubeVideo urlOption={urlOption} width={videoWidth} height={videoHeight} />
            </div>
            
             {/* 설명 */}
          {boxHidden === false ? (
            <div className="top-[140px] sm:top-[250px] justify-center items-center hidden sm:block text-left w-[200px] sm:w-[780px] h-[180px] sm:h-[720px] rounded-[20px] relative ">
              <div dangerouslySetInnerHTML={{ __html: descript }}></div>
            </div>
          ) : (
           <div className='top-[140px] sm:top-[300px] justify-center text-left relative sm:w-[780px] sm:h-[580px]'>
              <Webcam
                    audio={false}
                    ref={webcamRef} // 웹카메라 레퍼런스 연결
                    screenshotFormat="image/jpeg"
                    width={videoWidth}
                    height={videoHeight}
                  />
            </div>)}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Yoga_view;
