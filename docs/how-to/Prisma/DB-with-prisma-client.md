---
title: Prisma Client 사용하기
---

[Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client)는 Prisma가 스키마를 보고 TypeScript 타입으로 생성한 결과로, 데이터베이스에 접근할 수 있습니다.

## 설치 방법

1. 프로젝트에 Prisma Client 패키지를 설치합니다.

```bash
npm install @prisma/client
```

2. TypeScript 파일을 생성하여 Prisma Client 객체를 생성합니다.

```ts
import { PrismaClient } from '@prisma/client';

export default new PrismaClient();
```

3. `API Route`에 접속시 데이터베이스에 데이터를 추가하는 코드를 작성합니다.

```tsx title="/pages/api/api-test.tsx"
import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../libs/client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await client.user.create({
    data: {
      name: 'test',
    },
  });
  res.status(200).json({ ok: true });
}
```

4. 데이터베이스 서버 연결 후 `/api/api-test`로 접속하여 아래와 같은 화면이 나타나면 성공적으로 데이터가 생성된 것입니다.

```json
{
  "ok": true
}
```

5. 실제 추가된 데이터를 확인하기 위해 `Prisma Studio`를 실행합니다.

```bash
npx prisma studio
```
