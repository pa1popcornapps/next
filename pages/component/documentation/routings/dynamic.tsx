import Link from "next/link";
import Header from "../../header";
function Dynamic({flows}) {
    return (
        <div>
            <Header />
            <div className="container main-container">
                <Link href="/">
                    <a>Back To Home</a>
                </Link>
                <h5 className="text-center">Dynamic Routing</h5>
                    <a href="https://welearncode.com/beginners-guide-nextjs/">For Description</a>
                <div className="color-box">
                    {flows.map(flow=> (
                        <Link href={`/component/documentation/routings/${flow.name}`}>
                            <h5><a >{flow.name}</a></h5>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Dynamic;
export async function getServerSideProps({ context }) {

    // Fetch data from external API
    const flows= await fetch(`https://api-generator.retool.com/QqdBas/data`).then(res => res.json())

    // Returning the fetched data
    return { props: { flows } }
}