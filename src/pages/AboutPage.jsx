import React from 'react'
import { Footer, Navbar } from "../components";
import about from '../images/about.jpg';
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <div className="container my-5">
  <div className="row align-items-center">

    {/* LEFT IMAGE */}
    <div className="col-md-5 text-center">
      <img 
      src = {about}
        alt="About SmartBasket" 
        className="img-fluid rounded shadow"
        style={{ width: "350px", height: "300px", objectFit: "cover" }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="col-md-7">
      <h1 className="text-center text-md-start">About Us</h1>
      <hr />
      <p className="lead text-center text-md-start">
        SmartBasket is your all in one online shopping destination, offering a seamless and enjoyable
        shopping experience. From the latest electronics to stylish men’s and women’s clothing,
        explore our elegant jewellery collection crafted to match every occasion and style. 
        At SmartBasket, we focus on affordability, variety, and customer satisfaction making shopping
        smarter, easier, and faster.
      </p>
    </div>

  </div>
</div>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Mens's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelery</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage