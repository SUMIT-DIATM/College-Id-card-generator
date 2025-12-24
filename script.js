
let inputs=document.querySelectorAll("input")
let main=document.querySelector("main");

let form=document.querySelector("form");
let btn=document.querySelector(".ok")




let pic_address=null;
//javascript for the upload button  : 
let btnn=document.querySelector(".btn");
let input =document.querySelector("#fileinp");
let re= document.querySelector(".re")
btnn.addEventListener("click",()=>{
        input.click();
})


input.addEventListener("change",(file)=>{
        console.log(file.target.files[0].name);
        pic_address=`${file.target.files[0].name}`
        btnn.textContent=`${file.target.files[0].name}`;
        re.classList.remove("hidden");
        
})
re.addEventListener("click",()=>{
        input.click();
})







let b_group=document.querySelector(".group");




/*running Event listener for showing the card */
btn.addEventListener("click",((detail)=>{
    detail.preventDefault();
    


let b_group=document.querySelector(".group");
let stream=document.querySelector(".stream");

//CODE FOR DYNAMICALLY CREATE A CARD : 

let card=document.createElement("div");
card.classList.add("card");  //this is the main card !!

let heading =document.createElement("h6");//This is the college heading : // append in card
heading.innerHTML="<b>KOLKATA INSTITUTE OF  ADVANCED TECHNOLOGY AND MANAGEMENT</b>";
card.prepend(heading);

let info =document.createElement("div"); //append in card : 
info.classList.add("info");

let icon =document.createElement("div");
icon.classList.add("icon");
let icon_image=document.createElement("img");
icon_image.setAttribute("src","logo.png");
icon.append(icon_image);
info.prepend(icon);
//Now the icon need to be inserted in the info.   : DONE

let inf=document.createElement("div");
inf.classList.add("inf");



let address=document.createElement("div");
address.classList.add("address");
address.innerHTML="<p><b>NH-2,Panagrahh,Durgapur-713212,Paschim Bardhaman,W.B,India</b></p>";
inf.append(address);

let contact=document.createElement("div");
contact.classList.add("contact");
contact.innerHTML="Email:kiatm@tahul.ac.in | Website:www.kiatm.tahul.ac.in";
inf.append(contact);

let m_no=document.createElement("div");
m_no.classList.add("m_no");
m_no.innerHTML="Contact No : 9332009385";
inf.append(m_no);

// need to append this adddress , contact m_no to the inf:  :DONE

info.append(inf);
//and inf and icon is need to append in icon. : DONE


card.append(info);

let heading_2=document.createElement("div");
heading_2.classList.add("heading");
heading_2.innerHTML="<h3>Student ID Card</h2>";

card.append(heading_2);


//heading_2 is nned to be append on card :


let all_details=document.createElement("div");
all_details.classList.add("all_details");
//this is append on card : 



let details=document.createElement("div");
details.classList.add("details");

let s_name=document.createElement("div");
s_name.classList.add("s_name");
s_name.innerHTML=`Name&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${inputs[0].value}`;

let roll=document.createElement("div");
roll.classList.add("roll");
roll.innerHTML=`College Roll&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${stream.value}/${inputs[1].value}/${inputs[2].value} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspCSE 20${inputs[1].value}-20${Number(inputs[1].value)+4}`;

let father= document.createElement("div");
father.classList.add("father");
father.innerHTML=`Name&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${inputs[3].value}`;

let s_address=document.createElement("div");
s_address.classList.add("s_address");
s_address.innerHTML=`Address&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${inputs[4].value},${inputs[5].value},${inputs[6].value}`;

let s_m_no=document.createElement("div");
s_m_no.classList.add("s_m_no");
s_m_no.innerHTML=`Phone No&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${inputs[7].value}`;


details.append(s_name);
details.append(roll);
details.append(father);
details.append(s_address);
details.append(s_m_no);

//these name ,father address mobile number needs to be append in details : 

let inline=document.createElement("div");
inline.classList.add("inline");

let blood=document.createElement("div");
blood.innerHTML=`Blood group&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp: ${b_group.value}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`;

let valid=document.createElement("div");
valid.innerHTML=`Valid till&nbsp&nbsp : JUL-${Number(inputs[1].value)+4}`;

inline.prepend(blood);
inline.append(valid);
details.append(inline);

let pic_sign=document.createElement("div");

let pic=document.createElement("div");
pic.classList.add("pic");

let p_image=document.createElement("img");
p_image.setAttribute("src",`${pic_address}`);

pic.append(p_image);

let sign=document.createElement("div");
sign.classList.add("sign");

let sign_img=document.createElement("img");
sign_img.setAttribute("src","sign.jpeg");
sign.append(sign_img);

pic_sign.prepend(pic);
pic_sign.append(sign);
//append done : 


all_details.append(details);
all_details.append(pic_sign);

card.append(all_details);
card.style.margin="5px";

let cards=document.querySelector(".cards");
cards.append(card);

form.reset();

}))
