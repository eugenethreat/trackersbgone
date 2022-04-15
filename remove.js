// https://www.nytimes.com/2022/04/13/us/politics/biden-weapons-ukraine.html?smid=tw-nytimes&smtyp=cur

/*
    get the current page url
    if it contains url parameters, axe them! 
        give feedback to the user that a url has been removed. 

    if not, do nothing. 
*/

function notifyExtension(tracker_amt) {
    browser.runtime.sendMessage({ "trackers": tracker_amt });
}

url_check = window.location.href


// check for URL parameters
if (url_check.includes('?')) {
    console.log("yuck!")

    // get the amount of url parameters
    trackers = window.location.search.split("&")
    let tracker_amt = trackers.length
    console.log(tracker_amt)

    // write amt of params to storage
    try {
        browser.storage.local.set({ trackers: tracker_amt, clean_link: window.location.hostname + window.location.pathname });
    } catch (error) {
        console.error("error!")
        console.error(error)
    }

    notifyExtension(tracker_amt)

} else {
    // do nothing.
    console.log("ok")
    browser.storage.local.set({ trackers: 0, clean_link: window.location.hostname + window.location.pathname });

}

