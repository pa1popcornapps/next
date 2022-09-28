import Link from "next/link";
import Header from "../../header";
function Methods() {
  return (
    <div>
      <Header/>
      <div className="container main-container">
      <Link href="/">
        <a>Back To Home</a>
      </Link>
      <h5 className="text-center">Get Methods</h5>
      <Link href="https://blog.logrocket.com/getinitialprops-vs-getserversideprops-nextjs/">
        <a>Click Here</a>
      </Link>
      </div>
    </div>
  )
}
export default Methods;