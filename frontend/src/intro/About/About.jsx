import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                
                <h2 className="about-wrapper__info-text">
                  {
                    `성장하는 개발자`
                  }
                  <br/>
                </h2>
                <p className="about-wrapper__info-text">
                  {
                    ` 안녕하세요 성장하는 개발자 임경민입니다.
                    보안학과를 나와 보안회사를 다니다 그만두고 19년부터 개발공부를 다시시작했습니다.
                    사교육 학원을 통해 Java, Android, PHP를 듣고 개발에 대한 기본지식 , 마음가짐을 배웠으며 이후 PHP를통한 웹개발에 흥미가 생겨 국비지원에서 React를 공부했습니다.`
                  }
                </p>

                <p className="about-wrapper__info-text">
                  {
                    ` 저는 제 목표를 '성장하는' 개발자로 삼아서 더 공부하고 있습니다. 경력을 쌓은 개발자는 경력만 쌓이면 자연스럽게 되지만 '성장하는'개발자는 경력뿐만 아니라 매일 공부하여 개발자로써 더 높은 곳을 바라보고 있기 때문입니다 . 저는 계속 공부하여 '성장하는'개발자로써 남고 싶습니다.
                    `
                  }
                </p>
               


                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href="https://github.com/limup3"
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
