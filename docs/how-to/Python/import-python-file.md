---
title: 다른 디렉토리에 있는 Python 파일 가져오기
---

- Python에도 모듈 시스템이 존재합니다.
- `.`을 통해 내부 디렉토리로 접근할 수 있습니다.
- 파일을 가져올 때는 확장자를 생략합니다.

아래 코드는 루트 디렉토리에 있는 `a.py`에서 `outer/inner/b.py`에 있는 함수를 가져오는 예시입니다.

```py title="/outer/inner/b.py"
def say_hello():
  print("Hello from b")
```

```py title="/a.py"
from outer.inner.b import say_hello

say_hello();
```

```bash
Hello from b
```
