## 뷰 CLI로 프로젝트 생성



### 1. 시작

- 파비콘 생성

- 뷰포트 메타태그(반응형 웹 태그)

  ```
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

-  < style scoped >

  - 해당 파일 안에서만 적용되는 속성(상속x)
  
- 파일 나눠서 만들고 App.vue에 컴포넌트 등록

  - template

  ```html
  <template>
    <div id="app">
      <TodoHeader></TodoHeader>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <TodoFooter></TodoFooter>
    </div>
  </template>
  ```

  - script

  ```html
  <script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoInput from './components/TodoInput.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  
  export default {   
    components : {
      // 컴포넌트 태그명 : 컴포넌트 내용
      'TodoHeader' : TodoHeader,
      'TodoInput' : TodoInput,
      'TodoList' : TodoList,
      'TodoFooter' : TodoFooter
    }
  }
  </script>
  ```

  



### 2. TodoHeader

- 시멘틱태그 사용

- 타이틀 등록

  



### 3. TodoInput

- input , 버튼생성
- input 데이터 연결 (data, v-model="newData")
  - data : newData 값 리턴
- button 기능 설정 (v-on:click="")
  - 저장값 로컬에 저장 
  - 비우기 (this*.*newTodoItem = "";)
- 로컬에 저장( localStorage**.**setItem(키,값) )
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
  - 로컬 스토리지에 있는 정보 가져오기
  - 정보를 담을 데이터 필요. 빈 배열 선언하기 (todoItems: [])
  - if >로컬스토리지에 담긴 정보가 0개 이상이면 실행
  - for > 로컬스토리지 정보 갯수 만큼 반복 ( i < localStorage.length );
  - if > 웹팩데스~ 안나오게하기 (localStorage**.**key(i) !== 'loglevel:webpack-dev-server')
  - 아이템 넣기( this.todoItems.push*(*localStorage**.**key(i)); )

