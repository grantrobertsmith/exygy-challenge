import deepEqual from 'deep-equal';

const documentsUrl = "http://exygy-challenge-backend.herokuapp.com/documents?search=&api_key=123";

class DocumentList {
    constructor() {
        this.documentList = {};

        this.update();
    }

    get documents() {
        return this.documentList;
    }

    update() {
        const documentList = this.documents;

        fetch(documentsUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(documentsFromServer) {
                documentsFromServer.forEach(documentFromServer => {
                    const localDoc = documentList[documentFromServer.id];
                    if (!deepEqual(localDoc, documentFromServer, { strict: true })) {
                        documentList[documentFromServer.id] = documentFromServer;
                    }
                });

                console.log(Object.keys(documentList).length);
            });
    }
}

export const documentList = new DocumentList();
