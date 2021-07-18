# Hero!

[Look Hero Page ](https://jessylee2208.github.io/hahow-heroes/)

</br>

## Requirements

- node.js v14.16.1

## Quick Start

1. clone this repository first.
2. Under project root, run `npm install && npm run dev`.
3. Run `npm start`

## Architecture

```

├── components        # 重複使用的UI元件
├── hook              # 自定義hook，取代重複撰寫的hook
├── view              # layout
├── utils             # 一些共用的function

```

## Front-End Frameworks & Library

### React

React 是可以輕鬆打造「重複利用的元件」的函式庫。其優點除了可以寫出模組化、高維護性的的 UI 組件外，也因著 Virtual DOM 得特性幫助最佳化複雜的 UI 效能

### styled-components

styled-components 是基於優化 react component 裡的 css 的寫法。其優點是它會紀錄有哪些元件被渲染到頁面上，並自動的載入所需的樣式。也由於是 CSS-in-JS 所以在管理檔案上更方便。

### react-router-dom

React Router 是一套 React 的導航組件，用來處理路由轉跳。

### react-hot-toast

是一套以 React 為基礎的 toast 套件。可讓使用者自行設定樣式。

### lottie-web

Lottie 是 Airbnb 開源的跨平台動畫函式庫，透過讀取 JSON 資料來呈現動畫。

## How to comment code?

- 邏輯較複雜時
- 非不得已情況需要寫某些 code 時

## Encounter problems or difficulties?

一開始在寫的時候，發現 hero 的能力是用 obj 去包。不確定是否把 obj 變成 array 來處理是否恰當。但是因為我想將 hero 的能力寫成獨立的 component 來使用。後來決定將資料轉成 array 來使用。
