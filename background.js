chrome.webNavigation.onCompleted.addListener(({ tabId, url }) => {
    if (url.includes("instagram.com")) {
        chrome.scripting.executeScript({
            target: { tabId },
            files: ["content.js"]
        });
    }
});