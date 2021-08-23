// O sistema “Faço parte” vai te mostrar um histórico da trajetória de nossa cidade. O resultado apresentado na tela será: “Teresópolis tem x anos. Desses, foram y antes de mim. Mas nos últimos z anos ela conta comigo!”. Cada letra maiúscula do texto será uma variável, sendo que “x” e “z” são valores fixos, e “y” irá conter uma expressão.

var tere = 131;
var eu = 20;

console.log('Teresópolis tem ' + tere + ' anos. Desses, foram ' + (tere-eu) + ' antes de mim. Mas nos últimos ' + eu + ' anos ela conta comigo!');