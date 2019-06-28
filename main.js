
alert("Ciao ti aiuterò a creare una password!!")

var nome;
nome=prompt("Inserisci il tuo nome");
document.getElementById('il-mio-nome').innerHTML=nome;

var cognome;
cognome=prompt("Inserisci il tuo cognome");
document.getElementById('il-mio-cognome').innerHTML=cognome;

var colore;
colore=prompt("Inserisci il tuo colore preferito");
document.getElementById('il-mio-colore-preferito').innerHTML=colore;

var password;
password=document.getElementById('la-mia-password').innerHTML=nome+cognome+colore+"19"
