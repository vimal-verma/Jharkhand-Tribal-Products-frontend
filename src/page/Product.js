import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Products from '../components/Products'

export default function Product() {
  return (
    <div>
      <Nav />
      <div>
        <h1>Products</h1>
        <Products limit="100" />
      </div>
      <Footer />
    </div>
  )
}
