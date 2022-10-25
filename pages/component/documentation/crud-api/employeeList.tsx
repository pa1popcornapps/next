import Link from "next/link";
import { useRouter } from 'next/router';
function EmployeeList({ flows }) {
    const router = useRouter();
    const refreshData = () => {
        router.replace(router.asPath);
      }
    const handleDelete = async (l) => {
        const res = await fetch("https://api-generator.retool.com/QqdBas/data/" + l.id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        refreshData();
    }
    return (
        <div>
            <div className="container main-container">
                <Link href="/">
                    <a><h5>Back To Home</h5></a>
                </Link>
                <h5 className="text-center">Dynamic Routing</h5>
                <a href="https://welearncode.com/beginners-guide-nextjs/"><h5>For Description</h5></a>
                <Link href="/component/documentation/crud-api/createEmployee">
                <button className="btn btn-primary">Create Employee</button>
                </Link>
                <table className="table">
                    <thead>
                        <th>Nmae</th>
                        <th>Age</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {flows.map(flow => (
                            <tr>
                                <td>
                                    <a className="pr-5">{flow.name}</a>
                                </td>
                                <td>
                                    <b>{flow.age}</b>
                                </td>
                                <td>
                                    <Link href={`/component/documentation/crud-api/${flow.name}`}>
                                        <button className="btn btn-success">Edit</button>
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
export default EmployeeList;
export async function getServerSideProps({ context }) {

    // Fetch data from external API
    const flows = await fetch(`https://api-generator.retool.com/QqdBas/data`).then(res => res.json())

    // Returning the fetched data
    return { props: { flows } }
}