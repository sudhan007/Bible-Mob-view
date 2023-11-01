import fourteen from "../../../image/Ellipse2.png";

export function Footer() {
  return (
    <div className="row" id="pk">
      {/* <!-- Left Side: Logo and Social Media Icons --> */}
      <div style={{ padding: 20, marginTop: 20 }} className="col-6">
        <img
          style={{}}
          src={fourteen}
          alt="Logo"
          className="img-fluid"
          id="jh"
        />
        <span
          style={{
            borderRight: "1px solid white",
            paddingRight: "12px",
            padding: "14px",
            marginLeft: "-15px",
            fontSize: 25,
            marginTop: 10,
          }}
          id="ty"
        >
          The Last Voice Ministry
        </span>
        <a href="#" className="btn btn-link" id="jk">
          <i style={{ fontSize: 30 }} className="fab fa-facebook"></i>
        </a>
        <a href="#" className="btn btn-link" id="kj">
          <i style={{ fontSize: 30 }} className="fab fa-instagram"></i>
        </a>
        <a href="#" className="btn btn-link" id="i">
          <i style={{ fontSize: 30 }} className="fab fa-youtube"></i>
        </a>
      </div>
      {/* <!-- Right Side: Pages (About Us and Reviews) --> */}
      <div style={{ padding: 20 }} className="col-6">
        <div className="row" id="le">
          <div className="col-4">
            <h4 id="rr">Page</h4>
            <ul className="vl">
              <li className="zx">
                <a style={{ color: "#fff" }} href="#">
                  About us
                </a>
              </li>
              <li className="zx">
                <a style={{ color: "#fff" }} href="#">
                  Reviews
                </a>
              </li>
              <li className="zx">
                <a style={{ color: "#fff" }} href="#">
                  Contact us
                </a>
              </li>
              <li className="zx">
                <a style={{ color: "#fff" }} href="#">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="col-8">
            <h4 id="rr">Help</h4>
            <ul className="lu">
              <li className="zx">
                <a style={{ color: "#fff" }} href="#">
                  Privacy
                </a>
              </li>
              <li className="zx">
                <a style={{ color: "#fff" }} href="#">
                  Policy
                </a>
              </li>
              <li className="zx">
                <a style={{ color: "#fff" }} href="#">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
