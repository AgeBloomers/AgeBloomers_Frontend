import { useState, useEffect } from 'react';

const DummyPoints = () => {
  const [points, setPoints] = useState([]); // 더미 포인트 데이터를 저장할 상태 변수

  useEffect(() => {
    // API에서 더미 포인트 데이터를 가져오는 함수
    const fetchDummyPoints = async () => {
      try {
        const response = await fetch('http://43.201.76.22:8080/api/hello');
        if (response.ok) {
          const jsonData = await response.json();
          setPoints(jsonData.points); // 데이터를 상태에 업데이트
        } else {
          console.error('Failed to fetch data from the API.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDummyPoints(); // 데이터 가져오는 함수 호출
  }, []); // useEffect를 빈 배열로 전달하여 컴포넌트가 처음 렌더링될 때만 데이터를 가져옴

  return (
    <div>
      <h2>더미 포인트 데이터:</h2>
      <ul>
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default DummyPoints;