export default {
    //serverUrl: 'http://localhost:3003/'
    serverUrl: (function () {
        // let mainUrl = 'http://localhost:3003/';
        if (process.env.NODE_ENV !== 'development') {
            mainUrl = '/';
        }
        return mainUrl
    })()
}