## 0. 개발 환경 설정

- 크롬 브라우저
- Visual Studio Code
- node.js (LTS버전)
- Vue.js Devtools (크롬 확장 브라우저-뷰 개발환경 확인가능)
- VSCode 확장 프로그램
  - vetur - vue개발용
  - material icon - 프로그램 아이콘 모양
  - night owl - 테마
  - live server - borwser sync
  - 설정(상단바 File> Preference > 색테마, 파일아이콘테마 변경)
- 뷰 개발자도구 

## 1. Vue.js 소개

- 뷰 : MVVM 패턴의 뷰모델(ViewModel) 레이어에 해당하는 화면(View)단 라이브러리

- 뷰의 핵심 : 데이터의 변화를 라이브러리에서 감지해서 자동으로 화면을 갱신

- 자바스크립트의 기능이 실행되었을 때 돔 리스너, 데이터 바인딩 하는 역할

- Reactivity 구현

  -  API사용[Object.defineProperty() API 문서 링크](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

  - defineProperty  : 객체의 동작을 재정의하는 API 

  - ```
    Object.defineProperty();
    Object.defineProperty(대상객체, 객체의 속성,{
    	정의할 내용
    });
    Object.defineProperty
    ```

  - ```
    Object.defineProperty(viewModel, 'str',{
    	// 속성에 접근했을 때 동작을 정의
    	get : function(){
    		console.log('접근');
    	},
    	//속성에 값을 할당했을 때 동작의 정의
    	set : function(newValue){
    		console.log('할당',newValue);
    	}
    });
    
    
    ```
    
    

### 코드 라이브러리화

1. function init() {} 정의 (실행되는 함수)

2. render함수 따로 정의(값이 변경될 때 받아오는 함수)

3. 즉시실행 함수 (function() { }) (실행되는 부분을 노출되지 않게 감싸줌)

       (function() { // 즉시실행 함수(https://developer.mozilla.org/ko/docs/Glossary/IIFE)
       
                   function init() {
                       Object.defineProperty(viewModel, 'str',{
                           // 속성에 접근했을 때 동작을 정의
                           get : function(){
                               console.log('접근');
                           },
                           //속성에 값을 할당했을 때 동작의 정의
                           set : function(newValue){
                               console.log('할당',newValue);
                               render(newValue);
                           }
                       });
                   }
       
                   function render(value) {
                       div.innerHTML = value;
                   }
       
                   init();
               })();



## 2. 인스턴스

- 뷰를 개발할 때 필수로 생성해야하는 코드

  ``` javascript
  new Vue();
  ```

  뷰에서 제공하는 api(기능)와 속성 확인 가능



### 생성자 함수

- 대문자로 시작
- 함수를 이용해 정보를 담은 객체를 생성

```javascript
function Person(name, job){
    this.name = name;
    this.job = job;
}
var p = new Person('sohi','developer');
p
//결과
Person {name: "sohi", job: "developer"}
```



### 인스턴스 옵션

- 키 : 값 형식으로 생성

```javascript
new Vue({
el: ,
template: ,
date: ,
methods: ,
created: ,
watch: ,
})
```



## 3. 컴포넌트

- 화면의 영역을 구분하여 개발할 수 있는 뷰의 기능(재사용성이 올라가서 효율적)

  ```html
  <html>
      <div id="app">
          <app-header></app-header>
      </div>
  </html>
  ```

### 전역 컴포넌트

  - Vue.component('컴포넌트 이름',컴포넌트 내용);
  - 컴포넌트 내용 부분에 객체를 열어서{} 안에 작성
  - 대부분 플러그인, 라이브러리 형태로 전역에서 쓸 때 사용

      ``` javascript
      Vue.component('app-header',{
                  template: '<h1>Header</h1>'
              });
      ```

### 지역 컴포넌트

  - 일반적으로 지역 컴포넌트를 사용
  - 여러개 사용(복수)하여 s붙음(component's' , method's')
  - 특정 컴포넌트 하단에 무엇이 오는지 알 수 있음
  - 인스턴스마다 새로 생성 해야함

      ```javascript
      new Vue({
        el: '#app',
          //지역 컴포넌트 등록 방식
        components: { //S붙음 (복수)
            '컴포넌트 이름': 컴포넌트 내용,
              ''
      
        }
      });
      ```

### 컴포넌트와 인스턴스의 관계

- 인스턴스 안에 컴포넌트 생성
- 지역 컴포넌트 : 인스턴스마다 생성
- 전역 컴포넌트 : 전역에 공통으로 사용(플러그인, 라이브러리)



## 4. 컴포넌트 통신

### 다른 레벨 통신

- 상위에서 하위로 데이터 내려줌, 프롭스 속성

- 하위에서 상위로 이벤트 올려줌, 이벤트 발생

- <app-header v-bind:프롭스 속성 이름 ="상위 컴포넌트 데이터 이름"></app-header> 

  ```html
      <div id="app">
          <app-header v-bind:propsdata ="message"></app-header>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
      <script>
          var appHeader = {
                  template: '<h1>header</h1>',
                  props: ['propsdata']
              }
          new Vue({
              el: '#app',
              components: {
                  'app-header': appHeader
              },
              data: {
                  message: 'hi'
              }
  
          })
      </script>
  ```
  
- 프롭스(props)

  - 상위 컴포넌트의 속성을 바꾸면 하위 컴포넌트도 받아서 같이 변경됨

- 이벤트 에밋( event emit ) API

  ```javascript
  var appHeader = {
      template: '<button v-on:click="passEvent">click me </button>',
      methods: {
          passEvent: function() {
              this.$emit('test');
          }
      }
  }
  ```



### 같은 레벨 통신

- 하위 - (event) > 상위 -(props)> 하위



## 5. 뷰 라우터(router)

- 뷰 라이브러리를 이용하여 싱글 페이지 애플리케이션을 구현할 때 사용하는 라이브러리

- 페이지를 이동할 때 사용

- 세팅방법

  - 반드시 vue.js를 먼저 선언

  ```html
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
      <script>
          // 라우터 인스턴스 생성
          new VueRouter({
  			// 라우터 옵션
          });
          
          // 뷰 인스턴스에 라우터 인스턴스 등록
          new Vue =({
              el: '#app',
              router: router
          });
      </script>
  ```

### 뷰 라우터 등록(라우터 옵션)

- routes : 페이지의 정보
- routes > path : 페이지의 url
- routes > component : 해당 url에서 표시될 컴포넌트
  - component (s안붙음) > url은 각 페이지당 1개이기 때문에 단수
- mode: 'history'
  - url 주소를 단순하게 변경
  - ww.000.com/playground/router.html#/login > ww.000.com/login 
- router-view
  - 내용이 뿌려지는 부분
- router-link 
  - <router-link *to*="/main">이동할 url</router-link>
