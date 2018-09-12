/**
 * Created by ecarx on 2018/9/12.
 */
const Service = require('egg').Service;

class NewsService extends Service {
    async list(page = 1){
        // read config
        const { serverUrl, pageSize } = this.config.news;

        // 用内置 HttpClient 获取 hacker-news api
        const { data: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`,{
            data: {
                orderBy: '"$key"',
                startAt: `"${pageSize * (page -1)}"`,
                endAt: `"${pageSize * page -1}"`,
            },
            dataType: 'json',
        });

        // 并发获取新闻详情
        const newsList = await Promise.all(
            Object.keys(idList).map(key => {
                const url = `${serverUrl}/item/${idList[key]}.json`;
                return this.ctx.curl(url, { dataType: 'json'});
            })
        );

        return newsList.map(res => res.data);
    }
}


module.exports = NewsService;
