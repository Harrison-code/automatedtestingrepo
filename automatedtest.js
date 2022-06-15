function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

console.log( getElementByXpath("/html/body/div[1]/main/div[2]/div/div/div/div[2]/div/table/tbody/tr/td[2]/span/span[2]/a") );

getElementByXpath("/html/body/div[1]/main/div[2]/div/div/div/div[2]/div/table/tbody/tr/td[2]/span/span[2]/a").click();


const observer = new MutationObserver(entries => {
    console.log(entries);
});

const alvo = document.querySelector("#app > main > div.vue-portal-target > div > div > div > div.pt-5.p-6.bg-white.dark\\:bg-gray-700.shadow.relative");
console.log(alvo);
// observer.observe(alvo, { attributes: true, characterData: true, childList: true, subtree: true });
