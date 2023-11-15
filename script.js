
const api_url = "https://api.quotable.io/random" 

 async function randomquotes(){
const res = await fetch(api_url)
if(res.statusCode === 404){
console.log("Error")
}
else{
    var data =await res.json();
    console.log(data);

    document.querySelector(".quote").innerHTML = data.content;
    document.querySelector(".person").innerHTML = data.author;
}
 }
