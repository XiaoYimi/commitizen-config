# Git Commit 统一提交规范配置

## 安装相关依赖包

```bash
## 在你的项目安装相关依赖包
pnpm add -D commitizen@4.2.4 cz-customizable@6.3.0 husky@7.0.1 @commitlint/config-conventional@12.1.4 @commitlint/cli@12.1.4 lint-staged@11.0.0 @xiaoyimi/commitlint-config
```

## 配置`package.json`文件内容

```json
{
  "name": "你的项目名称",

  /** 追加配置 */
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-customizable"
    },
    "cz-customizable": {
      "config": "./node_modules/@xiaoyimi/commitlint-config/index.cjs"
    }
  },
  /** 若需自定义 commitlint.config.js 文件配置，请移除以下 commitlint 字段配置 */
  "commitlint": {
    "extends": ["./node_modules/@xiaoyimi/commitlint-config/commitlint.cjs"]
  },
  "lint-staged": {
    /** 根据需要自定义 */
  },
  "devDependencies": {
    "husky": "^7.0.1",
    "commitizen": "^4.2.4",
    "lint-staged": "^11.0.0",
    "@commitlint/cli": "^12.1.4",
    "cz-customizable": "^6.3.0",
    "@commitlint/config-conventional": "^12.1.4",
    "@xiaoyimi/commitlint-config": "^1.0.0"
  }
}
```

## 配置`husky`钩子

```bash
## 初始化 .husky 目录
npx husky install

## 注册 commit-msg 钩子
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'

## 生成钩子 pre-commit （命令内容'lint-staged' 与 package.json 中的 lint-staged 配置相关,可自行定义）
npx husky add .husky/pre-commit 'npx lint-staged'


### 特别提醒：lint-staged 相关配置，请自行配置！！！(因为不同项目有对代码的格式有不同的要求)

```

## 自定义`commitlint.config.js`文件内容

**特别提醒**：若需要定义`commitlint.config.js`文件内容，请按下面进行配置，并移除`package.json`文件的字段`commitlint`配置；否则不用创建`commitlint.config.js`文件。

```js
module.exports = {
  extends: ['./node_modules/@xiaoyimi/commitlint-config/commitlint.cjs'],
};
```

## 开发者信息

<ul style="font-size: 14px;">
  <li>开发者：<code>筱依米</code></li>
  <li>微信：<code>晨风不可依米</code></li>
  <li>邮箱：<code>chenfengbukeyimi@qq.com</code></li>
  <li>Gitee：<a href="https://gitee.com/xiaoyimi" target="_blank">https://gitee.com/xiaoyimi</a></li>
  <li>GitHub：<a href="https://github.com/XiaoYimi" target="_blank">https://github.com/XiaoYimi</a></li>
</ul>
