import React from 'react'

export default function Aside({ account }) {
    /**
     * ? The side bar
    */
    return (
        <aside>
            <div className='aside-inner'>
                <div className='aside-logo'><h3>a</h3></div>
                <div className='aside-body'>
                    <div className='aside-body-top'>
                        <h3 className='list-topics'>Welcome {account === "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266" ? "Chairperson!" : "Voter!"}</h3>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="18" width="18"><g><rect x="8.5" y="6.5" width="5" height="7" rx="0.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></rect><rect x="8.5" y="0.5" width="5" height="3.01" rx="0.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></rect><rect x="0.5" y="0.5" width="5" height="7" rx="0.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></rect><rect x="0.5" y="10.49" width="5" height="3.01" rx="0.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></rect></g></svg>
                                <h3>Dashboard</h3>
                            </li>

                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="18" width="18"><g><path d="M8,13.5H1.5a1,1,0,0,1-1-1V1.5a1,1,0,0,1,1-1H9" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.5,3.5,12,.5l1.5,3V12a1.5,1.5,0,0,1-3,0Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path><line x1="10.5" y1="9.5" x2="13.5" y2="9.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></line><line x1="3.5" y1="0.5" x2="3.5" y2="13.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></line><line x1="6" y1="4" x2="8" y2="4" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></line></g></svg>
                                <h3>New Proposal</h3>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="18" width="18"><g><circle cx="5" cy="3.75" r="2.25" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></circle><path d="M9.5,13.5H.5v-1a4.5,4.5,0,0,1,9,0Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9,1.5A2.25,2.25,0,0,1,9,6" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.6,8.19a4.5,4.5,0,0,1,2.9,4.2V13.5H12" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                                <h3>View Voters</h3>
                            </li>
                        </ul>
                    </div >

                    <div className='aside-body-middle'>
                        <h3 className='list-topics'>Tools</h3>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="18" width="18"><g><rect x="1.5" y="0.5" width="11" height="13" rx="1" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></rect><line x1="1.5" y1="10.5" x2="12.5" y2="10.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></line><line x1="4.5" y1="3" x2="9.5" y2="3" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></line><line x1="4.5" y1="5.5" x2="9.5" y2="5.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></line><line x1="4.5" y1="8" x2="7.5" y2="8" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></line></g></svg>
                                <h3>Tables</h3>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="18" width="18"><g><rect x="0.5" y="0.5" width="13" height="13" rx="1" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></rect><line x1="0.5" y1="3.5" x2="13.5" y2="3.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></line><line x1="7" y1="3.5" x2="7" y2="13.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></line><line x1="0.5" y1="8.5" x2="13.5" y2="8.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></line></g></svg>
                                <h3>Change Table</h3>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="18" width="18"><g><path d="M11.5,8.5h-9l-.76,3.8a1,1,0,0,0,.21.83,1,1,0,0,0,.77.37h8.56a1,1,0,0,0,.77-.37,1,1,0,0,0,.21-.83Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.5,5.5a1,1,0,0,1,1,1v2H1.5v-2a1,1,0,0,1,1-1H4a1,1,0,0,0,1-1v-2a2,2,0,0,1,4,0v2a1,1,0,0,0,1,1Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path><line x1="8.5" y1="13.5" x2="8.5" y2="11" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></line></g></svg>
                                <h3>Remove Proposal</h3>
                            </li>
                        </ul>
                    </div>

                    <div className='aside-body-bottom'>
                        <h3 className='list-topics'>Account Settings</h3>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="18" width="18"><g><path d="M11.5,8.5h-9l-.76,3.8a1,1,0,0,0,.21.83,1,1,0,0,0,.77.37h8.56a1,1,0,0,0,.77-.37,1,1,0,0,0,.21-.83Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11.5,5.5a1,1,0,0,1,1,1v2H1.5v-2a1,1,0,0,1,1-1H4a1,1,0,0,0,1-1v-2a2,2,0,0,1,4,0v2a1,1,0,0,0,1,1Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path><line x1="8.5" y1="13.5" x2="8.5" y2="11" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></line></g></svg>
                                <h3>Settings</h3>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="18" width="18"><g><circle cx="7" cy="6.75" r="2.25" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></circle><path d="M11,13.5A4.5,4.5,0,0,0,3,13.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12,10.56a6.25,6.25,0,1,0-9.92,0" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                                <h3>Account</h3>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" height="18" width="18"><g><path d="M9.5,10.5v2a1,1,0,0,1-1,1h-7a1,1,0,0,1-1-1V1.5a1,1,0,0,1,1-1h7a1,1,0,0,1,1,1v2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></path><line x1="6.5" y1="7" x2="13.5" y2="7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></line><polyline points="11.5 5 13.5 7 11.5 9" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"></polyline></g></svg>
                                <h3>Logout</h3>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </aside>
    )
}