import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useCart } from 'react-use-cart';
import 'swiper/css';
import 'swiper/css/navigation';
import logo from '@/logo.png';
import ProductPreviewModal from './ProductPreviewModal';

const HeroSection = ({ newProducts = [] }) => {
    const fallbackImage = 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';
    const { addItem, inCart, updateItemQuantity, getItem, removeItem } = useCart();
    const [selectedProduct, setSelectedProduct] = useState(null);

    const ProductCard = ({ product }) => (
        <div className="bg-gray-50 rounded-2xl overflow-hidden group h-full">
            <div 
                onClick={() => setSelectedProduct(product)}
                className="cursor-pointer"
            >
                <div className="relative h-64">
                    <img
                        src={product.images?.[0] || fallbackImage}
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 right-4">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Yeni
                        </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none select-none">
                        <img src={logo} alt="Watermark" className="w-32 h-32 object-contain" />
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 hover:text-yellow-600 transition-colors">
                        {product.name}
                    </h3>
                </div>
            </div>

            <div className="px-6 pb-6">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-medium text-gray-500">
                        SKU:
                    </span>
                    <span className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded text-sm font-medium">
                        {product.sku}
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-yellow-600">
                        {product.campaign_price} TL
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
                                        image: fallbackImage,
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
        </div>
    );

    return (
        <div className="space-y-12 mb-16">
            {/* Ana Hero Section */}
            <div className="relative h-[60vh] overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/90 to-red-600/90 z-10" />
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="https://cdn.pixabay.com/video/2020/11/30/57844-486852650_large.mp4" type="video/mp4" />
                </video>
                <div className="relative z-20 h-full flex flex-col items-center justify-center text-white text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-6"
                    >
                        <img src={logo} alt="Zehir Motor Logo" className="h-32 w-auto" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Zehir Motor
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl mb-8 max-w-2xl"
                    >
                        Motosikletiniz için en kaliteli yedek parçalar
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white text-yellow-600 px-8 py-4 rounded-full font-semibold hover:bg-yellow-50 transition-colors"
                        onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Ürünleri Keşfet
                    </motion.button>
                </div>
            </div>

            {/* Yeni Ürünler Slider */}
            {newProducts.length > 0 && (
                <div className="bg-white rounded-3xl p-8 shadow-sm">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Yeni Gelen Ürünler
                    </h2>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="!pb-12"
                    >
                        {newProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}

            {/* İstatistikler */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Kaliteli Ürünler</h3>
                    <p className="text-gray-600">En kaliteli motosiklet yedek parçaları</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Hızlı Teslimat</h3>
                    <p className="text-gray-600">Siparişleriniz en kısa sürede elinizde</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">7/24 Destek</h3>
                    <p className="text-gray-600">Sorularınız için her zaman yanınızdayız</p>
                </div>
            </div>

            {/* Ürün Önizleme Modalı */}
            <ProductPreviewModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </div>
    );
};

export default HeroSection; 