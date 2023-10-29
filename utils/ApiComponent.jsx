import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ParentingSupportPage from '../src/components/Detail/SelectCommunityPages/ParentingSupportPage';
import ElderlySupportPage from '../src/components/Detail/SelectCommunityPages/ElderlySupportPage';

const apiData = () => {
  const [data, setData] = useState({});
  const [ElderlydataFirst, setElderlydataFirst] = useState([]);
  const [ElderlydataSec, setElderlydataSec] = useState([]);
  const [ParentingdataFirst, setParentingdataFirst] = useState([]);
  const [ParentingdataSec, setParentingdataSec] = useState([]);

  useEffect(() => {
    axios.get('http://43.201.76.22:8080/api/data')
      .then(res => {
        setData(res.data);
        setElderlydataFirst(res.data['노인정책'] || []);
        setElderlydataSec(res.data['노인지원'] || []);
        setParentingdataFirst(res.data['아동복지정책'] || []);
        setParentingdataSec(res.data['출산지원'] || []);
      })
      .catch(error => {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      });
  }, []);

  return (
    <>
      <ParentingSupportPage 
        ParentingdataFirst={ParentingdataFirst}
        ParentingdataSec={ParentingdataSec} />
      <ElderlySupportPage  
      ElderlydataFirst={ElderlydataFirst}
      ElderlydataSec={ElderlydataSec}
      />
    </>
  );
};

export default apiData;
