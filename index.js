const puppeteer = require('puppeteer');
const pidusage = require('pidusage');

(async () => {
  let browserPath;
  try {
    console.info(`downloadFirefox: startDownload...`);
    const browserFetcher = puppeteer.createBrowserFetcher({
      host: 'https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-central',
      product: 'firefox',
    });
    const revisionInfo = await browserFetcher.download('96.0a1');
    console.info(`downloadFirefox: ${JSON.stringify(revisionInfo)}`);
    browserPath = revisionInfo.executablePath;
  } catch (e) {
    console.error(`downloadFirefoxError:${e.stack}`);
  }
  console.info(`launchBrowser::${browserPath}`);
  try {
    const browser = await puppeteer.launch({
      product: 'firefox',
      executablePath: browserPath,
      headless: true,
      ignoreHTTPSErrors: true,
    });
    let pageUrl = 'https://www.baidu.com';
    console.info(`start load page: ${pageUrl}`);
    const openPage = async () => {
      console.log('open page..');
      let page = await browser.newPage();
      await page.goto(pageUrl, {
        timeout: 5000,
        waitUntil: 'domcontentloaded',
      });
      const html = await page.content();
      console.log(html.length);
      await page.close();
    }

    setInterval(async () => {
      try {
        await openPage();
        const result = await pidusage(browser.process().pid);
        const d = new Date();
        console.log(`[${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}] >> browser mem: ${result.memory}`);
      } catch (e) {
        console.error(e);
      }
    }, 1000 + Math.random() * 1000);
  } catch (e) {
    console.error(e.stack);
  }
})();
