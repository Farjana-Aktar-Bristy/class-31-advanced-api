fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(posts => {
        posts.map(function (post) {
            var divCol = document.createElement("div");
            divCol.className = "col-sm p-3";
            var divCard = document.createElement("div");
            divCard.className = "card";
            var cardHeader = document.createElement("h5");
            cardHeader.className = "card-header";
            cardHeader.appendChild(document.createTextNode(post.title));
            var divCardBody = document.createElement("div");
            divCardBody.className = "card-body";
            var paragraph = document.createElement("p");
            paragraph.appendChild(document.createTextNode(post.body));

            divCardBody.appendChild(paragraph);
            divCard.appendChild(cardHeader);
            divCard.appendChild(divCardBody);
            divCol.appendChild(divCard);

            document.getElementById("content").appendChild(divCol);
        });
    });