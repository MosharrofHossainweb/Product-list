import './Product.css';
import Dbdata from '../../Component/Database/Db';
import { useState } from 'react';

const Product = () => {
  // State for data
  const [data , setdata] =useState(Dbdata)

  const handelFilter=(brandName)=>{
     const filterData= Dbdata.filter ((item)=>{
         return item.brand===brandName
     })
     setdata(filterData)
  }
 
   return (
     <>
 
     <div className="container">
     <div className=' flex mt-[100px] gap-[50px] mb-[50px]'>
         <button onClick={()=>setdata(Dbdata)} className=' text-2xl text-black font-serif font-[700]'>All</button>
         <button onClick={()=>handelFilter('Samsung')} className=' text-2xl text-black font-serif font-[700]'>Samsung</button>
         <button onClick={()=>handelFilter('Apple')} className=' text-2xl text-black font-serif font-[700]'>Apple</button>
         <button onClick={()=>handelFilter('OnePlus')} className=' text-2xl text-black font-serif font-[700]'>OnePlus</button>
         <button onClick={()=>handelFilter('Xiaomi')} className=' text-2xl text-black font-serif font-[700]'>Xiaomi</button>
         <button onClick={()=>handelFilter('Google')} className=' text-2xl text-black font-serif font-[700]'>Google</button>
     </div>
     <div className=" flex flex-wrap gap-5 ">
         
         {
            data.map((item ,i)=>(
 
          <div key={i} className="single_card relative flex gap-3 overflow-hidden w-[400px] rounded-[10px] h-[200px] shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
             {
                 item.discount &&
                 <div className="sale_tag p1-2 px-3 bg-red-600 text-lg font-serif font-[300] absolute top-0 right-0">Sale</div>
             }
              <div className="card_img w-[150px] h-full overflow-hidden bg-gray-300 ">
                 <img className=' h-full' src={item.img} alt="img" />
              </div>
              <div className="card_text">
                   <h2 className=' text-xl font-bold mb-[5px]'>{item.brand}</h2>
                   <h2 className=' text-lg font-bold'>{item.model_no}</h2>
                   <p className=' text-sm font-[500] text-gray-600'> Lorem ipsum dolor sit amet.</p>
                   <ul className=' list-disc pl-5 text-sm font-[500] text-gray-600'>
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
     
     
     </>
  );
}

export default Product;
