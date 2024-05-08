// TRC20,BEP20,ERC20,SOL,POLYGON
const data = [
  {
    id: 305,
    name: "Tether",
    className: "TetherNew",
    type: 1,
    fromNotice:
      "Пожалуйста, убедитесь, что вывод производится в рамках сети TRC-20, в противном случае, средства не зачислятся на наш кошелек",
    currencies: [
      { id: 187, name: "TRC20", code: "USDT", network: "TRC20", inputs: [] },
      { id: 188, name: "BEP20", code: "USDT", network: "BEP20", inputs: [] },
      { id: 186, name: "ERC20", code: "USDT", network: "ERC20", inputs: [] },
      { id: 212, name: "SOL", code: "USDT", network: "SOL", inputs: [] },
      {
        id: 225,
        name: "POLYGON",
        code: "USDT",
        network: "POLYGON",
        inputs: [],
      },
    ],
  },
  {
    id: 8,
    name: "Bitcoin",
    className: "Bitcoin",
    type: 1,
    fromNotice: "Требуется два подтверждения от сети Bitcoin",
    currencies: [
      { id: 34, name: "BTC", code: "BTC", network: "BTC", inputs: [] },
      { id: 190, name: "BEP20", code: "BTC", network: "BEP20", inputs: [] },
    ],
  },
  {
    id: 20,
    name: "Litecoin",
    className: "Litecoin",
    type: 1,
    fromNotice: "Требуется два подтверждения от сети Litecoin",
    currencies: [
      { id: 36, name: "LTC", code: "LTC", network: null, inputs: [] },
    ],
  },
  {
    id: 46,
    name: "TRON",
    className: "Tron",
    type: 1,
    fromNotice: "Требуется 12 подтверждений от сети TRON",
    currencies: [
      { id: 49, name: "TRX", code: "TRX", network: null, inputs: [] },
    ],
  },
  {
    id: 24,
    name: "Monero",
    className: "Monero",
    type: 1,
    fromNotice: "Требуется 10 подтверждений от сети Monero.",
    currencies: [
      { id: 42, name: "XMR", code: "XMR", network: null, inputs: [] },
    ],
  },
  {
    id: 39,
    name: "Swedbank",
    className: "Swedbank",
    type: 0,
    fromNotice: null,
    currencies: [
      { id: 35, name: "EUR", code: "EUR", network: null, inputs: [] },
    ],
  },
  {
    id: 15,
    name: "Ethereum",
    className: "Ethereum",
    type: 1,
    fromNotice:
      "Для отправки средств используйте только сеть ERC-20, использование другой сети повлечет за собой потерю средств",
    currencies: [
      { id: 37, name: "ERC20", code: "ETH", network: "ERC20", inputs: [] },
      { id: 192, name: "BEP20", code: "ETH", network: "BEP20", inputs: [] },
    ],
  },
  {
    id: 159,
    name: "Solana",
    className: "Solana",
    type: 1,
    fromNotice:
      "Пожалуйста, убедитесь, что вывод производится в рамках сети SOL, в противном случае, средства не зачислятся на наш кошелек",
    currencies: [
      { id: 121, name: "SOL", code: "SOL", network: null, inputs: [] },
    ],
  },
  {
    id: 64,
    name: "Dogecoin",
    className: "Dogecoin",
    type: 1,
    fromNotice: "Требуется два подтверждения от сети Dogecoin",
    currencies: [
      { id: 54, name: "DOGE", code: "DOGE", network: null, inputs: [] },
    ],
  },
  {
    id: 58,
    name: "Capitalist",
    className: "Capitalist",
    type: 2,
    fromNotice: null,
    currencies: [
      { id: 10, name: "USD", code: "USD", network: null, inputs: [] },
      { id: 35, name: "RUB", code: "RUB", network: null, inputs: [] },
      { id: 11, name: "EUR", code: "EUR", network: null, inputs: [] },
    ],
  },
  {
    id: 27,
    name: "Payeer",
    className: "Payeer",
    type: 2,
    fromNotice: null,
    currencies: [
      { id: 10, name: "USD", code: "USD", network: null, inputs: [] },
      { id: 35, name: "RUB", code: "RUB", network: null, inputs: [] },
      { id: 11, name: "EUR", code: "EUR", network: null, inputs: [] },
    ],
  },
  {
    id: 11,
    name: "Dash",
    className: "Dash",
    type: 1,
    fromNotice: "Требуется два подтверждения от сети Dash",
    currencies: [
      { id: 38, name: "DASH", code: "DASH", network: null, inputs: [] },
    ],
  },
  {
    id: 6,
    name: "Binance Coin",
    className: "Binance",
    type: 1,
    fromNotice:
      "Пожалуйста, убедитесь, что вывод производится в рамках сети BEP-20, в противном случае, средства не зачислятся на наш кошелек",
    currencies: [
      { id: 45, name: "BEP20", code: "BNB", network: "BEP20", inputs: [] },
      { id: 193, name: "BEP2", code: "BNB", network: "BEP2", inputs: [] },
    ],
  },
  {
    id: 14,
    name: "Ethereum Classic",
    className: "Etc",
    type: 1,
    fromNotice:
      "Для отправки средств используйте только сеть ETC, использование другой сети повлечет за собой потерю средств",
    currencies: [
      { id: 52, name: "ETC", code: "ETC", network: null, inputs: [] },
    ],
  },
  {
    id: 45,
    name: "Luminor",
    className: "Luminor",
    type: 0,
    fromNotice: "Прием средств возможен на карты других банков.",
    currencies: [
      { id: 35, name: "EUR", code: "EUR", network: null, inputs: [] },
    ],
  },
  {
    id: 35,
    name: "Ripple",
    className: "Ripple",
    type: 1,
    fromNotice:
      "Средства, отправленные без нашего TAG, не зачислятся на наш счёт",
    currencies: [
      { id: 44, name: "XRP", code: "XRP", network: null, inputs: [] },
    ],
  },
  {
    id: 1,
    name: "Volet",
    className: "AdvCash",
    type: 2,
    fromNotice: null,
    currencies: [
      { id: 10, name: "USD", code: "USD", network: null, inputs: [] },
      { id: 11, name: "EUR", code: "EUR", network: null, inputs: [] },
      { id: 35, name: "RUB", code: "RUB", network: null, inputs: [] },
      { id: 57, name: "KZT", code: "KZT", network: null, inputs: [] },
    ],
  },
  {
    id: 9,
    name: "Bitcoin Cash",
    className: "BitcoinCash",
    type: 1,
    fromNotice: "Требуется два подтверждения от сети Bitcoin Cash",
    currencies: [
      { id: 40, name: "BCH", code: "BCH", network: null, inputs: [] },
    ],
  },
  {
    id: 3,
    name: "Citadele",
    className: "Citadele",
    type: 0,
    fromNotice: "Прием средств возможен на карты других банков.",
    currencies: [
      { id: 35, name: "EUR", code: "EUR", network: null, inputs: [] },
    ],
  },
  {
    id: 28,
    name: "Perfect Money",
    className: "PerfectMoney",
    type: 2,
    fromNotice: null,
    currencies: [
      { id: 10, name: "USD", code: "USD", network: null, inputs: [] },
      { id: 11, name: "EUR", code: "EUR", network: null, inputs: [] },
    ],
  },
  {
    id: 21,
    name: "Postbank",
    className: "Postbank",
    type: 0,
    fromNotice: null,
    currencies: [
      { id: 35, name: "EUR", code: "EUR", network: null, inputs: [] },
    ],
  },
  {
    id: 42,
    name: "Stellar",
    className: "Stellar",
    type: 1,
    fromNotice:
      "Средства, отправленные без нашего МЕМО, не зачислятся на наш счёт",
    currencies: [
      { id: 43, name: "XLM", code: "XLM", network: null, inputs: [] },
    ],
  },
  {
    id: 34,
    name: "Bank of Ireland",
    className: "bankofireland",
    type: 0,
    fromNotice: "Прием средств возможен на карты других банков.",
    currencies: [
      { id: 35, name: "EUR", code: "EUR", network: null, inputs: [] },
    ],
  },
  {
    id: 51,
    name: "Revoult",
    className: "revolut",
    type: 0,
    fromNotice: "Прием средств возможен на карты других банков.",
    currencies: [
      { id: 35, name: "EUR", code: "EUR", network: null, inputs: [] },
    ],
  },
  {
    id: 49,
    name: "Visa MasterCard",
    className: "VisaMasterCard",
    type: 0,
    fromNotice: null,
    currencies: [
      { id: 35, name: "RUB", code: "RUB", network: null, inputs: [] },
      { id: 81, name: "CAD", code: "CAD", network: null, inputs: [] },
      { id: 82, name: "DKK", code: "DKK", network: null, inputs: [] },
      { id: 84, name: "NOK", code: "NOK", network: null, inputs: [] },
      { id: 83, name: "HUF", code: "HUF", network: null, inputs: [] },
      { id: 78, name: "RON", code: "RON", network: null, inputs: [] },
      { id: 88, name: "CZK", code: "CZK", network: null, inputs: [] },
      { id: 92, name: "BGN", code: "BGN", network: null, inputs: [] },
      { id: 85, name: "CHF", code: "CHF", network: null, inputs: [] },
      { id: 87, name: "NZD", code: "NZD", network: null, inputs: [] },
      { id: 10, name: "USD", code: "USD", network: null, inputs: [] },
      { id: 11, name: "EUR", code: "EUR", network: null, inputs: [] },
      { id: 63, name: "INR", code: "INR", network: null, inputs: [] },
      { id: 101, name: "KRW", code: "KRW", network: null, inputs: [] },
      { id: 93, name: "BRL", code: "BRL", network: null, inputs: [] },
      { id: 80, name: "AUD", code: "AUD", network: null, inputs: [] },
      { id: 99, name: "HKD", code: "HKD", network: null, inputs: [] },
      { id: 109, name: "SGD", code: "SGD", network: null, inputs: [] },
      { id: 113, name: "VND", code: "VND", network: null, inputs: [] },
      { id: 91, name: "AZN", code: "AZN", network: null, inputs: [] },
      { id: 57, name: "KZT", code: "KZT", network: null, inputs: [] },
      { id: 59, name: "GBP", code: "GBP", network: null, inputs: [] },
      { id: 62, name: "PLN", code: "PLN", network: null, inputs: [] },
      { id: 65, name: "SEK", code: "SEK", network: null, inputs: [] },
      { id: 58, name: "MDL", code: "MDL", network: null, inputs: [] },
      { id: 183, name: "BYN", code: "BYN", network: null, inputs: [] },
      { id: 184, name: "AMD", code: "AMD", network: null, inputs: [] },
    ],
  },
  {
    id: 142,
    name: "Binance USD",
    className: "BinanceUsd",
    type: 1,
    fromNotice:
      " Пожалуйста, убедитесь, что вывод производится в рамках сети BEP-20, в противном случае, средства не зачислятся на наш кошелек",
    currencies: [
      { id: 74, name: "BEP20", code: "BUSD", network: "BEP20", inputs: [] },
    ],
  },
  {
    id: 84,
    name: "USD Coin",
    className: "UsdCoin",
    type: 1,
    fromNotice:
      "Для отправки средств используйте только сеть ERC-20, использование другой сети повлечет за собой потерю средств",
    currencies: [
      { id: 66, name: "ERC20", code: "USDC", network: "ERC20", inputs: [] },
      { id: 198, name: "TRC20", code: "USDC", network: "TRC20", inputs: [] },
      { id: 197, name: "BEP20", code: "USDC", network: "BEP20", inputs: [] },
    ],
  },
  {
    id: 157,
    name: "Shiba Inu",
    className: "ShibaInu",
    type: 1,
    fromNotice:
      "Пожалуйста, убедитесь, что вывод производится в рамках сети ERC-20, в противном случае, средства не зачислятся на наш кошелек",
    currencies: [
      { id: 120, name: "ERC20", code: "SHIB", network: "ERC20", inputs: [] },
      { id: 196, name: "BEP20", code: "SHIB", network: "BEP20", inputs: [] },
    ],
  },
  {
    id: 297,
    name: "Polygon",
    className: "Polygon",
    type: 1,
    fromNotice:
      "Пожалуйста, убедитесь, что вывод производится в рамках сети Polygon, в противном случае, средства не зачислятся на наш кошелек",
    currencies: [
      { id: 185, name: "MATIC", code: "MATIC", network: null, inputs: [] },
    ],
  },
  {
    id: 32,
    name: "Paysera",
    className: "Paysera",
    type: 0,
    fromNotice: "Прием средств возможен на карты других банков.",
    currencies: [
      { id: 35, name: "EUR", code: "EUR", network: null, inputs: [] },
    ],
  },
  {
    id: 55,
    name: "Zcash",
    className: "Zcash",
    type: 1,
    fromNotice: "Требуется два подтверждения от сети Zcash",
    currencies: [
      { id: 39, name: "ZEC", code: "ZEC", network: null, inputs: [] },
    ],
  },
  {
    id: 146,
    name: "Dai",
    className: "Dai",
    type: 1,
    fromNotice:
      "Для отправки средств используйте только сеть ERC-20, использование другой сети повлечет за собой потерю средств",
    currencies: [
      { id: 115, name: "ERC20", code: "DAI", network: "ERC20", inputs: [] },
      { id: 207, name: "BEP20", code: "DAI", network: "BEP20", inputs: [] },
    ],
  },
  {
    id: 148,
    name: "Polkadot",
    className: "Polkadot",
    type: 1,
    fromNotice:
      "Для отправки средств используйте только сеть DOT, использование другой сети повлечет за собой потерю средств",
    currencies: [
      { id: 116, name: "DOT", code: "DOT", network: null, inputs: [] },
    ],
  },
  {
    id: 143,
    name: "Cosmos",
    className: "Cosmos",
    type: 1,
    fromNotice:
      "Для отправки средств используйте только сеть ATOM, использование другой сети повлечет за собой потерю средств. ",
    currencies: [
      { id: 76, name: "ATOM", code: "ATOM", network: null, inputs: [] },
    ],
  },
  {
    id: 80,
    name: "Dukascopy",
    className: "dukascopy",
    type: 0,
    fromNotice: "Прием средств возможен на карты других банков.",
    currencies: [
      { id: 35, name: "EUR", code: "EUR", network: null, inputs: [] },
    ],
  },
  {
    id: 5,
    name: "Moldindcon Bank",
    className: "Moldindconbank",
    type: 0,
    fromNotice: "Прием средств возможен на карты других банков.",
    currencies: [
      { id: 35, name: "EUR", code: "EUR", network: null, inputs: [] },
    ],
  },
  {
    id: 26,
    name: "LHV",
    className: "Lhv",
    type: 0,
    fromNotice: "Прием средств возможен на карты других банков.",
    currencies: [
      { id: 35, name: "EUR", code: "EUR", network: null, inputs: [] },
    ],
  },
  {
    id: 59,
    name: "Unicredit Bank",
    className: "unicreditbank",
    type: 0,
    fromNotice: "Прием средств возможен на карты других банков.",
    currencies: [
      { id: 35, name: "EUR", code: "EUR", network: null, inputs: [] },
    ],
  },
  {
    id: 61,
    name: "ZEN",
    className: "Zen",
    type: 0,
    fromNotice: "Прием средств возможен на карты других банков.",
    currencies: [
      { id: 35, name: "EUR", code: "EUR", network: null, inputs: [] },
    ],
  },
  {
    id: 30,
    name: "Barclays",
    className: "barclays",
    type: 0,
    fromNotice: "Прием средств возможен на карты других банков.",
    currencies: [
      { id: 35, name: "EUR", code: "EUR", network: null, inputs: [] },
    ],
  },

  {
    id: 484,
    name: "SEPA",
    className: "Sepa",
    type: 0,
    fromNotice: null,
    currencies: [
      { id: 11, name: "EUR", code: "EUR", network: null, inputs: [] },
    ],
  },
  {
    id: 495,
    name: "Euro Tether",
    className: "TetherEuro",
    type: 1,
    fromNotice:
      "Для отправки средств используйте только сеть ERC-20, использование другой сети повлечет за собой потерю средств",
    currencies: [
      { id: 226, name: "ERC20", code: "EURT", network: "ERC20", inputs: [] },
    ],
  },
];
// 0 - банки,  1 - крипта, 2 - платежная система
// const receiveList = document.getElementById("receive-list");
class CryptoList {
  constructor(data, idGiveElem, idReceiveElem) {
    this.data = data;
    this.giveArray = [];
    this.typeGiveArray = null;
    this.receiveArray = [];
    this.typeReceiveArray = null;
    this.searchGiveInput = "";
    this.searchReceiveInput = "";
    this.listGiveElem = document.getElementById(idGiveElem);
    this.listReceiveElem = document.getElementById(idReceiveElem);
    this.renderItems();
  }

