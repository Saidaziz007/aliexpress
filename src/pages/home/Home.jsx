import React from "react";
import Banner from "../../components/banner/Banner";
import Card from "../../components/cards/Card";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <Banner />
        </div>
      </section>
      <section className="products">
        <div className="container">
          <div className="products-top">
            <h3 className="products-top-h3">Arzonlashtirilgan savdo</h3>
            <h3>Top tovarlar</h3>
            <h3>Tavsiya qilamiz</h3>
          </div>
          <div className="products-wrapper">
            <Card />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
