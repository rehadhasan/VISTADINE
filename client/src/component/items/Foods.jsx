import React, { useState, useEffect } from 'react';
import CategoryFilter from "../../ui/items/CategoryFilter.jsx";
import ProductCard from "../../ui/items/ProductCard.jsx";
import Pagination from "../../ui/items/Pagination.jsx";
import CategoryFilterSkeleton from "../../skeleton/items/CategoryFilterSkeleton.jsx";
import ProductCardSkeleton from "../../skeleton/items/ProductCardSkeleton.jsx";
import ProductStore from "../../store/ProductStore.js";

const Foods = () => {
    const { ProductList } = ProductStore();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;
    const [isLoading, setIsLoading] = useState(true); // New state for loading

    useEffect(() => {
        // Simulate a 1-second loading delay
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(loadingTimeout); // Cleanup the timeout on unmount
    }, []);

    const totalProducts = ProductList ? ProductList.length : 0;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    // Slice products based on current page
    const currentProducts = ProductList ? ProductList.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    ) : [];

    if (isLoading || ProductList === null) {
        return (
            <section className='bg-white'>
                <div className="container mx-auto px-3 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <div className="col-span-1">
                            <CategoryFilterSkeleton />
                        </div>
                        <div className="lg:col-span-3 md:col-span-2">
                            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                                <ProductCardSkeleton />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className='bg-white'>
            <div className="container mx-auto px-3 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <div className="col-span-1">
                        <CategoryFilter />
                    </div>
                    <div className="lg:col-span-3 md:col-span-2">
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                            {currentProducts.length !== 0 ? (
                                currentProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))
                            ) : (
                                <div className="lg:col-span-3 md:col-span-2">
                                    <div className="text-center py-10">
                                        <h2 className="text-lg font-semibold">No Products Available</h2>
                                    </div>
                                </div>
                            )}
                        </div>
                        {totalProducts > productsPerPage && (
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Foods;
