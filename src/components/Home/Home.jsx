import { useEffect } from 'react';
import dolar from '../../assets/dollar-sign 1.png';
import frame from '../../assets/Frame.png';
import { useState } from 'react';
import Cart from '../Cart/cart';
const Home = () => {
    const [allCourse , setAllCourse] = useState([]);
     const [SelectedCourse,setSelectedCourse] = useState([]);
     const[credit,setCredit] =useState(0);
     const[cost ,setCost] = useState(0);
     const[remain,setRemain] =useState(20)
    useEffect(() => {
    fetch('card.json')
    .then(res =>res.json())
    .then(data =>setAllCourse(data))
    },[])
//    console.log(allCourse);

const SelectButton = (course) =>{
    const isClicked =SelectedCourse.find((item)=>item.id == course.id);
    let credit = course.credit;
    let cost = course.price;

    if(isClicked){
         return    alert("already seleted the course");
    } else{
        SelectedCourse.forEach((item) =>{
            credit = credit +item.credit;
        });
        // setCredit(credit);
        if(credit > 20){
           return alert('fuck you');
        }
        else{
            setCredit(credit);
        }
        const TotalRemain = 20 - credit;
        setRemain(TotalRemain);
        SelectedCourse.forEach((item) =>{
            cost = cost +item.price;
        });
        setCost(cost);
        setSelectedCourse([...SelectedCourse,course]);
    }

    setSelectedCourse([...SelectedCourse,course]);
}

console.log(SelectedCourse)


    return (
        <div className="px-20 bg-[#F3F3F3]">
            <h1 className="text-4xl font-bold text-center pt-20">Course Registration</h1>
            {/* This is main div  */}

            <div className="flex">

            {/* This is for 9 cards div */}
            
              <div className="grid grid-cols-3 gap-10 ml-20 mt-20"> 

               {
                allCourse.map((course) =>(
                    <div key={course.id} className="card card-compact w-80 bg-base-100   shadow-xl">
                    <figure><img className="h-[144px] w-[280px] mt-4" src={course.cover} alt="Shoes" /></figure>
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
                        <button onClick={()=>SelectButton(course)} className="btn btn-primary w-full mt-7 mb-4 bg-[#2F80ED] border-none hover:bg-blue-600 text-wh">Select</button>
                      </div>
                    </div>
                  </div>
                ))
               }

              </div>
               {/* This is for cart */}
               <div className='mt-14 ml-10 '>

                <Cart SelectedCourse={SelectedCourse} credit={credit} cost={cost} remain={remain}></Cart>
               </div>

            </div>
              






        </div>
        
    );
};

export default Home;