chrome.action.onClicked.addListener((tab) => {
    
    //要素からほしい情報を取得
    console.log('getText');

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: getPrimeVideoTitle
    });

});


function getPrimeVideoTitle(){

    //タイトルの取得
    document.getElementsByClassName('_3I-nQy').innerText
    const titleElement = document.getElementsByClassName('_3I-nQy')
    const titleText = titleElement[0].innerText
    console.log(titleText);

    //再生時間の取得
    document.getElementsByClassName('XqYSS8').innerText
    const runtimeElement = document.getElementsByClassName('XqYSS8')
    const runtimeText = runtimeElement[0].innerText
    console.log(runtimeText);
    
    //動画内容の取得
    document.getElementsByClassName('-dmR1h').innerText
    const detailElement = document.getElementsByClassName('-dmR1h')
    const detailText = detailElement[0].innerText
    console.log(detailText);

    //clipboardにコピー
    navigator.clipboard.writeText(titleText)
}

