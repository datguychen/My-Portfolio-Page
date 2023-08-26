import { expect, Locator, Page } from '@playwright/test';

export class GlobalFunctions
{
    readonly page: Page;
    readonly AddButton: Locator;
    readonly AddButtonElement: Locator;
    readonly PopupsText: Locator;
    readonly RightClickClusterDelete: Locator;
    readonly ElementProfilePic: Locator;
    readonly ProfileButton: Locator;
    readonly FollowingBtn: Locator;
    readonly FollowingModalUserFollowBtnState: Locator;
    readonly QRCodeWindow: Locator;
    readonly QRCodeWindowDone: Locator;
    readonly QRCodeWindowTitle: Locator;
    readonly UsernameField: Locator;
    readonly PasswordField: Locator;
    readonly ForgotButton: Locator;
    readonly LoginButton: Locator;
    readonly ElementGridTile2: Locator;
    readonly NSFWGridHoverEnableNSFW: Locator;
    readonly NSFWGridPill: Locator;
    readonly ShowNSFW: Locator;
    readonly ElementGridTile1: Locator;
    readonly FirstElementInView: Locator;
    readonly RightClickElementDelete: Locator;
    readonly ConfirmationModalConfirm: Locator;
    readonly FeaturedTab: Locator;
    readonly FollowingTab: Locator;
    readonly EveryoneTab: Locator;
    readonly NotificationsButton: Locator;
    readonly FirstNotification: Locator;
    readonly NotificationCells: Locator;
    readonly FirstNotificationCollabInvBtn: Locator;
    readonly ConfirmationModalCancel: Locator;
    readonly DropdownButton: Locator;
    readonly DropdownSettings: Locator;
    readonly PreferencesTab: Locator;
    readonly UpdateBtn: Locator;


    constructor(page: Page)
    {
        this.page = page;
        this.AddButton = page.locator(".css-o65ye5");
        this.AddButtonElement = page.getByTestId("GlobalAddBtn_Elements");
        this.FirstNotification = page.getByTestId("Notifications_Cell").nth(0);
        this.FirstNotificationCollabInvBtn = this.FirstNotification.getByTestId("Notifications_InviteBtn");
        this.NotificationCells = page.getByTestId("Notifications_Cell");
        this.NotificationsButton = page.getByTestId("TopNavBar_NotificationsBtn");
        this.ConfirmationModalCancel = page.getByTestId("ConfirmationDialog_Cancel");
        this.PopupsText = page.getByTestId("SnackBar_Text");
        this.RightClickClusterDelete = page.getByTestId("RightClickClusterMenu_Delete");
        this.ElementProfilePic = page.getByTestId("ElementTile_UserAvatar");
        this.ProfileButton = page.getByTestId("TopNavBar_ProfileBtn");
        this.FollowingBtn = page.getByTestId("OwnProfile_FollowingBtn");
        this.FollowingModalUserFollowBtnState = page.locator("[data-testid='FollowingDialog_FollowBtn'] span");
        this.QRCodeWindow = page.getByTestId("GetIOSAppDialog");
        this.QRCodeWindowDone = page.getByTestId("GetIOSAppDialog_DoneBtn");
        this.QRCodeWindowTitle = page.locator(".css-7g79i5");
        this.UsernameField = page.getByTestId("Login_Username");
        this.PasswordField = page.getByTestId("Login_Password");
        this.ForgotButton = page.getByTestId("Login_ForgotBtn");
        this.LoginButton = page.getByTestId("Login_SignInBtn");
        this.ElementGridTile2 = page.getByTestId("ElementTile");
        this.NSFWGridHoverEnableNSFW = page.getByTestId("NSFW_Enable");
        this.NSFWGridPill = page.getByTestId("NSFW_Pill");
        this.ElementGridTile1 = page.getByTestId('ElementTileLink__a');
        this.FirstElementInView = page.locator("div[style*='top: 0px; left: 0px']");
        this.RightClickElementDelete = page.getByTestId("RightClickElementMenu_Delete");
        this.ConfirmationModalConfirm = page.getByTestId("ConfirmationDialog_Confirm");
        this.FeaturedTab = page.locator(".css-1xkxi15");
        this.FollowingTab = page.locator(".css-tcust1").nth(0);
        this.EveryoneTab = page.locator(".css-tcust1").nth(1);
        this.DropdownButton = page.getByTestId("TopNavBar_DropdownMenu");
        this.DropdownSettings = page.getByTestId("TopNavBar_Dropdown_Settings");
        this.PreferencesTab = page.getByTestId("Settings_PreferencesTabBtn");
        this.ShowNSFW = page.locator(".css-1jfkaq0").nth(0);
        this.UpdateBtn = page.locator("[type$='submit']");
    }   


    //Function to unfollow all clusters on the profile
    async UnfollowAllClusters(page: Page): Promise<void> {
    const HomeNonEmpty = await this.FeaturedTab.isVisible();
    if (HomeNonEmpty) {
        await this.ProfileButton.click();
        await this.FollowingBtn.click();
        await this.FollowingModalUserFollowBtnState.nth(0).waitFor();
        let FollowingCount = await this.FollowingModalUserFollowBtnState.count();
        for (let i = 0; FollowingCount > 0; i++) {
            let FollowingState = await this.FollowingModalUserFollowBtnState.nth(i).textContent();
            if (FollowingState == "Following") {
                await this.FollowingModalUserFollowBtnState.nth(i).click();
                FollowingCount--;
            };
        };
        //Tutaj chciałbym żeby zmiany wprowadzone w funkcji miały czas na zapisanie się w chmurze
        await page.waitForLoadState("load");
        }
    }

