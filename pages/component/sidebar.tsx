import Link from 'next/link'
import About from '../component/about'
import Contact from '../component/contact'
import { useRouter } from 'next/router'
function SideBar() {
    const router = useRouter()
    return (
        <div className="side-bar">
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                    Documentation
                </button>
                <div className="offcanvas offcanvas-start" id="demo">
                    <div className="offcanvas-body">
                        <div className="offcanvas-header row justify-content-end">
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <nav>
                            <h3 className="text-center">React Side Bar With Router Concept</h3>
                            <div>
                                <ul className="list-items">
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <p onClick={() => router.push('/component/about')}>About</p>
                                    </li>
                                    <li data-bs-toggle="offcanvas" data-bs-target="#demo">
                                        <p onClick={() => router.push('/component/contact')}>Contact</p>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="content-section p-5">
            
                </div>
        </div>
    )
  }
  export default SideBar;