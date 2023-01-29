const form = document.querySelector("form");
const main = document.querySelector('.main');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input');
    const div = document.createElement('div');
    if (input.value) {
        div.classList = "right";
        const content = `<p>${input.value}</p>`;
        div.innerHTML = content;
        main.append(div);
        input.value = "";
        // bot(input.value);

        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://maytapi-whatsapp.p.rapidapi.com/%7Bphone_id%7D/status",
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "eca680872bmshf33137282324875p1b28acjsn31f42f3d5356",
                "X-RapidAPI-Host": "maytapi-whatsapp.p.rapidapi.com"
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    }
})


// function bot(input) {
//     fetch(`https://api.monkedev.com/fun/chat?msg=${input}`).then(response => response.json())
//         .then(function (data) {
    //             const div = document.createElement('div');
//             div.classList = "right";
//             const content = data.response;
//             div.innerHTML = `<p>${content}`;
//             console.log(content);
//             main.append(div);
//         })
// }

