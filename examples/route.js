/*简介*/
import menu from './docs/introduction/menu.md'
import project from './docs/introduction/project.md'

/*其他*/
import borderDash from './docs/other/borderDash.md'

import Install from './docs/install.md'
import QuikeStart from './docs/quikeStart.md'
import Input from './docs/input.md'
import Button from './docs/button.md'
import triangle from './docs/triangle.md'
import baseSelect from './docs/baseSelect.md'
import show from "./components/show";
import explain from "./components/explain";
import test from "./components/test";


const routes = [
  {
    path: '/show',
    component: show,
    name: 'show',
    children: [
      {
        path: '/show',
        redirect: '/model/quikeStart'
      },
      { path: '/model/menu',
        name: 'menu',
        component: menu
      },
      { path: '/model/project',
        name: 'project',
        component: project
      },
      { path: '/form/baseSelect',
        name: 'baseSelect',
        component: baseSelect
      },
      { path: '/other/triangle',
        name: 'triangle',
        component: triangle
      },
      { path: '/other/borderDash',
        name: 'borderDash',
        component: borderDash
      },
      { path: '/guide/install',
        name: 'Install',
        component: Install
      },
      {
        path: '/model/quikeStart',
        name: 'quikeStart',
        component: QuikeStart
      },
      {
        path: '/input',
        name: 'input',
        component: Input
      },
      {
        path: '/button',
        name: 'button',
        component: Button
      }
    ]
  },
  { path: '*', redirect: '/show' },
  {
    path: '/explain',
    component: explain,
    name: 'explain'
  },
  {
    path: '/test',
    component: test,
    name: 'test'
  }
]

export default routes
