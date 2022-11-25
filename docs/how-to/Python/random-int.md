---
title: 특정 범위 내 난수 추출하기
---

`random` 모듈의 `randint` 메서드를 사용하면 특정 범위 내 정수를 가져올 수 있습니다.

```py
from random import randint

a = randint(0, 10)
b = randint(0, 10)

print(a + b)
```
