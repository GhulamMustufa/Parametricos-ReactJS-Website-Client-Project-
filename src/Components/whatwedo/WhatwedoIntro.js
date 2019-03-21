import React from 'react'
import "./wireframe.css";

function WhatwedoIntro() {
  return (
    <div>
      <div className="coverish py-5" style={{backgroundImage: 'url(https://pingendo.com/site-assets/cover.jpg)', backgroundPosition: 'top left', backgroundSize: '100%', backgroundRepeat: 'repeat'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <h1 className="py-4 display-2 text-primary text-center">Parametricos. Who are you?</h1>
                <h3 className="my-4 text-justify text-primary px-2" style={{}}>Our vision at Parametricos is to streamline the construction process worldwide. We want to empower architectural design freedom by removing time-wasting tasks. We do that by improving architects’ workflow, from design to construction.&nbsp;&nbsp;<br /><br /><br />Parametricos enables an online communication, data-driven co-design workflow supported by digital maps and an embedded marketplace for construction materials and furniture. We calculate cost live, among other engineering simulations. We do that to reduce the ‘three core elements’ of Time, Energy and Cost.</h3>
                <a className="btn m-3 btn-lg btn-primary" href="https://medium.com/@messiosmarios/parametricos-who-are-you-e80401101820"><b >Read More</b></a>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WhatwedoIntro
