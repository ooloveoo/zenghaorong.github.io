function getId(id){
	return document.getElementById(id);
}

function query(name){
	return document.querySelector(name);
}

function queryAll(name){
	return document.querySelectorAll(name);
}

function hasClass( elements,cName ){ 
	return !!elements.className.match( new RegExp( "(\\s|^)" + cName + "(\\s|$)") ); 
}; 

function addClass( elements,cName ){ 
	if( !hasClass( elements,cName ) ){ 
		elements.className += " " + cName; 
	}; 
}; 

function removeClass( elements,cName ){ 
	if( hasClass( elements,cName ) ){ 
		elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " );
	} 
};