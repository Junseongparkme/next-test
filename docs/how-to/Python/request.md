---
title: requests 모듈을 이용해 요청 보내기
---

- Python은 특정 웹사이트로 요청을 보낼 수 있는 `requests` 모듈을 제공합니다.
- `requests` 모듈의 `get` 메서드는 실제로 요청을 보내고, 그 결과를 반환합니다.

```py
from requests import get

websites = {
  "https://naver.com",
  "https://google.com"
}

for website in websites:
  result = get(website)
  print(result)
```

```py
<Response [200]>
<Response [200]>
```
