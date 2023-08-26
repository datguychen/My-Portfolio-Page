import { expect, Locator, Page } from '@playwright/test';

export class Contact {

    readonly page: Page;
    readonly ContactDiv: Locator;
    readonly GithubBtn: Locator;
    readonly LinkedinBtn: Locator;
    readonly Animation: Locator;
    readonly FollowMe: Locator;


    constructor(page: Page)
    {
        this.page = page;
        this.ContactDiv = page.getByTestId("ContactDiv");
        this.GithubBtn = this.ContactDiv.locator('[data-testid$="GitHubIcon"]');
        this.LinkedinBtn = this.ContactDiv.locator('[data-testid$="LinkedInIcon"]');
        this.Animation = page.getByTestId("ContactAnimation");
        this.FollowMe = page.getByTestId("FollowMeTitle");
    }

}