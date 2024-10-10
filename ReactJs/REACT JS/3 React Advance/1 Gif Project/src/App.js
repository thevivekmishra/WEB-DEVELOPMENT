import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';
import background from './assets/background.jpg';

const App = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen">
      <div className="relative">
        {/* Background Image */}
        {/* <img
          src={background}
          className="w-screen h-screen object-fill absolute top-0 left-0 z-0"
          alt="background"
        /> */}

        {/* Content on top of background */}
        <div className="absolute top-0 left-0 right-0 z-10">
          {/* Title */}
          <h1 className="text-center text-2xl bg-white py-2 m-6">Random GIFs</h1>

          {/* GIF Components */}
          <div className="flex flex-col items-center space-y-8 m-6">
            <Random />
            <Tag />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
