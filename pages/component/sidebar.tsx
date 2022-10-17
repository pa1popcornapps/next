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
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <h5>Introduction</h5>
                                    </button>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
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
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <h5>Types Of Rendering</h5>
                                    </button>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
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
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <h5>Routing</h5>
                                    </button>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                    <Link href="./component/documentation/routings/routings">
                                                        <a>Parameterized Routing</a>
                                                    </Link>
                                                </li>
                                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                    <Link href="./component/documentation/routings/dynamic">
                                                        <a>Dynamic Routing</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        <h5>Get Methods</h5>
                                    </button>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
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
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                       <h5>Strapi Api</h5>
                                    </button>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                    <Link href="./component/documentation/strapi/getCall">
                                                        <a>Strapi Api Get</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                       <h5>To Do Api</h5>
                                    </button>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul>
                                                <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                                    <Link href="./component/documentation/crud-api/navigation">
                                                        <a>Navigation</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
export default SideBar;