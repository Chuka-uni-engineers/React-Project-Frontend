import profiles  from "./profile";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

function Carousel(){
    const [index, setIndex] = useState(0);

    const nextSlide = ()=>{
        setIndex((previndex)=> (previndex + 3) % profiles.length);
    }

    const prevSlide = ()=>{
        setIndex((previndex)=> (previndex - 3 + profiles.length) % profiles.length);
    }

    return(
        <div className="border m-4 bg-sky-100 max-h-max h-[90%] w-auto grid grid-cols-3 relative">
            {[0,1,2].map((offset)=>(
                <Profile leader={profiles[(index + offset) % profiles.length]}/>
            ))}
        
            <div className="absolute self-center m-x-4 space-x-[1280px]">
                <button onClick={prevSlide} className=" bg-white hover:bg-slate-900">
                    <FaArrowLeft/>
                </button>
                <button>
                    <FaArrowRight onClick={nextSlide} className=" bg-white hover:bg-gray-500"/>
                </button>
            </div>
        </div>
    );
}

function Profile({leader, index}){
    return(
        <div className="border m-8 h-[85%] w-auto bg-white hover:bg-slate-400" index={index + 1}>
            <>
                <img src={leader.url} alt={leader.alt} className="w-full h-3/4"/> 
            </>
            <>
                <h3 className="h-auto w-auto text-center">{leader.name}</h3>
                <p className="h-auto w-auto">{leader.description}</p>
            </>
        </div> 

    )

}

export default Carousel;