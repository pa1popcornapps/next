import Link from "next/link";
import Header from "../../header";
function ClientSide() {
  return (
    <div>
      <Header />
      <div className="container main-container">
        <Link href="/">
          <a>Back To Home</a>
        </Link>
        <h5 className="text-center"> Client-side rendering (CSR)</h5>
        <div className="">
          <b>
            Client-side rendering (CSR)
            Client-side rendering (CSR) means rendering pages directly in the browser using JavaScript. All logic, data fetching, templating, and routing are handled on the client-side.
            When a browser receives a request for a page, it sends HTML, CSS and, JS code to be run in the browser. The script tag contains all the instructions in the React code. It is loaded in the browser, and the app becomes interactive.
            CSR might take time to make the site visible to the users in case of slow internet or large bundle size. A user generally sees a blank page in such scenarios. It gives a bad user experience. It also affects SEO as web crawlers are unable to index the blank site.
          </b>
        </div>
      </div>
    </div>
  )
}
export default ClientSide;