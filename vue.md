## 1. 개발 환경 설정



## 2. Vue.js 소개





## 3. 인스턴스

- 뷰를 개발할 때 필수로 생성해야하는 코드

  ``` javascript
  new Vue();
  ```

  뷰에서 제공하는 api(기능)와 속성 확은 가능



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

