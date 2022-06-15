window.location.replace("https://solo.next.jarvisanalytics.com/login");

console.log("HELLO 11");
console.log("HELLO 12");
console.log("HELLO 13");
console.log("HELLO 14");
console.log("HELLO 15");
console.log("HELLO 16");
console.log("HELLO 17");
console.log("HELLO 18");
console.log("HELLO 19");
console.log("HELLO 10");
console.log("HELLO 20");
console.log("HELLO 21");

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

console.log( getElementByXpath("/html/body/div[1]/main/div[2]/div/div/div/div[2]/div/table/tbody/tr/td[2]/span/span[2]/a") );

getElementByXpath("/html/body/div[1]/main/div[2]/div/div/div/div[2]/div/table/tbody/tr/td[2]/span/span[2]/a").click();

// WAIT UNTIL TOTAL TEXT WILL SHOW
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
