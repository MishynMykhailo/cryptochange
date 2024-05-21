class ValidateForm {
  constructor({
    formId,
    nameId,
    emailId,
    phoneId,
    cardId,
    countryId,
    giveId,
    giveCurrentCurrencyId,
    giveNetworkCurrencyId,
    receiveCurrentCurrencyId,
    errorMessage,
  }) {
    this.formId = formId;
    this.nameId = nameId;
    this.emailId = emailId;
    this.phoneId = phoneId;
    this.cardId = cardId;
    this.countryId = countryId;
    this.giveId = giveId;
    this.giveCurrentCurrencyId = giveCurrentCurrencyId;
    this.giveNetworkCurrencyId = giveNetworkCurrencyId;
    this.receiveCurrentCurrencyId = receiveCurrentCurrencyId;
    this.errorMessage = errorMessage;

    this.formSettings();
    this.handlerPhoneTag([this.phoneId, this.giveId, this.cardId]);
  }
  formSettings() {
    const formTag = document.getElementById(this.formId);

    formTag.addEventListener("submit", (formEvent) => {
      this.validateGiveMoney(formEvent) &&
        this.validateEmail(formEvent) &&
        this.validateName(formEvent) &&
        this.validatePhone(formEvent) &&
        this.validateGiveCurrentCurrency(formEvent) &&
        this.validateReceiveCurrentCurrency(formEvent);
    });
  }
  validateGiveMoney(formEvent) {
    const input = document.getElementById(this.giveId);
    if (input.value.trim().length <= 0) {
      formEvent.preventDefault();
      this.handlerMessage("Заполните сколько вы хотите обменять");
      return false;
    }
    this.handlerMessage("");
    return true;
  }
  validateEmail(formEvent) {
    const input = document.getElementById(this.emailId);
    if (input.value.trim().length <= 0) {
      formEvent.preventDefault();
      this.handlerMessage("Заполните почту");
      return false;
    }
    this.handlerMessage("");
    return true;
  }
  validateName(formEvent) {
    const input = document.getElementById(this.nameId);
    if (input.value.trim().length <= 0) {
      formEvent.preventDefault();
      this.handlerMessage("Заполните ФИО");
      return false;
    }
    this.handlerMessage("");
    return true;
  }
  validatePhone(formEvent) {
    const input = document.getElementById(this.phoneId);
    if (input.value.trim().length <= 0) {
      formEvent.preventDefault();
      this.handlerMessage("Заполните почту");
      return false;
    }
    this.handlerMessage("");
    return true;
  }

  validateGiveCurrentCurrency(formEvent) {
  
    const input = document.getElementById(this.giveCurrentCurrencyId);
    if (input.value.trim().length <= 0) {
      formEvent.preventDefault();
      this.handlerMessage("Выберите что хотите обменять");
      return false;
    }
    this.handlerMessage("");
    return true;
  }
 
  validateReceiveCurrentCurrency(formEvent) {
    const input = document.getElementById(this.receiveCurrentCurrencyId);
    if (input.value.trim().length <= 0) {
      formEvent.preventDefault();
      this.handlerMessage("Выберите что хотите получить при обмене");
      return false;
    }
    this.handlerMessage("");
    return true;
  }
  handlerMessage(textError) {
    const errorText = document.getElementById(this.errorMessage);
    errorText.textContent = textError;
  }
  // Не даем вводить текст в поля
  handlerPhoneTag(inputs) {
    for (let i = 0; i <= inputs.length - 1; i++) {
      const input = document.getElementById(inputs[i]);
      input.addEventListener("input", (event) => {
        const { target } = event;
        if (target.value.match(/[^+0-9]/g)) {
          target.value = target.value.replace(/[^+0-9]/g, "");
        }
      });
    }
  }
}
const validateForm = new ValidateForm({
  formId: "orderForm",
  nameId: "form__name",
  emailId: "form__email",
  phoneId: "form__tel",
  cardId: "form__card",
  countryId: "country",
  giveId: "form__give",
  giveCurrentCurrencyId: "giveCurrentCurrency",
  giveNetworkCurrencyId: "giveNetworkCurrency",
  receiveCurrentCurrencyId: "receiveCurrentCurrency",
  errorMessage: "form__error",
});
