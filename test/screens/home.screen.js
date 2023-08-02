class HomeScreen {
  get #formsButton() {
    return $("~Forms");
  }

  async goToForms() {
    this.#formsButton.click();
  }
}

export default new HomeScreen();
