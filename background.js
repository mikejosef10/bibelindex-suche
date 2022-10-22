searchUrbanDict = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "https://www.bibelindex.de/de/search?q=" + query});
};

chrome.contextMenus.create({
    id: "bibelindex",
    title: "Auf bibelindex suchen",
    contexts:["selection"],  // ContextType
    //onclick: searchUrbanDict // A callback function
});

chrome.contextMenus.onClicked.addListener(
    searchUrbanDict,
);