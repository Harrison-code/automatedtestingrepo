function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

console.log( getElementByXpath("/html/body/div[1]/main/div[2]/div/div/div/div[2]/div/table/tbody/tr/td[2]/span/span[2]/a") );

getElementByXpath("/html/body/div[1]/main/div[2]/div/div/div/div[2]/div/table/tbody/tr/td[2]/span/span[2]/a").click();