import { expect, Locator, Page } from '@playwright/test';

export class Projects{

    readonly page: Page;
    readonly Title: Locator;
    readonly ProjectTile: Locator;
    readonly ProjectName: Locator;
    readonly ProjectDescription: Locator;
    readonly ProjectLink: Locator;
    readonly ProjectTags: Locator;
    readonly ProjectTileImg: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.Title = page.getByTestId('ProjectsTitle');
        this.ProjectTile = page.getByTestId("ProjectTile");
        this.ProjectName = this.ProjectTile.locator('[data-testid$="ProjectName"]');
        this.ProjectDescription = this.ProjectTile.locator('[data-testid$="ProjectDescription"]');
        this.ProjectLink = this.ProjectTile.locator('[data-testid$="ProjectLink"]');
        this.ProjectTileImg = this.ProjectTile.locator('[data-testid$="ProjectsTileImg"]');
        this.ProjectTags = this.ProjectTile.locator('[data-testid$="ProjectTags"] p');
    }
}