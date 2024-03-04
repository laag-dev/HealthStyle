import React from 'react';

const Result = () => {
  return (
    <div className="flex justify-between items-start p-20">
      <div className="w-1/2 pr-4">
        <div className="flex items-center mb-4">
          <p className="text-2xl font-bold mr-4 ml-2">Result</p>
        </div>
        <hr className="border-t-4 border-blue-500 mb-4 w-[100px]" />
        <h1 className="text-5xl font-bold mb-4 text-left">BUILT TO BRING</h1>
        <h1 className="text-5xl font-bold mb-4 text-left">BEST RESULTS</h1>
        <p className="text-left mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
        <div className="text-left">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Read More
          </button>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center h-full">
  <div className="flex flex-col items-center">
    <img className="w-58 h-auto rounded-lg mb-4  h-[400px]" src="https://via.placeholder.com/300" alt="Before" />
    {/* <span className="text-sm">Before</span> */}
  </div>
  <div className="flex flex-col items-center ml-4 h-full">
    <img className="w-58 h-auto rounded-lg mb-4 h-[400px]" src="https://via.placeholder.com/300" alt="After" />
    {/* <span className="text-sm">After</span> */}
  </div>
</div>



    </div>
  );
};

export default Result;
