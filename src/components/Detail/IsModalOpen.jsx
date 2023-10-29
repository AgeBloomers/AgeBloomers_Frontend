import React, { useState } from 'react'

const IsModalOpen = (props) => {
  const { handleCheck, closeModal, setUsername, setPassword, name, password } = props;

  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="bg-gray-600 bg-opacity-75 absolute inset-0"></div>
                  <div className="relative z-10 bg-white rounded-lg overflow-hidden m-[10px] w-full max-w-md">
                    <div className="p-4 sm:p-10 text-center">
                      <h3 className="mb-2 text-2xl font-bold font-Pretendard text-gray-800">
                        사용자 정보 입력
                      </h3>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 w-full mt-4"
                        placeholder="사용자 이름 입력"
                      />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 w-full mt-4"
                        placeholder="비밀번호 입력"
                      />

                      <div className="mt-6 flex justify-center gap-x-4">
                        <button
                          onClick={handleCheck}
                          type="button"
                          className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-525151 text-FFD700 font-Pretendard text-sm"
                        >
                          조회하기
                        </button>
                        <button
                          onClick={closeModal}
                          type="button"
                          className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold bg-525151 text-FFD700 font-Pretendard text-sm"
                        >
                          취소
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                </>
  )
}

export default IsModalOpen