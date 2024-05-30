import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-all">
          <div className="footer-1">
            <h2>XARIDORLAR UCHUN</h2>
            <p>Qo'llab-quvvatlash</p>
            <p>Arzonlashtirilgan savdolar taqvimi</p>
            <p>AliExpress Yo'riqnomasi</p>
          </div>
          <div className="footer-1">
            <h2>HAMKORLARGA</h2>
            <p>AliExpress'da soting</p>
            <p>Affiliat dasturi</p>
            <p>Sotuvchi uchun blog</p>
          </div>
          <div className="footer-1">
            <h2>KOMPANIYA HAQIDA</h2>
            <p>Press-markaz</p>
            <p>AliTech</p>
            <p>Kompaniya hayoti haqida blog</p>
          </div>
          <div className="footer-1">
            <h2>BIZ IJTIMOIY TARMOQLARDA</h2>
            <p>VK</p>
            <p>OK</p>
            <p>Telegram</p>
            <p>Dzen</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
