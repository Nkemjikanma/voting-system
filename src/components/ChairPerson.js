import React from 'react'
import { ethers } from 'ethers'
import { AiFillLock, AiFillUnlock } from 'react-icons/ai';
import ReactPaginate from 'react-paginate'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import VotingSystem from '../artifacts/contracts/VotingSystem.sol/VotingSystem.json'
import TableData from './TableData'
import Header from './Header'
import Aside from './Aside';

import styled from '@emotion/styled'
import { GrWifiNone } from 'react-icons/gr';


//console.log("chairperson", contract)
export default function ChairPerson({ isConnected, account, contract, allProposalNames, allProposalsData, checkIfWallet, connectWallet, getProposal }) {
    const [formData, setFormData] = React.useState({
        proposal: "",
        img_url: "",
        duration: 0
    }); // handles the user inputs
    //const [alert, setAlert] = React.useState(false); // Used to handle messages
    const [transactionHash, setTransactionHash] = React.useState("") // 
    const [pageNumber, setPageNumber] = React.useState(0); // used for pagination

    // Setting up pagination 
    const proposalsPerPage = 10;
    const pagesVisited = pageNumber * proposalsPerPage;
    const pageCount = Math.ceil(allProposalsData.length / proposalsPerPage)

    React.useEffect(() => {
        getProposal();
        //addProposal();
    }, [allProposalNames[-1]])


    /**
     * ? Check for changes in user input 
     * 
     */
    function handleChange(event) {
        const { name, value, type } = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    /**
     * ? Add proposal to the blockchain
     */
    function addProposal(event) {
        event.preventDefault()
        const checkEmptyInput = !Object.values(formData).every(res => res === "")
        //check if all input fields have values
        if (checkEmptyInput) {
            async function submitProposal(proposalVal, link, duration) {
                try {
                    const status = await contract.createProposal(proposalVal, link, duration)
                    setTransactionHash(status.hash)
                    status.wait()
                    alert("Successfully submitted")

                } catch (err) {
                    console.log("error ", err)
                }
            }
            submitProposal(formData.proposal, formData.img_url, formData.duration)

            const emptyTheInput = {
                proposal: "",
                img_url: "",
                duration: 0,
            }
            getProposal()
            setFormData(emptyTheInput)
        } else {
            console.log("empty fields")
        }
    }


    /**
     * ? Retrieving all the Proposal Data and displaying in a table
     */
    const viewData = allProposalsData.length === 0 ? <tr className='no-data'><td>No Data to show</td></tr> :
        allProposalsData
            .slice(pagesVisited, proposalsPerPage)
            .map((data, i) => {
                return (< tr key={i} className="table-rows" >
                    {<td className='index' >{i + 1}</td>}
                    <td><img src={JSON.stringify(data["singleData"][2]).slice(1, -1)} alt="Proposals" width="70" height="80" /></td>
                    <td>{JSON.stringify(data["singleData"][1]).slice(1, -1)}</td>
                    <td>{JSON.stringify(data["singleData"][3].toNumber())}</td>
                    <td>{JSON.stringify(data["singleData"][5]) ? <AiFillUnlock /> : <AiFillLock />}</td>
                </ tr>)
            })

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <div className='chairperson-container'>
            <Aside account={account} />

            <section className='chairperson'>
                <p className='top--section--p'>Create new Proposals to be decided upon by members of the community
                    <br />
                    Be aware that this is an MVP and more functionalities will be added in due time
                </p>


                <table>
                    <thead>
                        <tr>
                            <th className='table-heads index'>Index</th>
                            <th className='table-heads'>Cover</th>
                            <th className='table-heads'>Title</th>
                            <th className='table-heads'># Votes</th>
                            <th className='table-heads'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viewData}
                    </tbody>
                </table>

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
                {/*<div style={styles} className='alert-div'><Alert
                    status='success'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    marginTop="1rem"
                    height='5rem'
                    width="100%"
                >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                        Application submitted!
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                        Proposal succesfully submitted. The people will decide now.
                    </AlertDescription>
    </Alert></div>*/}

                <div className='new--proposal'>
                    <h2>Add new proposal</h2>
                    <p>What matters shall we deliberate on, ser? </p>

                    <div className='alert-container'>
                        <div className='alert'>Success</div>
                    </div>

                    <form onSubmit={addProposal}>
                        <div className='input--divs--container'>
                            <div className='input--divs proposal'>
                                <label htmlFor='proposal'>New Proposal</label>
                                <input
                                    type='text'
                                    placeholder=''
                                    onChange={handleChange}
                                    name='proposal'
                                    id='proposal'
                                    value={formData.proposal}
                                />
                            </div>

                            <div className='input--divs url'>
                                <label htmlFor='img_url'>Image URL</label>
                                <input
                                    type='text'
                                    placeholder=''
                                    onChange={handleChange}
                                    id='img_url'
                                    name='img_url'
                                    value={formData.img_url}
                                />
                            </div>

                            <div className='input--divs duration' >
                                <label htmlFor="duration">Duration</label>
                                <input
                                    type="number"
                                    id="duration"
                                    name="duration"
                                    placeholder='Minutes'
                                    min="1"
                                    value={formData.duration}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button className='add-proposal'>Add Proposal</button>
                    </form>
                </div>
            </section >
        </div >

    )
}