  createItem({ classLi, classImg, classText }, itemData) {
    const li = document.createElement("li");
    li.setAttribute("data-type", itemData.type);
    li.classList.add(classLi);

    const img = document.createElement("img");
    img.classList.add(classImg);
    img.src = `./images/${itemData.className.toLowerCase()}.svg`;
    img.alt = itemData.className;

    const itemName = document.createElement("p");
    itemName.classList.add(classText);
    itemName.textContent = itemData.name;

    li.appendChild(img);
    li.appendChild(itemName);

    // Создаем список сетей для переводов, если есть данные
    if (itemData.currencies && itemData.currencies.length > 0) {
      const networkList = document.createElement("ul");
      networkList.classList.add("network__list");

      for (const crypto of itemData.currencies) {
        const networkName = crypto.network;
        if (networkName !== null && networkName !== undefined) {
          const networkItem = document.createElement("li");
          networkItem.classList.add("network__list-item");
          networkItem.textContent = networkName;
          networkList.appendChild(networkItem);
        }
      }

      // Добавляем networkList к li только если он не пустой
      if (networkList.childElementCount > 0) {
        li.appendChild(networkList);
      }
    }

    return li;
  }

  // Создает элементы списка для каждого элемента данных и добавляет их в соответствующие списки.
  renderItems() {
    this.giveArray = [];
    this.receiveArray = [];
    this.data.forEach((item) => {
      const newItem = this.createItem(
        {
          classLi: "give-currency__block-list__item",
          classImg: "give-currency__block-list__item-img",
          classText: "give-currency__block-list__item-text",
        },
        item
      );
      this.giveArray.push(newItem);
      this.listGiveElem.appendChild(newItem);

      const newItem2 = this.createItem(
        {
          classLi: "receive-currency__block-list__item",
          classImg: "receive-currency__block-list__item-img",
          classText: "receive-currency__block-list__item-text",
        },
        item
      );
      this.receiveArray.push(newItem2);
      this.listReceiveElem.appendChild(newItem2);
    });
  }
  // Отображает элементы, которые соответствуют условиям фильтрации, и скрывает остальные.
  filterAndSearchItems(
    typeArray,
    searchString,
    listElem,
    errorMessage,
    textFilter
  ) {
    const listItems = listElem.querySelectorAll("li");
    const notFoundMessage = document.getElementById(errorMessage);
    listItems.forEach((item) => {
      const itemType = item.getAttribute("data-type");
      const itemNameElement = item.querySelector(`.${textFilter}`);

      const itemName = itemNameElement
        ? itemNameElement.textContent.toLowerCase()
        : "";
      const typeMatch = typeArray === null || typeArray === Number(itemType);
      const nameMatch = itemName.includes(searchString);

      if (typeMatch && nameMatch) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
    let foundItems = false;
    listItems.forEach((item) => {
      if (item.style.display !== "none") {
        foundItems = true;
      }
    });

    if (!foundItems) {
      notFoundMessage.style.display = "block";
    } else {
      notFoundMessage.style.display = "none";
    }
  }
  // Добавляет обработчики событий для фильтрации и поиска элементов в списках.
  handlerFilter({
    idGiveFilter,
    idReceiveFilter,
    idGiveSearchFilter,
    idReceiveSearchFilter,
  }) {
    const giveFilter = document.getElementById(idGiveFilter);
    const receiveFilter = document.getElementById(idReceiveFilter);
    const giveSearchFilter = document.getElementById(idGiveSearchFilter);
    const receiveSearchFilter = document.getElementById(idReceiveSearchFilter);

    giveFilter.addEventListener("click", (e) => {
      const currentTargetElem = e.currentTarget;
      const targetElem = e.target;
      const childrenLi = currentTargetElem.children;
      for (let i = 0; i < childrenLi.length; i++) {
        childrenLi[i].classList.remove("active");
      }
      e.target.classList.add("active");
      const id = targetElem.dataset.id;
      switch (id) {
        case "all":
          this.typeGiveArray = null;
          break;
        case "bank":
          this.typeGiveArray = 0;
          break;
        case "crypto":
          this.typeGiveArray = 1;
          break;
        case "ps":
          this.typeGiveArray = 2;
          break;
        default:
          return;
      }
      this.filterAndSearchItems(
        this.typeGiveArray,
        this.searchGiveInput,
        this.listGiveElem,
        "not-found-message-give",
        "give-currency__block-list__item-text"
      );
    });

    receiveFilter.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      switch (id) {
        case "all":
          this.typeReceiveArray = null;
          break;
        case "bank":
          this.typeReceiveArray = 0;
          break;
        case "crypto":
          this.typeReceiveArray = 1;
          break;
        case "ps":
          this.typeReceiveArray = 2;
          break;
        default:
          return;
      }
      this.filterAndSearchItems(
        this.typeReceiveArray,
        this.searchReceiveInput,
        this.listReceiveElem,
        "not-found-message-receive",
        "receive-currency__block-list__item-text"
      );
    });

    giveSearchFilter.addEventListener("input", (e) => {
      this.searchGiveInput = e.target.value.toLowerCase();
      this.filterAndSearchItems(
        this.typeGiveArray,
        this.searchGiveInput,
        this.listGiveElem,
        "not-found-message-give",
        "give-currency__block-list__item-text"
      );
    });

    receiveSearchFilter.addEventListener("input", (e) => {
      this.searchReceiveInput = e.target.value.toLowerCase();
      this.filterAndSearchItems(
        this.typeReceiveArray,
        this.searchReceiveInput,
        this.listReceiveElem,
        "not-found-message-receive",
        "receive-currency__block-list__item-text"
      );
    });
  }
}

