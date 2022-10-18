import Link from "next/link";
import { useState } from 'react';
import axios from "axios";
function EmployeeList({ data }) {
    /*for (let key in data){
        console.log(data)
        for(let i=0;i<data[key].length;i++){
            if(data[key]!==undefined){
                console.log(data[key][i].id)
                console.log(data[key][i].attributes.name)
            }else{

            }
        }
    }*/
    
    return (
        <div>
            <h2 className='topnav'>Rendered By Next JS | Server side rendered</h2>
            <table className="table">
                <thead>
                    <th>Id</th>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Salary</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {data.map(e => {
                        return (
                            <tr >
                                <td>{e.id}</td>
                                <td>{e.userId}</td>
                                <td>{e.name}</td>
                                <td>{e.date}</td>
                                <td>{e.location}</td>
                                <td>{e.salary}</td>
                                <td>
                                    <button className="btn btn-success">Edit</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}
export default EmployeeList;
export async function getServerSideProps() {
    // Fetch data from external API 
    const data = await fetch(`https://api-generator.retool.com/eK34lw/data`).then(res => res.json())
    // Returning the fetched data
    return { props: { data } }
}




