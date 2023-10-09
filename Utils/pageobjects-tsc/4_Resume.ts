import { expect, Locator, Page } from '@playwright/test';

export class Resume {

    readonly page: Page;
    readonly ResumeTitle: Locator;
    readonly ResumeCVBtn: Locator;
    readonly CoursesTitles: Locator;
    readonly CoursesTimeStamp: Locator;
    readonly CoursesDescription: Locator;
    readonly CoursesBtns: Locator;


    constructor(page: Page)
    {
        this.page = page
        this.ResumeTitle = page.getByTestId('ResumeTitle');
        this.ResumeCVBtn = page.locator('#resume a').last();
        this.CoursesTitles = page.locator("#resume h3");
        this.CoursesTimeStamp = page.locator("#resume time");
        this.CoursesDescription = page.locator("#resume p");
        this.CoursesBtns = page.locator("#resume li a");
    }
}