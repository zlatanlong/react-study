import Login from "./pages/login"
import Index from "./pages/admin/index"
import Products from "./pages/Products"
import PageNotFound from "./pages/PageNotFound"

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
    exact:true
  },
  {
    path: '/admin/products',
    component: Products,
    exact:true
  },
]