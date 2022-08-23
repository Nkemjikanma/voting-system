import React, { Children, useEffect } from 'react'
import { ethers, Wallet } from 'ethers'
import Web3Modal from 'web3modal'
import Header from './components/Header'
import Main from './components/Main'
import ChairPerson from './components/ChairPerson'
import VotingSystem from './artifacts/contracts/VotingSystem.sol/VotingSystem.json'
import ReactPaginate from 'react-paginate'
import { AiOutlineClose, AiFillLock, AiFillUnlock } from "react-icons/ai";
import { GrMenu } from "react-icons/gr";


import '../src/scss/style.scss';
const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

export default function App() {

    const [accounts, setAccounts] = React.useState([]); //wallet address
    const [error, setError] = React.useState() // error messages
    const [allProposalsData, setAllProposalsData] = React.useState([]); // list containing proposals
    const [allProposalNames, setAllProposalNames] = React.useState([]) // list containing proposal names 
    const [VotingAccounts, setVotingAccounts] = React.useState([]); // list of voters
    const [contract, setContract] = React.useState(); //hold contract info for signing 
    const [isConnected, setIsConnected] = React.useState(false);
    //const weConnected = Boolean(accounts)

    /**
     * ? The connect wallet function
     * * Checks to see if wallet is connect, and proceeds to retrieve the user's wallet address.
     * * Updates account with the wallet add, so we can monitor when account changes
     */
    const connectWallet = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts"
            }, []);
            setIsConnected(true)
            setAccounts(accounts)
        } return setError("Please install metamask");

    }

    /** 
    * ? The "any" network will allow spontaneous network changes
    */
    React.useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        provider.on("network", (newNetwork, oldNetwork) => {
            // When a Provider makes its initial connection, it emits a "network"
            // event with a null oldNetwork along with the newNetwork. So, if the
            // oldNetwork exists, it represents a changing network
            if (oldNetwork) {
                setIsConnected(false)
                //setAccounts([])
                //window.location.reload();

                //console.log(newNetwork)
                //setIsConnected(false)

            }
        });
    }, [isConnected])

    /**
     * * Interacting with the smart contract 
     * ? Contract connector, help saving me from repetition. :) 
     * ? createProposal: creating a new proposal by only chairperson 
     * ? castVote: every wallet asides the chairperson can cast the vote
     * ? getProposals: Retrieve a list of proposals for display on table 
     * ? changeToExpired: set the status of the proposal to expired 
     */
    async function contractConnector() {
        // connecting with smart contract 
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const newProvider = new ethers.providers.Web3Provider(connection);
        const signer = newProvider.getSigner();
        const contract = new ethers.Contract(contractAddress, VotingSystem.abi, signer)
        setContract(contract)
    }
    React.useEffect(() => {
        contractConnector();
        connectWallet();
    }, [isConnected, accounts[0]])


    const castVote = async (voteProposal) => {
        try {

            const vote = await contract.vote(voteProposal)
            vote.wait()

            console.log(vote)
        } catch (error) {
            setError("Something went wrong while trying to cast vote")
        }
    }

    //

    const getProposal = async () => {
        try {
            const getAllProposalNames = await contract.getProposals();
            setAllProposalNames(getAllProposalNames)

            getAllProposalNames.map(async (el) => {
                const singleData = await contract.getProposalData(el);
                //console.log(singleData)
                //setAllProposalsData([...allProposalsData, singleData])//{singleData}
                allProposalsData.push({ singleData })
                allProposalsData.reverse();
            })
            const allVoters = await contract.getAllVoters();
            setVotingAccounts(allVoters);
        } catch (error) {
            setError("Error while trying to populate the table")
        }

    }
    /**
    * ? check for valid proposals
    */

    //Change proposal status to expired 
    const validProposals = async () => {
        try {
            for (let props of allProposalsData) {
                //console.log()
                const propData = await contract.expired(props["singleData"][1]);
                //propData.wait()
                console.log(propData)
            }
        } catch (error) {
            setError("Unable to change to expired")
        }
    }
    //validProposals()


    return (
        //{<votingSystemContext.provider value={{}}>{children}</votingSystemContext.provider>}
        <div className='app'>

            <div className='app-container'>
                {
                    (isConnected) ?
                        (accounts[0] === "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266") ?
                            (<div><section className='top-section'>
                                <Header
                                    accounts={accounts} />
                            </section>
                                <ChairPerson
                                    isConnected={isConnected}
                                    account={accounts[0]}
                                    contract={contract}
                                    allProposalNames={allProposalNames}
                                    allProposalsData={allProposalsData}
                                    getProposal={getProposal}
                                //checkIfWallet={checkIfWallet}
                                //connectWallet={connectWallet}
                                /></div>) :
                            <Main
                                isConnected={isConnected}
                                accounts={accounts[0]}
                                contract={contract}
                                allProposalNames={allProposalNames}
                                allProposalsData={allProposalsData}
                                getProposal={getProposal}
                            />

                        : <div className='landing-page'>
                            <div className='logo vertical'>
                                < div className='menu-logo'><GrMenu className='menu-icon' /></div>
                                <div className='rkive'><p>rkive</p></div>
                                <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg" width="30" height="100%">
                                    <rect className='rect' width="7" height="1000" x="190" y="-5" />
                                </svg>
                                <div className='a'><p>a</p></div>
                            </div>
                            <div className='landing-section'>
                                <div className='sign-button'>
                                    {isConnected ? <p className='header--p'>{accounts[0]}</p> : <button onClick={() => connectWallet()} className='connect-button'><h1>Connect</h1></button>}
                                </div>
                                <p className='new-to-web'>New to Web3.0?</p>

                                <a href='https://metamask.io/' className='download-meta-link'>
                                    <span className='link--pointer'>👉🏾 </span>
                                    <h2>Download metamask here</h2>
                                    <span className='link--pointer'> 👈🏾</span>
                                </a>

                            </div>
                        </div>
                }



            </div>

        </div >
    );
}

