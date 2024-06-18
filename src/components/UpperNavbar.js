import React, { useContext , useState} from 'react'
import photo from '../images/photo.PNG'
import { PageContext } from '../context/PageContext';


const UpperNavbar = () => {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };
     const {totalResults}= useContext(PageContext);
    return (
        <div className='flex justify-between'>
            <div className='leftside m-5 p-2 flex items-center font-bold'>
                Students
                <span className='ml-5 w-auto px-2 border-2 border-solid border-gray-400 rounded-2xl text-[#6754b3]'>{totalResults}</span>
            </div>
            <div className=" rightside flex items-center">
                <div className='border-b-2 border-solid border-gray-400 rounded-sm mr-28'>
                    <i className="fa-solid fa-magnifying-glass mr-2 text-[#6754b3] cursor-pointer"></i>
                    <input type="text" placeholder='Search' className="w-72 " value={text} onChange={handleChange}/>
                </div>
                <div className='flex items-center space-x-10 mr-6 text-[#6754b3]'>
                    <i className="fa-solid fa-list cursor-pointer"></i>
                    <i className="fa-regular fa-bell cursor-pointer"></i>
                    <img src={photo} alt ="" className='w-10 rounded-3xl cursor-pointer' />
                    <i className="fa-solid fa-chevron-down cursor-pointer"></i>
                </div>
            </div>
        </div>
    
    )
}

export default UpperNavbar
