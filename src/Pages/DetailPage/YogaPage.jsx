import React from 'react'
import DummyPoints from '../../components/DummyPoints'

const YogaPage = () => {
  return (
    <>
     <main className='sm:h-screen bg-neutral-600 font-[Pretendard]'>
     
      <h1>더미 포인트 데이터 가져오기</h1>
      <DummyPoints /> {/* DummyPoints 컴포넌트를 렌더링 */}

     </main>
    </>
   
  )
}

export default YogaPage