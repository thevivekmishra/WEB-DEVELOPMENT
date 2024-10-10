import axios from 'axios';
import React, { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
  const [gif, setGif] = useState("");

  async function fetchData() {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const output = await axios.get(url);
    console.log(output);
    const gifSource = output.data.data.images.downsized_large.url;
    console.log(gifSource);
    setGif(gifSource);
  }

  console.log('API_KEY:', API_KEY);
  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  return (
    <div className='bg-gray-700 w-[550px] h-[400px] rounded-sm p-2 relative'>
      <h1 className='text-lg text-yellow-400 font-semibold justify-center text-center'>
        Random Gif
      </h1>

      <div className='flex justify-center items-center h-[300px]'>
        {gif ? (
          <img
            src={gif}
            alt='Random Gif'
            className='w-full h-full object-contain' // Ensures proper scaling and centering
          />
        ) : (
          <p className="text-white">Loading...</p>
        )}
      </div>

      <div className='flex justify-center items-center'>
        <button
          onClick={clickHandler}
          className='bg-yellow-400 p-2 rounded-md shadow-lg absolute bottom-6 text-center flex justify-center items-center'
        >
          Generate GIFs
        </button>
      </div>
    </div>
  );
};

export default Random;