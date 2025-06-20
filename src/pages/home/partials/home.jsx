import React, { useEffect } from 'react';
import Images from '../../../constant/images'
import { Carousel } from 'flowbite';
import { motion } from "framer-motion";
import images from '../../../constant/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Home = () => {
    useEffect(() => {
        const carouselElement = document.getElementById('default-carousel');
        const carousel = new Carousel(carouselElement);
    }, []);

    return (
        <>
            <div id="default-carousel" className="relative w-full" data-carousel="static">

                <div className="relative overflow-hidden rounded-lg md:h-[35rem]">

                    <div className="duration-300 ease-in-out absolute inset-0 transition-all transform translate-x-0 text-center flex justify-center align-center align-content-center align-self-center flex-col " data-carousel-item=""
                        style={{ backgroundImage: `url(${Images.carousel1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='flex justify-center align-center align-content-center align-self-center flex-col gap-3'>
                            <span className='text-white font-bold mb-3 '>Women collection 2025</span>
                            <h1 className='text-white font-bold text-5xl mb-8'>NEW ARRIVALS </h1>
                            <motion.button
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="bg-white w-fit text-black rounded-4xl mx-auto px-14 py-3"
                            >
                                SHOP NOW
                            </motion.button>
                        </div>
                    </div>

                    <div className="duration-300 ease-in-out absolute inset-0 transition-all transform translate-x-0 text-center flex justify-center align-center align-content-center align-self-center flex-col" data-carousel-item=""
                        style={{ backgroundImage: `url(${Images.carousel2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='flex justify-center align-center align-content-center align-self-center flex-col gap-3'>
                            <span className='text-white font-bold mb-3 '>Women collection 2025</span>
                            <h1 className='text-white font-bold text-5xl mb-8'>NEW ARRIVALS </h1>
                            <motion.button
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="bg-white w-fit text-black rounded-4xl mx-auto px-14 py-3"
                            >
                                SHOP NOW
                            </motion.button>
                        </div>
                    </div>

                    <div className="duration-300 ease-in-out absolute inset-0 transition-all transform translate-x-0 text-center flex justify-center align-center align-content-center align-self-center flex-col" data-carousel-item=""
                        style={{ backgroundImage: `url(${Images.carousel3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='flex justify-center align-center align-content-center align-self-center flex-col gap-3'>
                            <span className='text-white font-bold mb-3 '>Women collection 2025</span>
                            <h1 className='text-white font-bold text-5xl mb-8'>NEW ARRIVALS </h1>
                            <motion.button
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="bg-white w-fit text-black rounded-4xl mx-auto px-14 py-3"
                            >
                                SHOP NOW
                            </motion.button>
                        </div>
                    </div>
                </div>

                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full dark:bg-gray-800/30 dark:group-hover:bg-[#e65540]/60">
                        <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full dark:bg-gray-800/30 dark:group-hover:bg-[#e65540]/60">
                        <svg className="w-2 h-2 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>


            <div className='flex flex-row gap-8 py-10 px-36 justify-center'>
                <div className='flex flex-col gap-8'>
                    <div className="relative w-full h-[80vh] overflow-hidden">
                        <img src={images.banner02} alt="Dresses" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 shadow-md uppercase tracking-wider text-sm  hover:bg-[#e65540] hover:text-white">
                            DRESSES
                        </button>
                    </div>
                    <div className="relative w-full h-[40vh] overflow-hidden">
                        <img src={images.cards4} alt="SUNGLASSES" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 shadow-md uppercase tracking-wider text-sm  hover:bg-[#e65540] hover:text-white">
                            SUNGLASSES
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className="relative w-full h-[40vh] overflow-hidden">
                        <img src={images.cards2} alt="WATCHES" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 shadow-md uppercase tracking-wider text-sm  hover:bg-[#e65540] hover:text-white">
                            WATCHES
                        </button>
                    </div>
                    <div className="relative w-full h-[80vh] overflow-hidden">
                        <img src={images.banner07} alt="FOOTERWEAR" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 shadow-md uppercase tracking-wider text-sm  hover:bg-[#e65540] hover:text-white">
                            FOOTERWEAR
                        </button>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className="relative w-full h-[80vh] overflow-hidden">
                        <img src={images.cards3} alt="BAGS" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 shadow-md uppercase tracking-wider text-sm hover:bg-[#e65540] hover:text-white">
                            BAGS
                        </button>
                    </div>
                    <div className="relative w-full h-[40vh] overflow-hidden">
                        <img src={images.cards6} alt="ACCESSORIES" className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110" />
                        <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 shadow-md uppercase tracking-wider text-sm hover:bg-[#e65540] hover:text-white">
                            ACCESSORIES
                        </button>
                    </div>
                </div>


            </div>

            <div className='text-center  p-8'>
                <h1 className='pb-16 font-bold text-3xl'>FEATURED PRODUCTS</h1>
                <Swiper modules={[Navigation]} navigation spaceBetween={20} slidesPerView={4} loop >
                    {[Images.shopy8, Images.shopy7, Images.shopy6, Images.shopy5, Images.shopy4, Images.shopy3, Images.shopi2, Images.item03].map((img, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="relative w-full h-[500px] overflow-hidden group">
                                <img src={img} alt={`item-${idx}`} className="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
                                <div className="absolute inset-0 flex justify-center items-center bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300">
                                    <button className="bg-white absolute bottom-6 left-1/2 -translate-x-1/2 text-black px-6 py-2 rounded-full hover:bg-[#e65540] hover:text-white">
                                        ADD TO CART
                                    </button>
                                </div>
                                <p>Boxy2 T-Shirt with Roll Sleeve</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>



        </>
    );
};

export default Home;
