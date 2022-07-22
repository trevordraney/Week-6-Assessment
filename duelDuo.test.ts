
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking draw button displays cards',async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click();
    await driver.sleep(100)
    const choicesDiv = await driver.findElement(By.id('choices'))
    expect(choicesDiv).toBe(true)
})

test('Bot added to Duo',async () => {
    const addToDuoBtn = await driver.findElement(By.className('bot-btn'))
    await addToDuoBtn.click();
    await driver.sleep(100)
    const yourDuo = await driver.findElement(By.id('player-duo'))
    expect(yourDuo).toBe(true)
})