# ๐ฐํด์ปค๋ด์ค

## ์๊ฐ
- ์คํ ์์ค์ธ Hacker news API๋ฅผ ์ฐ๋ํด vue.js๋ก ๊ตฌํ 
- [ํด์ปค๋ด์ค](https://news.ycombinator.com/)
- [ํด์ปค๋ด์ค API](https://github.com/HackerNews/API)

## ์ฌ์ฉ๊ธฐ์ 
- vue.js
- vuex
- vue-router
- Axios
- javascript
- html
- css

## ํ๋ก์ ํธ ์ ๋ณด
- ์คํ์ฝ๋

```
// ๊ฐ๋ฐ์ ์๋ฒ ์คํ
npm run serve 

// ๋น๋
npm rub build

// ๋ผ์ฐํฐ
npm i vue-router --save
```

## ์ฃผ์๊ธฐ์ 
### Dynamic Route Matching (๋์  ๋ผ์ฐํธ ๋งค์นญ)

- ํน์  ๋ผ์ฐ์ธ ๋ก ์ด๋ํ  ๋ `:id` ํจํด์ ์ฐ๋ฉด ํ๋ผ๋ฏธ์ค์ id๊ฐ ๋์ด๊ฐ๋๋ฐ ๊ทธ๊ฑธ ์ฌ์ฉํ๋ ๋ฒ
- ํน์  ํ์ด์ง์ ์ ๋ณด๋ฅผ ๊ฐ๊ณ  ๋ค๋ฅธ ํ์ด์ง๋ก ์ด๋ํ  ๋ ์ฐ์
  
  ```vue
        {
            path:'/user/:id',
            component:UserView,
        },
        {
            path:'/item/:id',
            component:ItemView,
        },
  ```
  
### ๋น๋๊ธฐ ํต์ 

- ๊ฐ ํญ๋ชฉ๋ณ ํ์ด์ง๋ฅผ ๋ง๋ค๊ณ  ์ ํ์ ๋ทฐํ์ด์ง๋ง ๋ฐ๋๋๋ก ๋น๋๊ธฐ์ฐ๊ฒฐ

  ```vue
  routes: [
        {
          path:'/',
          redirect: '/news',
        },
        {
          path:'/news',
          name: 'news',
          component: NewsView,
          beforeEnter: (to, from, next) => {
            bus.$emit('start:spinner');
            store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    next();
                })
                .catch((error) => {
                    console.log(error);
                });                 
          },
          // component: createListView('NewsView')
        },
        {
          path:'/ask',
          name: 'ask',
          component: AskView,
          beforeEnter: (to, from, next) => {
            bus.$emit('start:spinner');
            store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    // bus.$emit('end:spinner');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                });                 
          },
          // component: createListView('AskView')
        },
        {
          path:'/jobs',
          name: 'jobs',
          component: JobsView,
          beforeEnter: (to, from, next) => {
            bus.$emit('start:spinner');
            store.dispatch('FETCH_LIST', to.name)
	              .then(() => {
	                  // bus.$emit('end:spinner');
	                  next();
	              })
	              .catch((error) => {
	                  console.log(error);
	              });                 
	        },
	        // component: createListView('NJobsView')
	      },
	  ]
  ```

### API ์ฐ๋ (axios)

- API๋ฅผ ๊ด๋ฆฌํ๋ ํด๋ ๋ถ๋ฅ

  ```vue
  import axios from 'axios';
  
  
  // 1. HTTP๋ฆฌ์คํฐ, ๋ฆฌํ์คํธ ๊ด๋ จ ๊ธฐ๋ณธ์ฃผ์ ์ค์ 
  const config = {
      baseUrl: 'https://api.hnpwa.com/v0/'
  }
  
  // 2.API ํจ์๋ค ์ ๋ฆฌ
  function fetchNewsList() {
      return axios.get(`${config.baseUrl}news/1.json`);
  }
  function fetchJobsList() {
      return axios.get(`${config.baseUrl}jobs/1.json`);
  }
  async function fetchAskList() {
      try {
          const response = axios.get(`${config.baseUrl}ask/1.json`);
          return response
      } catch (error) {
          console.log(error)
      }
  }
  function fetchList(pageName) {
      try {
          const response = axios.get(`${config.baseUrl}${pageName}/1.json`);
          return response
      } catch (error) {
          console.log(error)
      }
  }
  function fetchUserInfo(username) {
      try {
          const response = axios.get(`${config.baseUrl}user/${username}.json`);
          return response
      } catch (error) {
          console.log(error)
      }
  }
  function fetchcommentItem(id) {
      try {
          const response = axios.get(`${config.baseUrl}item/${id}.json`);
          return response
      } catch (error) {
          console.log(error)
      }
  }
  
  
  export{
      fetchNewsList,
      fetchJobsList,
      fetchAskList,
      fetchList,
      fetchUserInfo,
      fetchcommentItem,
  }
  ```

### Vue.js

- [Vue.js์ ๋ฆฌ](https://github.com/LeeSH2468/vue/blob/master/vue-basic/vue.md)

#### v-for

  - v-forํจ์๋ฅผ ์ด์ฉํด ๋ฐ๋ณต์ ์ผ๋ก ๋์ค๋ ํ์ด์ง๋ฅผ ๊ตฌํ

      ```vue
      <li v-for="item in listItems" class="post">
      ...
      </li>
      ```

  

#### v-if / v-else

- v-if ์ v-else๋ฅผ ์ด์ฉํ์ฌ ์กฐ๊ฑด์ ๋ฐ๋ฅธ ๊ตฌํ

  ```vue
  <template v-if="item.domain">
    <a v-bind:href="item.url">
        {{ item.title }}
    </a>
  </template>
  <template v-else>
    <router-link :to="`item/${item.id}`"> 
        {{ item.title }}
    </router-link>
  </template>
  ```




### Vuex

- ํฌํผํจ์ (vuex helper)๋ฅผ ์ฌ์ฉํด ๊น๋ํ๊ณ  ํธ๋ฆฌํ๊ฒ ์ฌ์ฉ
- [Vuex ์ ๋ฆฌ](https://github.com/LeeSH2468/vue/blob/master/vue-basic/vuex.md)

