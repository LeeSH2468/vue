## 뷰 CLI로 프로젝트 생성



### 1. 시작

- 파비콘 생성

- 뷰포트 메타태그 

  ```
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

-  < style scoped >

  - 해당 파일 안에서만 적용되는 속성(상속x)



### 2. TodoHeader



### 3. TodoInput

- input , 버튼생성
- input 데이터 연결 (data, v-model="")
- button 기능 설정 (v-on:click="")
  - 저장값 로컬에 저장 
  - 비우기 (this*.*newTodoItem = "";)
- 로컬에 저장
  - 관리자창 > Application > LocalStorage

- 저장, 비우기 함수 나누기 > 저장하는 함수 안에 clear함수 적용(this.clearInput();)
- 스타일
- add버튼 폰트어썸으로 적용
- < span v-on:click="addTodo">
- input 태그에 엔터치면 적용되도록 설정
  - < input v-on:keyup.enter="addTodo" > 



### 4. TodoList

- ul> li 생성
- 함수 created : 화면이 생성되자마자 실행
