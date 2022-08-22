// TODO create proposals and store them; proposal name and number


//TODO voters, keep track of votes and authenticate 

//TODO Governor, authenticate and deploy contract 


// SPDX-License-Identifier: UNLICENSED 

pragma solidity ^0.8.6; 

contract VotingSystem {

     address public chairPerson; // deployer 

    // Handling voters
    uint public _idVoter; //ever user has an id
    address[] public allVotersAdd; // address of all the users who vote, creator in example 
    // Properties for every single user 
    struct Voter {
        address account; 
        uint userId;
        uint vote; // if voter voted yes or no 
        bool voted;
        uint weight ; 
        string votedProposal; // what proposals voter has voted 
    }
    event VoteEvent(
        address indexed account, 
        uint indexed userId,
        uint vote,
        bool voted,
        uint weight, 
        string votedProposal
    ); 
    //mapping creating voters for all users 
    mapping(address => Voter) public voters; 

    bool votedStat;
    uint votedWeight;

    //handling proposals
    string[] public proposalList; //all the proposals, message in example
    uint public _propId; //
    uint[] public proposalId; // every proposal has an id messageId in example

    struct Proposal{
        uint propId;
        string proposalName; //name of proposal 
        string img_url; // image url for proposal 
        uint voteCount; // number of votes a proposal has received
        uint durationMinutes; // valid time to vote
        bool status; // is proposal still valid? has it ended? 4
    }
    event ProposalEvent (
        uint indexed propId,
        string proposalName, //name of proposal 
        string img_url, // image url for proposal 
        uint voteCount,// number of votes a proposal has received
        uint durationMinutes, // valid time to vote
        bool status // is proposal still valid? has it ended? 4
    );
    mapping(string => Proposal) public proposals;
    //Proposal[] public proposalsEntire;

    constructor() {
        chairPerson = msg.sender;
    }

    function increment() internal {
        _idVoter++;
        _propId++; 
    }

    function createProposal(string calldata _proposalName, string calldata _img_url, uint durationMinutes) external {

        require(msg.sender == chairPerson);
        increment();

        uint idProposal = _propId; 
        Proposal storage toProp = proposals[_proposalName];

        toProp.propId = idProposal;
        toProp.proposalName = _proposalName; 
        toProp.img_url = _img_url; 
        toProp.voteCount = 0; 
        toProp.durationMinutes = block.timestamp + (durationMinutes * 1 minutes); 
        toProp.status = false; 
        

        proposalList.push(_proposalName);
        proposalId.push(idProposal);

        emit ProposalEvent(toProp.propId, _proposalName, _img_url, toProp.voteCount,toProp.durationMinutes, toProp.status);     
    }

    // when wallet signs in, shows all proposal to the user
    //function displayAllProposals(address _address) public view returns(uint, string memory, string memory, uint, uint, bool){
    //    Proposal
    //}

    function getProposalIds() public view returns (uint[] memory) {
        return proposalId;
    }

    function getProposals() external view returns(string[] memory) {
        return proposalList;
    }

    function getAllVoters() external view returns(address[] memory){
        return allVotersAdd;
    }

    //function getAllPeople() public view returns (People[] memory) {
    //return people;

    function activateVoter() public {
        votedStat = false;
        //require(!votedStat)
        // voters[msg.sender].voted = false;
        //voters[msg.sender].voted = true;
        //require(voters[voter].weight == 0);
        votedWeight = 1;
        //voters[msg.sender].weight = 1; 
        
    }

    function vote( string memory _votedProposal) external {
        require(msg.sender != chairPerson);
        require(proposalList.length >= 1);

        Voter storage voterData = voters[msg.sender];

        //activateVoter();
        voterData.weight = 1;
        //voterData.voted = votedStat;
        
        require(voterData.weight == 1, "Lost his rights");
        require(voterData.voted == false, "Already voted");

        //activateVoter(); 
        increment();
        uint256 idVoter = _idVoter; 
        

        voterData.account = msg.sender; 
        voterData.userId = idVoter; 
        voterData.vote = 1; // 1 for yes, 0 for no
        voterData.voted = true;
        voterData.weight = voterData.weight - 1; 
        voterData.votedProposal = _votedProposal;
        proposals[_votedProposal].voteCount = proposals[_votedProposal].voteCount + 1; 

        allVotersAdd.push(msg.sender);

        emit VoteEvent(voterData.account, voterData.userId, voterData.vote, voterData.voted, voterData.weight, voterData.votedProposal);
    }

    function getProposalData(string calldata _propName) public view returns( uint, string memory, string memory, uint, uint, bool) { 
        Proposal memory singleProposal = proposals[_propName];
         
        return(
            singleProposal.propId,
            singleProposal.proposalName,
            singleProposal.img_url, 
            singleProposal.voteCount, 
            singleProposal.durationMinutes, 
            singleProposal.status
        );
    }

    function getVoterData(address _userAdd) public view returns(address, uint, uint, bool, uint, string memory) {
        Voter memory singleVoter = voters[_userAdd]; 

         return (
            singleVoter.account,
            singleVoter.userId,
            singleVoter.vote, // if voter voted yes or no 
            singleVoter.voted,
            singleVoter.weight, 
            singleVoter.votedProposal // what proposals voter has voted 
         );
    }

    function deleteProposal(string calldata _propName) external {
        //Proposal storage toProp = proposals[_propName];
        delete proposals[_propName];
    }

    function expired() internal {
        for(uint i= 0; i < proposalList.length; i++ ) {
            //Proposal storage toProp = proposals[i];
            require(block.timestamp >= proposals[proposalList[i]].durationMinutes);
            proposals[proposalList[i]].status = true; 
        }
    }
   

}
