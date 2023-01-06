const playwright = require('playwright');
exports.Crawler = Crawler;
async function Crawler(url) {
    const metadata = await main(url);
    return metadata;

}

async function main(url) {
    const browser = await playwright.chromium.launch({
        headless: true // setting this to true will not run the UI
    });

    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForTimeout(3000); // wait for 5 seconds
    const metadata = await page.evaluate(() => {
        return {
            heading: document.title,
            description: document.querySelector('meta[property="og:description"]') ?
                document.querySelector('meta[property="og:description"]').content : document.querySelector('meta[name="og:description"]')?.content,
            image: document.querySelector('meta[property="og:image"]') ?
                document.querySelector('meta[property="og:image"]').content : document.querySelector('meta[name="og:image"]')?.content
        };
    });
    await browser.close();
    return metadata;
}