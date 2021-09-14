import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiOutlineHome } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { FiInstagram } from "react-icons/fi";
import { FooterWrapper } from "../styleWrapper/footerWrapper";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { BiPrinter } from "react-icons/bi";
import { BsEnvelope } from "react-icons/bs";
import LoopObject from './animated'


const FooterPagePro = () => {
  return (
      <FooterWrapper>
    <MDBFooter  className="page-footer font-small mdbcontainer-1 pt-0">
      <div >
        <MDBContainer fluid className="text-center text-md-left boot-1">
          <MDBRow className="py-4 d-flex align-items-center justify-content-space-between">
            <MDBCol md="6" lg="5" className="d-flex text-md-left mb-4 mb-md-0">
              <LoopObject />
              <h6 className="mb-0  p-3">
                Some Links <AiOutlineRight />

              </h6>
              
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a href="https://www.facebook.com/akromov.ibrohim.3/" className="icons-1">
                <FaFacebook />
              </a>
              <a href="https://twitter.com/akromov14" className="icons-1">
                <AiFillTwitterCircle />
              </a>
              <a href="https://akromovibrohim7@gmail.com" className="icons-1">
                <FcGoogle />
              </a>
              <a href="https://instagram.com/akromov_07" className="icons-1">
                <FiInstagram />
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left ">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Company name</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Products</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!">MDBootstrap</a>
            </p>
            <p>
              <a href="#!">MDWordPress</a>
            </p>
            <p>
              <a href="#!">BrandFlow</a>
            </p>
            <p>
              <a href="#!">Bootstrap Angular</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="https://t.me/Leanardo_77">Leanardo_77</a>
            </p>
            <p>
              <a href="#!">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!">Shipping Rates</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <AiOutlineHome className="me-3"/> Toshkent City Ohangrabo street
            </p>
            <p>
              <BsEnvelope className="me-3"/>akromovibrohim7@gmail.com
            </p>
            <p>
              <AiOutlinePhone className="me-3"/> + 998 93 802 07 81
            </p>
            <p>
              <BiPrinter className="me-3"/> + 998 94 691 07 81
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid className="text-light">
          &copy; {new Date().getFullYear()} Copyright: <a href="https://t.me/FrontEndCodee"> Front-End Codee </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </FooterWrapper>
  );
}

export default FooterPagePro;