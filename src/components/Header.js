import { Button } from '@chakra-ui/react';
import React from 'react'
import { ethers } from 'ethers'
import { Heading, Box, Text, Center, Square } from '@chakra-ui/react'



export default function Header({ account }) {

    return (
        <div>
            <header>
                <p className='header--p'>{account}</p>
            </header>
        </div>


    )
}
