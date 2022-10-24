---
slug: update-state
title: update-state
authors:
  name: Gao Wei
  title: Docusaurus Core Team
  url: https://github.com/wgao19
  image_url: https://github.com/wgao19.png
tags: [hola, docusaurus]
---

- state 업데이트 함수 호출 시 해당 시점의 state를 사용한 UI 렌더링 요청을 큐에 추가
- 이후 이벤트 핸들러 내 나머지 코드를 모두 수행한 후 state 값을 최신 값으로 대체
  - state는 읽기 전용의 값이므로 변경되는게 아니라 대체됨
- 대체된 state값을 사용한 UI를 리렌더링

```jsx
import React, { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);
  function handleAddBtn() {
    // 0 + 1의 state를 렌더링하도록 요청
    setNumber(number + 1);
    console.log(number); // 0
    // 컴포넌트가 렌더링되지 않았으므로 아직 number는 0
    // 0 + 1의 state를 렌더링하도록 요청
    setNumber(number + 1);
    console.log(number); // 0

    // 컴포넌트가 렌더링되지 않았으므로 아직 number는 0
    // 0 + 1의 state를 렌더링하도록 요청
    setNumber(number + 1);
    console.log(number); // 0
  }

  return (
    <div>
            <p>{number}</p>
            <button onClick={handleAddBtn}>up</button>
          
    </div>
  );
}
```

```zsh
# console output
0
0
0

# 화면에 보이는 number 값
1
```

- 이 문제를 해결하기 위해 아래와 같은 방법 사용 가능

```jsx
function handleAddBtn() {
  // 0 + 1의 state를 렌더링하도록 요청
  setNumber(n => n + 1);
  console.log(number); // 0

  // 큐에 추가된 요청의 state에 1을 추가 -> 1 + 1의 state를 렌더링하도록 요청
  setNumber(n => n + 1);
  console.log(number); // 0

  // 큐에 추가된 요청의 state에 1을 추가 -> 2 + 1의 state를 렌더링하도록 요청
  setNumber(n => n + 1);
  console.log(number); // 0
}
```

```zsh
# console output
0
0
0

# 화면에 보이는 number 값
3
```
