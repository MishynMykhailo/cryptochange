// TRC20,BEP20,ERC20,SOL,POLYGON
const data = [
  {
    id: 21,
    name: "Наличные",
    className: "cash",
    type: 0,
    fromNotice: null,
    currencies: [
      { id: 10, name: "EUR", code: "EUR", network: "EUR", inputs: [] },
      { id: 35, name: "USD", code: "USD", network: "USD", inputs: [] },
      { id: 35, name: "£", code: "£", network: "£", inputs: [] },
    ],
  },
  {
    id: 22,
    name: "BNB",
    className: "bnb",
    type: 0,
    fromNotice: null,
    currencies: [
    ],
  },
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
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
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
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
    ],
  },
  {
    id: 27,
    name: "Payeer",
    className: "Payeer",
    type: 2,
    fromNotice: null,
    currencies: [
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
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
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
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
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
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
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
    ],
  },
  {
    id: 28,
    name: "Perfect Money",
    className: "PerfectMoney",
    type: 2,
    fromNotice: null,
    currencies: [
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
    ],
  },
  {
    id: 21,
    name: "Postbank",
    className: "Postbank",
    type: 0,
    fromNotice: null,
    currencies: [
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
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
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
    ],
  },
  {
    id: 51,
    name: "Revoult",
    className: "revolut",
    type: 0,
    fromNotice: "Прием средств возможен на карты других банков.",
    currencies: [
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
    ],
  },
  {
    id: 49,
    name: "Visa MasterCard",
    className: "VisaMasterCard",
    type: 0,
    fromNotice: null,
    currencies: [
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
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
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
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
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
    ],
  },
  {
    id: 5,
    name: "Moldindcon Bank",
    className: "Moldindconbank",
    type: 0,
    fromNotice: "Прием средств возможен на карты других банков.",
    currencies: [
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
    ],
  },
  {
    id: 26,
    name: "LHV",
    className: "Lhv",
    type: 0,
    fromNotice: "Прием средств возможен на карты других банков.",
    currencies: [
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
    ],
  },
  {
    id: 59,
    name: "Unicredit Bank",
    className: "unicreditbank",
    type: 0,
    fromNotice: "Прием средств возможен на карты других банков.",
    currencies: [
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
    ],
  },
  {
    id: 61,
    name: "ZEN",
    className: "Zen",
    type: 0,
    fromNotice: "Прием средств возможен на карты других банков.",
    currencies: [
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
    ],
  },
  {
    id: 30,
    name: "Barclays",
    className: "barclays",
    type: 0,
    fromNotice: "Прием средств возможен на карты других банков.",
    currencies: [
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
    ],
  },

  {
    id: 484,
    name: "SEPA",
    className: "Sepa",
    type: 0,
    fromNotice: null,
    currencies: [
      { id: 10, name: "EE", code: "EE", network: "EE", inputs: [] },
      { id: 35, name: "LV", code: "LV", network: "LV", inputs: [] },
      { id: 11, name: "LT", code: "LT", network: "LT", inputs: [] },
      { id: 11, name: "GB", code: "GB", network: "GB", inputs: [] },
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
    const listItems = Array.from(listElem.children).filter(
      (child) => child.tagName.toLowerCase() === "li"
    );
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
        const listItem = e.target.closest(".give-currency__block-list__item");

        if (listItem) {
          const networkList = listItem.querySelector(".network__list");

          if (listItem.classList.contains("give-currency__block-list__item")) {
            let networkChoice = null;
            if (
              networkList &&
              e.target !== e.target.closest(".network__list-item")
            ) {
              const children = networkList.children;
              if (children.length > 0) {
                networkChoice = children[0].textContent;
              }
            } else {
              const networkCurrent = e.target.closest(".network__list-item");
              if (networkCurrent) {
                networkChoice = networkCurrent.textContent;
              }
            }

            const imgElement = listItem.querySelector("img");
            const pElement = listItem.querySelector("p");
            if (imgElement && pElement) {
              this.currentChoiceGive = {
                img: imgElement.src,
                text: pElement.textContent,
                networkChoice,
              };
              this.changeExchange(
                "give-icon-header",
                "exchange-currency__block-calculator__give-header__icon-img",
                "exchange-currency__block-calculator__give-header__icon-text",
                "exchange-currency__give-input-currentCurrency",
                "exchange-currency__give-input-currentNetwork",
                "exchange-currency__block-calculator__give-field__input-network",
                this.currentChoiceGive
              );
            }
          }
        }
      });

      this.listReceiveElem.addEventListener("click", (e) => {
        const listItem = e.target.closest(
          ".receive-currency__block-list__item"
        );

        if (
          listItem &&
          listItem.classList.contains("receive-currency__block-list__item")
        ) {
          const imgElement = listItem.querySelector("img");
          const pElement = listItem.querySelector("p");
          if (imgElement && pElement) {
            this.currentChoiceReceive = {
              img: imgElement.src,
              text: pElement.textContent,
            };
            this.changeExchange(
              "receive-icon-header",
              "exchange-currency__block-calculator__receive-header__icon-img",
              "exchange-currency__block-calculator__receive-header__icon-text",
              "exchange-currency__receive-input-currentCurrency",
              "exchange-currency__receive-input-currentNetwork",
              "",
              this.currentChoiceReceive
            );
          }
        }
      });
    }
  }

  changeExchange(
    IdHeaderIcon,
    classNameImg,
    classNameText,
    classCurrentCrypto,
    classCurrenyNetwork,
    classNameNetwork,
    choice
  ) {
    // container.textContent = "";
    const img = document.getElementsByClassName(classNameImg)[0];
    img.src = choice.img;
    const text = document.getElementsByClassName(classNameText)[0];
    text.textContent = choice.text;
    const inputCrypto = document.getElementsByClassName(classCurrentCrypto)[0];
    inputCrypto.value = choice.text;
    inputCrypto.name = "currentCurrency";
    const inputNetwork =
      document.getElementsByClassName(classCurrenyNetwork)[0];
    inputNetwork.name = "currentNetwork";
    inputNetwork.type = "hidden";
    if (classNameNetwork.length > 1) {
      const networkCurrent = document.getElementsByClassName(classNameNetwork);
      networkCurrent[0].textContent = choice.networkChoice;
      inputNetwork.value = choice.networkChoice;
    }
  }
}

const clickList = new ItemsChooise("give-list", "receive-list");
