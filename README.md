# vue3-ts-vite

## Concept

- TypeScript 기반 Vue.js 3 + pinia
- FDS(Feature-Driven Structure) 아키텍처 적용

## Project Setup

### Clone this repo:

```sh
git clone https://github.com/choky603/vue3-ts-vite.git
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## 디렉토리 구조

```bash
src/
├── views/
│   ├── todo/
│
├── features/
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
├── Entities/
├── shared/
│       ├── components/
│       ├── utils/
│       ├── types/
├── App.vue
├── main.ts
```
