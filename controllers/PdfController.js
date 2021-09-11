const mongoose = require("mongoose");

const PdfController = {};
var blog=require('../models/Blog.model.js');
let ejs = require("ejs");
let pdf = require("html-pdf");
let path = require("path");
const PDFMerger = require('pdf-merger-js');
const imagesToPdf = require("images-to-pdf")




/*---------------------------staff list controller-----------------------------*/
PdfController.makepdf = async (req, res)=> {
     await res.render('../views/blogshow.ejs',{data:req.body.article},async(err, html)=>{
    if (err) {
          res.send(err);
    } else {
        
         
            let options = {
                "height": "11.25in",
                "width": "8.5in",
                "header": {
                    "height": "20mm"
                },
                "footer": {
                    "height": "20mm",
                },
            };
            await pdf.create(html, options).toFile('./public/test1.pdf', (err, res) => {
                if (!err)
                    console.log(res);
                else
                    console.log(err);
            });
    };
});
   
}

PdfController.pdf_merge = function (req, res) {
    console.log('hello')
    var merger = new PDFMerger();
    (async () => {
        if(await imagesToPdf(["public/blog/bg.png"], "public/blog/combined.pdf"))
        {
            merger.add('public/blog/combined.pdf');  //merge all pages. parameter is the path to file and filename.
            merger.add('public/blog/testing.pdf'); // merge only page 2
            
    
            await merger.save('mergedd.pdf'); //save under given name and reset the internal document
        }
        
       
    })();
}


module.exports = PdfController; 