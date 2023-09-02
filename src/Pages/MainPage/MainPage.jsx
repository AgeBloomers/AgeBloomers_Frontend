import React from 'react'
import { Link } from 'react-router-dom';




const MainPage = () => {






  return (
   <>

    {/* 헤더 영역 */}
    <main className='sm:h-screen bg-neutral-600 font-[Pretendard]'>
    <header className=" fixed w-full top-0 z-50 bg-neutral-100 ">
      <section className="w-[355px] sm:w-[755px] h-[140px] relative bg-neutral-100 left-1/2 transform -translate-x-1/2" >
      <div className="w-[181px] h-11 left-[3px] top-[8px] absolute text-center text-emerald-900 text-[23px] font-extrabold">AgeBloomers</div>
      <div className="left-[10px] bottom-[15px] absolute text-center justify-center text-emerald-900 text-2xl sm:text-3xl font-extrabold">이런 서비스를 제공해요</div>
      
      <div className="w-[100px] h-8 p-2.5 right-[10px] sm:left-[610px] top-[17px]  items-center justify-center absolute text-xl bg-yellow-400 rounded-[20px] border-zinc-500 inline-flex">
        <button className="font-extrabold">로그인</button>
      </div>
      
      <div className="w-[181px] h-11 left-[3px] top-[8px] absolute text-center text-emerald-900 text-[23px] font-extrabold">AgeBloomers</div>
      </section>
    </header>

  {/* 메인 버튼 Wrapper */}
  <div className="top-[140px] sm:pt-[20px] min-w-full h-[615px] sm:h-[500px] flex justify-center relative bg-neutral-100 text-white font-bold text-[20px] sm:text-[28px]">
    <div className="w-[390px] sm:w-[1000px] h-full relative p-[20px] flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
    {/* 시터 지원하기 */}
    <Link to="/apply-as-sitter">
      <button className='w-[240px] sm:w-[180px] sm:h-[324px] p-[20px] bg-red-400 rounded-[20px] relative shadow border-4'>
        <div className='sm:translate-y-[-10px] sm:text-left'>시터<br/>지원하기</div>
        <div className="sm:p-[20px] sm:h-[150px] bg-no-repeat bg-center bg-contain transform translate-y-[40px]" style={{ backgroundImage: `url('src/img/button_1.svg')` }}></div>
      </button>
    </Link>

    {/* 내 주변 시터 찾기 */}
    <Link to="/find-local-sitters">
      <button className='w-[240px] sm:w-[180px] sm:h-[324px] p-[20px] bg-lime-400 rounded-[20px] relative shadow border-4'>
      <div className='sm:translate-y-[-50px] sm:text-left'>내 주변<br/>시터 찾기</div>
        <div className="sm:p-[20px] sm:h-[80px] bg-no-repeat bg-center bg-contain transform translate-y-[20px]" style={{ backgroundImage: `url('src/img/button_2.svg')` }}></div>
      </button>
    </Link>
    {/* 육아 지원 프로그램 */}
    <Link to="/parenting-support">
      <button className='w-[240px] sm:w-[180px] sm:h-[324px] p-[20px] bg-rose-300 rounded-[20px] relative shadow border-4'>
      <div className='sm:translate-y-[-10px] sm:text-left'>육아 지원<br/>프로그램</div>
        <div className="sm:p-[20px] sm:h-[150px] bg-no-repeat bg-center bg-contain transform translate-y-[20px]" style={{ backgroundImage: `url('src/img/button_3.svg')` }}></div>
      </button>
    </Link>

    {/* 노인 지원 프로그램 */}
    <Link to="/elderly-support">
      <button className='w-[240px] sm:w-[180px] sm:h-[324px] p-[20px] bg-amber-400 rounded-[20px] relative shadow border-4'>
      <div className='sm:translate-y-[-10px] sm:text-left'>노인 지원<br/>프로그램</div>
        <div className="sm:p-[20px] sm:h-[150px] bg-no-repeat bg-center bg-contain transform translate-y-[20px]" style={{ backgroundImage: `url('src/img/button_4.svg')` }}></div>
      </button>
    </Link>
    {/* 요가 및 스트레칭 */}
    <Link to="/yoga">
    <button className='w-[240px] sm:w-[180px] sm:h-[324px] p-[20px] bg-slate-400 rounded-[20px] relative shadow border-4'>
      <div className='sm:translate-y-[-10px] sm:text-left'>요가 및<br/>스트레칭</div>
        <div className="sm:p-[20px] sm:h-[150px] bg-no-repeat bg-center bg-contain transform translate-y-[20px]" style={{ backgroundImage: `url('src/img/button_5.svg')` }}></div>
      </button>
    </Link>
      
  </div>
</div>








    
    {/* Section 1*/}
    <div className="top-[140px] min-w-full h-[350px] sm:h-[390px] flex justify-center relative bg-neutral-100">
      <div className="w-[390px] h-full relative bg-neutral-100">
      {/* 문구 영역 */}
        <div className="w-full h-[30px] absolute text-xl text-emerald-900 font-bold">
        <p className='p-[35px]'>시터를 쉽고 간편하게<br/>구하고 지원하는 새로운 방법</p>



        <div className='w-[150px] h-[80px] p-[20px] left-[25px] absolute text-[25px] 
         bg-yellow-400 rounded-[50px] border flex items-center justify-center text-black'>
        <div className='flex flex-col items-center'>
          <p className='text-center text-lg'>베이베시터</p>
          <p className='text-center'>곽춘배 님</p>
          </div>
        </div>

        <div className='w-[150px] h-[80px] p-[20px] right-[25px] absolute text-[25px] 
         bg-yellow-400 rounded-[50px] border flex items-center justify-center text-black'>
        <div className='flex flex-col items-center'>
          <p className='text-center text-lg'>예약자</p>
          <p className='text-center'>조혜원 님</p>
          </div>
        </div>
        <p className='p-[35px] flex flex-col items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
        </p>

        <div className='p-[35px] flex flex-col items-center'>
          <div className=' bg-emerald-900 rounded-[50px] border flex items-center justify-cente'>
          <button className="flex items-center space-x-2 bg-emerald-900 text-white py-2 px-4 rounded-[50px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <span>매칭 대기 현황 보기</span>
        </button>

          </div>
        </div>


      
        </div>
      </div>
    </div>

    {/* Section 2 */}
    <div className="top-[140px] min-w-full h-[350px] sm:h-[390px] flex justify-center relative bg-neutral-100">
      <div className="w-[390px] h-full relative bg-neutral-100">
      {/* 문구 영역 */}
        <div className="w-full h-[30px] absolute text-xl text-emerald-900 font-bold ">
        <p className=' p-[35px] text-right'>오늘 나의 건강을 위해<br/>요가 스트레칭을 시작하세요</p>
        
        {/* 어르신 스트레칭 아이콘 영역 */}
        <div className='w-[150px] flex items-center h-[150px] p-[20px] left-[30px] absolute text-[25px] border-emerald-900 rounded-[90px] border-4 justify-center'>
        <p className='text-center item-center'>노인<br />스트레칭</p></div>
        {/* 임산부 요가 아이콘 영역 */}
        <div className='w-[150px] flex items-center h-[150px] p-[20px] right-[30px] absolute text-[25px] border-emerald-900 rounded-[90px] border-4 justify-center'>
        <p className='text-center item-center'>임산부<br />요가</p></div>
        
          </div>
        </div>
      </div>


      
    {/* Footer */}
    <footer className="top-[140px] w-full min-h-[170wh] relative flex items-center justify-center bg-neutral-600 ">
      <div className="w-[390px] h-[363px] relative bg-neutral-600">
      <div className="w-[254px] h-16 p-2.5 left-[68px] top-[58px] absolute bg-yellow-400 rounded-[50px] justify-start items-start gap-2.5 inline-flex">
        <button className="w-[233px] h-[43px] text-center text-emerald-900 text-xl font-extrabold">지금 서비스 이용하기</button>
        </div>
        <div className="w-[181px] h-[78px] left-[105px] top-[285px] absolute text-center text-yellow-400 text-[23px] font-extrabold">AgeBloomers</div>
      </div>
    </footer>

    </main>

   </>
  )
}

export default MainPage