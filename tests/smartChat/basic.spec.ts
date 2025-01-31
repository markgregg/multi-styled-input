import { expect } from "@playwright/test";
import { Given, Scenario, Then } from "../common/ghkerkin";

Scenario(
  `All icons are shown when enabled`,
  async ({
    smartInputPage: {
      filterBar,
      use,
    },
  }) => {
    await Given('the SmartFilter test page is shown', async () => {
      await use('');
    });

    await Then('the Smart Filter mathces valid screenshot', async () => {
      await expect(filterBar).toHaveScreenshot(`icons-shown.png`);
    });
  }
);
