import React from 'react'
import { Carousel } from "antd";


function Galery() {
  const contentStyle = {
    color: "#fff",
    height: "600px",
    lineHeight: "160px",
    textAlign: "center",
    // opacity: 0.8,
    padding: "50px",
    // marginRight: "450px",
  };

  return (
    <>
    <div style={{fontSize: 40, position: "relative", bottom: 150,}}>
      Фотографии нашего заведения
    </div>
     <Carousel autoplay style={{bottom:100}}>
              <div >
                <h3 style={contentStyle}>
                  <img
                    src="./images/1.jpg"
                    alt=""
                    style={{
                      height: "500px",
                      lineHeight: "160px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius:"7px",
                      boxShadow:"0 0 20px black"
                    }}
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="./images/3.jpg"
                    alt=""
                    style={{
                      height: "500px",
                      lineHeight: "160px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius:"7px",
                      boxShadow:"0 0 20px black"
                    }}
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="./images/4.jpg"
                    alt=""
                    style={{
                      height: "500px",
                      lineHeight: "160px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius:"7px",
                      boxShadow:"0 0 20px black"
                    }}
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="./images/6.jpg"
                    alt=""
                    style={{
                      height: "500px",
                      lineHeight: "160px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius:"7px",
                      boxShadow:"0 0 20px black"
                    }}
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="./images/7.jpg"
                    alt=""
                    style={{
                      height: "500px",
                      lineHeight: "160px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius:"7px",
                      boxShadow:"0 0 20px black"
                    }}
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="./images/8.jpg"
                    alt=""
                    style={{
                      height: "500px",
                      lineHeight: "160px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius:"7px",
                      boxShadow:"0 0 20px black"
                    }}
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="./images/9.jpg"
                    alt=""
                    style={{
                      height: "500px",
                      lineHeight: "160px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius:"7px",
                      boxShadow:"0 0 20px black"
                    }}
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="./images/10.jpg"
                    alt=""
                    style={{
                      height: "500px",
                      lineHeight: "160px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius:"7px",
                      boxShadow:"0 0 20px black"
                    }}
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="./images/11.jpg"
                    alt=""
                    style={{
                      height: "500px",
                      lineHeight: "160px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius:"7px",
                      boxShadow:"0 0 20px black"
                    }}
                  />
                </h3>
              </div>
              <div>
                <h3 style={contentStyle}>
                  <img
                    src="./images/12.jpg"
                    alt=""
                    style={{
                      height: "500px",
                      lineHeight: "160px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      borderRadius:"7px",
                      boxShadow:"0 0 20px black"
                    }}
                  />
                </h3>
              </div>
            </Carousel> 
            </>
  )
}

export default Galery

