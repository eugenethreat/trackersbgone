console.log("background is live")

browser.runtime.onMessage.addListener(action);

function action(message) {
    console.log("background recieved msg: " + message.clean_link)

    let clean_link = message.clean_link

    // get current tab id 
    // https://stackoverflow.com/questions/43695817/tabs-getcurrent-result-is-undefined
    browser.tabs.query({ active: true, windowId: browser.windows.WINDOW_ID_CURRENT })
        .then(tabs => browser.tabs.get(tabs[0].id))
        .then(tab => {
            console.info(tab);

            let tab_id = tab.id
            console.log(tab_id)

            // send message to content 
            browser.tabs.sendMessage(tab_id, { "location": "from popup", "clean_link": clean_link });


        });



}