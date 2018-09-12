/**
 * Created by ecarx on 2018/9/12.
 */
const Controller = require('egg').Controller;

class HomeController extends Controller{
    async index(){
        this.ctx.body = 'Hello world!';
}
}

module.exports = HomeController;