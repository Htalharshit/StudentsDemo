import React, { useContext, useEffect, useState } from 'react'
import StudentItem from './StudentItem';
import { PageContext } from '../context/PageContext';
import Spinner from './Spinner';



const Students = () => {

    const { totalResults } = useContext(PageContext);


    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [totalResults1, setTotalResults1] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    const InitialPage = async () => {
        let url = `http://3.223.98.72:1337/api/students?pagination[page]=1&pagination[pageSize]=10`;
        try {
            setLoading(true);
            let res = await fetch(url);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            let parsedData = await res.json();
            setData(parsedData.data);
            setPage(1);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }


    const PreviousPage = async () => {
        let url = `http://3.223.98.72:1337/api/students?pagination[page]=${page - 1}&pagination[pageSize]=10`;
        try {
            setLoading(true);
            let res = await fetch(url);

            let parsedData = await res.json();
            setData(parsedData.data);
            setPage(page - 1);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const NextPage = async () => {
        let url = `http://3.223.98.72:1337/api/students?pagination[page]=${page + 1}&pagination[pageSize]=10`;
        try {
            setLoading(true);
            let res = await fetch(url);

            let parsedData = await res.json();
            setData(parsedData.data);
            setPage(page + 1);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const lastPage = async () => {
        let url = `http://3.223.98.72:1337/api/students?pagination[page]=${totalResults / totalResults1}&pagination[pageSize]=10`;
        try {
            setLoading(true);
            let res = await fetch(url);
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            let parsedData = await res.json();
            setData(parsedData.data);
            setPage(totalResults / totalResults1);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }


    const fetchRecords = async () => {
        let url = `http://3.223.98.72:1337/api/students?pagination[page]=${page}&pagination[pageSize]=10`;
        try {
            setLoading(true);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const parseddata = await response.json();
            setData(parseddata.data);
            const total = parseddata.data.length;
            setPage(page + 1);
            setTotalResults1(total);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRecords();
        // eslint-disable-next-line
    }, []);

    if (loading) return <Spinner />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <div className='m-auto flex border-[1px] border-solid border-gray-400 rounded-t-md w-[74vw] mt-4 text-gray-400'>
                <div className="check w-[12.33vw] p-1">
                    <input type="checkbox" name="check" />
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th className='w-[12.33vw] p-1'>ID</th>
                                <th className='w-[12.33vw] p-1'>First Name</th>
                                <th className='w-[12.33vw] p-1'>Last Name</th>
                                <th className='w-[12.33vw] p-1'>Email</th>
                                <th className='w-[12.33vw] p-1'>Phone</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            {data && data.map((element) => {
                return (
                    <div key={element.id}>
                        <StudentItem id={element.id} attributes={element.attributes} />
                    </div>
                )
            })}
            <div className="buttons flex justify-center mt-5 text-[#6754b3]">
                <button disabled={page <= 1} type="button" className='border-[1px] border-solid border-[#6754b3] px-8 py-2 rounded-2xl m-2 cursor-pointer hover:border-white hover:bg-[#6754b3] hover:text-white' onClick={InitialPage}>
                    <i className="fa-solid fa-backward-fast"></i>
                </button>
                <button disabled={page <= 1} type="button" className='border-[1px] border-solid border-[#6754b3] px-8 py-2 rounded-2xl m-2 cursor-pointer hover:border-white hover:bg-[#6754b3] hover:text-white' onClick={PreviousPage}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button disabled={page >= totalResults / totalResults1} type="button" className="border-[1px] border-solid border-[#6754b3] px-8 py-2 rounded-2xl m-2 cursor-pointer hover:border-white hover:bg-[#6754b3] hover:text-white" onClick={NextPage}>
                    <i className="fa-solid fa-chevron-right"  ></i>
                </button>
                <button disabled={page >= totalResults / totalResults1} type="button" className="border-[1px] border-solid border-[#6754b3] px-8 py-2 rounded-2xl m-2 cursor-pointer hover:border-white hover:bg-[#6754b3] hover:text-white" onClick={lastPage}>
                    <i className="fa-solid fa-forward-fast"></i>
                </button>

            </div>
            <span className='relative left-[445px] bottom-9'>
                <span className='border-[1px] border-solid border-[#6754b3] px-8 py-2 rounded-2xl'>{page}</span> of {totalResults / totalResults1}
            </span>
        </>
    )
}

export default Students
