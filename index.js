// les constantes recueillant les boutons contenant les chiffres comme objet
const boutonUn = document.querySelector('.nombre#Un');
const boutonDeux = document.querySelector('.nombre#Deux');
const boutonTroix = document.querySelector('.nombre#Troix');
const boutonQuatre = document.querySelector('.nombre#Quatre');
const boutonCinq = document.querySelector('.nombre#Cinq');
const boutonSix = document.querySelector('.nombre#Six');
const boutonSept = document.querySelector('.nombre#Sept');
const boutonHuit = document.querySelector('.nombre#Huit');
const boutonNeuf = document.querySelector('.nombre#Neuf');
const boutonZero = document.querySelector('.nombre#Zero')

// les constantes recueillant les boutons contenant les fonctions de la calculette comme objet
const boutonAC = document.querySelector('.fonction#AC');
const boutonSigneMoins = document.querySelector('.fonction#SigneMoins');
const boutonRacineCarre = document.querySelector('.fonction#RacineCarre');
const boutonVirgule = document.querySelector('.fonction#Virgule');
const boutonResultat = document.querySelector('.operateur#Resultat');


// les constantes recueillant les boutons contenant les operateurs de la calculette comme objet
const boutonAddition = document.querySelector('.operateur#Additionneur');
const boutonSoustraction = document.querySelector('.operateur#Soustracteur');
const boutonMultiplicateur = document.querySelector('.operateur#Multiplicateur');
const boutonDiviseur = document.querySelector('.operateur#Diviseur');

//Les variables
var affichage = document.getElementById('chiffre');
var ValeurduChiffresurLecran;
var valeurAvantOperateur=0;
var nombreSansVirgule =true;
var OppAddCliqued = false;
var compteurDeClique=0;
var compteurDeCliqueResultat=0;
var boutonResultatCliqued = false
var resultat ;
var lastOpp;

//Cette fonction permet le controle de la saisie des chiffres
function valeurAlecran(chiffre ) {
    if(affichage.textContent == "0" || OppAddCliqued ){
        affichage.textContent = chiffre;
        OppAddCliqued=false;
        
    }
    else if(affichage.textContent != "0" &&  !OppAddCliqued){
        affichage.textContent += chiffre;
    }
    boutonResultatCliqued =false;
}
/*function ChangementDeCouleurAuClique(){
    if( OppAddCliqued){
        this.style.backgroundColor = "beige";
        this.style.color = "grey";
    }
    else{
        this.style.backgroundColor = "grey";
        this.style.color = "beige";
    }
   
}
*/

//Cette fonction permet la realisation des operarations 
function operations(nomOperateur){
    if(compteurDeClique==0){
        valeurAvantOperateur = parseFloat(affichage.textContent);
        compteurDeClique+=1;
        OppAddCliqued = true;
        lastOpp = nomOperateur;
        nombreSansVirgule=false;
    }
    else if(compteurDeClique>0 && !OppAddCliqued){
        if (nomOperateur=="addition")
        {
            resultat = valeurAvantOperateur + parseFloat(affichage.textContent) ;
        }
        else if(nomOperateur=="soustraction"){
            resultat = valeurAvantOperateur - parseFloat(affichage.textContent) ;
        }
        else if(nomOperateur=="multiplication"){
            resultat = valeurAvantOperateur * parseFloat(affichage.textContent)
        }
        else if(nomOperateur=="division"){
            resultat = valeurAvantOperateur / parseFloat(affichage.textContent)
        }
        affichage.textContent = resultat;
        valeurAvantOperateur = parseFloat(affichage.textContent);
        compteurDeClique+=1;
        OppAddCliqued = true;
        lastOpp = nomOperateur;
        nombreSansVirgule=false;
        boutonResultatCliqued =false;
    } 
}


// Les evennements associés aux boutons chiffres
boutonUn.addEventListener('click',function(){
    var chiffre = "1";
    valeurAlecran(chiffre);
    
})

boutonDeux.addEventListener('click',function(){
    var chiffre = "2";
    valeurAlecran(chiffre);
})

boutonTroix.addEventListener('click',function(){
    var chiffre = "3";
    valeurAlecran(chiffre);
})

boutonQuatre.addEventListener('click',function(){
    var chiffre = "4";
    valeurAlecran(chiffre);
})

boutonCinq.addEventListener('click',function(){
    var chiffre = "5";
    valeurAlecran(chiffre);
})

boutonSix.addEventListener('click',function(){
    var chiffre = "6";
    valeurAlecran(chiffre);
})

boutonSept.addEventListener('click',function(){
    var chiffre = "7";
    valeurAlecran(chiffre);
})

boutonHuit.addEventListener('click',function(){
    var chiffre = "8";
    valeurAlecran(chiffre);
})

boutonNeuf.addEventListener('click',function(){
    var chiffre = "9";
    valeurAlecran(chiffre);
})

boutonZero.addEventListener('click',function(){
    var chiffre = "0";
    valeurAlecran(chiffre);
})


// Les evennements associés aux boutons des fonctions
boutonAC.addEventListener('click',function(){
    affichage.textContent= "0";
    nombreSansVirgule =true;
    OppAddCliqued = false;
    valeurAvantOperateur=0;
    compteurDeClique=0; 
    resultat =0;
})
boutonSigneMoins.addEventListener('click', function(){
    if(affichage.textContent==0){
        affichage.textContent = "-";
    }
    else{
        affichage.textContent = "-"+affichage.textContent;
    }
})
boutonRacineCarre.addEventListener('click', function(){
    affichage.textContent = Math.sqrt(parseFloat(affichage.textContent));
})
boutonVirgule.addEventListener('click', function(){
    if(nombreSansVirgule){
        affichage.textContent+=".";
        nombreSansVirgule=false;
    }
})
boutonResultat.addEventListener('click', function(){
    if(!boutonResultatCliqued){
        switch(lastOpp){
            case "addition" : 
                resultat =valeurAvantOperateur + parseFloat(affichage.textContent);
                break;
            case "soustraction":
                resultat = valeurAvantOperateur - parseFloat(affichage.textContent);
                break;
            case "multiplication":
                resultat = valeurAvantOperateur * parseFloat(affichage.textContent);
                break;
            case "division":
                resultat = valeurAvantOperateur / parseFloat(affichage.textContent);
                break;
        }
        boutonResultatCliqued =true;
    }
    
    affichage.textContent = resultat;
    compteurDeClique = 0;
})


// Les evennements associes aux boutons des operarateurs
boutonAddition.addEventListener('click',function(){
   var nomOperateur = "addition";
   operations(nomOperateur);
   //ChangementDeCouleurAuClique.call(this);
})
boutonSoustraction.addEventListener('click', function(){
    var nomOperateur = "soustraction";
    operations(nomOperateur);
})
boutonDiviseur.addEventListener('click', function(){
    var nomOperateur = "division";
    operations(nomOperateur);
})
boutonMultiplicateur.addEventListener('click', function(){
    var nomOperateur = "multiplication";
    operations(nomOperateur);
})