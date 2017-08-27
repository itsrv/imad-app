var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    
    'article-one' : {
    title:"Artical one",
    heading:'artical one',
    date : 'sep 5,2017',
    content: ` 
        <div>
            <a href = "/">Home</a>
        </div>
        <hr/>
         <h3>
         Artical one 
             
         </h3>       
        
        <div>
            <p>
                This is the contant for first artical
                
            </p>
            
        </div>`
    },
    'article-two' : {
    title:"Artical two",
    heading:'artical two',
    date : 'sep 15,2017',
    content: ` 
        <div>
            <a href = "/">Home</a>
        </div>
        <hr/>
         <h3>
         Artical two
             
         </h3>       
        
        <div>
            <p>
                This is the contant for second artical
                
            </p>
            
        </div>`
    },
    'article-three' : {
    title:"Artical three",
    heading:'artical three',
    date : 'sep 30,2017',
    content: ` 
        <div>
            <a href = "/">Home</a>
        </div>
        <hr/>
         <h3>
         Artical three 
             
         </h3>       
        
        <div>
            <p>
                This is the contant for third artical
                
            </p>
            
        </div>`
    }
    
};

function createtamplate(data){
    var title = data.title;
    var heading = data.heading; 
    var date = data.date;
    var content = data.content;
    
    var htmltemplate =
        `<html>
        <head>
            
            <title>${title}</title>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
        </head>
        <body>
            
            <div>
                <a href = "/">Home</a>
            </div>
            <hr/>
             <h3>
             ${heading} 
                 
             </h3>       
             <div>
                 ${date}
                 
             </div>
            <div>
               ${content}
            </div>  
            
            
        </body>
        
    </html>`;
    
    return htmltemplate;
    
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/:articalname',function(req,res){
    
    var articalname = req.param.articalname;
   res.send(createtamplate(articles[articalname])); 
        
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
