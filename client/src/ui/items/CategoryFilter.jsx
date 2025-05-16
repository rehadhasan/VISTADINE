import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProductStore from "../../store/ProductStore.js";
import toast from "react-hot-toast";

const CategoryFilter = () => {
    const { CategoryList,ProductListByFilterRequest } = ProductStore();

    // State for search input, selected category, rating, and price
    const [keyword, setKeyword] = useState('')
    const [category, setCategory] = useState('')
    const [rating, setRating] = useState('5')
    const [priceMax, setPriceMax] = useState('10')

    // Handle filter button click
    const handleFilter = async () => {
        let postBody = {keyword:keyword,categoryID:category,rating:rating+'.0',priceMin:'0',priceMax:priceMax}
        let res = await ProductListByFilterRequest(postBody)
        if(res){
            toast.success("Filter Successfully !")
        }else{
            toast.error("Something Went wrong !")
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <div className="mb-4">
                <div className="relative">
                    <input
                        type="text"
                        className="w-full py-2 pl-10 pr-4 text-sm border border-primary rounded-lg bg-white focus:bg-white text-black focus:text-black focus:outline-none focus:border-primary"
                        placeholder="Search Keywords"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                </div>
            </div>

            <h3 className="text-lg font-semibold mb-2 text-black">Category</h3>
            <ul>
                {CategoryList !== null ? (
                    CategoryList.map((item) => (
                        <li key={item['_id']} className="mb-2">
                            <button
                                onClick={() => setCategory(item['_id'])}
                                className={`text-sm ${category === item['_id'] ? 'text-primary' : 'text-black text-opacity-70'} hover:text-primary`}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))
                ) : (
                    <li>No categories available</li>
                )}
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2 text-black">Filter Products</h3>
            <div>
                {['5', '4', '3', '2', '1'].map((starRating) => (
                    <label
                        className="block mb-1 text-sm text-black text-opacity-70"
                        key={starRating}
                    >
                        <input
                            type="radio"
                            name="rating"
                            value={starRating}
                            checked={rating === starRating} // Check if this rating is selected
                            onChange={(e) => setRating(e.target.value)}
                            className="mr-2 focus:ring-primary"
                        />
                        {starRating} Star
                    </label>
                ))}
            </div>

            <h3 className="text-lg font-semibold mt-4 mb-2 text-black">Filter By Price</h3>
            <div>
                <input
                    type="range"
                    className="w-full h-2 bg-black bg-opacity-20 rounded-lg focus:outline-none focus:bg-primary focus:bg-opacity-50"
                    min="0"
                    max="10"
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)}
                />
                <div className="flex justify-between text-sm mt-1">
                    <span className='text-black'>$0</span>
                    <span className='text-black'>${priceMax}</span>
                </div>
            </div>
            <button
                onClick={handleFilter}
                className="mt-4 bg-primary text-white py-2 px-6 rounded-lg flex items-center justify-center"
            >
                Filter
            </button>
        </div>
    );
};

export default CategoryFilter;
