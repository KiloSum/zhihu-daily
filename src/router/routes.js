import {lazy} from 'react';
import Home from '../views/Home'
const routes=[{
  path:'/',
  name: 'home',
  component: Home,
  meta:{
    title:"知乎日报-WebApp",
  }
},{
  path:'/detial/:id',
  name: 'detai',
  component: lazy(()=>import('../views/Detail')),
  meta:{
    title: '新闻详情-知乎日报'
  }
},
{
    path:'/personal',
    name:'personal',
    component:lazy(() =>import("../views/Personal")),
    meta:{
        title: "个人中心-知乎日报"
    }
},
{
    path:'/favorite',
    name:'favorite',
    component:lazy(() => import("../views/Favorite")),
    meta:{
        title: "收藏夹-知乎日报"
    }
},
{
    path:'/update',
    name:'update',
    component: lazy(() => import("../views/Update")),
    meta:{
        title: "修改个人信息-知乎日报",
    }
},
{
    path:'*',
    name:'404',
    component: lazy(() => import("../views/404")),
    meta:{
        title: "找不到页面-知乎日报"
    }
}

]
