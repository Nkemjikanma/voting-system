import React from 'react'
import { ethers } from 'ethers'

export default function Modal({ showModal, setShowModal, propId, propName, setVoter, voter, contract, accounts, getProposal, canVote }) {


    //close modal is clicked outside the box 
    const modalRef = React.useRef();
    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            setShowModal(false)
        }
    }

    /**
     * ? Call the vote function in the smart contract when the user wants to vote and
     */
    function handleVote() {
        setVoter(async (prevVoter) => {
            try {
                const voterData = await contract.getVoterData(ethers.utils.getAddress(accounts));
                setVoter(voterData)
                //console.log("This is voter data", voter)
                const voting = await contract.vote(propName)
                alert("Your vote has been cast")
                getProposal();
                canVote();
            } catch (error) {
                console.log(error)
            }
        })
        setShowModal(false)
    }

    return (
        <section className='modal--container' ref={modalRef} onClick={closeModal}>
            <div className='modal'>
                <h2> Are you sure you are ready to vote? </h2>
                <button onClick={() => handleVote()}>Yes</button>
            </div>
        </section >
    )

} 