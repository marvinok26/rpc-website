import React from 'react';
import { Link } from 'react-router-dom';

const IconButton = () => {
    return (
        <button className="bg-[#4263A5] text-white font-inherit px-3 py-2 text-[17px] font-medium rounded-[0.9em] border-none tracking-wider flex items-center shadow-[inset_0_0_1.6em_-0.6em_#714da6] overflow-hidden relative h-[2.8em] pr-[3.3em] cursor-pointer"><Link to="/contact" >
            Get started</Link>
            <div className="bg-white ml-4 absolute flex items-center justify-center h-[2.2em] w-[2.2em] rounded-[0.7em] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] right-[0.3em] transition-all duration-300 ease-in-out hover:w-[calc(100%-0.6em)] active:scale-[0.95]"><Link to="/contact" >
                <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[1.1em] transition-transform duration-300 ease-in-out hover:translate-x-[0.1em] text-[#4263A5]"
                >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                    ></path>
                </svg></Link>
            </div>
        </button>
    );
};

export default IconButton;
