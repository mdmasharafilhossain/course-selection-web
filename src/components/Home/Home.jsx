import { useEffect } from 'react';
import dolar from '../../assets/dollar-sign 1.png';
import frame from '../../assets/Frame.png';
import { useState } from 'react';

const Home = () => {
    const [allCourse , setAllCourse] = useState([])

    useEffect(() => {
    fetch('card.json')
    .then(res =>res.json())
    .then(data =>setAllCourse(data))
    },[])
   console.log(allCourse);




    return (
        <div className="mx-16">
            <h1 className="text-4xl font-bold text-center mt-20">Course Registration</h1>
            {/* This is main div  */}

            <div className="main">

            {/* This is for 9 cards div */}
            
              <div className="grid"> 
              <div className="card card-compact w-80 bg-base-100 shadow-xl">
  <figure><img className="h-[144px] w-[280px]" src="https://i.ibb.co/vqpbnS5/Rectangle-2-2.png" alt="Shoes" /></figure>
  <div className="card-body mx-1">
    <h2 className="card-title text-lg font-bold ">Introduction to C Programming</h2>
    <p className="text-sm text-[#1C1B1B99]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    {/* This is for Price and Credit */}
    <div className="flex">
      {/* This is for price section */}
      <div className='mt-4 flex'>
      <img src={dolar} alt="" />
       <p className='text-lg ml-1 text-[#1C1B1B99]'>Price: 15000</p>  

      </div>

      {/* This is Credit section */}
      <div className='flex mt-4'>
        <img className='h-6 w-6 ml-3' src={frame} alt="" />
        <p className='text-lg ml-1 text-[#1C1B1B99]'>Credit: 1hr</p>

      </div>


    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full mt-7 mb-4">Select</button>
    </div>
  </div>
</div>

              </div>


            </div>
              






        </div>
        
    );
};

export default Home;