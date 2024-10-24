import React, { useState } from 'react'
import Dbdata from '../Component/Database/Db'

const FilterData = () => {
//    ============================== state part ==================================
 const [data , setdata] =useState(Dbdata)

 const handelFilter=(brandName)=>{
    const filterData= Dbdata.filter ((item)=>{
        return item.brand===brandName
    })
    setdata(filterData)
 }

  return (
    <>
  <section className='bg-blue-100'>

    <div className="container">
    <div className=' flex mt-[30px] gap-[50px] mb-[50px] bg-slate-500 p-10'>
        <button onClick={()=>setdata(Dbdata)} className=' text-2xl text-black font-serif font-[700] active:scale-[1.1]  bg-yellow-400 p-1 px-7 rounded-lg'>All</button>
        <button onClick={()=>handelFilter('Samsung')} className=' text-2xl text-black font-serif font-[500] active:scale-[1.1]  bg-yellow-400 p-1 px-2 rounded-lg'>Samsung</button>
        <button onClick={()=>handelFilter('Apple')} className=' text-2xl text-black font-serif font-[500] active:scale-[1.1]  bg-yellow-400 p-1 px-2 rounded-lg'>Apple</button>
        <button onClick={()=>handelFilter('OnePlus')} className=' text-2xl text-black font-serif font-[500] active:scale-[1.1]  bg-yellow-400 p-1 px-2 rounded-lg'>OnePlus</button>
        <button onClick={()=>handelFilter('Xiaomi')} className=' text-2xl text-black font-serif font-[500] active:scale-[1.1]  bg-yellow-400 p-1 px-2 rounded-lg'>Xiaomi</button>
        <button onClick={()=>handelFilter('Google')} className=' text-2xl text-black font-serif font-[500] active:scale-[1.1] bg-yellow-400 p-1 px-2 rounded-lg'>Google</button>
    </div>
    <div className=" flex flex-wrap gap-5 ">
        
        {
           data.map((item ,i)=>(

         <div key={i} className="single_card relative flex gap-3 overflow-hidden w-[460px] bg-blue-300 rounded-[10px] h-[250px] shadow-[-4px_-1px_0px_2px_rgba(0,_0,_0,_0.1)]">
            {
                item.discount &&
                <div className="sale_tag p1-2 px-3 bg-red-600 text-lg font-serif font-[300] absolute top-0 right-0">Sale</div>
            }
             <div className="card_img w-[190px] h-full overflow-hidden bg-gray-300 ">
                <img className=' h-full' src={item.img} alt="img" />
             </div>
             <div className="card_text">
                  <h2 className=' text-xl font-bold mb-[5px]'>{item.brand}</h2>
                  <h2 className=' text-lg font-bold'>{item.model_no}</h2>
                  <p className=' text-sm font-[500] text-gray-600'> Lorem ipsum dolor sit amet
                    .</p>
                  <ul className=' list-disc pl-5 text-lg  text-black font-medium'>
                    <li> ID:{item.id}</li>
                    <li> Ram: {item.ram}</li>
                    <li> Rom:{item.rom}</li>
                    <li> camera: {item.camera}</li>
                  </ul>
                  <h2 className=' text-xl font-bold mt-[5px]'>
                    <span className={item.discount?'text-xl font-bold mt-[5px] text-gray-600':'text-xl font-bold mt-[5px]'}>Price:{item.price}$</span>
                    {
                        item.discount&&
                        <span className=' text-orange-300 ml-5'>{item.discount_price}$</span>
                    }
                     </h2>
             </div>
         </div>

           )) 
        }
    </div>
    </div>
  </section>
    
    
    </>
  )
}

export default FilterData