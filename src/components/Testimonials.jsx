import React, { useState } from 'react'
import Card from './Card';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Testimonials = (props) => {
  let reviews = props.reviews;
  const[index, setIndex] = useState(0);

  function leftHandler() {
    if(index - 1 < 0) {
        setIndex(reviews.length - 1)
    }
    else {
        setIndex(index - 1)
    }
  }

  function rightHandler() {
    if(index + 1 >= reviews.length) {
        setIndex(0)
    }
    else {
        setIndex(index + 1)
    }
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length)
    setIndex(randomIndex)
  }

  return (
    <div className="bg-[#fff] w-[87vw] md:w-[700px] p-10 rounded-md relative mt-[5rem] md:mt-0">
      <Card review={reviews[index]}/>

      <div className="text-3xl text-center text-blue-400 font-light flex gap-4 justify-center mt-4">
        <button onClick={leftHandler}>
            <FaAngleLeft />
        </button>
        <button onClick={rightHandler}>
            <FaAngleRight />
        </button>
      </div>

      <div className="flex justify-center items-center mt-4">
        <button onClick={surpriseHandler}
        className="bg-blue-400 hover:bg-blue-500 hover:shadow-sm transition-all duration-200 px-10 py-2 text-[#fff] text-lg font-bold
        rounded-md">
            Surprise Me
        </button>
      </div>
    </div>
  )
}

export default Testimonials
