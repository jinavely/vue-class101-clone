# 클래스 101 클론
이 프로젝트는 Vue 학습을 위한 클래스 101 클론코딩 repository입니다.

## 프로젝트 폴더 (src 하위 폴더)
- assets: 공통 이미지, 웹 폰트
- components: 모든 페이지에서 공통으로 사용하는 common 폴더와 각 페이지 이름의 폴더를 둠
    - common: 공통 컴포넌트
    - main: 메인 페이지 컴포넌트
    - products: 상세 페이지 컴포넌트
- pages: router를 통해 랜더링되는 페이지 컴포넌트
    (api 로직이나 비즈니스 로직, vuex의 스토어 관리 컴포넌트)
    - main: 메인 페이지 로직 컴포넌트
    - products: 상세 페이지 로직 컴포넌트
- router: 라우터
- apis: 백엔드 연동 api 메서드
- stores: 공통 스토어 경로
- styles: 전역 css
- unils: 필터 등의 유틸리티 함수
- mixins: 믹스인
- plugins: 플러그인

## 기술 스택
- json-server
- vue 2.0
- vue-router
- axios
- vuex

## JSON Server 기동
- `json-server --watch db.json --port 4000`
- https://github.com/typicode/json-server
- 웹에서 JSON Server 기동 https://my-json-server.typicode.com/

## 구현 기능
1. decody : 메인 페이지
- 상단 GNB, 검색바
- 메인 커버 (슬라이드 기능 제외)
- 내 클래스 (슬라이더)
- MD 추천 클래스
- 최근 업데이트 클래스 (목록)
- 인기 카테고리
- 풋터

2. jinavely : 상세 페이지 (유튜버 신사임당 강의)
- 클래스 신청 (클래스 신청시 모달 처리)
- 클래스 커버
- 퀵 링크 (페이지 내 컨텐츠 이동)
- 클래스 정보
- 리뷰
- 강좌 정보
- 커리큘럼
- 크리에이터 소개
- 커뮤니티
- 내가 본 상품 (슬라이더)