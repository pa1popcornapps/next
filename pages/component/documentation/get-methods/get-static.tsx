import Link from "next/link";
import Header from "../../header";
function GetStatic({ avatars }) {
    return (
        <div>
            <Header />
            <div className="container main-container">
                <Link href="/">
                    <a>Back To Home</a>
                </Link>
                <h5 className="text-center">getStaticProps() Method</h5>
                <div>
                    <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '4em' }}>
                        {avatars.map(avatar => {
                            return (
                                <li key={avatar._id}>
                                    <p>{avatar.name}</p>
                                    <img src={avatar.photoUrl} width="100%" alt="" />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default GetStatic;
export async function getStaticProps() {
    const avatars = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/avatar').then(res => res.json());
    return {
        props: {
            avatars
        }
    }
}