import React from 'react';

const cart = ({SelectedCourse}) => {
    let count=1;
    return (
        <div className='bg-white w-96'>
           {/* cart */}
           <div className='ml-7 mt-7 mr-10'>
           <h1>This is cart</h1>
            <hr className='text-[#1C1B1B33]' />

            {/* Course name */}
            <div>
               <p className='text-2xl font-bold'>Course Name</p>
               <h2 className='text-lg text-[#1C1B1B99] mt-5'>
               {
                    SelectedCourse.map((course) =>(
                      <ol key={course.id}>{`${count++} ${course.title}`}</ol>

                    ))
                }
               </h2>
            </div>
           </div>
        </div>
    );
};

export default cart;