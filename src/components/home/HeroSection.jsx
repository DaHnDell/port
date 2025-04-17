// src/components/home/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section id="home" className="hero d-flex align-items-center justify-content-center">
      <div className="container text-center">
        <h2>안녕하세요, <span className="highlight"></span></h2>
        <p>사람을 향한 인문학적 시선과</p>
        <p>기술에 관한 끊임없는 관심을 지닌 개발자를 목표하고 있는</p>
        <p>DahnDell, 김한민입니다.</p>

        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://tistory.com" target="_blank" rel="noreferrer">
            <i className="fas fa-blog"></i>
          </a>
          {/* 문학 블로그는 추후 연결 예정 */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;