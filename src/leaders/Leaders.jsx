//import images from "./images";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

function Carousel({slides}){
    let [current, setCurrent] = useState(0);
    //check previous slide
    let previousSlide = ()=>{
        //check if current == 0
        if(current === 0){
          setCurrent(slides.length-1);
        } 
        else{
            setCurrent(current - 1);
        }
    }

    let nextSlide = ()=>{
        if(current === slides.length-1){
            setCurrent(0);
        }else{
            setCurrent(current + 1);
        }
    }
    return(
        <div className="overflow-hidden relative">
            
          <div className="flex transition ease-out duration 40 ]" style={{
            transform: `translateX(-${current * 101}%)`,
          }}>
                {/* { slides.map((slide)=>{
                    return (
                        
                             <img src={slide.url} className="h-92 w-64 space-x-[5px] m-0.5" alt={current}/>
                               
                    )
                })}  */}
                {slides.map((slide, index) => (
          <div key={index} className=" h-screen w-96 space-x-40 m-auto ml-1 relative">
            <img
              src={slide.url}
              className="h-56 w-screen space-x-4 m-0.5 object-cover "
              alt={slide.name}
            />
            <div className="h-60 max-h-full w-full flex flex-col items-start justify-start space-x-[-63%] text-left  ">
              <h1 className="text-lg font-semibold text-start mx-[-28%]">{slide.name}</h1>
              <p className="text-justify mx-[10%] w-[92%] h-[100%]">{slide.description}</p>
            </div>
          </div>
        ))}
              </div>
              <div className="absolute top-0 h-screen w-full items-center justify-between px-4 py-36 space-x-[92%] ">
                <button className="bg-white" onClick={previousSlide}>
                    <FaArrowLeft/>

                </button>
                <button className="bg-white" onClick={nextSlide}>
                    <FaArrowRight/>

                </button>
              </div>
              
        </div>
        
    );
   
}

function Leaders(){
    const slides = [
        { name: 'Lorem Ipsum', url: 'https://i.pravatar.cc/300', description: 'Lorem ipsum dolor sit amet consectetur ' },
        { name: 'Lorem Ipsum', url: 'https://i.pravatar.cc/300', description: 'Lorem ipsum dolor sit amet consectetur ' },
        { name: 'Lorem Ipsum', url: 'https://i.pravatar.cc/300', description: 'Lorem ipsum dolor sit amet consectetur ' },
        { name: 'Lorem Ipsum', url: 'https://i.pravatar.cc/300', description: 'Lorem ipsum dolor sit amet consectetur ' },
        { name: 'Lorem Ipsum', url: 'https://i.pravatar.cc/300', description: 'Lorem ipsum dolor sit amet consectetur ' },
        { name: 'Lorem Ipsum', url: 'https://i.pravatar.cc/300', description: 'Lorem ipsum dolor sit amet consectetur ' },
        { name: 'Lorem Ipsum', url: 'https://i.pravatar.cc/300', description: 'Lorem ipsum dolor sit amet consectetur ' },
        { name: 'Lorem Ipsum', url: 'https://i.pravatar.cc/300', description: 'Lorem ipsum dolor sit amet consectetur ' },
         { name: 'Lorem Ipsum', url: 'https://i.pravatar.cc/300', description: 'Lorem ipsum dolor sit amet consectetur ' }

        // 'https://i.pravatar.cc/300',
        // 'https://i.pravatar.cc/300',
        // 'https://i.pravatar.cc/300',
        // 'https://i.pravatar.cc/300',
        // 'https://i.pravatar.cc/300',
        // 'https://i.pravatar.cc/300',
        // 'https://i.pravatar.cc/300',
        // 'https://i.pravatar.cc/300',

     ];

     

    return(
        <div className="border-2 border-sky-500 w-[75%] mt-4 mx-40 h-screen max-h-full space-x-4 flex  relative">
            <h2 className="text-orange-500 text-center h-12" >leaders</h2>

            <div className="border-1 bg-red-300 h-3/4 w-3/4 p-2 my-auto mx-auto flex overflow-hidden">
              <Carousel slides={slides}/>
                    
            </div>

        </div>
    );
}
       

export default Leaders;
