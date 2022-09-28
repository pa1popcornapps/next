import Link from 'next/link'
import Header from './component/header'
import Body from './component/body'
import Footer from './component/footer'
import About from './component/about'
import colors from '../data/colors.json'
export default function IndexPage() {
  return (
    <div>
      <Header />
      <div >
        <Body />
      </div>
      <Footer />
    </div>
  )
}
