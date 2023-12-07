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
        <div className="border border-green-500 m-4 bg-green-500 max-h-max h-[90%] w-auto grid grid-cols-3 relative">
            {[0,1,2].map((offset)=>(
                <Profile leader={profiles[(index + offset) % profiles.length]}/>
            ))}
        
            <div className="absolute">
                <button onClick={prevSlide}>
                    <FaArrowLeft/>
                </button>
                <button>
                    <FaArrowRight onClick={nextSlide}/>
                </button>
            </div>
        </div>
    );
}

function Profile({leader, index}){
    return(
        <div className="border border-white-500 m-8 h-[85%] w-auto bg-white" index={index + 1}>
            <div>
                <img src={leader.ur} alt={leader.alt}/> 
            </div>
            <div>
                <h1 className="h-auto w-auto">{leader.name}</h1>
                <p className="h-auto w-auto">{leader.description}</p>
            </div>
        </div> 

    )

}

export default Carousel;