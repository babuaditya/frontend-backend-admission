import React from 'react'

const ChatDetails = ({handleclose,chatData}) => {
  return (
    //       <div className='overflow-hidden fixed z-10 w-[100%] mx-[25%]'>
    //         <button className='h-3 w-3' onClick={()=>{
    //         handleclose(false)
    //       }}>❌</button>
    //       <div className='overflow-y-scroll  w-[600px]'>
    //         <div className='h-[300px]'>
    //         {chatData.map((data,index)=>{
    //   return(

    //   <div key={index+1} className='mb-2 '>
    //   <div className=' bg-red-50 '>
    //   <div className='p-2 bg-blue-600 rounded-xl my-4 block ml-[30%]'>
    //    {data.user}
    //   </div>
    //   <div className='p-2 bg-blue-950 rounded-xl block mr-[30%] '>
    //     {data.bot}
    //   </div>
    //   </div>
    //   </div>
    //   );

    // })}
    //         </div>
    //       </div>

    //       </div>


    // <div className='fixed z-10 rounded-xl max-w-[600px] overflow-hidden bg-black bg-opacity-50 w-[100%] mx-[25%]'>
    // <button className='h-3 w-3' onClick={()=>{
    //   handleclose(false)
    // }}>❌</button>
    // <div className='p-2 bg-red-50 overflow-y-scroll  '>
    // <div>
 
    // </div>
    // </div>
    // <div>


    // </div>
    // </div>


    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75'>
  <div className='relative bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-2xl mx-auto'>
    <button className='absolute top-2 right-2 h-8 w-8 flex items-center justify-center text-white bg-red-600 rounded-full hover:bg-red-700' onClick={() => { handleclose(false) }}>
      ❌
    </button>
    <div className='overflow-y-scroll max-h-[80vh] p-6'>
      {chatData.map((data, index) => (
        <div key={index + 1} className='mb-4'>
          <div className='bg-red-50 p-2 rounded-lg'>
            <div className='bg-blue-600 text-white p-3 rounded-xl my-4 ml-auto w-fit'>
              {data.user}
            </div>
            <div className='bg-blue-950 text-white p-3 rounded-xl my-4 mr-auto w-fit'>
              {data.bot}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>




  )
}

export default ChatDetails
