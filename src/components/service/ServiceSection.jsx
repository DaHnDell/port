import React from 'react';

const ServiceSection = () => {
  return (
    <section id="service" className="services section">
      <div className="section-title">
        <h2>Services</h2>
        <p>제가 제공할 수 있는 역량입니다.</p>
      </div>
      <div className="services-grid">
        <div className="service-card">
          <h3>프론트엔드 개발</h3>
          <p>React 기반 SPA, 반응형 UI, 모듈화된 컴포넌트 설계</p>
        </div>
        <div className="service-card">
          <h3>백엔드 API 설계</h3>
          <p>Spring Boot, JWT 기반 인증, RESTful API 설계 및 테스트</p>
        </div>
        <div className="service-card">
          <h3>데이터 크롤링 자동화</h3>
          <p>Java + Selenium으로 웹 데이터 수집 및 DB 저장 처리</p>
        </div>
        <div className="service-card">
          <h3>AWS 배포 경험</h3>
          <p>EC2, MariaDB, S3, Cloudflare를 이용한 실서비스 배포 경험</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
