MetaData Scrapper
=====
<p>
<img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>
<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>  
</p>
  
[Metadata-Scrapper](https://www.npmjs.com/package/metadata-scrapper) is a **lightweight Node.Js Web Scraping Module** which would help scraping out the details in meta tags such as url, title, description, image etc. in different webpages. It makes scraping easy by allowing the user to just enter the required URL of the page. 

<p>
<img src="https://img.shields.io/badge/Version-1.0.1-orange"/>
</p>


Installation
----
Install with the help of following command:
```
npm install metadata-scrapper
```

Running the module
----
Use the following Code snippet:
```
const metadataScrapper = require('metadata-scrapper');

//replace your actual URL
const url = "https://www.example.com" 

metadataScrapper.Crawler(url)
.then((data)=>{
    // Your scrapped content stored in data
    console.log(data);
})
.catch(err=>console.log(err);)
```
Contributors
----
- [Shaharyar Shamshi](https://github.com/shaharyar-shamshi)
- [Kushagra Johari](https://github.com/joharikushagra)
