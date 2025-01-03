import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CartProvider, useCart } from 'react-use-cart';
import { Transition } from '@headlessui/react';
import { useDebounce } from '@/hooks/useDebounce';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from '@/logo.png';
import HeroSection from '@/Components/HeroSection';
import ProductPreviewModal from './ProductPreviewModal';
import Cart from './Cart';

const formatPrice = (price) => {
    return Number(price).toFixed(2);
};

const ShopContent = ({ products = [], phoneNumber = "905458870147" }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [showNewOnly, setShowNewOnly] = useState(false);
    const [showDiscountOnly, setShowDiscountOnly] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 36;
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const uniqueCategories = [...new Set(products.map(product => product.category))];
        setCategories(uniqueCategories);
    }, [products]);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, searchQuery, showNewOnly, showDiscountOnly]);

    const filteredProducts = products
        .filter(product => {
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                product.sku.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesNew = !showNewOnly || product.is_new === 1;
            const matchesDiscount = !showDiscountOnly || product.is_discount === 1;
            
            return matchesCategory && matchesSearch && matchesNew && matchesDiscount;
        })
        .sort((a, b) => (a.order || 0) - (b.order || 0));

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const currentProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const SearchBar = () => {
        const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
        const debouncedSearch = useDebounce(localSearchQuery, 500);

        useEffect(() => {
            setSearchQuery(debouncedSearch);
        }, [debouncedSearch]);

        return (
            <div className="relative mb-8">
                <input
                    type="text"
                    placeholder="Ürün adı veya kodu ile ara..."
                    value={localSearchQuery}
                    onChange={(e) => setLocalSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 rounded-full bg-white shadow-sm border border-gray-100 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none text-gray-700 placeholder-gray-400"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                />
                {localSearchQuery && (
                    <button
                        onClick={() => {
                            setLocalSearchQuery('');
                            setSearchQuery('');
                        }}
                        className="absolute right-16 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </button>
                )}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
        );
    };

    const FilterButtons = () => (
        <div className="space-y-4 mb-8">
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setShowNewOnly(!showNewOnly)}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                        showNewOnly
                            ? 'bg-green-600 text-white'
                            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                    }`}
                >
                    Yeni Ürünler
                </button>
                <button
                    onClick={() => setShowDiscountOnly(!showDiscountOnly)}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                        showDiscountOnly
                            ? 'bg-red-600 text-white'
                            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                    }`}
                >
                    İndirimli Ürünler
                </button>
            </div>
            
            {(searchQuery || showNewOnly || showDiscountOnly) && (
                <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm text-gray-500">Aktif Filtreler:</span>
                    {searchQuery && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                            Arama: {searchQuery}
                            <button
                                onClick={() => setSearchQuery('')}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </span>
                    )}
                    {showNewOnly && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                            Yeni Ürünler
                            <button
                                onClick={() => setShowNewOnly(false)}
                                className="text-green-500 hover:text-green-600"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </span>
                    )}
                    {showDiscountOnly && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                            İndirimli Ürünler
                            <button
                                onClick={() => setShowDiscountOnly(false)}
                                className="text-red-500 hover:text-red-600"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </span>
                    )}
                    <button
                        onClick={() => {
                            setSearchQuery('');
                            setShowNewOnly(false);
                            setShowDiscountOnly(false);
                        }}
                        className="text-sm text-gray-500 hover:text-gray-700 underline"
                    >
                        Tüm Filtreleri Temizle
                    </button>
                </div>
            )}
        </div>
    );

    const ProductCard = ({ product }) => {
        const { addItem, inCart, updateItemQuantity, getItem, removeItem } = useCart();
        const fallbackImage = 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';
        const [isLoading, setIsLoading] = useState(true);

        return (
            <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden group"
            >
                <div 
                    onClick={() => setSelectedProduct(product)}
                    className="cursor-pointer"
                >
                    <div className="relative h-64 overflow-hidden">
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                                <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        )}
                        <LazyLoadImage
                            src={product.images?.[0] || fallbackImage}
                            alt={product.name}
                            effect="blur"
                            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => e.target.src = fallbackImage}
                            afterLoad={() => setIsLoading(false)}
                            threshold={100}
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none select-none">
                            <img src={logo} alt="Watermark" className="w-32 h-32 object-contain" />
                        </div>
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                            {product.is_new === 1 && (
                                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Yeni Ürün
                                </span>
                            )}
                            {product.is_discount === 1 && (
                                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    İndirimli
                                </span>
                            )}
                        </div>
                        <div className="absolute top-4 right-4">
                            <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                                {product.category}
                            </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-yellow-600 transition-colors">
                            {product.name}
                        </h3>
                    </div>
                </div>

                <div className="px-6 pb-6">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="text-sm font-medium text-gray-500">
                            SKU:
                        </span>
                        <span className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded text-sm font-medium border border-yellow-100">
                            {product.sku}
                        </span>
                    </div>
                    <div className="flex items-end justify-between">
                        <div>
                            <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                                {formatPrice(product.campaign_price)} TL
                            </div>
                            {product.is_discount === 1 && (
                                <div className="text-sm text-red-500 line-through">
                                    {formatPrice(product.price)} TL
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            {inCart(product.id) ? (
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            updateItemQuantity(product.id, getItem(product.id).quantity - 1);
                                        }}
                                        className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <span className="w-8 text-center font-semibold text-gray-700">
                                        {getItem(product.id).quantity}
                                    </span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            updateItemQuantity(product.id, getItem(product.id).quantity + 1);
                                        }}
                                        className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            removeItem(product.id);
                                        }}
                                        className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors ml-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addItem({
                                            id: product.id,
                                            name: product.name,
                                            price: product.campaign_price,
                                            sku: product.sku,
                                            image: product.images?.[0] || fallbackImage,
                                        });
                                    }}
                                    className="p-3 rounded-full bg-yellow-600 text-white hover:bg-yellow-700 transition-colors"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        );
    };

    const Pagination = () => {
        const pageNumbers = useMemo(() => {
            const pages = [];
            const maxVisiblePages = 5;
            const halfVisible = Math.floor(maxVisiblePages / 2);
            
            let startPage = Math.max(1, currentPage - halfVisible);
            let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
            
            if (endPage - startPage + 1 < maxVisiblePages) {
                startPage = Math.max(1, endPage - maxVisiblePages + 1);
            }

            if (startPage > 1) {
                pages.push(1);
                if (startPage > 2) pages.push('...');
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (endPage < totalPages) {
                if (endPage < totalPages - 1) pages.push('...');
                pages.push(totalPages);
            }

            return pages;
        }, [currentPage, totalPages]);

        return (
            <div className="flex flex-wrap justify-center items-center gap-2 mt-8 mb-12">
                <button
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                    className="hidden sm:flex items-center px-3 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white"
                >
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="flex items-center px-3 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white"
                >
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                
                <div className="flex items-center gap-2">
                    {pageNumbers.map((pageNumber, index) => (
                        <React.Fragment key={index}>
                            {pageNumber === '...' ? (
                                <span className="px-3 py-2 text-gray-500">...</span>
                            ) : (
                                <button
                                    onClick={() => setCurrentPage(pageNumber)}
                                    className={`min-w-[40px] px-3 py-2 rounded-lg ${
                                        currentPage === pageNumber
                                            ? 'bg-yellow-500 text-white'
                                            : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    {pageNumber}
                                </button>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="flex items-center px-3 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white"
                >
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 15.707a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414L11.586 10l-4.293 4.293a1 1 0 000 1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                <button
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className="hidden sm:flex items-center px-3 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white"
                >
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 15.707a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 000 1.414zm6 0a1 1 0 001.414 0l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 1.414L14.586 10l-4.293 4.293a1 1 0 000 1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        );
    };

    const CategorySidebar = () => {
        const [isOpen, setIsOpen] = useState(false);
        
        const categoryCounts = categories.reduce((acc, category) => {
            acc[category] = products.filter(p => p.category === category).length;
            return acc;
        }, {});

        const allProductsCount = products.length;

        return (
            <>
                <div className="lg:hidden mb-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100"
                    >
                        <span className="text-gray-700">Kategoriler</span>
                        <svg className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>

                <div className={`lg:block ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sticky top-24">
                        <h2 className="text-lg font-semibold mb-4 text-gray-800">Kategoriler</h2>
                        <div className="space-y-2">
                            <button
                                onClick={() => {
                                    setSelectedCategory('all');
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                                    selectedCategory === 'all'
                                        ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                                        : 'text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                <span>Tüm Ürünler</span>
                                <span className="bg-gray-50 text-gray-600 px-2 py-1 rounded-full text-sm border border-gray-100">
                                    {allProductsCount}
                                </span>
                            </button>
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                                        selectedCategory === category
                                            ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                                            : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                                >
                                    <span>{category}</span>
                                    <span className="bg-gray-50 text-gray-600 px-2 py-1 rounded-full text-sm border border-gray-100">
                                        {categoryCounts[category]}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            
                    <div id="products" className="space-y-8">
                        <SearchBar />
                        <div className="lg:grid lg:grid-cols-[280px,1fr] lg:gap-8">
                            <CategorySidebar />
                            <div className="space-y-8">
                                <FilterButtons />
                                <motion.div
                                    layout
                                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                                >
                                    <AnimatePresence>
                                        {currentProducts.map(product => (
                                            <ProductCard key={product.id} product={product} />
                                        ))}
                                    </AnimatePresence>
                                </motion.div>
                                <Pagination />
                            </div>
                        </div>

                <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />

                {/* Ürün Önizleme Modalı */}
                <ProductPreviewModal
                    product={selectedProduct}
                    isOpen={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            </div>
        </>
    );
};

const Shop = ({ products = [], phoneNumber = "905458870147" }) => {
    return (
        <>
            <ShopContent products={products} phoneNumber={phoneNumber} />
        </>
    );
};

export default Shop; 