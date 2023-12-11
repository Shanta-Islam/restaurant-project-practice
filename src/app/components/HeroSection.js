import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
    return (
        <div className="h-screen bg-gray-50 flex items-center">
            <section className="bg-cover bg-center h-full w-full" style={{backgroundImage: 'url(/heroImage.png)'}}>
                <div className="container mx-auto text-left text-white">
                    <div className="flex items-center">
                        <div className=" xl:w-1/2"></div>
                        <div className="xl:w-1/2 mt-52">
                            <h1 className="text-5xl font-medium mb-6">Its All About Good Food</h1>
                            <p className="text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
                                euismod odio, gravida pellentesque urna varius vitae.</p>
                            <a href="#" className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">Details</a>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;