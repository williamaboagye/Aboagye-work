const express = require('express')
const app = express()



app.set('view engine', "ejs");
app.use(express.static(__dirname + '/public'));

const pupils = [
    {
    "name": "Omar Sterling",
    "dob": "12 June 1966",
    "prog": "Bsc Pre-Tech",
    "level": "200",
    "pic": "/images/omarsterling.jpg"
},
{
    "name": "Wizkid Ojuelaba",
    "dob": "13 June 1956",
    "prog": "Bsc R.M.E",
    "level": "300",
    "pic": "/images/wizkidd.jpg"
},
{
    "name": "Aboagye Cheddar",
    "dob": "16 June 1986",
    "prog": "Bsc Dondology",
    "level": "400",
    "pic": "/images/aboagyecheddar.jpg"
},
]

app.get('/', (req, res)=> {
    res.render("home.ejs",{
        pupils
    });
  })

app.get('/pupils/:id',(req,res)=>{
    const id =req.params.id;
    const pupil = pupils[id];
    res.render("pupil.ejs", {
        pupil,
        title: 'pupil'
    })
});

app.listen(3000, function(){
 console.log("listening on port 3000")
});