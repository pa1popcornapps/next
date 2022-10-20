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
                {flows.map(flow => (
                    <div className="color-box">
                        <p>
                            <Link href={`/component/documentation/crud-api/${flow.name}`}>
                                <a className="pr-5">{flow.name}</a>
                            </Link>
                            <Link href={`/component/documentation/crud-api/${flow.name}`}>
                                <a className="pl-5">{flow.age}</a>
                            </Link>
                        </p>

                    </div>
                ))}
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