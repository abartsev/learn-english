export default class Server {

    getList = () => {

        return fetch('./entries.json')
                .then(data => data.json())
                .then(json => json) 
    }

}