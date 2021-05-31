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

