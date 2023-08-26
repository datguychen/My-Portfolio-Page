import { expect, Locator, Page } from '@playwright/test';

export class Resume {

    readonly page: Page;
    readonly ResumeTitle: Locator;
    readonly CoursesTitle: Locator;
    readonly MySkillsTitle: Locator;
    readonly FirstCourse: Locator;
    readonly FirstCourseTitle: Locator;
    readonly FirstCourseCompleted: Locator;
    readonly FirstCourseDescription: Locator;
    readonly SecondCourse: Locator;
    readonly SecondCourseTitle: Locator;
    readonly SecondCourseCompleted: Locator;
    readonly SecondCourseDescription: Locator;
    readonly SecondCourseDownload: Locator;
    readonly ThirdCourse: Locator;
    readonly ThirdCourseTitle: Locator;
    readonly ThirdCourseCompleted: Locator;
    readonly ThirdCourseDescription: Locator;
    readonly SkillsDiv: Locator;
    readonly SkillsNameAndPercentage: Locator;
    readonly SkillsDownloadCV: Locator;
    readonly SkillsInfo: Locator;


    constructor(page: Page)
    {
        this.page = page
        this.ResumeTitle = page.getByTestId('ResumeTitle');
        this.CoursesTitle = page.getByTestId('CoursesTitle');
        this.MySkillsTitle = page.getByTestId('SkillsTitle');
        this.FirstCourse = page.getByTestId('Course1');
        this.FirstCourseTitle = this.FirstCourse.locator('h3');
        this.FirstCourseCompleted = this.FirstCourse.locator('time');
        this.FirstCourseDescription = this.FirstCourse.locator('p');
        this.SecondCourse = page.getByTestId('Course2');
        this.SecondCourseTitle = this.SecondCourse.locator('h3');
        this.SecondCourseCompleted = this.SecondCourse.locator('time');
        this.SecondCourseDescription = this.SecondCourse.locator('p');
        this.SecondCourseDownload = this.SecondCourse.locator('a');
        this.ThirdCourse = page.getByTestId('Course3');
        this.ThirdCourseTitle = this.ThirdCourse.locator('h3');
        this.ThirdCourseCompleted = this.ThirdCourse.locator('time');
        this.ThirdCourseDescription = this.ThirdCourse.locator('p');
        this.SkillsDiv = page.getByTestId('SkillsDiv');
        this.SkillsInfo = page.getByTestId('SkillsInfo');
        this.SkillsNameAndPercentage = this.SkillsInfo.getByTestId('SkillsName');
        this.SkillsDownloadCV = this.SkillsDiv.locator('a');
    }
}