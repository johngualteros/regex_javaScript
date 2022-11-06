//validate email regex
/[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/gm

//search carlos example
/carlos/g  //g is flag global
/carlos/gi //i case insensitive return upperCase and lowerCase
/./gi //. search all
/\d/gi // all digits between 0-9
/\D/gi // all letters but not numbers
/\w/gi //character upper and lower case a-z and numbers 0-9
/\W/gi //everything that is not a word character
/\s/gi //spaces all types(spaces, tab, new line)
/\S/gi //everything that is not space

//search telephone Numbers
/\d\d\d.\d\d\d.\d\d.\d\d/gi

/^\w+\s?\w+?\s?$/gim //m is multiline flag

/\d{3}[\s-.]\d{3}[\s-.]\d{2}[\s-.]\d{2}/gm

/[a-zA-Z.]+/gm
/[^a-zA-Z.]+/gm

/44[89][\s-]\d{3}[\s-]\d{2}[\s-]\d{2}/gm
/(449|448)[\s-]\d{3}([\s-]\d{2}){2}/gm

/^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-z]$/gm

//
//
//Coincidencias Basicas
/*
.       - Cualquier Caracter, excepto nueva linea
\d      - Cualquier Digitos (0-9)
\D      - No es un Digito (0-9)
\w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
\W      - No es un Caracter de Palabra.
\s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
\S      - No es un Espacio, Tab o nueva linea.

Limites
\b      - Limite de Palabra
\B      - No es un Limite de Palabra
^       - Inicio de una cadena de texto
$       - Final de una cadena de texto

Cuantificadores:
*       - 0 o Más
+       - 1 o Más
?       - 0 o Uno
{3}     - Numero Exacto
{3,4}   - Rango de Numeros (Minimo, Maximo)

Conjuntos de Caracteres
[]      - Caracteres dentro de los brackets
[^ ]    - Caracteres que NO ESTAN dentro de los brackets

Grupos
( )     - Grupo
|       - Uno u otro*/
