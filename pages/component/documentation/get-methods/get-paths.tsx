import Link from "next/link";
import Header from "../../header";
function GetPaths({colors}) {
    return (
        <div>
            <Header />
            <div className="container main-container">
                <Link href="/">
                    <a>Back To Home</a>
                </Link>
                <h5 className="text-center">getStaticPath() Methods</h5>
                <Link href="../get-methods/characters/[characterId]">
                    <a href="https://welearncode.com/beginners-guide-nextjs/">For Description</a>
                </Link>
                <div className="color-box">
                    {colors.map(color => (
                        <Link href={`/${color.name}`}>
                            <h5><a href="">{color.name}</a></h5>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default GetPaths;
export async function getServerSideProps({ context }) {

    // Fetch data from external API
    const colors= await fetch(`https://api-generator.retool.com/n63yab/data`).then(res => res.json())

    // Returning the fetched data
    return { props: { colors } }
}