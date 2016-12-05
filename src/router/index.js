/**
 * Created by Moment on 2016/10/30.
 */

import Vue from 'vue'
import Resource from 'vue-resource'
import NProgress from 'nprogress'
import Router from 'vue-router'
Vue.use(Router)
Vue.use(Resource)

Vue.http.interceptors.push((request, next) => {
  NProgress.inc(0.2)

  next((response) => {
    NProgress.done()
    return response
  })
})

const router =  new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      title:'定时任务列表',
      component(resolve){
        require (['../components/cronList/index.vue'], resolve);
      }
    },
    {
      path: '/color',
      title:'Color色彩',
      name: 'Color',
      component(resolve){
        require (['../components/color/index.vue'], resolve);
      }
    },
    {
      path: '/icon',
      title:'Icon图标',
      name: 'Icon',
      component(resolve){
        require (['../components/icon/index.vue'], resolve);
      }
    },
    {
      path: '/cron',
      title:'定时任务列表',
      component(resolve){
        require (['../components/cronList/index.vue'], resolve);
      }
    },
    {
      path: '/button',
      title:'Button按钮',
      name: 'Button',
      component(resolve){
        require (['../components/button/index.vue'], resolve);
      }
    },  
    {
      path: '/checkbox',
      title:'Checkbox多选框',
      name: 'Checkbox',
      component(resolve){
        require (['../components/checkbox/index.vue'], resolve);
      }
    },
    {
      path: '/host',
      title:'服务器列表',
      name: 'host',
      component(resolve){
        require (['../components/hostList/index.vue'], resolve);
      }
    },
    {
      path: '/works',
      title:'服务器列表',
      name: 'Works',
      component(resolve){
        require (['../components/worksList/index.vue'], resolve);
      }
    },
    {
      path: '/select',
      title:'Select选择器',
      name: 'Select',
      component(resolve){
        require (['../components/select/index.vue'], resolve);
      }
    },
    {
      path: '/datepicker',
      title:'DatePicker日期选择器',
      name: 'DatePicker',
      component(resolve){
        require (['../components/datePicker/index.vue'], resolve);
      }
    },
    {
      path: '/table',
      title:'Table表格',
      name: 'Table',
      component(resolve){
        require (['../components/table/index.vue'], resolve);
      }
    },
    {
      path: '/tag',
      title:'Tag标签',
      name: 'tag',
      component(resolve){
        require (['../components/tag/index.vue'], resolve);
      }
    }  
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach((transition) => {
  NProgress.done()
})

export default router
