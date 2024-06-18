import React from 'react'


const School = () => {
    return (
        <div className="flex justify-between">
            <div className='flex ml-10 mt-6 flex-col'>
                <div className='text-gray-400'>
                    Select school
                </div>
                <div >
                    <select className="p-1 border-[1px] border-solid border-gray-400 rounded-md w-36 ml-10" >
                        <option defaultValue>Big Ben</option>
                        <option value="1">School 2</option>
                        <option value="2">School 3</option>
                        <option value="3">School 4</option>
                    </select>
                </div>
            </div>
            <div className="rightside flex items-center mr-6 space-x-8">
                <div className='text-[#6754b3] border-[1px] border-solid border-[#6754b3] rounded-3xl w-11 p-2'>
                    <i className="fa-solid fa-filter cursor-pointer"></i>
                </div>
                <div className='bg-[#6754b3] rounded-2xl text-white px-4 py-1 cursor-pointer'>
                    <i className="fa-solid fa-plus mr-2 "></i>
                    <span>Add a student</span>
                </div>
            </div>
            


        </div>


    )
}

export default School
