console.log("Merhaba Kodlama.io");


// JavaScript type safe değildir (tip güvenli değildir).

let dolarDun = 9.20;
let dolarBugun = 9.30;

{
    let dolarDun = 9.10;
   
}
 console.log(dolarDun);


 const euroDun = 11.2;



 console.log(euroDun);


 let konutKredileri = ["Konut Kredisi",
                        "Emlak Konut Kredisi",
                            "Kamu Konut Kredisi",
                        "Özel Konut Kredisi"];


console.log("<ul>")
for(let i = 0; i<konutKredileri.length; i++)
{
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")


{/* <ul>
        <li>Konut Kredisi</li>
        <li>Emlak Konut Kredisi</li>
        <li>Kamu Konut Kredisi</li>
</ul> */}



console.log(konutKredileri);