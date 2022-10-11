import Link from "next/link";
import Header from "../../header";
function Routings() {
    return (
        <div>
            <Header />
            <div className="container main-container">
                <Link href="/">
                    <a>Back To Home</a>
                </Link>
                <p>
                <Link
                    href={{
                        pathname: "parameter",
                        query: { id: "test" },
                    }}
                >
                    <a>Parameterized Routs</a>
                </Link>
                </p>
            </div>
        </div>
    )
}
export default Routings;