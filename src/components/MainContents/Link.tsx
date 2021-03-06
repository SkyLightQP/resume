import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faBlog, faCode, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ContentBlock from '../../components/ContentBlock';
import { ProjectTitle } from '../../atomics/Typography';

const LinkStyle = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;

const LinkSection: React.FC = () => {
  return (
    <ContentBlock title="그 밖에">
      <ProjectTitle>
        <LinkStyle href="mailto:combbm@gmail.com">
          <FontAwesomeIcon icon={faAt} size="sm" /> Email
        </LinkStyle>
      </ProjectTitle>

      <ProjectTitle>
        <LinkStyle href="https://github.com/SkyLightQP/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="sm" /> GitHub
        </LinkStyle>
      </ProjectTitle>

      <ProjectTitle>
        <LinkStyle href="https://blog.skylightqp.kr/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faBlog} size="sm" /> Blog
        </LinkStyle>
      </ProjectTitle>

      <ProjectTitle>
        <LinkStyle
          href="https://www.acmicpc.net/user/combbm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faCode} size="sm" /> Baekjoon
        </LinkStyle>
      </ProjectTitle>

      <ProjectTitle>
        <LinkStyle href="https://til.skylightqp.kr/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPencilAlt} size="sm" /> Today I Learn
        </LinkStyle>
      </ProjectTitle>

      <br />

      <p>
        이 페이지는 <LinkStyle href="https://daegyeo.me">daegyeo.me</LinkStyle> 으로도 들어올 수
        있습니다.
      </p>
    </ContentBlock>
  );
};

export default LinkSection;