const cryptoList = new CryptoList(data, "give-list", "receive-list");

cryptoList.handlerFilter({
  idGiveFilter: "give-filter",
  idReceiveFilter: "receive-filter",
  idGiveSearchFilter: "give-search-filter",
  idReceiveSearchFilter: "receive-search-filter",
});

// Выбираем нужный нам банк и крипту
class ItemsChooise {
  constructor(idGiveElem, idReceiveElem) {
    this.currentChoiceGive = {};
    this.currentChoiceReceive = {};
    this.listGiveElem = document.getElementById(idGiveElem);
    this.listReceiveElem = document.getElementById(idReceiveElem);
    this.listenerList();
  }

  listenerList() {
    if (this.listGiveElem && this.listReceiveElem) {
      this.listGiveElem.addEventListener("click", (e) => {
        const listItem = e.target.closest("li");
        if (
          listItem &&
          listItem.classList.contains("give-currency__block-list__item")
        ) {
          const imgElement = listItem.querySelector("img").src;
          const pElement = listItem.querySelector("p").textContent;
          this.currentChoiceGive = { img: imgElement, text: pElement };
          this.changeExchange(
            "give-icon-header",
            "exchange-currency__block-calculator__give-header__icon-img",
            "exchange-currency__block-calculator__give-header__icon-text",
            this.currentChoiceGive
          );
        }
      });

      this.listReceiveElem.addEventListener("click", (e) => {
        const listItem = e.target.closest("li");

        if (
          listItem &&
          listItem.classList.contains("receive-currency__block-list__item")
        ) {
          const imgElement = listItem.querySelector("img").src;
          const pElement = listItem.querySelector("p").textContent;
          this.currentChoiceReceive = { img: imgElement, text: pElement };
          this.changeExchange(
            "receive-icon-header",
            "exchange-currency__block-calculator__receive-header__icon-img",
            "exchange-currency__block-calculator__receive-header__icon-text",
            this.currentChoiceReceive
          );
        }
      });
    }
  }

