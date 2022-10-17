a 태그와 Link 컴포넌트

- a : 일반 웹에서 두 페이지를 연결하기 위해 사용하는 태그
-   Link : Next.js 애플리케이션 내 두 페이지를 연결하기 위해 사용하는 컴포넌트

```tsx

```
import Link from 'next/link';

export default function FirstPost() {
  return (
    <div>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back</Link>
      </h2>
    </div>
  );
}
```
## Client Side Navigation

-   Link 컴포넌트는 Client Side Navigation을 이용하여 Next.js 내 두 페이지를 연결
-   자바스크립트를 사용하여 전체 페이지를 불러오지 않고 페이지를 전환하기 때문에 브라우저의 기본 탐색보다 빠름

## Code Splitting

-   Next.js는 자동으로 코드 스플리팅이 이루어지므로 각 페이지가 로드될 때 필요한 코드만을 불러옴
-   애플리케이션의 페이지가 많더라도 홈페이지가 빠르게 로드
-   요청한 페이지의 코드만 불러오기 때문에 특정 페이지에서 발생한 에러가 다른 페이지에 영향을 주지 않음
-   프로덕션 환경에서 Link 컴포넌트가 Viewport에 등장할 때마다 Next.js는 해당 Link 컴포넌트와 연결된 페이지의 코드를 prefetch하므로 페이지 전환이 매우 빠르게 이루어짐

## <a> 태그를 사용해야 하는 경우

-   Next.js 애플리케이션 내 페이지 간 이동이 아닌 외부 페이지와 연결해야할 때는 _<a>_ 태그를 사용
-   Link 컴포넌트에 _className_ 등의 attributes를 전달하고 싶다면, Link 컴포넌트 내 _<a>_ 태그를 생성하고 여기에 추가