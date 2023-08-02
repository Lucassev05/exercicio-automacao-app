class formsScreen {
  get #inputField() {
    return $("~text-input");
  }

  get #switcher() {
    return $("~switch");
  }

  get #dropDown() {
    return $(
      "//android.view.ViewGroup[@content-desc='Dropdown']/android.view.ViewGroup/android.widget.EditText"
    );
  }

  get #dropDownList() {
    return $(
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[4]"
    );
  }

  async typeOnInputField(text) {
    await this.#inputField.setValue(text);
  }

  async clickOnSwitcher(text) {
    await this.#switcher.click();
  }

  async clickOnDropDown() {
    await this.#dropDown.click();
  }

  async selectElementOnDropDown() {
    await this.#dropDownList.click();
  }
}

export default new formsScreen();
