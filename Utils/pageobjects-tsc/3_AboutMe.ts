import { expect, Locator, Page } from '@playwright/test';


export class AboutMe{

    readonly page: Page;
    readonly Title: Locator;
    readonly MyName: Locator;
    readonly MyNameDiv: Locator;
    readonly MyDescription: Locator;
    readonly ComputerGif: Locator;
    readonly DownloadCVBtn: Locator;


    constructor(page: Page)
    {
        this.page = page;
        this.Title = page.getByTestId("AboutMeTitle");
        this.MyNameDiv = page.getByTestId("AboutMeName");
        this.MyName = this.MyNameDiv.locator("span");
        this.MyDescription = page.getByTestId("AboutMeDescription");
        this.ComputerGif = page.getByTestId("AboutMeAnimation");
        this.DownloadCVBtn = page.getByTestId("AboutMeCV");
    }
}