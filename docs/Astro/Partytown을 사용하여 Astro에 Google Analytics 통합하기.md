---
slug: google-analytics
title: Google Analytics
authors:
  name: Gao Wei
  title: Docusaurus Core Team
  url: https://github.com/wgao19
  image_url: https://github.com/wgao19.png
tags: [hola, docusaurus]
---

# Partytown

- 스크립트 로드를 메인 쓰레드가 아닌 Web Worker에게 위임하기 위해 사용하는 라이브러리
- 메인 쓰레드는 중요한 작업만을 담당하게 되므로 웹 사이트의 성능이 개선됨

## Astro에 통합하기

npm, yarn, pnpm 중 원하는 노드 패키지 매니저를 사용

```zsh
npm astro add partytown
```

`astro.config.mjs` 파일의 `partytown`의 인자에 아래와 같은 객체 전달

```js
// astro.config.mjs

export default defineConfig({
  site: 'https://uxev.github.io',
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
```

## `<head>` 태그에 Google Analytics 스크립트 추가

- 기존 Google Analytics 스크립트에서 async 속성 제거
- `type="text/partytown"` 속성 추가

```html
<!-- Google tag (gtag.js) -->
<script
  type="text/partytown"
  src="https://www.googletagmanager.com/gtag/js?id=G-111111"
></script>
<script type="text/partytown">
  window.dataLayer = window.dataLayer || [];
  function gtag() {
  	dataLayer.push(arguments);
  }
  gtag("js", new Date());

   gtag("config", "G-1111111");
</script>
```
