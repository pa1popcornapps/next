import Link from 'next/link'
function SideBar() {
    return (
        <div className="side-bar">
            <button className="btn btn-primary doc-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                Documentation
            </button>
            <div className="offcanvas offcanvas-start" id="demo">
                <div className="offcanvas-body">
                    <div className="offcanvas-header row justify-content-end">
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <nav>
                        <h5 className="text-center">Next Js Side Bar With Link Concept</h5>
                        <div>
                            <ul>
                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                    <Link href="./component/about">
                                        <a>About Next Js</a>
                                    </Link>
                                </li>
                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                    <Link href="./component/contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                                <h5>Types Of Rendering</h5>
                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                    <Link href="./component/documentation/pre-load/client-side">
                                        <a>Client Side Rendering</a>
                                    </Link>
                                </li>
                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                    <Link href="./component/documentation/pre-load/server-side">
                                        <a>Server Side Rendering</a>
                                    </Link>
                                </li>
                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                    <Link href="./component/documentation/pre-load/pre-load">
                                        <a>Pre Rendering</a>
                                    </Link>
                                </li>
                                <h5>Routing</h5>
                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                    <Link href="./component/documentation/routings/routings">
                                        <a>Parameterized Routing</a>
                                    </Link>
                                </li>
                                <h5>Get Methods</h5>
                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                    <Link href="./component/documentation/get-methods/methods">
                                        <a>Get Methods Description</a>
                                    </Link>
                                </li>
                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                    <Link href="./component/documentation/get-methods/get-static">
                                        <a>Get Static Method</a>
                                    </Link>
                                </li>
                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                    <Link href="./component/documentation/get-methods/get-paths">
                                        <a>Get Static Path Method</a>
                                    </Link>
                                </li>
                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                    <Link href="./component/documentation/get-methods/get-server">
                                        <a>Get Server Side Method</a>
                                    </Link>
                                </li>
                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                    <Link href="./component/documentation/strapi/getCall">
                                        <a>Strapi Api Get</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default SideBar;