import Link from "next/link";
import Header from "../../header";
function PreRender() {
  return (
    <div>
      <Header />
      <div className="container main-container">
        <h5 className="text-center">Pre Render (PR)</h5>
        <Link href="/">
          <a>Back To Home</a>
        </Link>
        <div className="">
          <b>
            In Next.js, we know it generates HTML for a page called pre-rendering. Next.JS supports two types of pre-rendering.

            Static Generation − This method generates the HTML page at build time. This pre-rendered HTML is sent on each request. This method is useful for marketing websites, blogs, e-commerce products listing wesites, helps, documentation websites.

            Server Side Generation − This method generates the HTML page on each request. This method is suitable when an html page contents can vary with each request.

            Per Page Pre-rendering
            Next.JS allows to set pre-rendering method for each page where most of pages follow static generation and other pages will use server side rendering.

            Static Generation Without Data
            Static generation can be done without data in which case, HTML pages will be ready without need to prefetch the data and then start rendering. Data can be fetched later or on request. This technique helps in showing user an User Interface without any data in case data takes time to come.

            Static Generation With Data
            Static generation can be done with data in which case, HTML pages will not be ready until data is fetched, as HTML may be dependent on data. Each component has a special method getStaticProps which can be used to fetch data and pass data as props of the page so that page can render accordings to passed props.

            getStaticProps() function runs at build time in production and runs for every request in dev mode.
          </b>
        </div>
      </div>
    </div>
  )
}
export default PreRender;