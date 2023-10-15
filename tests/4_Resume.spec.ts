import { test, expect } from '@playwright/test';
import { Sidebar, Home, AboutMe, Resume, Projects, Contact } from '../Utils/pageobjects-tsc/POM_const';


function delay(time: number) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}

test('Resume_General_Sections_Visibility @core @vercel', async ({browser})=>

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

    await test.step("Check if the title and download CV are visible", async () => {
        await expect(resume.ResumeTitle).toHaveText("Resume & Courses");
        await expect(resume.ResumeCVBtn).toBeVisible();
    });

    await test.step("Check download CV button on click", async () => {
        const downloadPromise = page.waitForEvent('download');
        await resume.ResumeCVBtn.click();
        await downloadPromise;
    });

    await page.close();
});

test('Resume_Courses_Check_Each_Course_Part1 @core', async ({browser})=>

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

    await test.step("Check 1 Course - Playwright automation", async () => {
        await expect(resume.CoursesTimeStamp.nth(0)).toHaveText("Completed on September, 2022");
        await expect(resume.CoursesDescription.nth(0)).toContainText("Learned how to use JS and TS");
        await expect(resume.CoursesTitles.nth(0)).toHaveText("Playwright automation");
    });

    await test.step("Check 2 Course - JavaScript and TypeScript", async () => {
        await expect(resume.CoursesTimeStamp.nth(1)).toHaveText("Completed on August, 2022");
        await expect(resume.CoursesDescription.nth(1)).toContainText("Learned both programming languages");
        await expect(resume.CoursesTitles.nth(1)).toHaveText("JavaScript and TypeScript");
        await expect(resume.CoursesBtns.nth(0)).toHaveText("Download Certificate");
    });

    await test.step("Check the Download Certificate btn", async () => {
        const [CertificatePage] = await Promise.all([
            webContext.waitForEvent('page'),
            resume.CoursesBtns.nth(0).click()
        ]);
        await expect(CertificatePage).toHaveURL("https://www.sololearn.com/Certificate/CT-HATAHI2L/png");
        await CertificatePage.close();
    });

    await test.step("Check 3 Course - Postman Backend Automation", async () => {
        await expect(resume.CoursesTimeStamp.nth(2)).toHaveText("Completed on June, 2023");
        await expect(resume.CoursesDescription.nth(2)).toContainText("Learned how to automate backend testing with Postman.");
        await expect(resume.CoursesTitles.nth(2)).toHaveText("Postman Backend Automation");
    });

    await test.step("Check the Check my code btn", async () => {
        const [PostmanCodePage] = await Promise.all([
            webContext.waitForEvent('page'),
            resume.CoursesBtns.nth(1).click()
        ]);
        await expect(PostmanCodePage).toHaveURL("https://www.postman.com/interstellar-eclipse-418940/workspace/api-automation-course-workspace/overview");
        await PostmanCodePage.close();
    });

    await page.close();
});

test('Resume_Courses_Check_Each_Course_Part2 @core', async ({browser})=>

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

    await test.step("Check 4 Course - SQL", async () => {
        await expect(resume.CoursesTimeStamp.nth(3)).toHaveText("Completed on July, 2023");
        await expect(resume.CoursesDescription.nth(3)).toContainText("I've learned SQL for querying databases");
        await expect(resume.CoursesTitles.nth(3)).toHaveText("SQL");
    });

    await test.step("Check 5 Course - BDD - Behavioral Driven Development", async () => {
        await expect(resume.CoursesTimeStamp.nth(4)).toHaveText("Completed on September, 2022");
        await expect(resume.CoursesDescription.nth(4)).toContainText("I learned the basics, workflow, and implementation of BDD");
        await expect(resume.CoursesTitles.nth(4)).toHaveText("BDD - Behavioral Driven Development");
    });

    await test.step("Check 6 Course - C# programming language", async () => {
        await expect(resume.CoursesTimeStamp.nth(5)).toHaveText("Completed on September, 2023");
        await expect(resume.CoursesDescription.nth(5)).toContainText("I learned C# basics");
        await expect(resume.CoursesTitles.nth(5)).toHaveText("C# programming language");
    });

    await test.step("Check 7 Course - ISTQB Foundation Level", async () => {
        await expect(resume.CoursesTimeStamp.nth(6)).toHaveText("To be completed on 13.10.2023");
        await expect(resume.CoursesDescription.nth(6)).toContainText("This milestone is set as my next goal");
        await expect(resume.CoursesTitles.nth(6)).toHaveText("ISTQB Foundation Level");
    });

    await page.close();
});

/*
4_Resume.spec.ts
*/