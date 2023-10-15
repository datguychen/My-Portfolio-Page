import { test, expect } from '@playwright/test';
import { Sidebar, Home, AboutMe, Resume, Projects, Contact } from '../Utils/pageobjects-tsc/POM_const';


function delay(time: number) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}

test('Projects_General_Sections_Visibility @core @vercel', async ({browser})=>

{
    test.info().annotations.push({type: "severity", description: "Critical"});
    test.info().annotations.push({type: "Description", description: "This test verifies if the projects page has loaded properly"});

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
        await sidebar.ProjectsTab.click();
    });

    await test.step("Check if the title and projects tiles are visible", async () => {
        await expect(projects.Title).toHaveText("Projects");
        const TilesCount = await projects.ProjectTile.count();
        await expect(TilesCount).toEqual(5);
    });

    await page.close();
});

test('Projects_Check_Each_Project @core', async ({browser})=>

{
    test.info().annotations.push({type: "severity", description: "Critical"});
    test.info().annotations.push({type: "Description", description: "This test verifies if the eacg project tile has proper information"});

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
        await sidebar.ProjectsTab.click();
    });

    await test.step("Check the first tile info", async () => {
        await expect(projects.ProjectName.nth(0)).toHaveText("Social Media Project (NDA)");
        await expect(projects.ProjectDescription.nth(0)).toHaveText("A Pinterest alternative for many other things.");
        await expect(projects.ProjectTags.nth(0).nth(0)).toHaveText("Automation / Playwright");
        await expect(projects.ProjectTags.nth(1).nth(0)).toHaveText("Manual");
        await expect(projects.ProjectTileImg.nth(0)).toHaveAttribute("src","https://d4y70tum9c2ak.cloudfront.net/contentImage/cp-xkfWuQLB8A-LnxHmXAXyjr697tiDTJ-H-hSl1VjA/resized.png");
    });

    await test.step("Check the first tile link", async () => {
        const [FirstTileLink] = await Promise.all([
            webContext.waitForEvent('page'),
            projects.ProjectLink.nth(0).click()
        ]);
        await expect(FirstTileLink).toHaveURL("https://www.investopedia.com/thmb/J8DhyqDJiZtjb3oOcbPEyA5aLxo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Term-Definitions_NDA-438a26fefa014d06b83b75b02d8403a6.jpg");
        await FirstTileLink.close();
    });

    await test.step("Check the second tile info", async () => {
        await expect(projects.ProjectName.nth(1)).toHaveText("Daymix");
        await expect(projects.ProjectDescription.nth(1)).toContainText("Daymix is a listening club");
        await expect(projects.ProjectTags.nth(1)).toHaveText("Manual");
        await expect(projects.ProjectTileImg.nth(1)).toHaveAttribute("src","https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/9b/51/d1/9b51d1a4-1540-385f-c88b-cc1ea0d174ab/6ed65478-410b-4513-b27b-44f4ad9bb447_F05_1.png/230x0w.webp");
    });

    await test.step("Check the second tile link", async () => {
        const [SecondTileLink] = await Promise.all([
            webContext.waitForEvent('page'),
            projects.ProjectLink.nth(1).click()
        ]);
        await expect(SecondTileLink).toHaveURL("https://apps.apple.com/us/app/daymix/id1625500165");
        await SecondTileLink.close();
    });

    //NEED TO REWORK THIS TEST TO BE LESS STATIC (DYNAMIC IDs)

    // await test.step("Check the third tile info", async () => {
    //     await expect(projects.ProjectName.nth(2)).toHaveText("My E2E Automation Project");
    //     await expect(projects.ProjectDescription.nth(2)).toContainText("My E2E Automation Project with Playwright");
    //     await expect(projects.ProjectTags.nth(0).nth(2)).toHaveText("Automation / Playwright");
    //     await expect(projects.ProjectTags.nth(1).nth(2)).toHaveText("Manual");
    //     await expect(projects.ProjectTileImg.nth(2)).toHaveAttribute("src","https://miro.medium.com/v2/resize:fit:646/1*gMiUPuRGC36nxZHe2zthOg.png");
    // });

    // await test.step("Check the third tile link", async () => {
    //     const [ThirdTileLink] = await Promise.all([
    //         webContext.waitForEvent('page'),
    //         projects.ProjectLink.nth(2).click()
    //     ]);
    //     await expect(ThirdTileLink).toHaveURL("https://github.com/datguychen/My-Portfolio-Page/actions");
    //     await ThirdTileLink.close();
    // });

    // await test.step("Check the fourth tile info", async () => {
    //     await expect(projects.ProjectName.nth(3)).toHaveText("Payment Social Platform (NDA)");
    //     await expect(projects.ProjectDescription.nth(3)).toContainText("A Social plaform for easier payment options");
    //     await expect(projects.ProjectTags.nth(3)).toHaveText("Manual");
    //     await expect(projects.ProjectTileImg.nth(3)).toHaveAttribute("src","https://erepublic.brightspotcdn.com/dims4/default/343c604/2147483647/strip/true/crop/770x374+0+69/resize/1440x700!/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.amazonaws.com%2Faa%2F6b%2F1a5404996431a2071cf7a016cadf%2Fshutterstock-cash-payments.jpg");
    // });

    // await test.step("Check the fourth tile link", async () => {
    //     const [FourthTileLink] = await Promise.all([
    //         webContext.waitForEvent('page'),
    //         projects.ProjectLink.nth(3).click()
    //     ]);
    //     await expect(FourthTileLink).toHaveURL("https://www.investopedia.com/thmb/J8DhyqDJiZtjb3oOcbPEyA5aLxo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Term-Definitions_NDA-438a26fefa014d06b83b75b02d8403a6.jpg");
    //     await FourthTileLink.close();
    // });

    // await test.step("Check the fifth tile info", async () => {
    //     await expect(projects.ProjectName.nth(4)).toHaveText("Weird West");
    //     await expect(projects.ProjectDescription.nth(4)).toContainText("Weird West is an action role-playing video game");
    //     await expect(projects.ProjectTags.nth(4)).toHaveText("Manual");
    //     await expect(projects.ProjectTileImg.nth(4)).toHaveAttribute("src","https://cdn.akamai.steamstatic.com/steam/apps/1097350/capsule_616x353.jpg?t=1683561276");
    // });

    // await test.step("Check the fourth tile link", async () => {
    //     const [FifthTileLink] = await Promise.all([
    //         webContext.waitForEvent('page'),
    //         projects.ProjectLink.nth(4).click()
    //     ]);
    //     await expect(FifthTileLink).toHaveURL("https://store.steampowered.com/app/1097350/Weird_West_Definitive_Edition/");
    //     await FifthTileLink.close();
    // });

    // await page.close();
});

/*
5_Projects.spec.ts
*/