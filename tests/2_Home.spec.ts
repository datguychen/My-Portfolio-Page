import { test, expect } from '@playwright/test';
import { Sidebar, Home, AboutMe, Resume, Projects, Contact } from '../Utils/pageobjects-tsc/POM_const';


function delay(time: number) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}

test('Home_Text_Visibility @core', async ({browser})=>

{
    test.info().annotations.push({type: "severity", description: "Critical"});
    test.info().annotations.push({type: "Description", description: "This test verifies if the home page loaded properly"});

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
    });

    await test.step("Check if the info/credits text is visible & check the text", async () => {
        await expect(home.InfoMessage).toBeVisible();
        await expect(home.InfoMessage).toHaveText("This page is for automation testing purposes. View it in desktop view only.");
    });

    await test.step("Check if the Welcome text is visible & check the text", async () => {
        await expect(home.WelcomeTitle).toBeVisible();
        await expect(home.WelcomeTitle).toHaveText("🎉 Welcome 🎉");
    });

    await test.step("Check if the typewriter text is visible", async () => {
        await expect(home.TypeWriterText).toBeVisible();
    });

    await page.close();
});

test('Home_Contact_Me_Btn @core', async ({browser})=>

{
    test.info().annotations.push({type: "severity", description: "Critical"});
    test.info().annotations.push({type: "Description", description: "This test verifies the contact me button functionalities"});

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
    });

    await test.step("Check if the info/credits text is visible & check the text", async () => {
        await expect(home.ContactMeBtn).toHaveCSS("background-color","rgba(0, 0, 0, 0)");
        await home.ContactMeBtn.hover();
        await expect(home.ContactMeBtn).toHaveCSS("background-color","rgb(30, 64, 175)");
    });

    await test.step("Click the Contact me btn and check if the proper subpage opened", async () => {
        await home.ContactMeBtn.click();
        await expect(page).toHaveURL("#contact");
    });

    await page.close();
});

test('Home_DownArrow_Btn @core', async ({browser})=>

{
    test.info().annotations.push({type: "severity", description: "Critical"});
    test.info().annotations.push({type: "Description", description: "This test verifies the scroll down button functionalities"});

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
    });

    await test.step("Click the down arrow btn and check if the proper subpage opened", async () => {
        await home.ScrollDownArrow.click();
        await expect(page).toHaveURL("#about");
    });

    await page.close();
});

/*
2_Home.spec.ts
*/