import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';

import Axios from 'axios';
export async function getStaticProps() {
  const res = await fetch(process.env.HOST+'v1/headerinfomation');
  const posts = await res.json();
  console.log(posts);
  return {
    props: {
      ContactUs:posts.setting.ContactUs,

    },
  }
}
export default function Layout({ children,ContactUs }) {
    return (
      <>

    <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet"></link>
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"></link>
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"></link>
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"></link>
  <link href="assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet"></link>
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"></link>
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet"></link>
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"></link>


  <link href="assets/css/style.css" rel="stylesheet"></link>

  <div id="topbar" className="d-flex align-items-center fixed-top">
    <div className="container d-flex justify-content-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope"></i> <a href="mailto:info@example.com">info@Raziantibody.com</a>
        <i className="bi bi-phone"></i>0000000
      </div>
      <div className="d-none d-lg-flex social-links align-items-center">
        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>
    </div>
  </div>
  <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
    <a href="/#ordered" className="appointment-btn scrollto"><span className="d-none d-md-inline">ارسال</span> سفارش</a>

      <h1 className="logo me-auto"><a href="/"></a></h1>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul dir="rtl">
          <li><a className="nav-link scrollto active" href="/#hero">خانه</a></li>
          <li><a className="nav-link scrollto" href="/#about">درباره ما</a></li>
          <li><a className="nav-link scrollto" href="/#services">خدمات ما</a></li>
          {/* <li><a className="nav-link scrollto" href="#doctors">Doctors</a></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
          <li><a className="nav-link scrollto" href="#contact">تماس با ما</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>


    </div>
  </header>
        <main>{children}</main>
        <footer id="footer">
            <div className="p-4">
            <div className=" text-right w-100" style={{width:'100%'}} dir="rtl">
      <strong>شماره تماس </strong>00000
    </div>
    <div className="copyright text-right w-100" dir="rtl">
      <strong>آدرس </strong> ----
    </div>

              </div>
     

<div className="container d-md-flex py-4" id="contact">

  <div className="me-md-auto text-center text-md-start">
  
    <div className="credits">
  
      Designed by <a href="https://afrang.dev/">AfrangArt   &copy;</a>
    </div>
  </div>
  <div className="social-links text-center text-md-right pt-3 pt-md-0">
    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
    <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
  </div>
</div>
</footer>

<div id="preloader"></div>
<a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
  <script src="/assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="/assets/vendor/php-email-form/validate.js"></script>
  <script src="/assets/vendor/purecounter/purecounter.js"></script>
  <script src="/assets/vendor/swiper/swiper-bundle.min.js"></script>

  <script src="/assets/js/main.js"></script>
      </>
    )
  }