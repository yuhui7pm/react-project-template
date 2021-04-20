/*
 * @Descripttion:
 * @version: 1.0
 * @Author:
 * @Date: 2020-02-10 11:38:34
 * @LastEditors  :
 * @LastEditTime : 2020-02-12 18:30:32
 */
import React, { Component } from 'react'
import store from './store/index.js'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import { Route, HashRouter, Switch } from 'react-router-dom'
import { GlobalStyle } from './common/style'
import Home from './pages/home/index.jsx'
import 'antd/dist/antd.css'
import axios from './util/axios.js'
React.Component.prototype.axios = axios // 定义全局axios，通过this.axios.get这种形式调用方法
    
if (process.env.NODE_ENV === 'development') {
	require('./mock/index')
}

class App extends Component {
	render (){
		return (
			<Provider store={store}>
				<div>
					<GlobalStyle/>
					<HashRouter>
						<Switch>
							<Route path="/" exact component={ Home }/>
						</Switch>
					</HashRouter>
				</div>
			</Provider>
		)
	}
}

export default hot(App)