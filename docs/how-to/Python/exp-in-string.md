---
title: f-string을 사용하여 문자열 내에 표현식 삽입하기
---

문자열 내 표현식을 삽입하는 여러 방법 중 가장 간단한 방법은 3.6 버전에서 등장한 `f-string` 입니다.

- 문자열 앞에 `f`를 추가합니다.
- 표현식이 올 자리를 중괄호로 표시합니다.

```py
name = "UXev"

greeting = f"Hello, I am {name}"

print(greeting)
```

```py
Hello, I am UXev
```
