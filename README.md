# 내용
Next 13 App router

https://nextjs.org/docs/app/building-your-application/routing/parallel-routes

https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes

---

- parallel & intercepting 라우팅 예시
`<Link/>`를 통해서 `/i/login` 경로로 이동하면 `@modal/(.)i/login` 경로가 인터셉터한다.
인터셉터한 경로는 intercepting route이면서 동시에 parallel route이기 때문에 layout에서 `props.modal`으로 받아서 처리할 수 있다. 이로써 한 화면에 여러 페이지를 렌더링하는 것이 가능해진다.

- intercepting이 발생하는 상황 구분
intercepting route 된 페이지에서 새로고첨 한번 해보면 알 수 있다.
외부 링크에서 직접적으로 접근하거나, 새로고침한 페이지에서는 intercepting route로 이동 하지 않는 것을 볼 수 있다.
