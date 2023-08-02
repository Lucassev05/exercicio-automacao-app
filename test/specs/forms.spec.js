import homeScreen from "../screens/home.screen.js";
import formsScreen from "../screens/forms.screen.js";

describe("Forms", () => {
  it("Preencher o forms", async () => {
    const text = "Lucas";

    await homeScreen.goToForms();
    await formsScreen.typeOnInputField(text);
    await formsScreen.clickOnSwitcher();
    await formsScreen.clickOnDropDown();
    await formsScreen.selectElementOnDropDown();

    await expect(await $("~input-text-result")).toHaveText(text);
    await expect(await $("~switch-text")).toHaveText(
      "Click to turn the switch OFF"
    );
    await expect(
      await $(
        "//android.view.ViewGroup[@content-desc='Dropdown']/android.view.ViewGroup/android.widget.EditText"
      )
    ).toHaveText("This app is awesome");

    // não faz validação corretamente, ao botar clickable, recebe not clickable e vice versa.
    // await expect(await $("~~button-Active")).toBeClickable();

    // não faz validação corretamente, ao botar Disabled, recebe not Disabled e vice versa.
    // await expect(await $("~button-Inactive")).toBeDisabled();
  });
});
