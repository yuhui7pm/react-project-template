webpack-dev-server 的显示报错函数的代码有问题，websocket 传过来的是数组对象，但是底层并没有对对象进行一个取值，
而是对字符串进行一个取值，这里通过 patch-package 包对 node_modules 的包里面的函数进行代码修改。
