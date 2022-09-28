import Link from "next/link";
import Header from "../../header";
function ServerSide() {
  return (
    <div>
      <Header />
      <div className="container main-container">
        <Link href="/">
          <a>Back To Home</a>
        </Link>
        <h5 className="text-center">Server-side rendering (SSR)</h5>
        <div className="">
          <b>

            To understand SSR let us take an analogy of food served in a restaurant. Suppose we placed an order of starter, chapati, dal, curry, etc. It takes a long time for the order to be delivered. We would be frustrated. A hungry customer might even scream at the waiter.

            But, what if we are served some papad, salad, or a welcome drink as we take our seats?

            Amazing! At least we got something to start with!

            A similar approach is used in SSR.

            In server-side rendering, when a user requests a webpage, the server prepares an HTML page by fetching user-specific data and sends it to the user’s machine. The browser then constructs the content and displays the page. This entire process of fetching data from the database, creating an HTML page and sending it to the client happens in a few milliseconds.

            In this process, users can see the content on the browser instead of a blank screen, making the users happy and improving their user experience.
          </b>
        </div>
      </div>
    </div>
  )
}
export default ServerSide;