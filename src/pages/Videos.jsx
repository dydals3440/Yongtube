import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
  //   const params = useParams();
  //   const { keyword } = params;
  const { keyword } = useParams();
  return <div>Videos {keyword ? `🍿${keyword}` : `🎉Hot Trend Video`}</div>;
}
