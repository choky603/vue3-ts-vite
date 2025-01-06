# vue3-ts-vite

## Concept

- TypeScript 기반 Vue.js 3 + pinia
- FDS(Feature-Driven Structure) 아키텍처 적용

## Project Setup

```sh
# Clone this repo:
git clone https://github.com/choky603/vue3-ts-vite.git

# install dependencies
npm install

# Compile and Hot-Reload for Development
npm run dev

# Type-Check, Compile and Minify for Production
npm run build

# Lint with [ESLint](https://eslint.org/)
npm run lint
```

## 디렉토리 구조

```bash
src/
├── app/                # 앱을 실행하는 모든 것 - 라우팅, 진입점, 전역 스타일, 프로바이더.
│   ├── assets/
│   ├── layout/
│   ├── router/
│   ├── stores/
│
├── entities/           # 프로젝트가 다루는 비즈니스 엔티티, 예를 들어 user 또는 product.
│
├── features/           # 제품 전반에 걸쳐 재사용되는 기능 구현체로, 사용자에게 실질적인 비즈니스 가치를 제공하는 동작.
│   ├── todo/
│   │   ├── components/
│   │   │   ├── TodoList.vue
│   │   │   ├── TodoItem.vue
│   │   │   ├── AddTodo.vue
│   │   ├── store/
│   │   │   ├── useTodoStore.ts
│   ├── memo/
│   │   ├── components/
│   │   ├── index.ts
│
├── pages/              # 전체 페이지 또는 중첩 라우팅에서 페이지의 주요 부분.
│   ├── todo/
│
├── shared/             # 재사용 가능한 기능
│       ├── components/
│       ├── utils/
│       ├── types/
│
├── App.vue
├── main.ts
```
