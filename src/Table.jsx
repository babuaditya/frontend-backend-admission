import React, { useState } from 'react'
import axios from 'axios'
import Chat from './Chat'


const Table = () => {
  const [data,SetData]=useState([])
  React.useEffect(()=>
    {
      const fetchData= async()=>{
        const response= await axios.get("http://localhost:3000/contacts")
        SetData(response.data) ;
        console.log(response.data)
      }
      fetchData()
    },[])
  
  return (
//     <table className="table-auto ">
//   <thead>
//     <tr>
//       <th>Sr. No</th>
//       <th>Name</th>
//       <th>Phone Number</th>
//       <th>Chat</th>
//     </tr>
//   </thead>
//   <tbody className="">
//     {data.map((data,index)=>{
//       return(
//         <tr key={index+1}>
//         <td>{index+1}</td>
//         <td>{data.Name}</td>
//         <td className='bg-red-300'>{data.PhoneNumber}</td>
//         <td><Chat filename={data.Filename}/></td>
//         </tr>
//       )
//     })}
//   </tbody>
// </table>
<table className="min-w-full divide-y divide-gray-200 table-auto ">
  <thead className="bg-gray-50">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr. No</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chat</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-20 font-bold font-serif text-red-400 ">
    {data.map((data, index) => (
      <tr key={index + 1} className="hover:bg-gray-100 even:bg-gray-600 odd:bg-slate-500">
        <td className="px-6 py-4 ">{index + 1}</td>
        <td className="px-6 py-4  ">{data.Name}</td>
        <td className="px-6 py-4 ">{data.PhoneNumber}</td>
        <td className="px-6 py-4 ">
          <Chat filename={data.Filename} />
        </td>
      </tr>
    ))}
  </tbody>
</table>


  )
}

export default Table
