const cheerio = require("cheerio");
const request = require("request");
exports.Crawler = Crawler;
async function Crawler(url) {
    return new Promise((resolve, reject) => {
        request({
            method: 'GET',
            url: url
        }, (err, res, body) => {
            //console.log(res);
            var $ = cheerio.load(res.body)
            var image = $('meta[property="og:image"]').attr('content');
            var description = $('meta[property="og:description"]').attr('content');
            var time = $('meta[property="article:published"]').attr('content');
            var title = {
                image: image,
                description: description,
                time: time
            };
            resolve(title);

        });
    })
}
