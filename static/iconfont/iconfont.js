/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: yuhui
 * @Date: 2020-02-12 16:14:53
 * @LastEditors  : yuhui
 * @LastEditTime : 2020-02-12 17:34:24
 */

import {createGlobalStyle } from 'styled-components'
export const IconGlobalStyle=createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('iconfont.eot?t=1581499987201'); /* IE9 */
    src: url('iconfont.eot?t=1581499987201#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('iconfont.woff?t=1581499987201') format('woff'),
    url('iconfont.ttf?t=1581499987201') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('iconfont.svg?t=1581499987201#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`