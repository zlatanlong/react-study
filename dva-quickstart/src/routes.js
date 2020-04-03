import Login from "./pages/login"
import Index from "./pages/admin/index"
import Products from "./pages/Products"
import PageNotFound from "./pages/PageNotFound"
import Routines from "./pages/routines"

export const mainRoutes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/404',
    component: PageNotFound
  },
]

export const adminRoutes = [
  {
    path: '/admin/index',
    component: Index,
    exact:true,
    isShow: true,
    title: '默认页'
  },
  {
    path: '/admin/products',
    component: Products,
    exact:true,
    isShow: true,
    title: '商品列表'
  },
  {
    path: '/admin/routines',
    component: Routines,
    exact:true,
    isShow: true,
    title: '事务列表'
  },
]