
let btn =document.querySelector('.new-qoute');
let qoute =document.querySelector('.qoute');
let person =document.querySelector('.person');

const qoutes = [{
    'qoutes':'""Facilis quaerat molestiae, explicabo fuga repudiandae quod eaque itaque veritatis""',
    'person':'Abraham lincon'
},{
    'qoutes':'""elit.Facilis quaerat molestiae, explicabo fuga repudiandae quod eaque itaque veritatis""',
    'person':'Steve Jobs'   
}
,{
    'qoutes':' ""coetur adipisinsectcing elit.Facilis quaerat molestiae, explicabo fuga repudiandae quod eaque itaque veritatis""',
    'person':'Tim Cook'   
}
,{
    'qoutes':' ""ipisicing elit.Facilis quaerat molestiae, explicabo fuga repudiandae quod eaque itaque veritatis""',
    'person':'Elon Musk'   
}
,{
    'qoutes':'""it amet consectetur adipisicing elit.Facilis quaerat molestiae, explicabo fuga repudiandae quod eaque itaque veritatis""',
    'person':'Kenye West'   
}
,{
    'qoutes':' ""adipisicing elit.Facilis quaerat molestia quod eaque itaque veritatis""',
    'person':'Steve Roger'   
}
,{
    'qoutes':'""Lorem ipsum explicabo fuga repudiandae quod eaque itaque veritatis""',
    'person':'Bruce Banner'   
}
,{
    'qoutes':'""L consectetur adipisicing elit.Facilis quaerat molestiae, explicabo fuga repudiandae quod eaque itaque veritatis""',
    'person':'Tony Stark'   
}
,{
    'qoutes':'""tur adipisicing elit.Facilis quaerat molestiae, explicabo fuga repudiandae quod eaque itaque veritatis""',
    'person':'Kelvin Hart '   
}
,{
    'qoutes':' ""quaerat molestiae, explicabo fuga repudiandae quod eaque itaque veritatis""',
    'person':'Andrew Tate'   
}
];

btn.addEventListener('click' , function(){
    let random = Math.floor(Math.random() * qoutes.length);
    qoute.innerText=qoutes[random].qoutes;
    person.innerText=qoutes[random].person;
})