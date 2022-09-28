import Link from "next/link";
import Header from "../../header";
function GetServer({ data }) {
    return (
        <div>
            <Header />
            <div className="container main-container">
                <Link href="/">
                    <a>Back To Home</a>
                </Link>
                <h5 className="text-center">getServerSidePath() Methods</h5>
                <div className="server-side">
                    <ul>
                        {data.map(avatar => {
                            return (
                                <li key={avatar.id}>
                                    <p><a href="">{avatar.name}</a></p>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default GetServer;
export async function getServerSideProps({ context }) {

    // Fetch data from external API
    const data = await fetch(`https://api-generator.retool.com/OyB4uu/data`).then(res => res.json())

    // Returning the fetched data
    return { props: { data } }
}



