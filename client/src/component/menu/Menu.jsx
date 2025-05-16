import React, {useEffect, useState} from 'react';
import MenuSkeleton from "../../skeleton/home/MenuSkeleton.jsx";
import ProductStore from "../../store/ProductStore.js";

const Menu = () => {
    const {MenuProductList,MenuProductListRequest,MenuProductListByRemarkRequest} = ProductStore()
    const [isLoading, setIsLoading] = useState(true); // New state for loading

    useEffect(() => {
        // Simulate a 1-second loading delay
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(loadingTimeout); // Cleanup the timeout on unmount
    }, []);

    // Set "All" as the default active button
    const [activeButton, setActiveButton] = useState('All');

    // Function to handle button click
    const handleButtonClick = (category) => {
        setActiveButton(category);
    };
    return (
        <section className='bg-white'>
            <div className="container mx-auto px-3 py-10">
                {isLoading || MenuProductList === null ? (
                    <MenuSkeleton /> // Display skeleton loader while loading
                ) : (
                    <>
                        <h1 className="text-3xl font-bold text-center mb-8 text-black">Discover Food Menus</h1>

                        {/* Category Buttons */}
                        <div className="flex justify-center mb-6">
                            <button
                                onClick={async () => {
                                    await handleButtonClick('All');
                                    await MenuProductListRequest()
                                }}
                                className={`mx-2 text-lg font-medium py-2 px-4 rounded-full ${
                                    activeButton === 'All' ? 'bg-black text-white' : 'bg-black bg-opacity-10 text-black'
                                }`}
                            >
                                All
                            </button>
                            <button
                                onClick={async () => {
                                    await handleButtonClick('Family');
                                    await MenuProductListByRemarkRequest('family')
                                }}
                                className={`mx-2 text-lg font-medium py-2 px-4 rounded-full ${
                                    activeButton === 'Family' ? 'bg-black text-white' : 'bg-black bg-opacity-10 text-black'
                                }`}
                            >
                                Family
                            </button>
                            <button
                                onClick={async () => {
                                    await handleButtonClick('Individual');
                                    await MenuProductListByRemarkRequest('individual')
                                }}
                                className={`mx-2 text-lg font-medium py-2 px-4 rounded-full ${
                                    activeButton === 'Individual' ? 'bg-black text-white' : 'bg-black bg-opacity-10 text-black'
                                }`}
                            >
                                Individual
                            </button>
                        </div>

                        {/* Menu Items */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {MenuProductList.map((item) => (
                                <a href={`/item/details/${item._id}`} key={item.id} className="border p-4 rounded-lg shadow-lg relative">
                                    {item.special && <div
                                        className="absolute top-0 left-0 bg-primary text-white text-xs px-2 py-1">SPECIAL</div>}
                                    <div className='w-full h-60 object-cover'>
                                        <img src={item.image} alt={item.name}
                                             className="w-full h-full mb-4 rounded-md"/>
                                    </div>
                                    <h2 className="text-xl font-semibold text-black">{item.name}</h2>
                                    <p className="text-black text-opacity-70 text-sm mb-2">{item.shortDes}..</p>
                                    {
                                        item.discount ? (
                                            <div className="flex justify-between items-center">
                                                <span
                                                    className="text-lg font-bold text-primary">{item.discountPrice}</span>
                                                <span
                                                    className="text-sm line-through text-black text-opacity-50">{item.price}</span>
                                            </div>
                                        ) : (
                                            <div className="flex justify-between items-center">
                                                <span className="text-lg font-bold text-primary">{item.price}</span>
                                            </div>
                                        )
                                    }
                                </a>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Menu;
