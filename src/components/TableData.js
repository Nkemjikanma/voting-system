import React from 'react'


export default function TableData({ tableData }) {
    //console.log('props: ', tableData)
    return (
        <div className='table--container'>
            <table>
                <thead>
                    <tr>
                        <th className='table-heads'>Cover</th>
                        <th className='table-heads'>Title</th>
                        <th className='table-heads'># Votes</th>
                        <th className='table-heads'>Added at</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td><img src={data.img_url} alt={data.proposal} width="100" height="130" /></td>
                                    <td>{data.proposal}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}