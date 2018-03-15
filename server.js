const express = require('express');
const hbs = require('hbs');
const port=process.env.PORT || 3000;

var app = express();
app.use((req,res,next)=>{
  next();
})
{

}

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
hbs.registerHelper('getcurrentYear',()=>
{
return new Date().getFullYear();

});


hbs.registerHelper('sremIt',(text)=>
{
return text.toUpperCase();

})

app.get('/',(req,res)=>{

  res.render('home.hbs',{
    pageTitle:' Home Page',
    welcomemessage:'welcome to Home Page'

  });
});

app.get('/projects',(req,res)=>{

  res.render('home.hbs',{
    pageTitle:'Projects',
    welcomemessage:'welcome to Projects Page'

  });
});



app.get('/about',(req,res)=>{


    res.render('about.hbs',{
      pageTitle:'About Page',
      welcomemessage:'welcome to About Page'

    });
});

app.listen(port,()=>{
console.log('server is starting port '+port);

});
