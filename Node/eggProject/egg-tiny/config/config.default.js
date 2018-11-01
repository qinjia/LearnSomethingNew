/**
 * Created by ecarx on 2018/9/12.
 */
// session key 必须设置 一般为时间戳
exports.keys = 'egg-tiny_20180912';

// 添加view配置

exports.view = {
  defaultViewEngine: 'nunjucks', //渲染模板的插件
    mapping:{
      '.tpl': 'nunjucks', // 这里写 tpl或者 html有何区别,默认启用html
    }
};

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0'
};

exports.middleware = [ // 中间件
    'robot'
];

exports.robot = {
  ua: [
      /curl/i,
      /Baiduspider/i,
  ]
}