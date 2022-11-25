웹 페이지의 정보를 쉽게 스크랩 할 수 있도록 도와주는 패키지입니다.

```py
from bs4 import BeautifulSoup
from requests import get


website = get("https://www.google.com")
soup = BeautifulSoup(website.text, "html.parser")

print(soup)
```

- 위 코드에서 `website.text`는 해당 사이트의 `HTML`을 텍스트로 반환합니다.
- `soup`은 `HTML`을 분석하여 `find_all` 등 다양한 메서드를 사용할 수 있는 데이터로 변환됩니다.

```py
from bs4 import BeautifulSoup
from requests import get

website = get("https://www.google.com")
soup = BeautifulSoup(website.text, "html.parser")

print(soup.find_all("span", {"class": "gbi"}))
print(soup.select("h2 a"))
```

- `HTML` 내 문자열을 가져오기 위해서는 `text`가 아닌 `string` 메서드를 사용
- `class`외에 자주 사용되는 옵션으로는 `recursive`가 있습니다.
  - `div`를 탐색할 때 `recursive`가 `False`라라면 `div`의 자식 `div`는 탐색하지 않습니다.
  - 기본값은 `True`이며 기본값을 사용하는 것을 권장하고 있습니다.
