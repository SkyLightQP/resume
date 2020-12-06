import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';

const TitleContainer = styled.div`
  background-color: #303b4d;

  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

const Title = styled(motion.p)`
  font-weight: bold;
  color: white;
  font-size: 3.5rem;

  @media screen and (max-width: 420px) {
    font-size: 3rem;
  }
`;

const SubTitle = styled(motion.p)`
  color: white;
  font-size: 1.2rem;

  @media screen and (max-width: 420px) {
    font-size: 1rem;
  }
`;

const IconList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  color: white;

  margin-top: 2rem;

  cursor: pointer;

  & > a {
    margin-right: 14px;
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  & > a:last-child {
    margin-right: 0;
  }
`;

const containerAnimation = {
  before: {},
  after: {
    transition: {
      ease: 'easeIn',
      staggerChildren: 0.2,
      delay: 0.3
    }
  }
};

const textAnimation = {
  before: {
    y: 20,
    opacity: 0
  },
  after: {
    y: 0,
    opacity: 1
  }
};

const Header: React.FC = () => {
  return (
    <TitleContainer>
      <motion.div initial="before" animate="after" variants={containerAnimation}>
        <Title variants={textAnimation}>하늘빛</Title>
        <SubTitle variants={textAnimation}>Daegyeom Ha</SubTitle>

        <IconList>
          <motion.a
            href="https://github.com/SkyLightQP/"
            target="_blank"
            rel="noopener noreferrer"
            variants={textAnimation}
          >
            <FontAwesomeIcon icon={faGithub} /> GITHUB
          </motion.a>
          <motion.a
            href="https://blog.skylightqp.kr/"
            target="_blank"
            rel="noopener noreferrer"
            variants={textAnimation}
          >
            <FontAwesomeIcon icon={faBlog} /> BLOG
          </motion.a>
        </IconList>
      </motion.div>
    </TitleContainer>
  );
};

export default Header;
