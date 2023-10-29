import React, { useEffect, useState } from "react";
import Yoga_view from "./Yoga_view";

const Yoga = () => {
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


    {urlOption!='' && (
      <div>
      <Yoga_view urlOption={urlOption} descript={descript} /> {/* prop으로 전달 */}
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
      <div className="top-[140px] sm:pt-[20px] min-w-full h-[615px] sm:h-[500px] flex justify-center relative bg-neutral-100 text-white font-bold text-[20px] sm:text-[35px]">
      <div className="w-[390px] sm:w-[1000px] h-full relative p-[20px] flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="grid grid-cols-2 gap-4">

              {/* 아기 자세 버튼 */}
              
              <button 
                className="w-full bg-slate-400 rounded-[20px] relative shadow border-4"
                onClick={() => handleButtonClick(
                  {key: 'OA6l5X9RWMQ', value: `
                  <div style="padding: 10px; width: 750px; text-align: left; font-weight: bold; color: #767171; font-size: 20px;">
                  
                  <p style="font-style: italic;">
                  #스트레칭과 편안함 #호흡과 안정감 #소화 개선
                  </p><br />
                  <h2 style="font-size: 30px; color: black;">설명</h2><br />
                  <p>
                    아기 자세는 임산부 요가에서 사용되는 자세 중 하나로, 임신 중 편안한 자세를 취할 수 있도록 도와주는 자세입니다.
                  </p><br />
                  
                  <h2 style="font-size: 30px; color: black;">효과</h2><br />
                  <p style="color: #FF8E00">스트레칭과 편안함</p>
                    <p>아기 자세는 임신 중 어깨, 등, 다리 등의 근육을 스트레칭하고 풀어줄 수 있어 몸의 피로와 긴장을 완화하는 데 도움이 됩니다.
                  </p><br />
                  
                  <p style="color: #FF8E00">호흡과 안정감</p>
                  <p>아기 자세를 취하면 효과적인 호흡을 돕고, 임신 중 느끼는 스트레스와 긴장을 감소시킬 수 있습니다.
                </p><br />
                  
                <p style="color: #FF8E00">소화 개선</p>
                <p>아기 자세는 소화를 개선하고 소화 불편을 완화하는 데 도움을 줄 수 있습니다.
              </p><br />
                </div>
                  `})}
                >
                <div className="p-[40px]">아기<br />자세</div>
              </button>

              {/* 사바 아바나 버튼 */}
              <button 
                className="w-full bg-slate-400 rounded-[20px] relative shadow border-4"
                onClick={() => handleButtonClick(
                  {key:'gftwm-GrHrE', value: `
                  <div style="padding: 10px; width: 750px; text-align: left; font-weight: bold; color: #767171; font-size: 20px;">
                  
                  <p style="font-style: italic;">
                  #스트레스 감소 #체력 강화 #통증 완화
                  </p><br />
                  <h2 style="font-size: 30px; color: black;">설명</h2><br />
                  <p>
                    사바 아바나는 임산부 요가에서 사용되는 자세 중 하나로, 임신 중 편안한 자세를 취할 수 있도록 도와주는 자세입니다.
                  </p><br />
                  
                  <h2 style="font-size: 30px; color: black;">효과</h2><br />
                  <p style="color: #FF8E00">스트레스 감소</p>
                    <p>임신은 여러 가지 불편한 증상과 스트레스를 유발할 수 있으며, 사바 아바나 요가를 통해 심신의 평화와 안정을 찾을 수 있습니다.
                  </p><br />
                  
                  <p style="color: #FF8E00">체력 강화</p>
                  <p>임신 중에는 몸이 변화하고 무거워지는 경향이 있습니다. 임산부 요가는 근육을 강화하고 몸의 유연성을 유지하는 데 도움을 줄 수 있습니다.
                </p><br />
                  
                <p style="color: #FF8E00">통증 완화</p>
                <p>요가 자세와 숨쉬기 연습은 등, 골반, 발목 등의 통증을 완화할 수 있으며, 출산을 준비하는 데 도움을 줄 수 있습니다.
                </p><br />
                </div>`})}
                >
                  <div className="p-[40px]">사바<br />아바나</div>
                  </button>

              {/* 고양이 자세 버튼 */}
                  <button 
                    className="w-full bg-slate-400 rounded-[20px] relative shadow border-4"
                    onClick={() => handleButtonClick(
                      {key:'Kvc9R9ejXWQ', value: `
                      <div style="padding: 10px; width: 750px; text-align: left; font-weight: bold; color: #767171; font-size: 20px;">
                  
                  <p style="font-style: italic;">
                  #호흡 연습 #등과 골반 강화 #배의 압력 완화
                  </p><br />
                  <h2 style="font-size: 30px; color: black;">설명</h2><br />
                  <p>
                    고양이 자세는 임산부 요가에서 사용되는 자세 중 하나로, 임신 중 편안한 자세를 취할 수 있도록 도와주는 자세입니다.
                  </p><br />
                  
                  <h2 style="font-size: 30px; color: black;">효과</h2><br />
                  <p style="color: #FF8E00">호흡 연습</p>
                    <p>이 자세를 할 때 균형 잡힌 숨쉬기 연습을 할 수 있습니다. 균형 잡힌 숨쉬기는 스트레스 감소와 긴장 완화에 도움이 되며, 출산 시에도 유용할 수 있습니다.
                  </p><br />
                  
                  <p style="color: #FF8E00">등과 골반 강화</p>
                  <p>고양이 자세는 등과 골반 근육을 강화하는 데 도움이 됩니다. 이러한 근육은 임신 중에 중요하며, 자세한 동작을 필요로 하지 않기 때문에 상대적으로 간단하게 수행할 수 있습니다.
                </p><br />
                  
                <p style="color: #FF8E00">배의 압력 완화</p>
                <p>고양이 자세는 배의 압력을 완화할 수 있는데, 이는 임신 중에 발생할 수 있는 속쓰림 및 소화 문제를 완화하는 데 도움을 줄 수 있습니다.
                </p><br />
                </div>`})}
                  >
                  <div className="p-[40px]">고양이<br />자세</div>
                  </button>

              {/* 나비 자세 버튼 */}
                  <button 
                    className="w-full bg-slate-400 rounded-[20px] relative shadow border-4"
                    onClick={() => handleButtonClick(
                      {key: 'Yr1l330oMvE', value: `
                      <div style="padding: 10px; width: 750px; text-align: left; font-weight: bold; color: #767171; font-size: 20px;">
                  
                  <p style="font-style: italic;">
                  #골반 근육 강화 #엉덩이 유연성 향상 #배의 편안함
                  </p><br />
                  <h2 style="font-size: 30px; color: black;">설명</h2><br />
                  <p>
                    나비 자세는 임산부 요가에서 사용되는 자세 중 하나로, 임신 중 편안한 자세를 취할 수 있도록 도와주는 자세입니다.
                  </p><br />
                  
                  <h2 style="font-size: 30px; color: black;">효과</h2><br />
                  <p style="color: #FF8E00">골반 근육 강화</p>
                    <p>나비 자세는 골반 근육을 강화하는 데 도움을 줄 수 있습니다. 강한 골반 근육은 임신과 출산을 지원하고 불편한 증상을 완화하는 데 도움이 됩니다.
                  </p><br />
                  
                  <p style="color: #FF8E00">엉덩이 유연성 향상</p>
                  <p> 나비 자세는 엉덩이 근육을 스트레칭하고 향상시킬 수 있습니다. 이는 임신 중에 발생할 수 있는 엉덩이 통증과 긴장을 완화하는 데 도움이 됩니다.
                </p><br />
                  
                <p style="color: #FF8E00">배의 편안함</p>
                <p>나비 자세는 배의 압력을 완화할 수 있으며, 소화 문제나 속쓰림을 완화하는 데 도움이 됩니다.
                </p><br />
                </div>`})}
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