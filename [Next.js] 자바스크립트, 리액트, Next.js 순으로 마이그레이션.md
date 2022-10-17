## UI 렌더링

리액트의 동작을 이해하기 위해 브라우저가 어떻게 코드를 해석하고 UI를 구축하는지 알아야 함

-   웹 페이지 방문
-   서버는 HTML 파일을 반환
-   브라우저는 HTML 파일을 읽고 DOM을 구성

### DOM

-   HTML 요소들을 객체의 형태로 변환
-   부모 자식 관계를 가진 트리 형태
-   DOM 메서드와 프로그래밍 언어를 통해 이벤트 수신 및 DOM 조작 가능

### HTML과 DOM

-   HTML은 초기 페이지를 나타냄, DOM은 자바스크립트 코드에 의해 업데이트 된 내용을 나타냄
-   개발자 도구는 DOM을, 페이지 소스 보기는 HTML을 제공
-   DOM을 직접 업데이트하려면 많은 코드가 필요해 생산성이 낮아지고 많은 시간을 소비하게 됨
-   이런 방식보다는 화면에 나타내고 싶은 것을 설명하고 컴퓨터가 이를 확인하여 DOM을 업데이트하는 방식이 더 효율적

### 명령형 프로그래밍과 선언형 프로그래밍

-   명령형 프로그래밍 : DOM을 직접 조작하여 UI를 업데이트 - UI를 업데이트하는 방법을 하나씩 설명
-   선언형 프로그래밍 : DOM 메서드를 사용하지 않고 화면에 나타내고 싶은 요소를 선언
-   명령형 프로그래밍보다 선언형 프로그래밍의 개발 속도가 더 빠르고 효율적입니다.
    -   명령형 프로그래밍은 요리사에게 피자를 만드는 레시피를 작성하여 전달하는 것
    -   선언형 프로그래밍은 피자를 주문하는 것
-   리액트는 UI 구축을 위한 가장 대표적인 선언형 라이브러리
-   개발자는 UI에 어떤 일이 일어나야 하는지 리액트에게 알려주고, 리액트는 이에 맞게 DOM을 업데이트

## 리액트 시작하기

