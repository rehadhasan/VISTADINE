import React, {useState} from 'react';
import toast from "react-hot-toast";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ JobCategoryList,JobCount,JobListByCategoryRequest,JobListRequest ,JobListBySearchRequest}) => {
    const [keyword, setKeyword] = useState()
    const [selectedCategory, setSelectedCategory] = useState('All')

    const handleSearch = async () => {
        let res = await JobListBySearchRequest(keyword)
        if(res){
            toast.success("Job List Updated !")
        }else{
            toast.error("Try again.")
        }
    }
    return (
        <div className="p-6 bg-black bg-opacity-5 rounded shadow">
            <div className="mb-6 join">
                <input
                    type="text"
                    placeholder="Search Jobs"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="join-item w-full p-2 rounded-md bg-white focus:bg-white text-black focus:text-black border border-primary border-opacity-30 focus:outline-none"
                />
                <button
                    onClick={handleSearch}
                    className='join-item btn bg-primary bg-opacity-90 text-white hover:bg-primary hover:text-white'>
                    Search
                </button>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4 text-black">Job Categories</h3>
                <ul>
                    <li className="mb-2">
                        <button
                            onClick={async ()=>{await setSelectedCategory('All'); await JobListRequest()}}
                            className={`text-black text-opacity-70 hover:text-primary ${selectedCategory === 'All'?'font-bold':''}`}
                        >
                            All ({JobCount})
                        </button>
                    </li>
                    {
                        JobCategoryList !== null ? (
                            // eslint-disable-next-line react/prop-types
                            JobCategoryList.map((item, i) => {
                                return (
                                    <li key={i.toString()} className="mb-2">
                                        <button
                                            onClick={async () =>{await setSelectedCategory(item.categoryName); await JobListByCategoryRequest(item._id)}}
                                            className={`text-black text-opacity-70 hover:text-primary ${selectedCategory === item.categoryName ? 'font-bold' : ''}`}
                                        >
                                            {item.categoryName} ({item.jobCount})
                                        </button>
                                    </li>
                                )
                            })
                        ) : ('')
                    }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
