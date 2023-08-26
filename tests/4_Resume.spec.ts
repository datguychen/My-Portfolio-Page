import { test, expect } from '@playwright/test';
import { Sidebar, Home, AboutMe, Resume, Projects, Contact } from '../Utils/pageobjects-tsc/POM_const';


function delay(time: number) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}

test('Resume_General_Sections_Visibility @core', async ({browser})=>

{
    test.info().annotations.push({type: "severity", description: "Critical"});
    test.info().annotations.push({type: "Description", description: "This test verifies if the resume page has loaded properly"});

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
        await sidebar.ResumeTab.click();
    });

    await test.step("Check if the titles and download CV are visible", async () => {
        await expect(resume.CoursesTitle).toHaveText("Courses");
        await expect(resume.MySkillsTitle).toHaveText("My Skills");
        await expect(resume.ResumeTitle).toHaveText("Resume");
        await expect(resume.SkillsDownloadCV).toHaveText("Download CV");
    });

    await test.step("Check download CV button on click", async () => {
        const downloadPromise = page.waitForEvent('download');
        await resume.SkillsDownloadCV.click();
        await downloadPromise;
    });

    await page.close();
});

test('Resume_Courses_Check_each_course @core', async ({browser})=>

{
    test.info().annotations.push({type: "severity", description: "Critical"});
    test.info().annotations.push({type: "Description", description: "This test verifies if all courses has loaded properly"});

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
        await sidebar.ResumeTab.click();
    });

    await test.step("Check playwright automation course", async () => {
        await expect(resume.FirstCourseCompleted).toHaveText("Completed on September, 2022");
        await expect(resume.FirstCourseDescription).toContainText("Learned how to use JS and TS");
        await expect(resume.FirstCourseTitle).toHaveText("Playwright automation");
    });

    await test.step("Check javascript and typescript course", async () => {
        await expect(resume.SecondCourseCompleted).toHaveText("Completed on August, 2022");
        await expect(resume.SecondCourseDescription).toContainText("Learned both programming languages");
        await expect(resume.SecondCourseTitle).toHaveText("JavaScript and TypeScript");
        await expect(resume.SecondCourseDownload).toHaveText("Download Certificate");
    });

    await test.step("Check the Download Certificate btn", async () => {
        const [CertificatePage] = await Promise.all([
            webContext.waitForEvent('page'),
            resume.SecondCourseDownload.click()
        ]);
        await expect(CertificatePage).toHaveURL("https://www.sololearn.com/Certificate/CT-HATAHI2L/png");
        await CertificatePage.close();
    });

    await test.step("Check next on radar course", async () => {
        await expect(resume.ThirdCourseCompleted).toHaveText("To be completed");
        await expect(resume.ThirdCourseDescription).toContainText("This milestone is set as my next goal");
        await expect(resume.ThirdCourseTitle).toHaveText("Next on my radar: ISTQB");
    });

    await page.close();
});

test('Resume_MySkills @core', async ({browser})=>

{
    test.info().annotations.push({type: "severity", description: "Critical"});
    test.info().annotations.push({type: "Description", description: "This test verifies if the skills sections has loaded properly"});

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
        await sidebar.ResumeTab.click();
    });

    await test.step("Check the first skill and its percentage", async () => {
        await expect(resume.SkillsNameAndPercentage.nth(0)).toHaveText("JavaScript65%");
    });

    await test.step("Check the second skill and its percentage", async () => {
        await expect(resume.SkillsNameAndPercentage.nth(1)).toHaveText("TypeScript60%");
    });

    await test.step("Check the third skill and its percentage", async () => {
        await expect(resume.SkillsNameAndPercentage.nth(2)).toHaveText("Playwright - Autmation testing80%");
    });

    await test.step("Check the fourth skill and its percentage", async () => {
        await expect(resume.SkillsNameAndPercentage.nth(3)).toHaveText("Creating documentation90%");
    });

    await test.step("Check the fifth skill and its percentage", async () => {
        await expect(resume.SkillsNameAndPercentage.nth(4)).toHaveText("Manual frontend testing90%");
    });

    await test.step("Check the sixth skill and its percentage", async () => {
        await expect(resume.SkillsNameAndPercentage.nth(5)).toHaveText("Manual backend testing65%");
    });

    await page.close();
});

/*
4_Resume.spec.ts
*/