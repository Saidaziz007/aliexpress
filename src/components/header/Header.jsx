import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";
import { GrCatalog } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegSmile } from "react-icons/fa";
import "./Header.css";
import axios from "axios";
import { CARD_IMG } from "../../static";
import { NavLink } from "react-router-dom";

const API_URL = "https://dummyjson.com/products";

const Header = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  let handleSearch = (data) => {
    return data?.filter((pr) =>
      pr.title.toLowerCase().includes(search.toLowerCase().trim())
    );
  };
  return (
    <header className="header">
      <nav className="container-header nav-all">
        <div className="nav-logo">
          <NavLink to={"/"}>
            <img src={logo} alt="" />
          </NavLink>
        </div>
        <div className="nav-info">
          <div className="nav-catalog">
            <GrCatalog />
            <p>Katalog</p>
          </div>
          <div className="nav-input">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="table lamp"
            />
            {search.trim() ? (
              <ul className="nav-search">
                {search.trim() ? (
                  handleSearch(data).length ? (
                    handleSearch(data)?.map((el) => (
                      <div key={el.id} className="nav-result">
                        {CARD_IMG[el.id] ? (
                          <img src={CARD_IMG[el.id]?.img[0]} alt="" />
                        ) : (
                          <img src={el.images[0]} alt="" />
                        )}
                        <li key={el.id}>{el.title}</li>
                      </div>
                    ))
                  ) : (
                    <p>Empty</p>
                  )
                ) : (
                  <></>
                )}
              </ul>
            ) : (
              <></>
            )}
            <button>Qidirip topish</button>
          </div>
          <NavLink to={"/wishlist"}>
            <div className="nav-orders">
              <FaRegHeart />
              <p>Wishlist</p>
            </div>
          </NavLink>
          <div className="nav-cart">
            <FiShoppingCart />
            <p>Savat</p>
          </div>
          <div className="nav-login">
            <FaRegSmile />
            <p>Kirilsin</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
