// src/components/about/AboutSection.jsx
import React from "react";
import '../css/sidebarheader.css';

const AboutSection = () => {
  return (
    <section id="about" className="about section light-background">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>문학적 사고와 실무형 기술을 경험한 풀스택 주니어 개발자</p>
        </div>

        <div className="row about-content">
          <div className="about-img">
            <img src={profileImg} alt="김한민 프로필" className="img-fluid" />
          </div>

          <div className="about-text">
            <p>
              다양한 노동과 학문적 경험을 바탕으로 성장해온 저는, 전공은 국문학이지만 기술로 세상과 소통하는 것을 배워가며 개발자의 길을 걷고 있습니다. 
              코딩을 문학처럼, 사용자에게 닿는 아름다운 언어로 생각하며 설계와 구현을 고민합니다.
            </p>
            <p>
              Spring Boot와 React 기반의 풀스택 웹앱 프로젝트를 진행했으며, API 연동, 크롤링, DB 설계, UI/UX에 이르기까지 다양한 개발 과정을 경험했습니다. 
              문제 해결 능력과 커뮤니케이션을 중요하게 여기며, 문학적 감성과 기술적 정교함을 동시에 추구합니다.
            </p>

            <div className="info-list">
              <ul>
                <li><strong>Name:</strong> 김한민</li>
                <li><strong>Email:</strong> khanman1208@gmail.com</li>
                <li><strong>Location:</strong> 서울 양천구</li>
                <li><strong>Role:</strong> Junior Full-Stack Developer</li>
              </ul>
            </div>

            <div className="skills">
              <h4>기술 키워드</h4>
              <div className="skill-tags">
                <span>React</span>
                <span>Spring Boot</span>
                <span>MySQL</span>
                <span>JPA</span>
                <span>Thymeleaf</span>
                <span>AWS</span>
                <span>Git</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;