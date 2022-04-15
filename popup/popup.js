console.log("popup.js is live")

browser.storage.local.get().then(function (result) {
    // access the tracker_counter value and change it 
    let trackers_counter = document.querySelector("#trackers_counter")
    trackers_counter.innerHTML = result.trackers

    // do the same with the clean link
    // WHAT!?
    no_tracker_link.addEventListener("click", () => {
        console.log("clicked")
        console.log(result.clean_link)

        // send a message to content script to replace contents of page
        browser.runtime.sendMessage({ "location": "from popup", "clean_link": result.clean_link });

    })

});