import React, { useEffect, useState } from "react";
import Stretching_view from "./Stretching_view";
import Footer from '../../Main/Footer';

const Stretching = () => {

  const [urlOption, setUrlOption] = useState('');
  const [descript, setDescript] = useState('');

  const handleButtonClick = ( { key, value } ) => {
    setUrlOption(key);
    setDescript(value);
  };

  useEffect(() => {
    
  }, [urlOption, descript])
  

    return (
    <>

     {urlOption !='' && (
      <div className="sm:h-full sm:w-full" >
      <Stretching_view urlOption={urlOption} descript={descript}/> {/* prop으로 전달 */}
      </div>
    )}



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
    <p className='hidden sm:block text-neutral-600 absolute'>노인 스트레칭</p>
    <div className="w-[390px] sm:w-[1000px] h-full relative p-[20px] flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
        <div className="grid grid-cols-2 gap-4">
            {/* 호흡 버튼 */}
            <button 
                className="w-full bg-slate-400 rounded-[20px] relative shadow border-4"
                onClick={() => handleButtonClick(
                  {key: 'qkDjMJkLxIo', value: `
                  <div style="padding: 10px; width: 750px; text-align: left; font-weight: bold; color: #767171; font-size: 20px;">
                  
                  <p style="font-style: italic;">
                  #숨쉬기 기능 향상 #면역 체계 지원 #수면 향상
                  </p><br />
                  <h2 style="font-size: 30px; color: black;">설명</h2><br />
                  <p>
                  호흡 운동은 노인에게 다양한 효과를 제공할 수 있는 중요한 활동입니다.
                  </p><br />
                  
                  <h2 style="font-size: 30px; color: black;">효과</h2><br />
                  <p style="color: #FF8E00">숨쉬기 기능 향상</p>
                    <p> 호흡 운동은 폐활량을 향상시키고 폐의 확장력을 유지하는 데 도움이 됩니다. 이는 숨쉬기의 효율성을 높이고 폐 건강을 개선하는 데 도움이 됩니다.
                  </p><br />
                  
                  <p style="color: #FF8E00">면역 체계 지원</p>
                  <p>균형 잡힌 호흡은 면역 체계를 지원하는 데 도움을 줄 수 있습니다. 좋은 숨쉬기는 체내의 산소 공급을 증가시키고 체내 폐암산소를 증가시키는 데 도움이 됩니다.
                </p><br />
                  
                <p style="color: #FF8E00">수면 향상</p>
                <p>균형 잡힌 호흡은 노인의 수면 품질을 개선하는 데 도움이 될 수 있습니다. 깊게 들이마시고 천천히 내쉬는 호흡 기술은 수면 중 깊은 휴식을 취할 수 있도록 도와줍니다.
              </p><br />
                </div>
                  `})}
                >
                <div className="p-[40px]">호흡<br />하기</div>
              </button>
            
            {/* 명상 버튼 */}
            <button 
                className="w-full bg-slate-400 rounded-[20px] relative shadow border-4"
                onClick={() => handleButtonClick(
                  {key: 'RK230zaDMTY', value: `
                  <div style="padding: 10px; width: 750px; text-align: left; font-weight: bold; color: #767171; font-size: 20px;">
                  
                  <p style="font-style: italic;">
                  #자기 인식 향상 #스트레스 감소 #정서적 안정감 향상
                  </p><br />
                  <h2 style="font-size: 30px; color: black;">설명</h2><br />
                  <p>
                  명상은 노인에게 다양한 효과를 제공할 수 있는 중요한 활동입니다.
                  </p><br />
                  
                  <h2 style="font-size: 30px; color: black;">효과</h2><br />
                  <p style="color: #FF8E00">자기 인식 향상</p>
                    <p>명상은 자기 인식을 증진시키는 데 도움이 됩니다. 노인들은 자신의 몸과 마음에 더 연결되고, 자기 이해와 수용을 높일 수 있습니다.
                  </p><br />
                  
                  <p style="color: #FF8E00">스트레스 감소</p>
                  <p>명상은 스트레스를 감소시키는 데 도움이 됩니다. 노인은 삶의 변화나 건강 문제로 인해 스트레스를 느낄 수 있으며, 명상을 통해 마음을 평화롭게 하고 긴장을 완화할 수 있습니다.
                </p><br />
                  
                <p style="color: #FF8E00">정서적 안정감 향상</p>
                <p>명상은 감정을 관리하고 정서적 안정감을 증진시키는 데 도움이 됩니다. 노인들은 외부 환경에 대한 감정적 반응을 관리하고 긍정적인 정서를 느낄 수 있도록 도와줍니다.
              </p><br />
                </div>
                  `})}
                >
                <div className="p-[40px]">명상<br />하기</div>
              </button>

            {/* 다리 운동 버튼 */}
            <button 
                className="w-full bg-slate-400 rounded-[20px] relative shadow border-4"
                onClick={() => handleButtonClick(
                  {key: 'NABkYV6IWYA', value: `
                  <div style="padding: 10px; width: 750px; text-align: left; font-weight: bold; color: #767171; font-size: 20px;">
                  
                  <p style="font-style: italic;">
                  #근육 강화 #균형 및 안정성 향상 #뼈 건강 증진
                  </p><br />
                  <h2 style="font-size: 30px; color: black;">설명</h2><br />
                  <p>
                  다리 운동은 노인에게 다양한 효과를 제공할 수 있는 중요한 활동입니다.
                  </p><br />
                  
                  <h2 style="font-size: 30px; color: black;">효과</h2><br />
                  <p style="color: #FF8E00">근육 강화</p>
                    <p>다리 운동은 대퇴사두근, 종아리 근육 및 엉덩이 근육과 같은 다리 근육을 강화하는 데 도움이 됩니다. 강한 다리 근육은 노인들이 일상 생활 활동을 수행하는 데 필수적이며, 낙상 및 부상 예방에도 도움을 줄 수 있습니다.
                  </p><br />
                  
                  <p style="color: #FF8E00">균형 및 안정성 향상</p>
                  <p>다리 운동은 노인들의 균형과 안정성을 향상시키는 데 도움이 됩니다. 강한 다리 근육은 걸을 때나 일어서고 앉을 때 더 안정적인 자세를 유지하는 데 도움을 줄 수 있습니다.
                </p><br />
                  
                <p style="color: #FF8E00">뼈 건강 증진</p>
                <p>다리 운동은 뼈 밀도를 증가시키고 뼈 건강을 개선하는 데 도움을 줄 수 있습니다. 이는 골다공증과 같은 골격계 질환의 위험을 줄이는 데 도움이 됩니다.
              </p><br />
                </div>
                  `})}
                >
                <div className="p-[40px]">다리 근육<br />운동</div>
              </button>
            {/* 팔 운동 버튼 */}
            <button 
                className="w-full bg-slate-400 rounded-[20px] relative shadow border-4"
                onClick={() => handleButtonClick(
                  {key: 'ImySpB2c5wk', value: `
                  <div style="padding: 10px; width: 750px; text-align: left; font-weight: bold; color: #767171; font-size: 20px;">
                  
                  <p style="font-style: italic;">
                  #근육 강화 #기능적 독립성 유지 #뼈 건강 증진
                  </p><br />
                  <h2 style="font-size: 30px; color: black;">설명</h2><br />
                  <p>
                  팔 운동은 노인에게 다양한 효과를 제공할 수 있는 중요한 활동입니다.
                  </p><br />
                  
                  <h2 style="font-size: 30px; color: black;">효과</h2><br />
                  <p style="color: #FF8E00">근육 강화</p>
                    <p>팔 운동은 상완삼두근, 이두근, 어깨 근육과 같은 팔 근육을 강화하는 데 도움이 됩니다. 이는 노인들이 일상 생활 활동에서 물건을 들거나 올리는 데 도움을 줄 수 있습니다.
                  </p><br />
                  
                  <p style="color: #FF8E00">기능적 독립성 유지</p>
                  <p>강한 팔 근육은 노인들이 일상 생활에서 독립적으로 활동할 수 있도록 도와줍니다. 물건을 들고 옮기거나 더 높은 곳에 물건을 가져다 놓는 데 필요한 기능성을 유지할 수 있습니다.
                </p><br />
                  
                <p style="color: #FF8E00">뼈 건강 증진</p>
                <p>상완삼두근과 같은 팔 근육 강화는 뼈 건강을 증진시키는 데 도움을 줄 수 있습니다. 이는 골다공증과 같은 골격계 질환의 위험을 줄이는 데 도움이 됩니다.
              </p><br />
                </div>
                  `})}
                >
                <div className="p-[40px]">팔 근육<br />운동</div>
              </button>

            </div>
        </div>
    </div>


      {/* Footer */}
      <Footer />
        </main>
        )}
        </>
    );
};

export default Stretching;