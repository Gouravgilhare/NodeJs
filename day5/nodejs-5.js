//form handling and working with the forms 

//handle backend process of forms and making sure the data coming from any liberary ,framework,templating engines, we still handle it at the backend


//cookie parser

//session cookie - server bhul jata hai user ko after entering username/password , toh baar baar password dalwata  hai har ek request mai 

//hum log kuch bhi data frontend oar browser par rak sate hai and jab bhi aap kuch bhi request backend par karoge wo fe par saved data automatically backend par chala jaayega;

// server ek string deta hai jisse baar login karta hai baar baar har ek request mai , isiko cookie kehte hai

// pc se request niklega toh jo data hoga wo  like a blob( mixed string (encoded)(blob is binary)) ke form mai jayega 

//hume request data ko wapas readable banana padega

const express =require ('express');
const app = express();

app.use(express.json());      //converting blob to plain text  ( for json data)
app.use(express.urlencoded({extended: true})); //converting blob to plain text  ( other form)


app.get("/", function(req,res,next){
    res.send(" hello  world");
});



app.listen(3000);



