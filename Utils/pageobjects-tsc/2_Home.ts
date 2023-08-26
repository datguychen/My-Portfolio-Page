import { expect, Locator, Page } from '@playwright/test';

export class Home{
    
    readonly page: Page;
    readonly InfoMessage: Locator;
    readonly WelcomeTitle: Locator;
    readonly TypeWriterText: Locator;
    readonly ContactMeBtn: Locator;
    readonly ScrollDownArrow: Locator;


    constructor(page: Page)
    {
        this.page = page;
        this.InfoMessage = page.getByTestId('HomeInfo');
        this.WelcomeTitle = page.getByTestId('HomeWelcome');
        this.TypeWriterText = page.getByTestId('typewriter-wrapper');
        this.ContactMeBtn = page.getByTestId("HomeContactBtn");
        this.ScrollDownArrow = page.getByTestId("HomeScrollArrow");

    }
}