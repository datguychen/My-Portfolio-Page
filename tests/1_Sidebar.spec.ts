import { test, expect } from '@playwright/test';
import { Sidebar, Home, AboutMe, Resume, Projects, Contact } from '../Utils/pageobjects-tsc/POM_const';


function delay(time: number) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}

test('Sidebar_ProfilePicture @core @vercel', async ({browser})=>

{
    test.info().annotations.push({type: "severity", description: "Critical"});
    test.info().annotations.push({type: "Description", description: "This test verifies if the profile picture loaded properly on the page"});

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

    await test.step("Check if the profile image is visible", async () => {
        await expect(sidebar.ProfilePicture).toBeVisible();
        const PictureSource = await sidebar.ProfilePicture.getAttribute("src");
        await expect(PictureSource).toContain("MyImage");
    });

    await page.pause();

    await page.close();
});

test('Sidebar_FullName @core @vercel', async ({browser})=>

{
    test.info().annotations.push({type: "severity", description: "Critical"});
    test.info().annotations.push({type: "Description", description: "This test verifies if the full name loaded properly on the page"});

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

    await test.step("Check if the full name has loaded properly", async () => {
        await expect(sidebar.MyName).toBeVisible();
        const MyNameText = await sidebar.MyName.textContent();
        await expect(MyNameText).toContain("Adam Świderski");
    });

    await page.close();
});

test('Sidebar_Tabs_HoverStates @core @vercel', async ({browser})=>

{
    test.info().annotations.push({type: "severity", description: "Critical"});
    test.info().annotations.push({type: "Description", description: "This test verifies sidebar tabs hover states"});

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

    await test.step("Check Contact tab CSS before and after hover", async () => {
        await expect(sidebar.ContactTab).toHaveCSS("color","rgb(255, 255, 255)");
        await sidebar.ContactTab.hover();
        await expect(sidebar.ContactTab).toHaveCSS("color","rgb(37, 99, 235)");
    });

    await test.step("Check Projects tab CSS before and after hover", async () => {
        await expect(sidebar.ProjectsTab).toHaveCSS("color","rgb(255, 255, 255)");
        await sidebar.ProjectsTab.hover();
        await expect(sidebar.ProjectsTab).toHaveCSS("color","rgb(37, 99, 235)");
    });

    await test.step("Check Resume tab CSS before and after hover", async () => {
        await expect(sidebar.ResumeTab).toHaveCSS("color","rgb(255, 255, 255)");
        await sidebar.ResumeTab.hover();
        await expect(sidebar.ResumeTab).toHaveCSS("color","rgb(37, 99, 235)");
    });

    await test.step("Check About Me tab CSS before and after hover", async () => {
        await expect(sidebar.AboutMeTab).toHaveCSS("color","rgb(255, 255, 255)");
        await sidebar.AboutMeTab.hover();
        await expect(sidebar.AboutMeTab).toHaveCSS("color","rgb(37, 99, 235)");
        await sidebar.AboutMeTab.click(); //need to click here to change the active tab, so we can verify Home tab hover state
    });

    await test.step("Check Home tab CSS before and after hover", async () => {
        await expect(sidebar.HomeTab).toHaveCSS("color","rgb(255, 255, 255)");
        await sidebar.HomeTab.hover();
        await expect(sidebar.HomeTab).toHaveCSS("color","rgb(37, 99, 235)");
    });

    await page.close();
});

test('Sidebar_Tabs_Click_Check @core @vercel', async ({browser})=>

{
    test.info().annotations.push({type: "severity", description: "Critical"});
    test.info().annotations.push({type: "Description", description: "This test verifies if the tabs open proper subpages"});

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

    await test.step("Click Contact tab and check if the contact page opened properly", async () => {
        await sidebar.ContactTab.click();
        await expect(page).toHaveURL("#contact");
    });

    await test.step("Click Projects tab and check if the projects page opened properly", async () => {
        await sidebar.ProjectsTab.click();
        await expect(page).toHaveURL("#projects");
    });

    await test.step("Click Resume tab and check if the resume page opened properlyr", async () => {
        await sidebar.ResumeTab.click();
        await expect(page).toHaveURL("#resume");    
    });

    await test.step("Click About me tab and check if the aboutme page opened properly", async () => {
        await sidebar.AboutMeTab.click();
        await expect(page).toHaveURL("#about");    
    });

    await test.step("Click Home tab and check if the home page opened properly", async () => {
        await sidebar.HomeTab.click();
        await expect(page).toHaveURL("#");    
    });

    await page.close();
});

test('Sidebar_Github_LinkedIn_Buttons @core @vercel', async ({browser})=>

{
    test.info().annotations.push({type: "severity", description: "Critical"});
    test.info().annotations.push({type: "Description", description: "This test verifies if the github and linked buttons works properly"});

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

    await test.step("Click Github button and check if the proper page opened", async () => {
        const [GithubPage] = await Promise.all([
            webContext.waitForEvent('page'),
            sidebar.GithubBtn.click(),
        ]);
        await expect(GithubPage).toHaveURL("https://github.com/datguychen");
        await GithubPage.close();
    });

    await test.step("Click LinkedIn button and check if the proper page opened", async () => {
        const [LinkedinPage] = await Promise.all([
            webContext.waitForEvent('page'),
            sidebar.LinkedinBtn.click(),
        ]);
        await expect(LinkedinPage.url()).toContain("https://www.linkedin.com/" && "adam-swiderski-qa");
        await LinkedinPage.close();
    });

    await test.step("Click Gitlab button and check if the proper page opened", async () => {
        const [GitlabPage] = await Promise.all([
            webContext.waitForEvent('page'),
            sidebar.GitlabBtn.click(),
        ]);
        await expect(GitlabPage.url()).toContain("https://gitlab.com/datguychen");
        await GitlabPage.close();
    });

    await page.close();
});

/*
1_Sidebar.spec.ts
*/