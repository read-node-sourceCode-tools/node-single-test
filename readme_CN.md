## node-single-test
> 这个包用来跑单个node官方测试用例 [https://github.com/nodejs/node/tree/master/test](https://github.com/nodejs/node/tree/master/test) 。

### 使用方法

在使用这个包之前，确认你本地已经编译过node和node的测试用例 `./configure&&make -j4 test`。    

```shell
$ npm install -g node-single-test
$ cd node_repo/test/[folder]/[single test case]
$ node-single run test.js
```

去本地node目录下进入到要测试的单测用例文件夹中，然后运行此包。此包会根据你本地node测试用例的编译环境 `Debug`或者`release`来自动寻找node/out/目录下相应的执行文件来作为node测试用例的运行环境。