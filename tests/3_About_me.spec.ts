import { test, expect } from '@playwright/test';
import { Sidebar, Home, AboutMe, Resume, Projects, Contact } from '../Utils/pageobjects-tsc/POM_const';


function delay(time: number) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}

test('AboutMe_Text_and_Animation_Visibility @core', async ({browser})=>

{
    test.info().annotations.push({type: "severity", description: "Critical"});
    test.info().annotations.push({type: "Description", description: "This test verifies if the about me page loaded properly"});

    const webContext = await browser.newContext();
    const page = await webContext.newPage();

    const sidebar = new Sidebar(page);
    const home = new Home(page);
    const aboutme = new AboutMe(page);
    const resume = new Resume(page);
    const projects = new Projects(page);
    const contact = new Contact(page);

    await test.step("Open the page and wait for it to load", async () => {
        await page.goto("/", { waitUntil: 'load' });
        await sidebar.AboutMeTab.click();
    });

    await test.step("Check if the Title text is visible & check the text", async () => {
        await expect(aboutme.Title).toBeVisible();
        await expect(aboutme.Title).toHaveText("About Me");
    });

    await test.step("Check if the Full name text is visible & check the text", async () => {
        await expect(aboutme.MyNameDiv).toBeVisible();
        await expect(aboutme.MyNameDiv).toHaveText("I'm Adam Świderski, a QA Automation Engineer");
        await expect(aboutme.MyName).toHaveCSS("color","rgb(202, 138, 4)");
    });

    await test.step("Check if the description text is visible & check the text", async () => {
        await expect(aboutme.MyDescription).toBeVisible();
        await expect(aboutme.MyDescription).toContainText("I am a 25 years old QA Automation Tester");
    });

    await test.step("Check if the animation is visible", async () => {
        await expect(aboutme.ComputerGif).toBeVisible();
    });

    await page.close();
});

test('AboutMe_DownloadCV_Btn @core', async ({browser})=>

{
    test.info().annotations.push({type: "severity", description: "Critical"});
    test.info().annotations.push({type: "Description", description: "This test verifies the download cv button functionalities"});

    const webContext = await browser.newContext();
    const page = await webContext.newPage();

    const sidebar = new Sidebar(page);
    const home = new Home(page);
    const aboutme = new AboutMe(page);
    const resume = new Resume(page);
    const projects = new Projects(page);
    const contact = new Contact(page);

    await test.step("Open the page and wait for it to load", async () => {
        await page.goto("/", { waitUntil: 'load' });
        await sidebar.AboutMeTab.click();
    });

    await test.step("Check download CV btn hover CSS", async () => {
        await delay(2000);
        await expect(aboutme.DownloadCVBtn).toHaveCSS("background-color","rgb(37, 99, 235)");
        await aboutme.DownloadCVBtn.hover();
        await expect(aboutme.DownloadCVBtn).toHaveCSS("background-color","rgb(30, 64, 175)");
    });

    await test.step("Click the button and check if CV downloading starts properly", async () => {
        const downloadPromise = page.waitForEvent('download');
        await aboutme.DownloadCVBtn.click();
        await downloadPromise;
    });

    await page.close();
});

/*
3_About_me.spec.ts
*/