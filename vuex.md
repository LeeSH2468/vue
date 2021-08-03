## Vuex

### Vuex 설치

- Vuex는 싱글 파일 컴포넌트 체계에서 NPM 방식으로 라이브러리 설치를 권장

```
npm i vuex --save
```

* ES6와 함께 사용해야 더 많은 기능과 이점을 제공받을 수 있음



### Vuex 시작하기

- 관행적으로 vuex를 store라 부름

- src/store/store.js 생성

- 뷰와 뷰엑스 import

```javascript
import Vue from 'vue'
import Vuex from 'vue'

Vue.use(Vuex); // 뷰 플러그인 사용 - 전역에 추가하는 방법

export const store = new Vuex.Store({
    //
});
```

- main.js에 등록

```javascript
import { store } from './store/store'
//변수이기 때문에 {}로 선언

new Vue({
    store,
})
// 변수 등록
```



### Vuex 기술 요소

- state : 여러 컴포넌트에 공유되는 데이터`data`
- getters : 연산된 state 값을 접근하는 속성 `computed`
- mutations : state값을 변경하는 이벤트 로직.메서드 `methods`
- actions : 비동기 처리 로직을 선언하는 메서드 `aysnc methods`



### state란?

- 여러 컴포넌트 간에 공유할 데이터(상태)
- Vue와 동일한 형식이지만 속성명과 여러 컴포넌트에 공유된다는 것만 다름

```javascript
// Vue
data: {
    message: 'Hello Vue.js'
}

// Vuex
state: {
    message: 'Hello Vue.js'
}
```

```html
<!-- Vue -->
<p> {{ message}} </p>

<!-- Vuex -->
<p> {{ this.$store.state.message }} </p>
```



### getters란?

- state 값을 접근하는 속성이지 computed()처럼 미리 연산된 값을 접근하는 속성

```javascript
// store.js
state: {
    num : 10
},
getters: {
    getNumber(state){
        return state.num;
    },
    doubleNumber(state) {
        return state.num * 2;
    }
}
```

```html
<p>{{ this.$store.getters.getNumber}}</p>
<p>{{ this.$store.getters.doubleNumber}}</p>
```