  changeExchange(IdHeaderIcon, classNameImg, classNameText, choice) {
    const container = document.getElementById(IdHeaderIcon);
    container.textContent = "";
    const image = document.createElement("img");
    image.src = choice.img;
    image.classList.add(classNameImg);
    const text = document.createElement("p");
    text.classList.add(classNameText);
    text.textContent = choice.text;

    container.appendChild(image);
    container.appendChild(text);
  }
}

const clickList = new ItemsChooise("give-list", "receive-list");
// ФЛАГИ

const flags = {
  ee: {
    iso: "ee",
    title: "Эстония",
    countryCode: "+372",
  },
  lv: {
    iso: "lv",
    title: "Латвия",
    countryCode: "+371",
  },
  lt: {
    iso: "lt",
    title: "Литва",
    countryCode: "+370",
  },
  gb: {
    iso: "gb",
    title: "Великобритания",
    countryCode: "+44",
  },
};
class FormFunctional {
  constructor() {
    this.generateFlags();
  }
  generateFlags() {
    const flagList = document.querySelector(".js-form-flags__list");
    for (let flag in flags) {
      const li = document.createElement("li");
      const flagSpan = this.createSpan(
        "span",
        "js-form-flags__list-item__flag",
        "",
        ["js-form-flags__list-item__flag", flags[flag].iso.toLowerCase()]
      );
      const titleSpan = this.createSpan(
        "span",
        "js-form-flags__list-item__name",
        flags[flag].title
      );
      const countryCodeSpan = this.createSpan(
        "span",
        "js-form-flags__list-item__countryCode",
        flags[flag].countryCode
      );
      li.appendChild(flagSpan);
      li.appendChild(titleSpan);
      li.appendChild(countryCodeSpan);
      flagList.appendChild(li);
    }
  }
  createSpan(tagName, className, textContent, classList = []) {
    const span = document.createElement(tagName);
    span.classList.add(className);
    classList.forEach((cls) => span.classList.add(cls));
    span.textContent = textContent;
    return span;
  }
  addStyle() {
    const head = document.querySelector("head");
    const style = document.createElement("style");
    style.textContent = `
    .js-form-flags__list-item__flag.ee{
      height: 13px;
      background-position: -1467px 0px;
    }
    .js-form-flags__list-item__flag.lv{
      height: 10px;
      background-position: -3073px 0px;
    }
    .js-form-flags__list-item__flag.lt{
      height: 12px;
      background-position: -3029px 0px;
    }
    .js-form-flags__list-item__flag.gb{
      height: 10px;
      background-position: -1775px 0px;
    }
 
    `;
  }
}
const formFlags = new FormFunctional();
