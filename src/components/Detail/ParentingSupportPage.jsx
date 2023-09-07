import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Main/Footer';

const ParentingSupportPage = () => {
  const [data, setData] = useState({});
  const [ParentingdataFir, setParentingdataFir] = useState([]);
  const [ParentingdataSec, setParentingdataSec] = useState([]);

  useEffect(() => {
    axios.get('http://43.201.76.22:8080/api/data')
      .then(res => {
        setData(res.data);
        setParentingdataFir(res.data['아동복지정책'] || []);
        setParentingdataSec(res.data['출산정책'] || []);
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      });
  }, []);

  return (
    <main className="sm:h-screen bg-neutral-600 font-[Pretendard]">
      <header className="fixed w-full top-0 bg-neutral-200">
        <section className="w-[355px] sm:w-[755px] h-[140px] relative bg-neutral-200 left-1/2 transform -translate-x-1/2">
          <div className="w-[181px] h-11 left-[3px] top-[8px] absolute text-center text-emerald-900 text-[23px] font-extrabold">
            AgeBloomers
          </div>
        </section>
      </header>

      {/* Wrapper */}
      <div className="top-[140px] sm:pt-[20px] min-w-full sm:min-w-[500px] h-[auto] sm:h-[600px] flex flex-col items-center relative bg-neutral-100 font-bold text-[20px] sm:text-[30px]">
  <p className='p-[20px] sm:block text-center text-neutral-600'>아동복지정책</p>
  <div className='text-neutral-600 text-[17px] sm:text-[23px]'>
    {ParentingdataFir.map(policy => (
      <div key={policy.title} className="w-full sm:w-[500px] mb-[20px]">
        <div className='flex items-center justify-between h-[65px] sm:h-[80px] bg-yellow-400 rounded-[20px] border-zinc-500'>
          <div className='ml-[20px] w-[220px] sm:w-full flex-grow h-[20px] sm:h-[40px]'>{policy.title}</div>
          <a href={policy.policyLink} target="_blank" rel="noopener noreferrer">
            <button className='mr-[10px] h-[30px] sm:h-[40px] w-[70px] sm:w-[120px] relative ml-auto bg-neutral-600 rounded-[20px] text-white border-zinc-500'>
              이동
            </button>
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

<div className="top-[140px] sm:pt-[20px] min-w-full sm:min-w-[500px] h-[auto] sm:h-[600px] flex flex-col items-center relative bg-neutral-100 font-bold text-[20px] sm:text-[30px]">
  <p className='p-[20px] sm:block text-center text-neutral-600'>출산정책</p>
  <div className='text-neutral-600 text-[17px] sm:text-[23px]'>
    {ParentingdataSec.map(policy => (
      <div key={policy.title} className="w-full sm:w-[500px] mb-[20px]">
        <div className='flex items-center justify-between h-[65px] sm:h-[80px] bg-yellow-400 rounded-[20px] border-zinc-500'>
          <div className='ml-[20px] w-[220px] sm:w-full flex-grow h-[20px] sm:h-[40px]'>{policy.title}</div>
          <a href={policy.policyLink} target="_blank" rel="noopener noreferrer">
            <button className='mr-[10px] h-[30px] sm:h-[40px] w-[70px] sm:w-[120px] relative ml-auto bg-neutral-600 rounded-[20px] text-white border-zinc-500'>
              이동
            </button>
          </a>
        </div>
      </div>
    ))}
  </div>
</div>




      {/* Footer */}
      <Footer />
    </main>
  )
}

export default ParentingSupportPage;
