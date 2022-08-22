import React from 'react'
import { ethers } from 'ethers'
import { AiFillLock, AiFillUnlock, AiOutlineConsoleSql } from 'react-icons/ai';
import ReactPaginate from 'react-paginate'
import VotingSystem from '../artifacts/contracts/VotingSystem.sol/VotingSystem.json'
import Header from './Header'
import ChairPerson from './ChairPerson';
import Modal from './Modal'



const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"

const provider = new ethers.providers.Web3Provider(window.ethereum)

// the end user 
const signer = provider.getSigner()

// the smart contract 
const contract = new ethers.Contract(contractAddress, VotingSystem.abi, signer)


export default function Main({ accounts, contract, allProposalsData, allProposalNames, getProposal }) {

    const [showModal, setShowModal] = React.useState(false)


    const openModal = (propId, propName) => {
        setShowModal(true);
    }
    const closeShowModal = () => {
        setShowModal(false)
    }

    const [error, setError] = React.useState("");
    const [ifVoted, setIfVoted] = React.useState(0);
    const [allVoters, setAllVoters] = React.useState([])
    const [pageNumber, setPageNumber] = React.useState(0);

    //const [loading, setLoading] = React.useState(false)
    const [voter, setVoter] = React.useState([])
    const [propId, setPropId] = React.useState()
    const [propName, setPropName] = React.useState()

    const [disabledButton, setDisabledButton] = React.useState(false)

    const proposalsPerPage = 10;
    const pagesVisited = pageNumber * proposalsPerPage
    const pageCount = Math.ceil(allProposalsData.length / proposalsPerPage)

    React.useEffect(() => {
        getProposal();
        canVote();
    }, [])


    /**
     * TODO: check to see weight and return "You cant vote again because of" weight
     * ? should buttons be locked?
     */
    //handle the user votings 

    const canVote = async () => {
        try {
            const votersList = await contract.getAllVoters()
            setAllVoters(votersList)
            if (allVoters.includes(ethers.utils.getAddress(accounts))) {
                setIfVoted(true)
                setDisabledButton(true);
                console.log("can def vote")
            }
        } catch (error) {
            console.log("Error fetching")
        }
    }

    const viewData = allProposalsData.length === 0 ? <div className='no-data'>No Data to show</div> :
        allProposalsData
            .slice(pagesVisited, proposalsPerPage)
            .map((data, i) => {
                //setPropId(data["singleData"][0].toNumber());
                //setPropName(data["singleData"][1]);
                return (<div key={i} className="viewData--content" >
                    <img src={JSON.stringify(data["singleData"][2]).slice(1, -1)} alt="Proposals" width="150" height="170" />
                    <div className='smaller--content'>
                        <div className='proposal--name'>{JSON.stringify(data["singleData"][1]).slice(1, -1)}</div>
                        <div className='proposal--vote-count'>{JSON.stringify(data["singleData"][3].toNumber())}</div>
                    </div>
                    <div className='proposal--status'>
                        {JSON.stringify(data["singleData"][5]) ?
                            (<div className='form' > <AiFillUnlock /><button disabled={disabledButton} onClick={() => openModal(setPropId(data["singleData"][0].toNumber()), setPropName(data["singleData"][1]))} >Yes</button></div>)
                            :
                            <AiFillLock />}
                    </div>
                </ div >);
            })
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    return (
        <div className='main-container'>
            <section className='top-section'>
                <Header
                    account={accounts} />
            </section>

            <section className='main'>
                <h2>Welcome Voter!</h2>
                <p className='top--section--p'>Always remember that  your votes count and your voice is valid
                    <br />
                    Be aware that this is an MVP and more functionalities will be added in due time
                </p>

                <div className='proposal--content'>
                    {viewData}
                </div>

                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
                {
                    showModal ?
                        <Modal
                            setShowModal={setShowModal}
                            propId={propId}
                            propName={propName}
                            voter={voter}
                            setVoter={setVoter}
                            contract={contract}
                            getProposal={getProposal}
                            accounts={accounts}
                            canVote={canVote} />
                        :
                        null
                }
                <div className='alert-container'>
                    <div className='alert'>Success</div>
                </div>
            </section >
        </div >

    )
}
