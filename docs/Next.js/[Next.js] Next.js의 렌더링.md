---
slug: rendering
title: Rendering
authors:
  name: Gao Wei
  title: Docusaurus Core Team
  url: https://github.com/wgao19
  image_url: https://github.com/wgao19.png
tags: [hola, docusaurus]
---

# 외부 데이터를 요청하지 않는 페이지

Next.js는 기본적으로 Static Site Generation 사용

# 외부 데이터를 요청하는 페이지

- Static Site Generation : 빌드 시 HTML 생성
- Server Side Rendering : 요청 시 HTML 생성

## Static Site Generation

- 빌드 시 getStaticProps함수 호출 - HTML 생성
- 이 함수는 props를 키로 가진 객체를 반환하고, props를 컴포넌트에 전달

```tsx
const Blog = ({ posts }) => {
  return (
    <ul>
      {posts.map((post: Post) => {
        return (
          <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </li>
        );
      })}
    </ul>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
```

### 동적 라우팅 ( Dynamic Routing )

- 많은 데이터를 요청하는 경우, 데이터의 크기만큼 페이지를 생성하는 것은 매우 비효율적
- 파일 이름에 대괄호 [ ] 를 사용하고, getStaticPaths를 호출
- 이 함수는 params를 키로 가지는 객체로 이루어진 배열 및 fallback으로 이루어진 객체 반환

```tsx
// /blog/[id].tsx

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  const paths = posts.map((post: Post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });

  return { paths, fallback: false };
}
```

- paths는 아래와 같은 형태의 배열
- 아래 코드는 '/blog/1'과 '/blog/2' 와 같은 경로를 생성

```tsx
[{ params: { id: '1' } }, { params: { id: '2' } }, ...]
```

getStaticProps 함수는 인자로 URL에 입력한 parameters를 전달받음

```tsx
// /blog/[id].tsx

export async function getStaticProps({ params }) {
  const res = await fetch(
    https://jsonplaceholder.typicode.com/posts/${params.id}
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
```

## Server Side Rendering

유저가 페이지를 요청하면 HTML 파일을 생성

```tsx
const Album = ({ albums }) => {
  return (
    <ul>
      {albums.map((album: Album) => (
        <li key={album.id}>{album.title}</li>
      ))}
    </ul>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums');
  const albums = await res.json();

  return {
    props: {
      albums,
    },
  };
}
```

> getServerSideProps에서 API Route를 호출하면 이중 호출이 발생하므로 성능에 문제 발생

# Client Side Rendering

- SEO와 무관하며 데이터의 최신 버전이 필요한 경우 사용
- Static Site Generation으로 페이지를 구축하고 클라이언트의 자바스크립트를 이용해 데이터를 가져오는 것도 가능
- 컴포넌트 레벨에서 사용 가능 - 컴포넌트 마운트 시 데이터 페칭, 데이터 업데이트 시 컴포넌트 업데이트
- 데이터 페칭이 느리고, 캐싱되지 않기 때문에 속도가 느릴 확률 존재
- 다양한 방법을 이용하여 구현 가능
  - useEffect
  - SWR, React-Query 등 데이터 페칭 라이브러리

## useEffect

라이브러리를 사용하지 않고 일반 React 애플리케이션에서 사용 가능

```tsx
import { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.website}</p>
        </li>
      ))}
    </ul>
  );
}

export default Users;
```

## 데이터 페칭 라이브러리

- 캐싱, 유효성 검증 등 다양한 기능 포함
- 여러 라이브러리가 존재하지만 아래 예시는 SWR을 사용

설치

```zsh
npm i swr
```

fetcher 함수 생성

```tsx
const fetcher = url => fetch(url).then(res => res.json());


useSWR 훅에 URL과 fetcher 함수를 전달

tsx
import useSWR from 'swr';

function Users() {
  const fetcher = url => fetch(url).then(res => res.json());

  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/users',
    fetcher
  );

  if (error) return <h1>Error!</h1>;
  if (!data) return <h1>Not Found</h1>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.website}</p>
        </li>
      ))}
    </ul>
  );
}

export default Users;
```
