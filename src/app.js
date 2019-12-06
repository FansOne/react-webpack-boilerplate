import React from 'react'
import { hot } from 'react-hot-loader' //react编写代码时让修改的部分自动刷新,替换你修改的部分
import { HashRouter, Route, Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import Layout from './pages/layout/index'
import Home from './components/Home'
import About from './components/About'
class App extends React.Component {
  render() {
    return (
      // HashRouter 表示一个路由的根容器，所有路由相关东西都包裹在其中，一个项目中只需要使用一次HashRouter
      <HashRouter>
        <br/>
        <Link to='/home'>首页</Link>&nbsp;&nbsp;&nbsp;
        <Link to='/about/24/170'>关于</Link>
        <hr/>

        <Layout />

        {/* 
          <Route></Route> 路由匹配规则。
          默认情况下，路由中的规则是模糊匹配的，只要路由可以部分分配成功，就会展示这个路由对应的组件，如果想要路由精确匹配，可以为Route添加‘exact’属性，表示启用精确匹配模式。
          如果要匹配参数，可以在匹配规则中使用‘:’修饰符，表示这个位置匹配到的是参数。
        */}
        <Route path='/home' component={ Home }/>
        <Route path='/about/:age/:height' component={ About } exact/>
      </HashRouter>
    )
  }
}

export default hot(module)(App);