    //Function to decline all collab invites
    async DeclineAllInvites(page: Page): Promise<void> {
        await page.goto("/library", { waitUntil: 'load' })
        await this.NotificationsButton.click();
        await delay(2500);
        let notifsCount = await page.$$eval(`[data-testid='Notifications_Cell']`, (divs) => divs.length);
        while (notifsCount>0) {
          await this.FirstNotification.waitFor({state:"visible"});
          await this.FirstNotificationCollabInvBtn.click();
          await this.ConfirmationModalCancel.click();
          notifsCount = notifsCount-1
          await delay(2000);
          await this.NotificationsButton.click();
        }
    };

    async CookiesTest(page: Page, username: string, password: string): Promise<void> {
        // Open the login page
        await page.goto("/", { waitUntil: 'load' });

        // Fill login page credentials
        await this.UsernameField.fill(username);
        await this.PasswordField.fill(password);
        await this.LoginButton.click();

        // Check if the + button is visible
        await this.AddButton.waitFor();
    }


    async NSFWTurnOFF(page: Page): Promise<void> {
        // Open the page with the login token injected to skip the login page and the QR code waiting time
        await page.goto("/elementviewcore/core-nsfw", { waitUntil: 'load' });
    
        // Verify if the element has NSFW pill
        await this.ElementGridTile2.waitFor();
        await this.ElementGridTile2.hover();
        const NSFWTurnedON = await this.NSFWGridHoverEnableNSFW.isVisible();
    
        // Turn off the NSFW Option
        if (!NSFWTurnedON) {
            await this.DropdownButton.click();
            await this.DropdownSettings.click();
            await this.PreferencesTab.click();
            await this.ShowNSFW.click();
            await this.UpdateBtn.click();
            await expect(this.PopupsText).toBeVisible();
        }
    
        await page.goto("/elementviewcore/core-nsfw", { waitUntil: 'load' });
        await page.reload({ waitUntil: 'load' });
        await expect(this.NSFWGridPill).toBeVisible();
    }
    

    async AccountElementsDelete(page: Page, EleNumber: number): Promise<void> {
        // Scroll down the page to load all elements and count them
        await page.mouse.wheel(0, 700);
        await page.waitForLoadState("load");
        await page.mouse.wheel(0, 700);
        await page.waitForLoadState("load");
        let ElementsNumber = await this.ElementGridTile1.count();
        await page.mouse.wheel(0, -1400);
    
        // Delete elements one by one
        for (let i = 0; ElementsNumber > EleNumber; i++) {
            await this.FirstElementInView.click({ button: "right" }); // "div[style*='top: 0px; left: 0px']" is a locator for the first element
            await this.RightClickElementDelete.click();
            await this.ConfirmationModalConfirm.click();
            ElementsNumber = ElementsNumber - 1;
            await this.PopupsText.nth(0).waitFor();
        }
    }
    

    async AccountClustersDelete(page: Page, ClusterName: string): Promise<void> {
        let ClusterCount = await page.getByText(ClusterName).count();
        let ClusterDelGrid = await page.getByText(ClusterName);
    
        while (ClusterCount > 0) {
            await ClusterDelGrid.nth(0).click({ button: "right" });
            await this.RightClickClusterDelete.click();
            await this.ConfirmationModalConfirm.click();
            ClusterCount--;
            await page.waitForLoadState("load");
        }
    
        let ClusterCountAfter = await page.getByText(ClusterName).count();
        await expect(ClusterCountAfter).toEqual(0);
        await page.waitForLoadState("networkidle");
    }
    

    async ElementChooseRandom(page: Page, ClickLocator: any) {
        // Create an array of random photos from the CosmosTestImages folder
        const randomPhotos: string[] = [
          "./Utils/CosmosTestImages/eye.jpg",
          "./Utils/CosmosTestImages/train.jpg",
          "./Utils/CosmosTestImages/trees.jpg",
          "./Utils/CosmosTestImages/woman.jpg",
          "./Utils/CosmosTestImages/photo.jpg",
        ];
      
        // Select a random photo from the array
        const randomPhoto = randomPhotos[Math.floor(Math.random() * randomPhotos.length)];
      
        // Click on the provided locator and upload the selected photo
        const fileChooserPromise = page.waitForEvent('filechooser');
        await ClickLocator.click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(randomPhoto);
      }
      

      async ElementUploadSingle(page: Page) 
      {
        // Click on the + button locator
        await this.AddButton.click();
      
        // Clicks on the Elements option
        await this.AddButtonElement.click();
      
        // locator with input type=file & upload a file from my PC storage
        await page.waitForLoadState('load');
        const handle = await page.$('input[type="file"]');
        await handle?.setInputFiles("./Utils/CosmosTestImages/photo.jpg");
      }
      

      async Upload101Elements(page: Page, ClickLocator: any) {
        // Create an array of 101 image file paths
        const HundredPhotos = Array.from({ length: 101 }, (_, i) => `./Utils/CosmosTestImages/100/${i + 1}.png`);
      
        // Click on the element specified by ClickLocator and upload the images
        const fileChooserPromise = page.waitForEvent('filechooser');
        await ClickLocator.click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(HundredPhotos);
      }
      

      async Upload5Elements(page: Page, ClickLocator: Locator): Promise<void> {
        // Create an array of 5 random photo paths from the CosmosTestImages folder
        const photos = Array.from({ length: 5 }, (_, i) => `./Utils/CosmosTestImages/100/${i + 1}.png`);
      
        // Click on the specified element and wait for the file chooser dialog to open
        const fileChooserPromise = page.waitForEvent('filechooser');
        await ClickLocator.click();
        const fileChooser = await fileChooserPromise;
      
        // Set the selected files in the file chooser dialog
        await fileChooser.setFiles(photos);
      }      
}

// A delay function to slow down few steps to avoid test crashes
function delay(time: number) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
}
