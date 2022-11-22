//function for getting elements
elem = (x) =>{
	return document.getElementById(x);
}
//For Submenu onlick
var submenu = elem("submenu");

openSubmenu = ()=>{
	submenu.classList.toggle("active");
}
//For mobile menu
var menu_btn = elem("menu_btn");
var menu = elem("menu");
var styleElem = document.head.appendChild(document.createElement("style"));
openMenu = () =>{
	menu_btn.innerHTML = `<p><i class="fa fa-times" onclick="closeMenu();"></i></p>`;
	styleElem.innerHTML = `
					@media (max-width: 375px){
						#menu{
							display: block;
							background-color: #333;
							position: absolute;
							top: 100%;
							left: -60%;
							width: 300px;
							height: 420px;
							text-align: center;
							padding-top: 2rem;
							border-radius: 8px;
							z-index: 300000;
						}
					}

						`;
}
closeMenu = () =>{
	menu_btn.innerHTML = `<p><i class="fa fa-bars" onclick="openMenu();"></i></p>`;
	styleElem.innerHTML = `
					@media (max-width: 375px){
						#menu{
							display: none;
							background-color: #333;
							position: absolute;
							top: 100%;
							left: -60%;
							width: 300px;
							height: 420px;
							text-align: center;
							padding-top: 2rem;
							border-radius: 8px;
							z-index: 300000;
						}
					}

						`;
}

//make order button
makeOrder = ()=>{
	alert("Kindly make a call or whatsapp +254786630603 for the order. Thanks in Advance.");
}
//Return to top button
var top_btn = elem("top");

window.addEventListener("scroll", ()=>{
	if(this.scrollY > 20){
		top_btn.style.display = "block";
	}else{
		top_btn.style.display = "none";
	}
});

