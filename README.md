# qupload-bin

> 根据git commit hash等动态参数执行qshell qupload2

### 作为命令行工具

**安装**

```sh
npm i -g qupload-bin
```

**使用**

[官方文档](https://github.com/qiniu/qshell/blob/master/docs/qupload2.md)

### 作为项目依赖

**安装**

```sh
npm i -D qupload-bin
```

**使用**

在`package.json`中增加以下内容：

```json
"scripts": {
  "deploy": "qupload"
  // "deploy": "qupload --bucket=test" or with params
}
```

在项目编译完成后，执行以下命令上传文件到七牛 CDN：

```sh
npm run deploy
```

### 依赖版本

qshell-bin v2.0.0
