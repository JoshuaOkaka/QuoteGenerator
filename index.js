
let btn =document.querySelector('.new-qoute');
let qoute =document.querySelector('.qoute');
let person =document.querySelector('.person');

const qoutes = [{
    'qoutes':'""No amount of experimentation can ever prove me right; a single experiment can prove me wrong.""',
    'person':'Albert Einstein'
},{
    'qoutes':'""Science without religion is lame, religion without science is blind.""',
    'person':'Albert Einstein'   
}
,{
    'qoutes':' ""Somewhere, something incredible is waiting to be known.""',
    'person':'Carl Sagan'   
}
,{
    'qoutes':' ""Science is a way of thinking much more than it is a body of knowledge""',
    'person':'Carl Sagan'   
}
,{
    'qoutes':'""By denying scientific principles, one may maintain any paradox.""',
    'person':'Galileo Galilei'   
}
,{
    'qoutes':' ""Geologists have a saying—rocks remember""',
    'person':'Neil Armstrong'   
}
,{
    'qoutes':'""Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.""',
    'person':'Marie Curie'
     
}
,{
    'qoutes':'""A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die and a new generation grows up that is familiar with it""',
    'person':'Max Planck'   
}
,{
    'qoutes':'""Science does not know its debt to imagination""',
    'person':'Ralph Waldo Emerson '   
}
,{
    'qoutes':' ""Science never solves a problem without creating ten more""',
    'person':'George Bernard Shaw'   
}
];

btn.addEventListener('click' , function(){
    let random = Math.floor(Math.random() * qoutes.length);
    qoute.innerText=qoutes[random].qoutes;
    person.innerText=qoutes[random].person;
})