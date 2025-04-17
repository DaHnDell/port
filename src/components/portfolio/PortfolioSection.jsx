// src/components/portfolio/PortfolioSection.jsx
import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "PILLLAW 프로젝트",
    description:
      "건강기능식품 검색 및 AI 기능 포함 SPA 웹앱. Spring Boot 3 + React 기반, AWS S3 및 RESTful API 연동.",
    github: "https://github.com/jungyoonn/pillLaw_frontend",
    image: "/assets/projects/pilllaw.png",
    tags: ["Spring Boot", "React", "AWS", "JWT", "AI"],
  },
  {
    title: "The-K 프로젝트",
    description:
      "JSP/Servlet 기반 웹 포털. 게시판, 디자인 중심 레이아웃 구현. JSP, MySQL, Bootstrap 사용.",
    github: "https://github.com/Sangwon1233/semi-theK",
    image: "/assets/projects/thek.png",
    tags: ["JSP", "Servlet", "MySQL", "Bootstrap"],
  },
  {
    title: "도서관리 시스템",
    description:
      "네이버 도서 검색 API를 활용한 CLI 기반 도서 검색 및 관리 미니 프로젝트. Java 기반.",
    github: "https://github.com/mekwon92/mini3",
    image: "/assets/projects/book.png",
    tags: ["Java", "CLI", "REST API"],
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>그동안 진행했던 주요 프로젝트들을 소개합니다.</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              {project.image && (
                <div className="portfolio-card-image">
                  <img src={project.image} alt={project.title} />
                </div>
              )}
              <div className="portfolio-card-body">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags?.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub style={{ marginRight: "6px" }} />
                  GitHub 바로가기
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
