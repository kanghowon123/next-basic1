## 파일 구조 변경

## 폰트 굵기별 추가

## 스크린시 헤더 배경,폰트색 변경기능 추가

## select섹션 반응형까지 추가

## shop Best섹션 추가

## review 섹션 추가

## footer 추가

## wifi 라우팅 추가

## 새로 알게 된 점

1. 배열에도 타입을 줘야함
   1-1. 타입 정의

- SelectItems 라는 타입을 만들었고 대문자로 시작해야 함
- 객체가 가져야 할 속성과 타입을 정의함

1-2. 배열 선언

- const selectItems: SelectItems[] = [ ... ]
- SelectItems[] → SelectItems 타입을 가진 객체들을 여러 개 담은 배열이라는 뜻

2. object-fit: contain “이미지 비율을 깨지 않고, 주어진 영역 안에 전부 보이게” 해주는 속성

3. 폴더 경로

- app안에 만드는 컴포넌트는 레이아웃(헤더나 푸터)
- app밖에 만드는 컴포넌트는 이미지나 타입들 분리하는거( 이미지나 타입들 )

4. css

- flex-shrink: 0 // 공간이 부족할 시( 자기 공간을 지키면서 안쭈그러듬)
- flex-grow: 1 // 공간이 남을 시(남은공간을 다 가져감)

5. 공백문자 사용법

- "\u00A0" = (HTML에서는 &nbsp;)

```
예시
<h3>{footer.title || "\u00A0"}</h3>
```

6. 라우팅 하는 방법

```
app
 |-- wifi
 |----|-- page.tsx // 라우팅 경로
```

- 도메인/wifi 로 경로 접근
- page.tsx가 해당 경로의 페이지를 렌더링 함

```
appapp
 |-- wifi
 |----|--[productId]
 |----|---- page.tsx // 도메인/wifi/1 ,도메인/wifi/2 등 동적 라우팅
 |----|-- page.tsx // 라우팅 경로
```

- [여기 이름은 자유] 폴더 안에 page.tsx를 넣으면 동적 라우팅이 적용
- 폴더명 [productId]는 URL 경로의 변수 이름이며, useParams() 등으로 접근 가능
- 이렇게 하면 `도메인/wifi/1` , `도메인/wifi/2` 처럼 각 아이템별 페이지를 자동으로 생성 가능

요약하면

- 정적 경로는 폴더 안 page.tsx
- 동적 경로는 [변수명] 폴더 안 page.tsx

7. usePathname (현재 브라우저 주소창의 경로부분을 문자열로 반환함)

- https:example.com/ -> '/'
- https:example.com/wifi -> '/wifi'

## 궁금한 점

## 수업 이후 수정 사항

1. 이전 수업에 배운내용 적용
2. 모바일 화면에서 햄버거바 클릭시 메뉴생성

## 수업 진행 요청사항
