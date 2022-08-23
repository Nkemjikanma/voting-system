import { Button } from '@chakra-ui/react';
import React from 'react'
import { ethers } from 'ethers'
import { Heading, Box, Text, Center, Square } from '@chakra-ui/react'



export default function Header({ account }) {
    /**
     * ? The header, nav bar
     * */
    return (
        <div className='horizontal-header'>
            <nav>
                <div className='ark'><h3>a</h3></div>
                <div className='other-side-ark'>
                    <div className='search--box'>
                        <input placeholder='Search' />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="18" width="18" strokeWidth="1"><g><circle cx="5.92" cy="5.92" r="5.42" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></circle><line x1="13.5" y1="13.5" x2="9.75" y2="9.75" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></line></g></svg>
                    </div>
                    <div className='icon-side'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="18" width="18"><g><line x1="6" y1="13.25" x2="8" y2="13.25" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></line><path d="M11,5.75a4,4,0,0,0-8,0v3.5a1.5,1.5,0,0,1-1.5,1.5h11A1.5,1.5,0,0,1,11,9.25Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path><path d="M.5,5.62A6,6,0,0,1,3,.75" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.5,5.62A6,6,0,0,0,11,.75" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="18" width="18"><g><circle cx="4.25" cy="6.5" r="0.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></circle><circle cx="7.5" cy="6.5" r="0.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></circle><circle cx="10.75" cy="6.5" r="0.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></circle><path d="M4.5,12.5l-4,1,1-3v-9a1,1,0,0,1,1-1h10a1,1,0,0,1,1,1v10a1,1,0,0,1-1,1Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="18" width="18"><g><path d="M13.5,10.5v2a1,1,0,0,1-1,1h-2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.5.5h2a1,1,0,0,1,1,1v2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path><path d="M.5,3.5v-2a1,1,0,0,1,1-1h2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.5,13.5h-2a1,1,0,0,1-1-1v-2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path><line x1="4" y1="3.5" x2="4" y2="5.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></line><line x1="10" y1="3.5" x2="10" y2="5.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></line><polyline points="7 4.5 7 8 5.5 8" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></polyline><path d="M4.5,10a3.63,3.63,0,0,0,5,0" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                    </div>

                </div>
            </nav>

        </div>
    )
}
