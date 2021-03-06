/**
 * Created by ecarx on 2018/11/1.
 */
const koa =  require('koa');
const app = new koa();



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

app.use(function *() {
    console.log(this.request);
    let url = this.request.url;
    if(url==='/'){
        this.body = 'Hello from Koa.js!';
    }else if(url==='/date'){
        this.body = new Date();
    }else{
        this.status = 404;
        this.body = 'Sorry for not found!';
    }
});


app.listen(3000);