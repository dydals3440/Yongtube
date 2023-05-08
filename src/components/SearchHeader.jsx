import React, { useEffect, useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

export default function SearchHeader() {
  const [text, setText] = useState('');
  const { keyword } = useParams();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  /**
   * 뒤로가기 시 params와, search(value)를 동일 시키는 기능
   */
  useEffect(() => setText(keyword || ''), [keyword]);

  return (
    <header className='flex w-full p-4 text-2xl border-b border-zinc-600 mb-4'>
      <Link to='/' className='flex items-center mx-2'>
        <BsYoutube className='text-4xl text-brand mr-2' />
        <h1 className='font-bold ml-2 text-3xl'>Yongtube</h1>
      </Link>
      <form className='w-full flex justify-center' onClick={handleClick}>
        <input
          className='w-7/12 p-2 outline-none bg-black text-gray '
          type='text'
          placeholder='search'
          value={text}
          onChange={handleChange}
        />
        <button className='bg-zinc-600 px-4'>
          <BsSearch></BsSearch>
        </button>
      </form>
    </header>
  );
}
