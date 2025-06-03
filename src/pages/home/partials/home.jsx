import React, { useEffect } from 'react';
import Images from '../../../constant/images'
import { Carousel } from 'flowbite';

const Home = () => {
    useEffect(() => {
        const carouselElement = document.getElementById('default-carousel');
        const carousel = new Carousel(carouselElement);
    }, []);

    return (
        <>
            <div id="default-carousel" className="relative w-full" data-carousel="static">
                
                <div className="relative overflow-hidden rounded-lg md:h-[35rem]">
                    
                    <div className="duration-300 ease-in-out absolute inset-0 transition-all transform translate-x-0 text-center flex justify-center align-center align-content-center align-self-center flex-col " data-carousel-item="active"
                        style={{ backgroundImage: `url(${Images.carousel1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='flex justify-center align-center align-content-center align-self-center flex-col gap-3'>
                            <span className='text-white font-bold mb-3 '>Women collection 2025</span>
                            <h1 className='text-white font-bold text-5xl mb-8'>NEW ARRIVALS </h1>
                            <button className='bg-white w-fit text-black rounded-4xl mx-auto px-14 py-3 align-self-center'>SHOP NOW</button>
                        </div>
                    </div>
                    
                    <div className="duration-300 ease-in-out absolute inset-0 transition-all transform translate-x-0 text-center flex justify-center align-center align-content-center align-self-center flex-col" data-carousel-item="active"
                        style={{ backgroundImage: `url(${Images.carousel2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='flex justify-center align-center align-content-center align-self-center flex-col gap-3'>
                            <span className='text-white font-bold mb-3 '>Women collection 2025</span>
                            <h1 className='text-white font-bold text-5xl mb-8'>NEW ARRIVALS </h1>
                            <button className='bg-white w-fit text-black rounded-4xl mx-auto px-14 py-3 align-self-center'>SHOP NOW</button>
                        </div>
                    </div>
                    
                    <div className="duration-300 ease-in-out absolute inset-0 transition-all transform translate-x-0 text-center flex justify-center align-center align-content-center align-self-center flex-col" data-carousel-item="active"
                        style={{ backgroundImage: `url(${Images.carousel3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className='flex justify-center align-center align-content-center align-self-center flex-col gap-3'>
                            <span className='text-white font-bold mb-3 '>Women collection 2025</span>
                            <h1 className='text-white font-bold text-5xl mb-8'>NEW ARRIVALS </h1>
                            <button className='bg-white w-fit text-black rounded-4xl mx-auto px-14 py-3 align-self-center'>SHOP NOW</button>
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
            <div>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, id. Quo quos deserunt reprehenderit, at necessitatibus sint assumenda quam magnam aspernatur sapiente. Eum, quibusdam laudantium? Quas omnis voluptatibus placeat iure et atque est totam ipsa enim nulla deleniti vero ut accusamus nostrum, quo, iusto aspernatur? Magnam atque, asperiores delectus possimus praesentium consequatur obcaecati iure modi quidem minus! Consectetur, perferendis tempore. Facilis, iusto. Ea quod nemo ab possimus vitae debitis veritatis repellendus voluptas expedita earum! Ipsa, omnis ad? Fugiat suscipit velit fugit et qui, vel id beatae debitis maiores ea aperiam voluptatum, iure modi blanditiis doloribus voluptatem deleniti. Eius vitae minus possimus amet dignissimos commodi quae, blanditiis laborum reprehenderit illo quaerat, fugit sit iusto? Tempore iusto inventore, quam obcaecati et dolor?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, id. Quo quos deserunt reprehenderit, at necessitatibus sint assumenda quam magnam aspernatur sapiente. Eum, quibusdam laudantium? Quas omnis voluptatibus placeat iure et atque est totam ipsa enim nulla deleniti vero ut accusamus nostrum, quo, iusto aspernatur? Magnam atque, asperiores delectus possimus praesentium consequatur obcaecati iure modi quidem minus! Consectetur, perferendis tempore. Facilis, iusto. Ea quod nemo ab possimus vitae debitis veritatis repellendus voluptas expedita earum! Ipsa, omnis ad? Fugiat suscipit velit fugit et qui, vel id beatae debitis maiores ea aperiam voluptatum, iure modi blanditiis doloribus voluptatem deleniti. Eius vitae minus possimus amet dignissimos commodi quae, blanditiis laborum reprehenderit illo quaerat, fugit sit iusto? Tempore iusto inventore, quam obcaecati et dolor?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, id. Quo quos deserunt reprehenderit, at necessitatibus sint assumenda quam magnam aspernatur sapiente. Eum, quibusdam laudantium? Quas omnis voluptatibus placeat iure et atque est totam ipsa enim nulla deleniti vero ut accusamus nostrum, quo, iusto aspernatur? Magnam atque, asperiores delectus possimus praesentium consequatur obcaecati iure modi quidem minus! Consectetur, perferendis tempore. Facilis, iusto. Ea quod nemo ab possimus vitae debitis veritatis repellendus voluptas expedita earum! Ipsa, omnis ad? Fugiat suscipit velit fugit et qui, vel id beatae debitis maiores ea aperiam voluptatum, iure modi blanditiis doloribus voluptatem deleniti. Eius vitae minus possimus amet dignissimos commodi quae, blanditiis laborum reprehenderit illo quaerat, fugit sit iusto? Tempore iusto inventore, quam obcaecati et dolor?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, id. Quo quos deserunt reprehenderit, at necessitatibus sint assumenda quam magnam aspernatur sapiente. Eum, quibusdam laudantium? Quas omnis voluptatibus placeat iure et atque est totam ipsa enim nulla deleniti vero ut accusamus nostrum, quo, iusto aspernatur? Magnam atque, asperiores delectus possimus praesentium consequatur obcaecati iure modi quidem minus! Consectetur, perferendis tempore. Facilis, iusto. Ea quod nemo ab possimus vitae debitis veritatis repellendus voluptas expedita earum! Ipsa, omnis ad? Fugiat suscipit velit fugit et qui, vel id beatae debitis maiores ea aperiam voluptatum, iure modi blanditiis doloribus voluptatem deleniti. Eius vitae minus possimus amet dignissimos commodi quae, blanditiis laborum reprehenderit illo quaerat, fugit sit iusto? Tempore iusto inventore, quam obcaecati et dolor?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, id. Quo quos deserunt reprehenderit, at necessitatibus sint assumenda quam magnam aspernatur sapiente. Eum, quibusdam laudantium? Quas omnis voluptatibus placeat iure et atque est totam ipsa enim nulla deleniti vero ut accusamus nostrum, quo, iusto aspernatur? Magnam atque, asperiores delectus possimus praesentium consequatur obcaecati iure modi quidem minus! Consectetur, perferendis tempore. Facilis, iusto. Ea quod nemo ab possimus vitae debitis veritatis repellendus voluptas expedita earum! Ipsa, omnis ad? Fugiat suscipit velit fugit et qui, vel id beatae debitis maiores ea aperiam voluptatum, iure modi blanditiis doloribus voluptatem deleniti. Eius vitae minus possimus amet dignissimos commodi quae, blanditiis laborum reprehenderit illo quaerat, fugit sit iusto? Tempore iusto inventore, quam obcaecati et dolor?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, id. Quo quos deserunt reprehenderit, at necessitatibus sint assumenda quam magnam aspernatur sapiente. Eum, quibusdam laudantium? Quas omnis voluptatibus placeat iure et atque est totam ipsa enim nulla deleniti vero ut accusamus nostrum, quo, iusto aspernatur? Magnam atque, asperiores delectus possimus praesentium consequatur obcaecati iure modi quidem minus! Consectetur, perferendis tempore. Facilis, iusto. Ea quod nemo ab possimus vitae debitis veritatis repellendus voluptas expedita earum! Ipsa, omnis ad? Fugiat suscipit velit fugit et qui, vel id beatae debitis maiores ea aperiam voluptatum, iure modi blanditiis doloribus voluptatem deleniti. Eius vitae minus possimus amet dignissimos commodi quae, blanditiis laborum reprehenderit illo quaerat, fugit sit iusto? Tempore iusto inventore, quam obcaecati et dolor?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, id. Quo quos deserunt reprehenderit, at necessitatibus sint assumenda quam magnam aspernatur sapiente. Eum, quibusdam laudantium? Quas omnis voluptatibus placeat iure et atque est totam ipsa enim nulla deleniti vero ut accusamus nostrum, quo, iusto aspernatur? Magnam atque, asperiores delectus possimus praesentium consequatur obcaecati iure modi quidem minus! Consectetur, perferendis tempore. Facilis, iusto. Ea quod nemo ab possimus vitae debitis veritatis repellendus voluptas expedita earum! Ipsa, omnis ad? Fugiat suscipit velit fugit et qui, vel id beatae debitis maiores ea aperiam voluptatum, iure modi blanditiis doloribus voluptatem deleniti. Eius vitae minus possimus amet dignissimos commodi quae, blanditiis laborum reprehenderit illo quaerat, fugit sit iusto? Tempore iusto inventore, quam obcaecati et dolor?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, id. Quo quos deserunt reprehenderit, at necessitatibus sint assumenda quam magnam aspernatur sapiente. Eum, quibusdam laudantium? Quas omnis voluptatibus placeat iure et atque est totam ipsa enim nulla deleniti vero ut accusamus nostrum, quo, iusto aspernatur? Magnam atque, asperiores delectus possimus praesentium consequatur obcaecati iure modi quidem minus! Consectetur, perferendis tempore. Facilis, iusto. Ea quod nemo ab possimus vitae debitis veritatis repellendus voluptas expedita earum! Ipsa, omnis ad? Fugiat suscipit velit fugit et qui, vel id beatae debitis maiores ea aperiam voluptatum, iure modi blanditiis doloribus voluptatem deleniti. Eius vitae minus possimus amet dignissimos commodi quae, blanditiis laborum reprehenderit illo quaerat, fugit sit iusto? Tempore iusto inventore, quam obcaecati et dolor?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, id. Quo quos deserunt reprehenderit, at necessitatibus sint assumenda quam magnam aspernatur sapiente. Eum, quibusdam laudantium? Quas omnis voluptatibus placeat iure et atque est totam ipsa enim nulla deleniti vero ut accusamus nostrum, quo, iusto aspernatur? Magnam atque, asperiores delectus possimus praesentium consequatur obcaecati iure modi quidem minus! Consectetur, perferendis tempore. Facilis, iusto. Ea quod nemo ab possimus vitae debitis veritatis repellendus voluptas expedita earum! Ipsa, omnis ad? Fugiat suscipit velit fugit et qui, vel id beatae debitis maiores ea aperiam voluptatum, iure modi blanditiis doloribus voluptatem deleniti. Eius vitae minus possimus amet dignissimos commodi quae, blanditiis laborum reprehenderit illo quaerat, fugit sit iusto? Tempore iusto inventore, quam obcaecati et dolor?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, id. Quo quos deserunt reprehenderit, at necessitatibus sint assumenda quam magnam aspernatur sapiente. Eum, quibusdam laudantium? Quas omnis voluptatibus placeat iure et atque est totam ipsa enim nulla deleniti vero ut accusamus nostrum, quo, iusto aspernatur? Magnam atque, asperiores delectus possimus praesentium consequatur obcaecati iure modi quidem minus! Consectetur, perferendis tempore. Facilis, iusto. Ea quod nemo ab possimus vitae debitis veritatis repellendus voluptas expedita earum! Ipsa, omnis ad? Fugiat suscipit velit fugit et qui, vel id beatae debitis maiores ea aperiam voluptatum, iure modi blanditiis doloribus voluptatem deleniti. Eius vitae minus possimus amet dignissimos commodi quae, blanditiis laborum reprehenderit illo quaerat, fugit sit iusto? Tempore iusto inventore, quam obcaecati et dolor?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, id. Quo quos deserunt reprehenderit, at necessitatibus sint assumenda quam magnam aspernatur sapiente. Eum, quibusdam laudantium? Quas omnis voluptatibus placeat iure et atque est totam ipsa enim nulla deleniti vero ut accusamus nostrum, quo, iusto aspernatur? Magnam atque, asperiores delectus possimus praesentium consequatur obcaecati iure modi quidem minus! Consectetur, perferendis tempore. Facilis, iusto. Ea quod nemo ab possimus vitae debitis veritatis repellendus voluptas expedita earum! Ipsa, omnis ad? Fugiat suscipit velit fugit et qui, vel id beatae debitis maiores ea aperiam voluptatum, iure modi blanditiis doloribus voluptatem deleniti. Eius vitae minus possimus amet dignissimos commodi quae, blanditiis laborum reprehenderit illo quaerat, fugit sit iusto? Tempore iusto inventore, quam obcaecati et dolor?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, id. Quo quos deserunt reprehenderit, at necessitatibus sint assumenda quam magnam aspernatur sapiente. Eum, quibusdam laudantium? Quas omnis voluptatibus placeat iure et atque est totam ipsa enim nulla deleniti vero ut accusamus nostrum, quo, iusto aspernatur? Magnam atque, asperiores delectus possimus praesentium consequatur obcaecati iure modi quidem minus! Consectetur, perferendis tempore. Facilis, iusto. Ea quod nemo ab possimus vitae debitis veritatis repellendus voluptas expedita earum! Ipsa, omnis ad? Fugiat suscipit velit fugit et qui, vel id beatae debitis maiores ea aperiam voluptatum, iure modi blanditiis doloribus voluptatem deleniti. Eius vitae minus possimus amet dignissimos commodi quae, blanditiis laborum reprehenderit illo quaerat, fugit sit iusto? Tempore iusto inventore, quam obcaecati et dolor?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, id. Quo quos deserunt reprehenderit, at necessitatibus sint assumenda quam magnam aspernatur sapiente. Eum, quibusdam laudantium? Quas omnis voluptatibus placeat iure et atque est totam ipsa enim nulla deleniti vero ut accusamus nostrum, quo, iusto aspernatur? Magnam atque, asperiores delectus possimus praesentium consequatur obcaecati iure modi quidem minus! Consectetur, perferendis tempore. Facilis, iusto. Ea quod nemo ab possimus vitae debitis veritatis repellendus voluptas expedita earum! Ipsa, omnis ad? Fugiat suscipit velit fugit et qui, vel id beatae debitis maiores ea aperiam voluptatum, iure modi blanditiis doloribus voluptatem deleniti. Eius vitae minus possimus amet dignissimos commodi quae, blanditiis laborum reprehenderit illo quaerat, fugit sit iusto? Tempore iusto inventore, quam obcaecati et dolor?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, id. Quo quos deserunt reprehenderit, at necessitatibus sint assumenda quam magnam aspernatur sapiente. Eum, quibusdam laudantium? Quas omnis voluptatibus placeat iure et atque est totam ipsa enim nulla deleniti vero ut accusamus nostrum, quo, iusto aspernatur? Magnam atque, asperiores delectus possimus praesentium consequatur obcaecati iure modi quidem minus! Consectetur, perferendis tempore. Facilis, iusto. Ea quod nemo ab possimus vitae debitis veritatis repellendus voluptas expedita earum! Ipsa, omnis ad? Fugiat suscipit velit fugit et qui, vel id beatae debitis maiores ea aperiam voluptatum, iure modi blanditiis doloribus voluptatem deleniti. Eius vitae minus possimus amet dignissimos commodi quae, blanditiis laborum reprehenderit illo quaerat, fugit sit iusto? Tempore iusto inventore, quam obcaecati et dolor?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, id. Quo quos deserunt reprehenderit, at necessitatibus sint assumenda quam magnam aspernatur sapiente. Eum, quibusdam laudantium? Quas omnis voluptatibus placeat iure et atque est totam ipsa enim nulla deleniti vero ut accusamus nostrum, quo, iusto aspernatur? Magnam atque, asperiores delectus possimus praesentium consequatur obcaecati iure modi quidem minus! Consectetur, perferendis tempore. Facilis, iusto. Ea quod nemo ab possimus vitae debitis veritatis repellendus voluptas expedita earum! Ipsa, omnis ad? Fugiat suscipit velit fugit et qui, vel id beatae debitis maiores ea aperiam voluptatum, iure modi blanditiis doloribus voluptatem deleniti. Eius vitae minus possimus amet dignissimos commodi quae, blanditiis laborum reprehenderit illo quaerat, fugit sit iusto? Tempore iusto inventore, quam obcaecati et dolor?
                </p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, id. Quo quos deserunt reprehenderit, at necessitatibus sint assumenda quam magnam aspernatur sapiente. Eum, quibusdam laudantium? Quas omnis voluptatibus placeat iure et atque est totam ipsa enim nulla deleniti vero ut accusamus nostrum, quo, iusto aspernatur? Magnam atque, asperiores delectus possimus praesentium consequatur obcaecati iure modi quidem minus! Consectetur, perferendis tempore. Facilis, iusto. Ea quod nemo ab possimus vitae debitis veritatis repellendus voluptas expedita earum! Ipsa, omnis ad? Fugiat suscipit velit fugit et qui, vel id beatae debitis maiores ea aperiam voluptatum, iure modi blanditiis doloribus voluptatem deleniti. Eius vitae minus possimus amet dignissimos commodi quae, blanditiis laborum reprehenderit illo quaerat, fugit sit iusto? Tempore iusto inventore, quam obcaecati et dolor?
                </p>
            </div>
        </>
    );
};

export default Home;
