import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Axios from 'axios';


import Layout from '../component/layout/template';
import Orderform from '../component/order';
Axios.defaults.withCredentials = true;

export async function getStaticProps() {
  const res = await fetch(process.env.HOST+'v1/firstpage');
  const posts = await res.json();
  return {
    props: {
      services:posts.Services,
      ServicesGroup:posts.ServicesGroup,
      help:posts.help,
      Aboutus:posts.Aboutus
    },
  }
}
const sendRequest2 = 'd';
export default function Home({services,ServicesGroup,help,Aboutus}) {
  return (
    <div >
      <Head>
        <title>Create Next App  </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <main>
      <section id="hero" className="d-flex align-items-center">
    <div className="container">
    <div>
       
        </div>
      <h1>فروش مواد آزمایشگاهی</h1>
      <h2>از معتبرین سایت های درسراسر جهان</h2>
      <a href="/#contact" className="btn-get-started scrollto">ثبت سفارش</a>
    </div>
  </section>
  <main id="main">


  <section id="why-us" className="why-us">
  
    </section>

    <section id="about" className="about">
      <div className="container-fluid">

        <div className="row">
          <div className="col-xl-5 col-lg-6  d-flex justify-content-center align-items-stretch position-relative">
          <img src={process.env.HOST+Aboutus.mainimage.url} ></img>

          </div>

          <div dir="rtl" className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-right justify-content-center py-5 px-lg-5">
            <h3>{Aboutus.name}</h3>
            <p>{Aboutus.text}</p>

          </div>
        </div>

      </div>
    </section>
   
    <section id="services" className="services " style={{background:'#f1f7fd'}}>
      <div className="container">

        <div className="section-title">
          <h2>{ServicesGroup.name}</h2>
          <p>{ServicesGroup.text}</p>
        </div>
   
        <div className="row">
      
        {services.map((datafetch, index) => (
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-3 " >
            <div className="icon-box w-100">
              <div className="">
                <img src={process.env.HOST+datafetch.mainimage.url} width="100" ></img>
                </div>
              <h4 className="mt-4"><a target="_blank" href={datafetch.url}>{ datafetch.name }</a></h4>
            </div>
          </div>
          ))}
          

       


        </div>

      </div>
    </section>

    <section id="appointment" className="appointment section-bg"  style={{background:'#fff'}}>
      <div className="container">

        <div className="section-title">
          <h2>{help.name}</h2>
          <p> { help.name }</p>
        </div>

        <form action="forms/appointment.php" method="post" role="form" className="php-email-form">
        </form>

      </div>
    </section>
    <section id="ordered" className="departments">
      <div className="container">

        <div className="section-title">
          <h2>سفارشات</h2>
            <Orderform services={services} host={process.env.HOST} />
        </div>
      </div>
      

    </section>
 
  </main>
       </main>
     </Layout>


    </div>
  )
}
