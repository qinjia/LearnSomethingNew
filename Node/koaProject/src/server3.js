/**
 * Created by ecarx on 2018/11/2.
 */
const koa =  require('koa');
const app = new koa();
const Router = require('koa-router');
const router = new Router();



let requestTime = function (headerName) {
    return function *(next) {
        var start = new Date();
        yield next;
        var end = new Date();
        var ms = end - start;
        this.set(headerName,  ms+'ms');
    }

};
app.use(requestTime('Response-time'));


router.get('/',function *() {
    this.body = 'Hello from Koa.js!';
});
router.get('/date',function *() {
    this.body = new Date();
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);