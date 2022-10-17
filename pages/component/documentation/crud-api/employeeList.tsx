import Link from "next/link";
import axios from 'axios';
function EmployeeList({ data }) {
    return (
        <div>
            <div className="container main-container">
                <Link href="/">
                    <a>Back To Home</a>
                </Link>
                <h5 className="text-center">Employee List</h5>
                <div className="server-side">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>User Id</th>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(avatar => {
                                return (
                                    <tr>
                                        <td>{avatar.id}</td>
                                        <td>{avatar.userId}</td>
                                        <td>{avatar.name}</td>
                                        <td>{avatar.location}</td>
                                        <td>{avatar.salary}</td>
                                        <td>
                                            <button className="btn btn-warning" >Edit</button>
                                            <button className="btn btn-danger"  >Delete</button>
                                            <button className="btn btn-success" >Update</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
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



