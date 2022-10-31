import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from 'react'
function EmpList({ flows }) {
    const router = useRouter();
    const [data, setData] = useState([]);
    const refreshData = () => {
        router.replace(router.asPath);
    }
    const handleDelete = async (l) => {
        const res = await fetch("https://api-generator.retool.com/4dcBri/data/" + l.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        refreshData();
    }
    function handleChange(event) {
        event.preventDefault()
        let l = String(event.target.value);
        let arr = []
        for (let key in flows) {
            let x = String(flows[key].accountNo)
            arr.push(x.substring(0, l.length))
        }
        let main = []
        for (let i = 0; i < arr.length; i++) {
            if (l === arr[i]) {
                main.push(flows[i])
            }
        }
        setData(main);
    }
    return (
        <div>
            <div className="container main-container">
                <Link href="/">
                    <a><h5>Back To Home</h5></a>
                </Link>
                <h5 className="text-center">Dynamic Routing</h5>
                <Link href="/component/documentation/atm-project/createEmp">
                    <button className="btn btn-primary">Create Employee</button>
                </Link>
                <input name="firstName" onChange={handleChange} />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Account No</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(flow => (
                            <tr key={flow.id}>
                                <td>
                                    <b className="pr-5">{flow.name}</b>
                                </td>
                                <td>
                                    <b>{flow.age}</b>
                                </td>
                                <td>
                                    <b>{flow.accountNo}</b>
                                </td>
                                <td>
                                    <b>{flow.date}</b>
                                </td>
                                <td>
                                    <b>{flow.location}</b>
                                </td>
                                <td>
                                    <Link href={`/component/documentation/atm-project/${flow.name}`}>
                                        <button className="btn btn-success">Transaction</button>
                                    </Link>
                                    <button className="btn btn-danger" onClick={() => handleDelete(flow)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default EmpList;
export async function getServerSideProps({ context }) {
    // Fetch data from external API
    const flows = await fetch(`https://api-generator.retool.com/4dcBri/data`).then(res => res.json())
    // Returning the fetched data
    return { props: { flows } }
}