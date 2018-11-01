/**
 * Created by ecarx on 2018/11/1.
 */
const koa =  require('koa');
const app = new koa();

app.use(function *() {
    console.log(this.request);
    this.body = 'Hello from Koa.js!';
});

app.listen(3000);