[https://unpkg.com](https://unpkg.com/)에서 react와 react-dom 라이브러리 가져옴

-   react : 코어 리액트 라이브러리
-   react-dom : 리액트와 DOM에서 사용할 수 있는 DOM 관련 메서드를 제공하는 라이브러리

```html
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

 ReactDOM의 render 메서드를 사용해 리액트에게 특정 요소를 렌더링하라고 지시

```html
<div id="root"></div>
<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script>
  const app = document.querySelector('#root');
  ReactDOM.render(<h1>Hello World</h1>, app);
</script>
```

하지만, 이 메서드는 자바스크립트 문법이고, 렌더링 해야하는 요소는 HTML이므로 에러 발생

### JSX

-   JSX는 UI를 HTML의 형태로 설명할 수 있는 자바스크립트 구문 확장
-   브라우저가 해석할 수 없기 때문에 Babel 등의 컴파일러 필요

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

Babel이 해석해야하는 스크립트를 알려주기 위해 script type="text/jsx"사용

```html
<script type="text/jsx">
  const app = document.querySelector('#root');
  ReactDOM.render(<h1>Hello World</h1>, app);
</script>
```

### 컴포넌트로 UI 빌드하기

-   UI는 컴포넌트라는 빌딩 블록으로 나눌 수 있음
-   컴포넌트는 재사용 가능한 레고 조각으로, 더 큰 UI를 구축하거나, UI의 일부분을 업데이트할 수 있음
-   애플리케이션의 나머지 부분을 건드리지 않고 복잡한 UI를 쉽게 관리할 수 있음
-   컴포넌트는 JSX를 반환하는 함수이며 아래 두 가지 규칙을 적용함
    -   함수의 첫 글자는 대문자 - HTML 및 자바스크립트 구문과 구분하기 위함
    -   HTML처럼 < > 를 통해 컴포넌트 사용

### Props를 통해 데이터 전달하기

-   컴포넌트를 재사용하면 항상 같은 UI를 그림
-   HTML 요소의 attributes처럼 컴포넌트에 정보를 전달할 수 있음
-   다른 정보가 전달되면 컴포넌트의 동작이 달라지거나 렌더링되는 UI가 달라짐
-   상위 컴포넌트에서 하위 컴포넌트로 전달할 수 있으며, 이는 컴포넌트 트리상 위에서 아래로 흐르며 이를 단방향 데이터 흐름이라고 함
-   하위 컴포넌트로 전달된 Props는 컴포넌트 함수의 첫 번째 매개변수로 전달됨

#### 배열 렌더링

-   배열 메서드를 사용하여 데이터를 조작하거나 스타일은 같지만 정보는 다른 UI를 생성할 수 있음
-   map 메서드를 사용하면 배열의 요소들을 JSX로 만들어 UI로 렌더링시킬 수 있음

### state를 사용하여 상호작용 추가하기

-   state와 이벤트를 사용해 상호작용 추가 가능

#### 이벤트

-   요소에 이벤트를 추가하려면 onClick처럼 on으로 시작하는 camelCase를 사용해야 함
-   이벤트가 트리거될 때마다 이를 처리하는 이벤트 핸들러는 컴포넌트 내에서 생성되어야 함

#### state

-   state는 시간이 지남에 따라 변경되거나 유저의 상호작용에 의해 변경되는 정보
-   컴포넌트 내에서 초기화되고 저장됨
-   자식 컴포넌트에 Props로 전달할 수 있으며, state를 업데이트 하는 함수는 전달하지 않음

### 훅

-   컴포넌트에 기능을 추가하기 위해 사용하는 함수 세트
-   state를 생성하기 위해 사용하는 useState가 대표적인 훅

## Next.js 시작하기

### npm을 사용하여 패키지 설치

-   위에서 react와 react-dom 라이브러리를 가져오기 위해 script 태그를 사용하였음
-   이 방법보다는 노드 패키지 매니저인 npm을 사용하면 패키지들을 손쉽게 설치할 수 있음

먼저 package.json 파일을 생성 후,  빈 객체로 초기화

```json
// package.json

{}
```

아래 명령어로 react, react-dom, next 패키지를 설치

```zsh
npm install react react-dom next
```

패키지들을 설치하면 dependencies가 추가되며 nodemodules 폴더가 생성되고 설치한 패키지들이 저장됨

```json
// package.json

{
  "dependencies": {
    "next": "^12.3.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

### 코드 정리하기

index.html 파일에서 아래 지시사항에 따라 파일을 수정합니다.

-   react와 react-dom을 가져오는 script 태그 제거 - npm으로 이미 설치함
-   html과 body 태그를 제거 - Next.js가 자동으로 생성
-   ReactDOM.render과 document.querySelector('#root') 구문 제거
-   Babel을 불러오는 스크립트를 제거 - Next.js는 JSX를 자바스크립트로 변환시키는 컴파일러를 포함
-   script type="text/jsx 태그 제거 - Babel을 사용하지 않기 때문에 필요 없음 (태그만 제거, 내용은 남김)
-   React.useState(0) 에서 React. 를 제거하여 useState(0) 으로 남겨둠
-   파일의 제일 위에 import { useState } from 'react'; 를 추가
-   확장자를 .js 또는 .jsx로 변환
-   pages 폴더를 만들고 이 폴더로 index.js 파일을 이동
-   최종적으로 렌더링하고 싶은 컴포넌트 함수 앞에 export default를 추가

### Next.js 실행하기

package.json에 아래 코드를 추가

```json
  "scripts": {
    "dev": "next dev"
  }
```

아래 명령어를 입력하여 개발 서버를 실행

```zsh
npm run dev
```

지금까지 리액트에서 Next.js로 마이그레이션하면서 두 가지 이점을 얻게 되었음

-   복잡하고 느린 Babel 컴파일러를 사용하지 않고 Next.js가 포함하고 있는 swc를 사용하여 속도 개선
-   개발 환경에서 데이터 수정시 즉시 수정사항이 반영되는 Fast Refresh