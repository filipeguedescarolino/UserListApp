async function getUserName() {

    document.getElementById('status').innerHTML = 'LOADING';
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    if (response.status !== 200) {
        document.getElementById('status').innerHTML = 'ERROR contacting api';
    } else {
        document.getElementById('status').innerHTML = '';
    }

    const data = await response.json()


    let cardsHtml = "";
    data.forEach((card) => {
        cardsHtml += `
       <li class="card">
        <div>
             <span>User:</span>
             <span>${card.name}</span>
        </div>

        <div>
             <span>Username:</span>
             <span>${card.username}</span>
        </div>

        <div>
             <span>Email:</span>
             <span>${card.email}</span>
        </div>

        <div>
             <span>Phone:</span>
             <span>${card.phone}</span>
        </div>

        <div>
             <span>Address:</span>
             <span>${card.address.street} , ${card.address.suite} , ${card.address.city}  ${card.address.zipcode}</span>
        </div>
    </li>
    `
    })

    document.getElementById('card-container').innerHTML = cardsHtml;
    document.getElementById('status').innerHTML = 'DONE';

}

getUserName();