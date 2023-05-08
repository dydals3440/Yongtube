import React, { useState } from 'react';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

export default function SearchHeader() {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };
  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/videos/${text}`);
  };
  return (
    <header>
      <Link to='/'>
        <BsYoutube />
        <h1>Yongtube</h1>
      </Link>
      <form onClick={handleClick}>
        <input
          type='text'
          placeholder='search'
          value={text}
          onChange={handleChange}
        />
        <button>
          <BsSearch></BsSearch>
        </button>
      </form>
    </header>
  );
}
