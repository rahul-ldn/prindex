const puppeteer = require("puppeteer");

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

(async () => {
    const browser = await puppeteer.launch({
        headless: true
    });

    const page = await browser.newPage();

    await page.goto("https://www.prindex.net/data/india/", {
        waitUntil: "networkidle2"
    });

    let height = await page.evaluate(
        () => document.documentElement.offsetHeight
    );

    console.log("Height", height);

    await page.pdf({
        path: "hni.pdf",
        printBackground: true,
        margin: "none",
        height: height + "px"
    });

    await browser.close();
})();