/*
 * @Descripttion: 首页
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-10 16:31:27
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-12 17:45:22
 */
import React, { Component } from 'react'
import ToTopButton from './components/back_to_top.jsx'
import { Spin } from 'antd'

class Home extends Component {
	render () {
		return (
			<div>
				<h1>这里是首页标题</h1>
				<Spin tip="测试ant-designer组件..." size="large"/>
				<ToTopButton />
			</div>
		)
	}
}

export default Home