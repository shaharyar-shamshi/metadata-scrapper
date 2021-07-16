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
            var pageUrl = $('head > meta[property="og:url"]').attr('content');
            var type = $('head > meta[property="og:type"]').attr('content');
            var image = $('meta[property="og:image"]').attr('content');
            var imageWidth = $('meta[property="og:image:width"]').attr('content');
            var imageHeight = $('meta[property="og:image:height"]').attr('content');
            var description = $('meta[property="og:description"]').attr('content');
            var heading = $('meta[property="og:title"]').attr('content');
            var content = $('meta[name="description"]').attr('content');
            var time = $('meta[property="article:published"]').attr('content');
            var keywords = $('meta[name="keywords"]').attr('content');
        
            var title = {
                pageUrl,
                heading,
                type,
                image: image,
                imageWidth,
                imageHeight,
                description: description,
                content,
                keywords,
                time: time
            };
           
            resolve(title);

        });
    })
}
