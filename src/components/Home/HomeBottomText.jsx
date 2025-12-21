import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="flex justify-center gap-5 text-white uppercase mb-3">
      <Link
        className="font-[Lausanne-bold] text-[6.5vw] border-2 border-white rounded-full px-10 leading-[5.5vw] pt-4 hover:text-[#D3FD50] hover:border-[#D3FD50]"
        to="/projects"
      >
        Work
      </Link>
      <Link
        className="font-[Lausanne-bold] text-[6.5vw] border-2 border-white rounded-full px-10 leading-[5.5vw] pt-4 hover:text-[#D3FD50] hover:border-[#D3FD50]"
        to="/agence"
      >
        Agency
      </Link>
    </div>
  );
}

export default HomeBottomText