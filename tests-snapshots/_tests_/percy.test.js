const { percySnapshot } = require('@percy/puppeteer')
const puppeteer = require('puppeteer')

describe('visual tests',()=>{

    let browser
    let page

    beforeAll(async function(){
        browser = await puppeteer.launch({headless:true})
        page = await browser.newPage()
    })
    afterAll(async function(){
        await browser.close()
    })

    test('Welcome page snapshot',async()=> {
        await page.goto('http://localhost:3000/ux1/review')
        await page.waitForSelector('[data-qa="pncd"]')
        await percySnapshot(page,'welcome page')
    })

})
