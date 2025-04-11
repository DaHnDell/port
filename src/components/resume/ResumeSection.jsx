// src/components/resume/ResumeSection.jsx
import React from "react";
import "../../css/resumesection.css";

const ResumeSection = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>이력과 경험, 그리고 개발자로서의 발자취를 담았습니다.</p>
        </div>

        <div className="row">
          {/* 학력 */}
          <div className="col-lg-6">
            <h3 className="resume-title">학력</h3>

            <div className="resume-item">
              <h4>숭실대학교 전산원</h4>
              <h5>2022.09 - 2024.06</h5>
              <p><em>전자정보통신학부 (수료 예정)</em></p>
            </div>

            <div className="resume-item">
              <h4>한신대학교</h4>
              <h5>2016.03 - 2021.03</h5>
              <p><em>국어국문학과 (중퇴)</em></p>
            </div>

            <div className="resume-item">
              <h4>신목고등학교</h4>
              <h5>2013.03 - 2016.01</h5>
              <p><em>졸업</em></p>
            </div>
          </div>

          {/* 경력 */}
          <div className="col-lg-6">
            <h3 className="resume-title">경력</h3>

            <div className="resume-item">
              <h4>숭실대학교 전산원</h4>
              <h5>2022.09 - 2023.10</h5>
              <p><em>부조교</em></p>
              <ul>
                <li>학사관리 시스템 성적 등록</li>
                <li>시험문제 출제 및 채점</li>
                <li>DB 구조 및 CRUD 실무 경험 습득</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>광명대창집 점장</h4>
              <h5>2021.03 - 2022.08</h5>
              <p><em>총괄 운영</em></p>
              <ul>
                <li>직원 채용, 휴가 및 일정 관리</li>
                <li>POS 활용 매출 관리 및 정산</li>
                <li>API 통신 개념과 데이터 흐름 이해 기반 확보</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
