const c1 = () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/zero_/PM/LG-LINAXI/part3-4-2/gridsome/src/templates/Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/zero_/PM/LG-LINAXI/part3-4-2/gridsome/src/templates/Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--post-vue" */ "/Users/zero_/PM/LG-LINAXI/part3-4-2/gridsome/src/pages/Post.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--my-page-vue" */ "/Users/zero_/PM/LG-LINAXI/part3-4-2/gridsome/src/templates/MyPage.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/zero_/PM/LG-LINAXI/part3-4-2/gridsome/src/pages/Contact.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/zero_/PM/LG-LINAXI/part3-4-2/gridsome/src/pages/About.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/zero_/PM/LG-LINAXI/part3-4-2/gridsome/node_modules/gridsome/app/pages/404.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/zero_/PM/LG-LINAXI/part3-4-2/gridsome/src/pages/Index.vue")

export default [
  {
    path: "/tag/:id/",
    component: c1
  },
  {
    path: "/post/:id/",
    component: c2
  },
  {
    path: "/post/",
    component: c3
  },
  {
    path: "/my-page/",
    component: c4
  },
  {
    path: "/contact/",
    component: c5
  },
  {
    path: "/about/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
