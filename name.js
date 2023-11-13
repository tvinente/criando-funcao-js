let userName = getFirstName("Talyta Vinente Marques" , " ")
console.log("Seja bem vindo(a): " + userName)

userName = getFirstName("Tatyane-Vinente-Marques", "-")
console.log("Seja bem vindo(a): " + userName)

function getFirstName(name, splitChar){
	let firstName = name.split(splitChar) [0]
    return firstName 
}