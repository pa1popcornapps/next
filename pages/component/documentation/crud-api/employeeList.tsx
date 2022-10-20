import Link from "next/link";
import Header from "../../header";
function EmployeeList({ flows }) {
    return (
        <div>
            <Header />
            <div className="container main-container">
                <Link href="/">
                    <a>Back To Home</a>
                </Link>
                <h5 className="text-center">Dynamic Routing</h5>
                <a href="https://welearncode.com/beginners-guide-nextjs/">For Description</a>
                <table className="table">
                    <thead>
                        <th>Id</th>
                        <th>Name</th>
                        <th>User Id</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>

                        {flows.map(flow => (
                            <tr>
                                <td>{flow.id}</td>
                                <td>{flow.name}</td>
                                <td>{flow.userId}</td>
                                <td>{flow.date}</td>
                                <td>
                                    <Link href={`/component/documentation/crud-api/${flow.name}`}>
                                        <h5><a >Edit</a></h5>
                                    </Link>
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
    const flows = await fetch(`https://api-generator.retool.com/4dcBri/data`).then(res => res.json())

    // Returning the fetched data
    return { props: { flows } }
}