import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 4000;
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + '/views'));

app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.post("/submit", (req, res) => {
    
    var boyname = req.body.name1;
    var girlname =req.body.name2;
    var tot1 = boyname.length + girlname.length;
    var tot = boyname.length + girlname.length;

    for (var i = 0; i < boyname.length; i++) {
        for (var j = 0; j < girlname.length; j++) {
            if (boyname[i] == girlname[j]) {
                girlname = girlname.substring(0, j) + '1' + girlname.substring(j + 1);
                console.log(girlname);
                tot -= 2;
                break;
            }

        }
    }
    var num = (tot % 6)-1;
    let arr = ['Friends', 'Love', 'Affection', 'Marry', 'Enemy', 'Siblings'];

  
   const result = {
    value1: req.body.name1,
    value2: req.body.name2,
    value3: arr[num]
};

    res.render("submit.ejs",{result}); // render a success page
});

app.listen(port, () => {
    console.log("connected reiii");
});
