import Vue from 'vue'
import Router from 'vue-router'

// 引入tabbar相关的组件
import Home from '@/components/tabbar/home'
import Member from '@/components/tabbar/member'
import Search from '@/components/tabbar/search'
import Cart from '@/components/tabbar/cart'

// 引入新闻相关的组件
import NewsList from '@/components/news/list'
import NewsDetail from '@/components/news/detail'

// 引入图片相关的组件
import PicsList from '@/components/pictures/list'
import PicsDetail from '@/components/pictures/detail'

// 引入商品相关的组件
import GoodsList from '@/components/goods/list'
import GoodsDetail from '@/components/goods/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/news/list',
      component: NewsList
    },
    {
      path: '/news/detail',
      component: NewsDetail
    },
    {
      path: '/goods/list',
      component: GoodsList
    },
    {
      path: '/goods/detail',
      component: GoodsDetail
    },
    {
      path: '/pics/list',
      component: PicsList
    },
    {
      path: '/pics/detail',
      component: PicsDetail
    }
  ],
  linkActiveClass: 'mui-active'
})
