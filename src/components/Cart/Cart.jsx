import React from 'react';

const cart = ({SelectedCourse,credit,cost,remain}) => {
    let count=1;
    return (
        <div className='bg-white w-96 rounded-xl'>
           {/* cart */}
           <div className='ml-7 mt-7 mr-10 '>
           <h1 className='text-[#2F80ED] text-xl font-bold pt-7 pb-5'>Credit Hour Remaining {remain} hr</h1>
            <hr className='text-[#1C1B1B33]' />

            {/* Course name */}
            <div>
               <p className='text-2xl font-bold mt-5'>Course Name</p>
               <h2 className='text-lg text-[#1C1B1B99] mt-5 mb-7'>
               {
                    SelectedCourse.map((course) =>(
                      <ol key={course.id}>{`${count++} ${course.title}`}</ol>

                    ))
                }
               </h2>
               <hr className='text-[#1C1B1B33]' />
               <h2 className='my-5 text-lg text-[#1C1B1BCC]'>Total Credit Hour : {credit}</h2>
               <hr className='text-[#1C1B1B33]' />
               <h2 className='my-5 pb-5 text-lg text-[#1C1B1BCC]'>Total Price : {cost} USD</h2>
            </div>
           </div>
        </div>
    );
};

export default cart;