import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

// Given("user is on the enrollment page", async function () {
//   await startApplicationPage.login();
//   await expect(page).toHaveURL(productInfo.enrollmentPageUrl);
// });

Then("the program start date is displayed", async function () {
  await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then("the refund date is displayed", async function () {
  await expect(startApplicationPage.refundEndDate).toBeVisible();
});

Then("the program start date is correct", async function () {
  const ACTUAL_START_DATE =
    await startApplicationPage.programStartDate.innerText();
  console.log("Actual Start Date:", ACTUAL_START_DATE);
  console.log("Expected Start Date:", productInfo.startDate);
  // console.log("Expected upfront price:", productInfo[0].upfrontPrice);
  // console.log("Expected upfront discount:", productInfo[0].upfrontDiscount);
  await expect(ACTUAL_START_DATE).toBe(productInfo.startDate);
});

Then("the refund date is correct", async function () {
  const ACTUAL_REFUND_DATE =
    await startApplicationPage.refundEndDate.innerText();
  console.log("Actual Refund Date:", ACTUAL_REFUND_DATE);
  console.log("Expected Refund Date:", productInfo.refundDate);
  await expect(ACTUAL_REFUND_DATE).toBe(productInfo.refundDate);
});
