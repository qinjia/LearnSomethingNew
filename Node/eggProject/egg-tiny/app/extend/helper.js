/**
 * Created by ecarx on 2018/9/13.
 */
const moment = require('moment');
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();
