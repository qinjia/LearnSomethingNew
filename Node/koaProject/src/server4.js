/**
 * Created by ecarx on 2018/11/2.
 */
const Koa = require('koa');
const Router = require('koa-router');
const router = new Router();
const app = new Koa();

const home = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = '<a href="/">Home Page</a>';
};

const main = ctx => {
    ctx.response.body = 'Hello World';
};

app.use(router.get('/', main));
app.use(router.get('/home', home));

app.listen(3000);