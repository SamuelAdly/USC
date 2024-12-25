'use client'
import { Play, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function VideoOverlay ({videoLink, thumbnail, title, duration}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <div className="relative max-w-screen-xl mx-auto group overflow-hidden rounded-lg">
                {/* Thumbnail */}
                <Image
                    src={thumbnail}
                    width={1280}
                    height={720}
                    alt={title}
                    className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                    onClick={openModal}
                />
                
                <div 
                    className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-end justify-start px-2 py-2 cursor-pointer"
                    onClick={openModal}
                >
                    <div className="text-white">
                        <div className="flex items-center mb-2">
                            {/* play button */}
                            <Play className="w-8 h-8 bg-transparent border-2 fill-white p-1 border-white rounded-full flex items-center justify-center text-white mr-3"></Play>
                            <span className="text-lg font-semibold">{title}</span>
                        </div>
                        {/* video time/duration */}
                        <p className="text-sm font-medium px-1">{duration}</p>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div           
                    className="p-4 fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center"
                    onClick={closeModal}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-4 right-4 text-white text-2xl z-50"
                        onClick={closeModal}
                    >
                        <X/>
                    </button>
                    {/* Video*/}
                    <div
                        className="relative bg-white w-full max-w-5xl aspect-video rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <iframe
                            src={videoLink}
                            className="absolute inset-0 w-full h-full rounded-lg"
                            allow="autoplay; fullscreen"
                            title={title}
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
}