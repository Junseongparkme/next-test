import React from 'react';
import Layout from '@theme/Layout';
import styled from '@emotion/styled';
import Link from '@docusaurus/Link';

const Wrapper = styled.main`
  display: flex;
  justify-content: space-evenly;
  padding-top: 20%;
`;

const Card = styled.div`
  width: 25%;
  background-color: skyblue;
  border: 2px solid black;
  text-align: center;
  border-radius: 1rem;
  color: black;
  padding: 2rem 0;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    padding-top: 1rem;
    a {
      color: #d6925b;
      &:hover {
        color: #d77953;
      }
      &:active {
        color: #d65a4a;
      }
    }
  }
  p {
    cursor: default;
  }
`;

export default function Home() {
  return (
    <Layout title="Homepage" description="Homepage">
      <Wrapper>
        <Card>
          <h1>
            <Link to="/docs/how-to/how-to/intro">How to</Link>
          </h1>
          <p>다양한 문제 해결 방법을 기록합니다.</p>
        </Card>
        <Card>
          <h1>
            <Link to="/docs/ref/ref/intro">Reference</Link>
          </h1>
          <p>다양한 개념에 대한 정보를 기록합니다.</p>
        </Card>
        <Card>
          <h1>
            <Link to="/docs/exp/exp/intro">Explanation</Link>
          </h1>
          <p>다양한 개념에 대한 배경 지식을 기록합니다.</p>
        </Card>
      </Wrapper>
    </Layout>
  );
}
