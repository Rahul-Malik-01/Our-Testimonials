import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;

  return (
    <div className="flex flex-col items-center gap-4">
      <div>
        <img className="absolute -left-[1.3rem] md:left-[1.5rem] -top-[5rem] z-20 w-[140px] h-[140px] rounded-full" src={review.image} />
        <div className="absolute -left-[0.8rem] md:left-[2rem] -top-[5.3rem] z-10 w-[140px] h-[140px] rounded-full bg-blue-500"></div>
      </div>

      <div>
        <p className="font-bold text-2xl tracking-wider capitalize text-center">{review.name}</p>
        <p className="text-sm font-[500] text-blue-300 uppercase text-center tracking-wider">{review.job}</p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="text-blue-400 text-2xl">
            <FaQuoteLeft />
        </div>
        <p className="text-center text-slate-500">{review.text}</p>
        <div className="text-blue-400 text-2xl">
            <FaQuoteRight />
        </div>
      </div>
    </div>
  )
}

export default Card
