---
title: Setup Prisma in Visual Studio Code
---

1. Visual Studio Code에서 [Prisma 플러그인](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)을 설치합니다.
2. 프로젝트에 [Prisma 패키지](https://www.npmjs.com/package/prisma)를 설치합니다.

```bash
npm install prisma --save-dev
```

3. Prisma를 실행시켜 `.env` 파일과 `schema.prisma` 파일을 생성합니다.

```bash
npx prisma init
```

4. 생성된 파일들을 수정하여 데이터베이스와 연결합니다.
