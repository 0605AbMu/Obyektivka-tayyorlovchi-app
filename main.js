const cors = require("cors")
const app = require("express")();
const bodyParser = require("body-parser");
const multer = require("multer")
const fs = require("fs");
const dc = require("docx-templates");
const express = require("express");
const jfs = require("jsonfile");

app.use(cors({origin: "*"}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/", express.static("www/"));


app.get("/check", (req, res)=>{

res.json({msg:"OK", status:200})

})

const  regions = jfs.readFileSync("datas/regions.JSON");

const vt = {
viloyat: regions.regions,
tumanlar: regions.districts,

}

app.get("/getRegData",(req, res)=>{
    res.json(vt);
})

app.post("/", multer({dest:"imageData/",  limits:{files:1}}).single("image"),  (req, res, next)=>{
    
    const data = JSON.parse(req.body.data)
    



if (Object.keys(data).length==0){
    res.send("error");


} else {
    
    
    if (data["mehnat_faoliyati"][0] && data["mehnat_faoliyati"][0]!="yo'q" ){
    data["latest_work"] = data["mehnat_faoliyati"][data["mehnat_faoliyati"].length-1]
    } else {
        data["latest_work"] = "yo'q"
        // data["latest_work"].yildan = "";
        // data["latest_work"].nomi = "";
    }
    // console.log(data);
    
    data.img = {width: 3, height: 4, data: fs.readFileSync(req.file.path, "base64"), extension: ".jpg"};
    // data["qarindoshlari"] = [];
    dc.createReport({
        template: fs.readFileSync("template.docx"),
        cmdDelimiter:["{", "}"],
        data: data,

    }).then(ress=>{
        try {
            fs.writeFileSync("data.docx", ress);
            res.download("data.docx", (err)=>{
                console.log(err);
            });
            fs.unlinkSync(req.file.path) 
            console.log("Success");       
        } catch (error) {
            if (error) console.log(error)
        }
    
    })
    .catch(e=>{
        if (e) console.log(e)
    })
    
    
}

})




app.listen(80, "10.10.10.11", ()=>{
    console.log("Server ishga tushdi...");
})