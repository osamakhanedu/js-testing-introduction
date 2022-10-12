const puppeteer = require("puppeteer");
const { generateText, checkAndGenerateText } = require("./util");

describe("generateText", () => {
  test("should output name and age", () => {
    const name = "abc";
    const age = 20;
    const text = generateText(name, age);
    expect(text).toBe(`${name} (${age} years old)`);
  });

  test("should output without name and with age only", () => {
    const name = "abc";
    const age = null;
    const text = generateText(name, age);
    expect(text).toBe(`${name} (${age} years old)`);
  });

  test("should output with name and without age", () => {
    const name = "";
    const age = 20;
    const text = generateText(name, age);
    expect(text).toBe(`${name} (${age} years old)`);
  });

  test("should output without name and age", () => {
    const name = "";
    const age = null;
    const text = generateText(name, age);
    expect(text).toBe(`${name} (${age} years old)`);
  });
});

describe("checkAndGenerateText", () => {
  test("should output valid text", () => {
    const name = "abc";
    const age = 20;
    const text = checkAndGenerateText(name, age);
    expect(text).toBe(`${name} (${age} years old)`);
  });

  test("should output not text without name", () => {
    const name = "";
    const age = null;
    const text = checkAndGenerateText(name, age);
    expect(text).toBe(false);
  });
  test("should output not text without age", () => {
    const name = "abc";
    const age = null;
    const text = checkAndGenerateText(name, age);
    expect(text).toBe(false);
  });
  test("should output not text without name and age", () => {
    const name = "";
    const age = null;
    const text = checkAndGenerateText(name, age);
    expect(text).toBe(false);
  });
});

// TODO - Do this locally
// describe("Add user cards", () => {
//   test("should add user card", async () => {
//     const browser = await puppeteer.launch({
//       headless: true,
//     });

//     const page = await browser.newPage();
//     await page.goto();

//     const name = "abc";
//     const age = 20;
//     const text = checkAndGenerateText(name, age);
//     expect(text).toBe(`${name} (${age} years old)`);
//   });
// });
