console.log("background...")

browser.runtime.onMessage.addListener(notify);

function notify(message) {
    console.log("background")

}