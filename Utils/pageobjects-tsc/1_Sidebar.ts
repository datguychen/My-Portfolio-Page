import { expect, Locator, Page } from '@playwright/test';

export class Sidebar {
    readonly page: Page;
    readonly ProfilePicture: Locator;
    readonly MyName: Locator;
    readonly HomeTab: Locator;
    readonly AboutMeTab: Locator;
    readonly ResumeTab: Locator;
    readonly ProjectsTab: Locator;
    readonly ContactTab: Locator;
    readonly GithubBtn: Locator;
    readonly LinkedinBtn: Locator;
    readonly Sidebar: Locator;

    constructor(page: Page) {

        this.page = page;
        this.Sidebar = page.getByTestId('Sidebar');
        this.ProfilePicture = page.getByTestId('SidebarPicture');
        this.MyName = page.getByTestId('SidebarMyName');
        this.HomeTab = page.getByTestId('HomeTab');
        this.AboutMeTab = page.getByTestId('AboutMeTab');
        this.ResumeTab = page.getByTestId('ResumeTab');
        this.ProjectsTab = page.getByTestId('ProjectsTab');
        this.ContactTab = page.getByTestId('ContactTab');
        this.GithubBtn = this.Sidebar.locator('[data-testid$="GitHubIcon"]');
        this.LinkedinBtn = this.Sidebar.locator('[data-testid$="LinkedInIcon"]');
    }
}