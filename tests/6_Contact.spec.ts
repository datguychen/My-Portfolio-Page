import { test, expect } from '@playwright/test';
import { Sidebar, Home, AboutMe, Resume, Projects, Contact } from '../Utils/pageobjects-tsc/POM_const';


function delay(time: number) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}

test('Contact_General_Sections_Visibility @core', async ({browser})=>

{
    test.info().annotations.push({type: "severity", description: "Critical"});
    test.info().annotations.push({type: "Description", description: "This test verifies if the contact page has loaded properly"});

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
        await sidebar.ContactTab.click();
    });

    await test.step("Check if the page sections have loaded properly", async () => {
        await expect(contact.Animation).toBeVisible();
        await expect(contact.FollowMe).toHaveText("Follow Me");
        await expect(contact.GithubBtn).toBeVisible();
        await expect(contact.LinkedinBtn).toBeVisible();
    });

    await page.close();
});

test('Contact_GitHub_LinkedIn @core', async ({browser})=>

{
    test.info().annotations.push({type: "severity", description: "Critical"});
    test.info().annotations.push({type: "Description", description: "This test verifies if github and linckedin buttons opens proper pages in new browser tabs"});

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
        await sidebar.ContactTab.click();
    });

    await test.step("Check Github btn", async () => {
        const [GithubLink] = await Promise.all([
            webContext.waitForEvent('page'),
            contact.GithubBtn.click()
        ]);
        await expect(GithubLink).toHaveURL("https://github.com/datguychen");
        await GithubLink.close();
    });

    await test.step("Check LinkedIn btn", async () => {
        const [LinkedinLink] = await Promise.all([
            webContext.waitForEvent('page'),
            contact.LinkedinBtn.click()
        ]);
        await expect(LinkedinLink.url()).toContain("https://www.linkedin.com/" && "adam-swiderski-qa");
        await LinkedinLink.close();
    });

    await page.close();
});

/*
6_Contact.spec.ts
*/