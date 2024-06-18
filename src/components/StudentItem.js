import React from 'react'

const StudentItem = (props) => {
  const { id, attributes } = props;
  return (
    <div className='m-auto flex border-x border-b border-solid border-gray-400  w-[74vw]'>
      <div className="check w-[12.33vw] p-1">
        <input type="checkbox" name="check" />
      </div>
      <table>
        <tbody>
          <tr>
            <td className=" w-[12.33vw] p-1 ">{id}</td>
            <td className=" w-[12.33vw] p-1 ">{attributes.firstName}</td>
            <td className=" w-[12.33vw] p-1 ">{attributes.lastName}</td>
            <td className=" w-[12.33vw] p-1 ">{attributes.parentEmailId}</td>
            <td className=" w-[12.33vw] p-1 ">{attributes.parentContactNo}</td>
          </tr>
        </tbody>
      </table>


    </div>
  )
}

export default StudentItem
