'use strict';

module.exports = {
  types: [
    { value: 'wip', name: 'wip:      暂时存档(记得回来开发任务)' },
    { value: 'feat', name: 'feat:     增加新功能' },
    { value: 'fix', name: 'fix:      修复Bug问题' },
    { value: 'revert', name: 'revert:   分支版本回滚' },
    { value: 'style', name: 'style:    前端样式修改' },
    { value: 'format', name: 'format:   代码格式检查' },
    { value: 'refactor', name: 'refactor: 代码逻辑重构' },
    { value: 'docs', name: 'docs:     文档内容更新' },
    { value: 'test', name: 'test:     项目测试相关' },
    { value: 'perf', name: 'perf:     性能优化相关' },
    { value: 'merge', name: 'merge:    合并分支代码' },
    { value: 'ci', name: 'ci:       CI/CD 配置变更' },
    { value: 'chore', name: 'chore:    构建或工具变更' },
    { value: 'tag', name: 'tag:      发布版本(打上版本号,如 v1.0.0 )' },
  ],
  messages: {
    type: '请选择提交类型: ',
    customScope: '请输入提交范围(可选): ',
    subject: '请简要描述提交内容(必填): ',
    body: '请输入详细描述内容(可选): ',
    footer: '请列出当前已解决的issue(可选): ',
    confirmCommit: '确认使用以上信息提交? (y/n)',
  },
  subjectLimit: 72,
};
