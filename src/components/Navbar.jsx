import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-blue-300 flex justify-between p-5">
      <div className='flex gap-3'>
        <span aria-label="Logo" className='text-fuchsia-600' >iT</span>
        <span className='font-bold text-xl text-fuchsia-900'>iTask</span>
      </div>
      <div className='flex gap-10'>
        <span className='cursor-pointer relative z-10 hover:font-bold transition duration-300 hover:text-blue-500'>
          Home
        </span>
        <span className='cursor-pointer relative z-10 hover:font-bold transition duration-300 hover:text-blue-500'>
          Your Tasks
        </span>

      </div>
    </div>
  );
};

export default Navbar;
