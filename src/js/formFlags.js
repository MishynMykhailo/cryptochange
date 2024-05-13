// //

class OpenDropDown {
  constructor() {
    const formElement = document.getElementById("orderForm");
    this.countryList = formElement.querySelector(".custom__country-list");
    this.countrySelect = formElement.querySelector(
      ".custom__country-select .custom__country-list-item__flag"
    );
    const arrowSelect = formElement.querySelector(
      ".custom__country-select .custom__country-arrow"
    );

    this.countrySelect.addEventListener("click", this.toggleCountryList);
    arrowSelect.addEventListener("click", this.toggleCountryList);
    this.countryList.addEventListener("click", this.handleListItemClick);
    arrowSelect.addEventListener("click", this.handleListItemClick);

    document.addEventListener("click", this.handleDocumentClick);
  }

  handleDocumentClick = (event) => {
    const target = event.target;
    const dropdown = document.querySelector(".custom__country-dropdown");

    if (
      !dropdown.contains(target) &&
      !target.classList.contains("custom__country-list-item__flag")
    ) {
      this.countryList.classList.remove("active");
      document.removeEventListener("click", this.handleDocumentClick);
    }
  };

  toggleCountryList = (event) => {
    const { countryList } = this;
    if (
      event.target.classList.contains("custom__country-list-item__flag") ||
      event.target.classList.contains("custom__country-arrow")
    ) {
      countryList.classList.toggle("active");

      if (countryList.classList.contains("active")) {
        document.addEventListener("click", this.handleDocumentClick);
      } else {
        document.removeEventListener("click", this.handleDocumentClick);
      }
    }
  };

  handleListItemClick = (event) => {
    const countryInput = document.querySelector(".custom__country-input");
    console.log(countryInput);
    const listItem = event.target.closest(".custom__country-list-item");
    if (listItem) {
      this.flag = listItem.dataset.flag;
      countryInput.value = listItem.textContent.trim();
      this.countrySelect.className = `custom__country-list-item__flag ${this.flag}`;
      this.countryList.classList.remove("active");
      document.removeEventListener("click", this.handleDocumentClick);
    }
  };
}

class FormValidation {
  constructor() {
    this.form = document.getElementById("orderForm");
  }
  submitForm() {
    this.form.addEventListener("submit", (e) => {
      console.log('hi')
      e.preventDefault();
    });
  }
}

const openDropDown = new OpenDropDown();

const formValidation = new FormValidation();
