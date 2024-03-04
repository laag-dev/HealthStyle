import React from 'react'
// import { planes } from './planesapi'




const Planes = (props) => {
  return (

    <div className='planes  bg-[black] h-[300px] w-[250px] text-[white] rounded-[20px] hover:bg-[#216651] '>
 
      <h3 className=' text-[15px] m-2.5 '>{props.titulo}</h3>
      <span className='text-[45px] font-bold '>{props.precio }</span>
      <h3 className='text-[30px]'>{props.plan }</h3>
      <p className='text-center text-[15px]'>{props.loren || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo tempora nisi'}</p>
      <button className='bg-[red] rounded-md w-[100px] h-[30px] m-4'>{props.boton}</button>

    </div>
  
  )
}

function Plans() {
  return(
    <div id="costosLink" className="flex flex-col ">


      <div className="container mx-auto px-8 text-center">
        <h3 className="text-lg font-bold mb-4 relative">
          Our Pricing Plan
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#216651] w-40"></div>
        </h3>
        <h3 className="text-5xl font-bold py-8 mb-4">
          CHOOSE YOUR
          <span className="text-[#216651]"> PRICING</span>
          <span className="text-5xl font-bold py-8 mb-4"> PRICING</span>
        </h3>

     </div>
     <div className='Plans flex flex-row justify-center gap-3'>  
      <Planes titulo= "Billed per month"  precio="$25" plan="Beginners" boton="Join Now" />
      <Planes titulo= "Billed per month"  precio="$49" plan="Basic"boton="Join Now" />
      <Planes titulo= "Billed per month"  precio="$99" plan="Advanced" boton="Join Now" />
     
      
     </div>
  
    


    </div>
  )
}

export default Plans

