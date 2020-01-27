import Vue from 'vue'

// ルーティング定義をインポート
import router from './router'

// ルートコンポーネントをインポート
import App from './App.vue'



new Vue({
    el: '#app',
    router, // ルーティング定義を読み込む
    components: { App }, // ルートコンポーネントの使用を宣言
    template: '<app />' // ルートコンポ―ネントを描画する
})