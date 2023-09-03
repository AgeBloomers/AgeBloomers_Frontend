const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // 웹 페이지로 이동
  await page.goto('https://example.com'); // 크롤링할 웹 사이트 URL로 변경
  
  // 웹 페이지에서 원하는 정보 추출
  const programTitle = await page.$eval('.program-title-selector', (element) => element.textContent);
  const programDescription = await page.$eval('.program-description-selector', (element) => element.textContent);
  
  console.log('프로그램 제목:', programTitle);
  console.log('프로그램 설명:', programDescription);

  await browser.close();
})();
