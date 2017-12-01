## node-single-test
> run test case at [https://github.com/nodejs/node/tree/master/test](https://github.com/nodejs/node/tree/master/test) unitary.

### usage

Before use this plugin, please ensure you have run `./configure&&make -j4 test`.  

```shell
$ npm install -g node-single-test
$ cd node_repo/test/[folder]/[single test case]
$ node-single run test.js
```

The plugin will find your local test case is Debug or Release version, and use different node cli.