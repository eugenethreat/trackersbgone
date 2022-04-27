// https://www.nytimes.com/2022/04/13/us/politics/biden-weapons-ukraine.html?smid=tw-nytimes&smtyp=cur

/*
    get the current page url
    if it contains url parameters, axe them! 
        give feedback to the user that a url has been removed. 

    if not, do nothing. 
*/

browser.runtime.onMessage.addListener(action);

function action(message) {
    console.log("content recieved msg: " + message)
    let clean_link = message.clean_link
    console.log(clean_link)

    // redirect to clean
    // window.location.replace(clean_link)
    window.open("https://" + clean_link, '_blank', 'noreferrer=true');
}

// DOESNT WORK UNLESS YOU LEAVE THE CHECK IN?
browser.runtime.onMessage.hasListener(action)

url_check = window.location.href

// check for URL parameters
if (url_check.includes('?')) {
    console.log("yuck!")

    // cookies?
    cookies = document.cookie
    // a string 
    cookies_col = cookies.split(";")
    console.log(cookies_col)
    console.log(cookies_col.length)

    // get the amount of url parameters
    trackers = window.location.search.split("&")
    let tracker_amt = trackers.length
    console.log(tracker_amt)

    // write amt of params to storage
    try {
        // trackers 
        browser.storage.local.set({ trackers: tracker_amt, clean_link: window.location.hostname + window.location.pathname });
        // cookies
        browser.storage.local.set({ cookies: cookies_col.length });

    } catch (error) {
        console.error("error!")
        console.error(error)
    }


} else {
    // do nothing.
    console.log("ok")
    browser.storage.local.set({ trackers: 0, clean_link: window.location.hostname + window.location.pathname });
    browser.storage.local.set({ cookies: "" });
}

