import Card from "./Card";
import React from "react";
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";


export default function Testimonials(props){
    let reviews=props.reviews;
    const [index, setIndex] = React.useState(0);
    function leftShiftHandler(index){
        if(index-1<0){
            setIndex(reviews.length-1);
        }
        else{
            setIndex(index-1);
        }
        // console.log(index);
    }
    function rightShiftHandler(index){
        if(index+1>=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
        // console.log(index);
    }
    function surpriseHandler(){
        setIndex(Math.floor(Math.random()*reviews.length));
        // console.log(index);
    }
    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
         mt-10 p-8 transition-all duration-700 hover:shadow-xl rounded-md">
        <Card review={reviews[index]}></Card>
        <div className="flex text-3xl mt-5 gap-3 justify-center text-violet-400 font-bold">
                <button onClick={()=>leftShiftHandler(index)}
                 className='cursor-pointer hover:text-violet-500'>
                    <FiChevronLeft/>
                </button>
                <button onClick={()=>rightShiftHandler(index)}
                className="cursor-pointer hover:text-violet-500">
                    <FiChevronRight/>
                </button>
            </div>
            <div>
                <button onClick={surpriseHandler}
                className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
                mt-2 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                    Surprise Me
                </button>
            </div>
        </div>
    )
}