document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()


// const updateUI = (data) => {
//     document.getElementById("score-tag").innerHTML = `Score tag retrieved: ${data.score_tag}`;
//     document.getElementById("agreement").innerHTML = `Agreement retrieved: ${data.agreement}`;
//     document.getElementById("subjectivity").innerHTML = `Subjectivity retrieved: ${data.subjectivity}`;
//     document.getElementById("confidence").innerHTML = `Confidence retrieved: ${data.confidence}`;
//     document.getElementById("irony").innerHTML = `Irony retrieved: ${data.irony}`;



// SERVER SIDE!!!
// app.get('/', function(req, res) {

//     res.sendFile('dist/index.html')
// })

// app.get('/test', function(req, res) {
//     res.json(mockAPIResponse)
// })

//designates what port the app will listen to for incoming requests
// app.listen(8080, function() {
//     console.log('Example app listening on port 8080!')
// })

// app.post('/evaluate-articles', async(req, res) => {

//     let params = {
//         key: apiKey,
//         lang: 'en',
//         url: req.body.formUrl,
//         txt: req.body.formText
//     };

//     const result = await axios({
//         url: 'http://api.meaningcloud.com/sentiment-2.1',
//         method: "post",
//         params: params,
//     })

//     const { data } = result;
//     const { code } = data.status;
//     const { score_tag } = data;
//     const { agreement } = data;
//     const { subjectivity } = data;
//     const { confidence } = data;
//     const { irony } = data;

//     // storing the api response
//     sentiment = {
//         score_tag,
//         agreement,
//         subjectivity,
//         confidence,
//         irony,
//     };

//     res.send(sentiment);
// })


// ANOTHER SERVER SIDE:

// const { response } = require('express');
// const express = require('express');

// express app
const app = express();

// register vue engine

// app.set('view engine', 'ejs');

// if i needed view engine to check for the html files :
// app.set('views', 'myvies');
// listen for requests

app.listen(3000, );

app.get('/', (req, res) => {
    //res.send('<p> HomePage </p>');
    res.sendFile('./views/index.html', { root: __dirname });
})


app.get('/about', (req, res) => {
    //res.send('<p> AboutPage </p>');
    res.sendFile('./views/about.html', { root: __dirname });
})


// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 app.use middleware

app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
})