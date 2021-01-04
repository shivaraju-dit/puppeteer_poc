const puppeteer = require('puppeteer')
const { toMatchImageSnapshot } = require('jest-image-snapshot')
 
expect.extend({ toMatchImageSnapshot })
 
describe('Visual Regression Testing', () => {
    let browser
    let page
 
    beforeAll(async function() {
        browser = await puppeteer.launch({ headless: true })
        page = await browser.newPage()
    })
 
    afterAll(async function() {
        await browser.close()
    })
 
    test('Full Page Snapshot', async function() {

        await page.goto('http://localhost:3000/ux1/review')
        await page.waitForSelector('[data-qa="pncd"]')
        const image = await page.screenshot()
        expect(image).toMatchImageSnapshot({
            failureTresholdType: 'pixel',
            failureTreshold: 500,
        })
    })
 
   
})