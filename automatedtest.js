function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

console.log( getElementByXpath("/html/body/div[1]/main/div[2]/div/div/div/div[2]/div/table/tbody/tr/td[2]/span/span[2]/a") );

getElementByXpath("/html/body/div[1]/main/div[2]/div/div/div/div[2]/div/table/tbody/tr/td[2]/span/span[2]/a").click();


const observer = new MutationObserver((mutations, obs) => {
    const hello = getElementByXpath("/html/body/div[1]/main/div[4]/div/div/div/div[2]/section/div/div/div[2]/div/div[1]/table/tr/td[1]/strong");
    if (hello) {
      console.log(hello.innerText)
      obs.disconnect();
      return;
    }
  });
  
  observer.observe(document, {
    childList: true,
    subtree: true
  });
