import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-0 mt-0 mb-10"> 
        <div className=" text-white border-0 mx-5 mb-3 mt-0">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              className="card-img img-fluid"
              src="./assets/main.jpg"
              alt="Card"
              style={{
                width: "1150px",     
                height: "500px",    
                objectFit: "cover",
                display: "block",
                paddingTop: "50px",
                objectPosition: "center",
              }}
            />
          </div>
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;