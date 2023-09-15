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

const SelectButton = (course) =>{
console.log(course)
}



    return (
        <div className="mx-20">
            <h1 className="text-4xl font-bold text-center mt-20">Course Registration</h1>
            {/* This is main div  */}

            <div className="flex">

            {/* This is for 9 cards div */}
            
              <div className="grid grid-cols-3 gap-10 ml-20 mt-20"> 

               {
                allCourse.map((course) =>(
                    <div key={course.id} className="card card-compact w-80 bg-base-100   shadow-xl">
                    <figure><img className="h-[144px] w-[280px]" src={course.cover} alt="Shoes" /></figure>
                    <div className="card-body mx-1">
                      <h2 className="card-title text-lg font-bold ">{course.title}</h2>
                      <p className="text-sm text-[#1C1B1B99]">{course.description}</p>
                      {/* This is for Price and Credit */}
                      <div className="flex">
                        {/* This is for price section */}
                        <div className='mt-4 flex'>
                        <img src={dolar} alt="" />
                         <p className='text-lg ml-1 text-[#1C1B1B99]'>Price: {course.price}</p>  
                  
                        </div>
                  
                        {/* This is Credit section */}
                        <div className='flex mt-4'>
                          <img className='h-6 w-6 ml-3' src={frame} alt="" />
                          <p className='text-lg ml-1 text-[#1C1B1B99]'>Credit: {course.credit}hr</p>
                  
                        </div>
                  
                  
                      </div>
                      <div className="card-actions justify-end">
                        <button onClick={()=>SelectButton(course)} className="btn btn-primary w-full mt-7 mb-4 bg-[#2F80ED] border-none">Select</button>
                      </div>
                    </div>
                  </div>
                ))
               }

              </div>
               {/* This is for cart */}
               <div className='mt-20 ml-10'>

                <h1>This is cart</h1>
               </div>

            </div>
              






        </div>
        
    );
};

export default Home;