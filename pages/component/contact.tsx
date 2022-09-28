import Link from "next/link";
import Header from "./header";
function Contact() {
  return (
    <div>
      <Header />
      <div className="container main-container">
        <Link href="/">
          <a>Back To Home</a>
        </Link>
        <h5 className="text-center">Content</h5>
      </div>
    </div>
  )
}
export default Contact;