import React from 'react'

const Planes = ({titulo, precio, plan, loren,boton}) => {
  return (

                                                  // -----props----

    <div className='planes  bg-[black] h-[300px] w-[250px] text-[white] rounded-[20px] hover:bg-[#216651]  '>
 
      <h3 className=' text-[15px] m-2.5 '>{titulo}</h3>
      <span className='text-[45px] font-bold '>{precio }</span>
      <h3 className='text-[30px]'>{plan }</h3>
      <p className='text-center text-[15px]'>{loren || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo tempora nisi'}</p>
      <button className='bg-[red] hover:bg-black rounded-md w-[100px] h-[30px] m-4 '  >{boton}</button>

    </div>
  
  )
}



function Plans() {
  return(
    <div className="flex flex-col  ">

        <div className="mx-auto px-8 text-center">
            <h3 className="text-lg font-bold mb-4 relative mt-[40px]">
               Our Pricing Plan
               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#216651] w-40"></div>
            </h3>
            <h3 className="text-5xl font-bold py-8 mb-4">
              CHOOSE YOUR
                <span className="text-[#216651]"> PRICING</span>
                <span className="text-5xl font-bold py-8 mb-4"> PRICING</span>
            </h3>
      </div>
        <div className='Plans flex-wrap flex flex-row justify-center gap-3 mb-[50px] md:flex-row  sm:content-center'>  
              <Planes titulo= "Billed per month"  precio="$25" plan="Beginners" boton="Join Now" />
              <Planes titulo= "Billed per month"  precio="$49" plan="Basic"boton="Join Now" />
              <Planes titulo= "Billed per month"  precio="$99" plan="Advanced" boton="Join Now" />
      
      </div>
  
    </div>
  )
}

export default Plans

