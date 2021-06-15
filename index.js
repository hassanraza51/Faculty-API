const express = require('express')
const app = express()
app.use(express.json());
const faculty=[{id : 1,name:'Hassan',gender:'male',email:'rz@gmail.com',address:[{
    street_address:'Sadiqabad',city:'jhang',country:'Pakistan'}],course_code:'CSC111',
                phone_no:[32675445,343445676,77656344]},
                {id : 2,name:'Aqib',gender:'male',email:'aq@gmail.com',address:[{
                    street_address:'new',city:'Sialkot',country:'Pakistan'}],
                    course_code:'CSC111',
                                phone_no:[3267545,3767876676,778986344]},
                                {id : 3,name:'Shahzaib',gender:'male',email:'shah@gmail.com',address:[{
                                    street_address:'Town',city:'Miultan',country:'Pakistan'}],
                                    course_code:'CSC111',
                                                phone_no:[326876765,3467654676,75654344]}]; 
app.get('/', function (req, res) {
    res.send('Hello World')
  })
app.get('/api/faculty', function (req, res) {
    res.send(faculty)
  })
app.get('/api/faculty/:id', function (req, res) {
    const fact= faculty.find(f=>f.id===parseInt(req.params.id));
    if(!fact) return res.status(400).send("Not found");
    res.send(fact);
  })
app.put('/api/faculty/:id', function (req, res) {
    const fact= faculty.find(f=>f.id===parseInt(req.params.id));
    if(!fact) return res.status(400).send("Not found");
    fact.name=req.body.name;
    fact.gender=req.body.gender;
    fact.email=req.body.email;
    fact.address=req.body.address;
    fact.course_code=req.body.course_code;
    fact.phone_no=req.body.phone_no;
    res.send(fact);
})
app.post('/api/faculty',(req,res)=>{
    const fact={
        id:faculty.length+1,name:req.body.name,gender:req.body.gender,email:req.body.email,
        address:req.body.address,course_code:req.body.course_code,phone_no:req.body.phone_no
    };
    faculty.push(fact);
    res.send(fact);
});
app.delete('/api/faculty/:id',(req,res)=>{
    const fact= faculty.find(f=>f.id===parseInt(req.params.id));
    if(!fact) return res.status(404).send("Not found");
    const index=faculty.indexOf(fact);
    faculty.splice(index,1);
    res.send(faculty);
});
  app.listen(3000)