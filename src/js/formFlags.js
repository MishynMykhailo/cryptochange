// //

// const flags = {
//   ee: {
//     iso: "ee",
//     title: "Эстония",
//     countryCode: "+372",
//   },
//   lv: {
//     iso: "lv",
//     title: "Латвия",
//     countryCode: "+371",
//   },
//   lt: {
//     iso: "lt",
//     title: "Литва",
//     countryCode: "+370",
//   },
//   gb: {
//     iso: "gb",
//     title: "Великобритания",
//     countryCode: "+44",
//   },
// };
// class FormFunctional {
//   constructor() {
//     this.generateFlags();
//   }

//   generateFlags() {
//     const inputCountry = document.querySelector("#country");
//     // Создание обертки
//     const inputContainer = document.createElement("div");
//     const countryContainer = document.createElement("div");
//     const countrySelect = document.createElement("div");
//     const countryList = document.createElement("ul");
//     countryContainer.appendChild(countrySelect);
//     countryContainer.appendChild(countryList);
//     inputContainer.appendChild(countryContainer);
//     inputContainer.appendChild(inputCountry.cloneNode(true));
//     inputCountry.replaceWith(inputContainer);
//     // Создание списка флагов
//     // const flagList = document.querySelector(".js-form-flags__list");
//     // for (let flag in flags) {
//     //   const li = document.createElement("li");
//     //   const flagSpan = this.createSpan(
//     //     "span",
//     //     "js-form-flags__list-item__flag",
//     //     "",
//     //     ["js-form-flags__list-item__flag", flags[flag].iso.toLowerCase()]
//     //   );
//     //   const titleSpan = this.createSpan(
//     //     "span",
//     //     "js-form-flags__list-item__name",
//     //     flags[flag].title
//     //   );
//     //   const countryCodeSpan = this.createSpan(
//     //     "span",
//     //     "js-form-flags__list-item__countryCode",
//     //     flags[flag].countryCode
//     //   );
//     //   li.appendChild(flagSpan);
//     //   li.appendChild(titleSpan);
//     //   li.appendChild(countryCodeSpan);
//     //   flagList.appendChild(li);
//     // }
//   }
//   createSpan(tagName, className, textContent, classList = []) {
//     const span = document.createElement(tagName);
//     span.classList.add(className);
//     classList.forEach((cls) => span.classList.add(cls));
//     span.textContent = textContent;
//     return span;
//   }
//   addStyle() {
//     const head = document.querySelector("head");
//     const style = document.createElement("style");
//     style.textContent = `
//     .js-form-flags__list-item__flag.ee{
//       height: 13px;
//       background-position: -1467px 0px;
//     }
//     .js-form-flags__list-item__flag.lv{
//       height: 10px;
//       background-position: -3073px 0px;
//     }
//     .js-form-flags__list-item__flag.lt{
//       height: 12px;
//       background-position: -3029px 0px;
//     }
//     .js-form-flags__list-item__flag.gb{
//       height: 10px;
//       background-position: -1775px 0px;
//     }

//     `;
//   }
// }
// const formFlags = new FormFunctional();
// console.log("first");
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
    const listItem = event.target.closest(".custom__country-list-item");
    if (listItem) {
      this.flag = listItem.dataset.flag;
      this.countrySelect.className = `custom__country-list-item__flag ${this.flag}`;
      this.countryList.classList.remove("active");
      document.removeEventListener("click", this.handleDocumentClick);
    }
  };
}

const openDropDown = new OpenDropDown();
