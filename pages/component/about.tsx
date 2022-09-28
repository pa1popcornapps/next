import Link from "next/link";
import Header from "./header";
function About() {
  return (
    <div>
      <Header/>
      <div className="container main-container">
      <Link href="/">
        <a>Back To Home</a>
      </Link>
      <h5 className="text-center">About</h5>
      <Link href="https://www.educative.io/blog/nextjs-tutorial-examples">
        <a>About Next js</a>
      </Link>
      </div>
    </div>
  )
}
export default About;