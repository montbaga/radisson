import katalon from "@katalon-studio/cloud-test";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await new Promise((r) => setTimeout(r, 0));
  await web.openBrowser("https://demo-store.katalon.com/");
  await web.click({
    type: "Web",
    id: "8f453b29-d783-4df3-8ffd-f2f850d5335a",
    attributes: { class: "userHeader_tag__2vbdQ" },
    childIndex: 1,
    hashes: { "md5.v1": "68f2d7d849558d8a9164a441a9f253ca" },
    name: "div - userHeader_tag__2vbdQ",
    selectors: [
      {
        id: "645910e9-503c-44ca-90eb-03064c1d9241",
        type: "CSS",
        value:
          "#root > div > div > div:nth-child(1) > div:nth-child(1) div:nth-child(2) div",
        isDefault: true,
      },
      {
        id: "738cc0d5-f3c5-467f-8a3f-527debd82d1f",
        type: "Attribute",
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "div",
    text: "",
    pageUrl: "https://demo-store.katalon.com/",
  });
  await web.click({
    type: "Web",
    id: "3973c046-37ea-4234-8ecb-f45cd634cf7c",
    attributes: { type: "text", name: "email" },
    childIndex: 1,
    hashes: { "md5.v1": "a4b1e2ceae9524deeb9eb7caa7711f26" },
    name: "input - email",
    selectors: [
      {
        id: "36b8af1c-eff8-45e7-b8c9-056e27b4cd04",
        type: "CSS",
        value: '[name="email"]',
        isDefault: true,
      },
      {
        id: "2917db3f-dc74-43ce-b611-ce075d948c59",
        type: "Attribute",
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://demo-store.katalon.com/signin",
  });
  await web.click({
    type: "Web",
    id: "3fe6cdbb-6c3f-4e0d-bc3f-d73aa4cefb14",
    attributes: { type: "password", name: "password" },
    childIndex: 1,
    hashes: { "md5.v1": "86a069955154245b3ca37e6e771ffcb2" },
    name: "input - password",
    selectors: [
      {
        id: "2dc893bd-683a-43ef-8760-3db71270f129",
        type: "CSS",
        value: '[name="password"]',
        isDefault: true,
      },
      {
        id: "e3edba7e-a942-4f01-888b-45b8bf6896b2",
        type: "Attribute",
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://demo-store.katalon.com/signin",
  });
  await web.setEncryptedText(
    {
      type: "Web",
      id: "3fe6cdbb-6c3f-4e0d-bc3f-d73aa4cefb14",
      attributes: { type: "password", name: "password" },
      childIndex: 1,
      hashes: { "md5.v1": "86a069955154245b3ca37e6e771ffcb2" },
      name: "input - password",
      selectors: [
        {
          id: "2dc893bd-683a-43ef-8760-3db71270f129",
          type: "CSS",
          value: '[name="password"]',
          isDefault: true,
        },
        {
          id: "e3edba7e-a942-4f01-888b-45b8bf6896b2",
          type: "Attribute",
          isDefault: true,
        },
      ],
      selectorType: "CSS",
      tag: "input",
      text: "",
      pageUrl: "https://demo-store.katalon.com/signin",
    },
    "d80733c604279766751e1f67a89d113e-U2FsdGVkX1/58xJqmDRp2m1yE8hbQm2fB/6jiyUN/nI="
  );
  await web.click({
    type: "Web",
    id: "74a45330-c73e-402c-aadb-6cc800faa3f2",
    attributes: {
      type: "button",
      class: "button_btn__2lzmo",
      value: "Sign In",
    },
    childIndex: 1,
    hashes: { "md5.v1": "42362f056d6f94a3ec4efa67548ce810" },
    name: "input - button_btn__2lzmo",
    selectors: [
      {
        id: "bff225b9-0e76-4579-bf22-72108631033f",
        type: "CSS",
        value: '[type="button"]',
        isDefault: true,
      },
      {
        id: "1e071d6c-247a-401c-a1e8-957593128eff",
        type: "Attribute",
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "input",
    text: "",
    pageUrl: "https://demo-store.katalon.com/signin",
  });
  await web.click({
    type: "Web",
    id: "1d6997ad-e265-49b9-bd80-3fcfc0bd04ff",
    attributes: {
      class:
        "MuiButtonBase-root MuiButton-root MuiButton-text userHeader_tag__2vbdQ",
      tabindex: "0",
      type: "button",
    },
    childIndex: 1,
    hashes: { "md5.v1": "ec2d94d8a2144ccdb67def9b279acbbb" },
    name: "button - MuiButtonBase-root MuiButton-root MuiButton-text userHeader_tag__2vbdQ",
    selectors: [
      {
        id: "4308ff2e-8007-4b11-900a-4e05599b06b4",
        type: "CSS",
        value: ".MuiButtonBase-root.MuiButton-root.MuiButton-text",
        isDefault: true,
      },
      {
        id: "6f48e3d6-0638-4786-bb81-b327a94fd719",
        type: "Attribute",
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "button",
    text: "",
    pageUrl: "https://demo-store.katalon.com/dashboard",
  });
  await web.click({
    type: "Web",
    id: "1eb80a9e-a860-47b1-b874-d3999f10ab68",
    attributes: {
      class:
        "MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button",
      tabindex: "0",
      role: "menuitem",
      "aria-disabled": "false",
    },
    childIndex: 1,
    hashes: { "md5.v1": "7160f82251c91b0d46ad058e4eb008b7" },
    name: "li - Logout",
    selectors: [
      {
        id: "27bbd803-6eef-42cb-8879-773d542baf88",
        type: "CSS",
        value: ".MuiListItem-root",
        isDefault: true,
      },
      {
        id: "4be2f13e-5319-46df-bda2-44e3758edde8",
        type: "Attribute",
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "li",
    text: "Logout",
    pageUrl: "https://demo-store.katalon.com/dashboard",
  });
  await web.click({
    type: "Web",
    id: "3c0d93a0-c8d0-47d9-b4b5-978cd140a82e",
    attributes: {
      class: "card-img-top",
      src: "https://static.zara.net/photos///2018/I/0/1/p/7568/469/251/2/w/1920/7568469251_2_1_1.jpg?ts=1540393989160",
    },
    childIndex: 1,
    hashes: { "md5.v1": "fd48cf2c020a52bbccabe871ddc94d38" },
    name: "img - card-img-top",
    selectors: [
      {
        id: "1448db87-4495-4789-8215-17832f748f25",
        type: "CSS",
        value: "div:nth-child(1) > .card .card-img-top",
        isDefault: true,
      },
      {
        id: "c0e10e25-afbc-46e4-ba7b-f09f8c7c8cb7",
        type: "Attribute",
        isDefault: true,
      },
    ],
    selectorType: "CSS",
    tag: "img",
    text: "",
    pageUrl: "https://demo-store.katalon.com/dashboard",
  });
  await web.takeScreenshot();
});