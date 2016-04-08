var cpt = 4;
var i = 0;
var j = 0;

$('.choixdescarte').hide();
setInterval(function chrono(){
    --cpt;
    if(cpt==3){
        $('.chrono').text(cpt+' Shii');
    }
    if(cpt==2){
        $('.chrono').text(cpt+' Fuu');
    }
    if(cpt==1){
        $('.chrono').text(cpt+' Miiiiiii!!!!!!');
    }
    if(cpt==0){
      clearTimeout(cpt);
      $('.choixdescarte').show();
    }

}, 1000);

var debut = cpt;

var jeudecarte = ["img/pierre.png","img/feuille.png","img/ciseaux.png"];


function tirage() {

  carteAleatoire = Math.floor(Math.random()*jeudecarte.length);

  var carteordinateur = jeudecarte[carteAleatoire];

  $('.carteordinateur').attr({src:carteordinateur});

  return carteAleatoire;
}



function choix(objImg){

  $('.cartechoisie').attr({src:objImg});

}

function compare(not){
if((not==0) && (carteAleatoire==2) || (not==1) && (carteAleatoire==0) || (not==2) && (carteAleatoire==1))
{ i++
  $('.mespoint').text('Vous avez '+ i +' point');
  $('h2').text('Vous avez gagné!!!!!');
  cpt = 4;
  $('.nchoixdescarte').hide();
return;}
if ((carteAleatoire==0) && (not==2) || (carteAleatoire==1) && (not==0) || (carteAleatoire==2) && (not==1))
{ j++
  $('.pointordinateur').text("L'ordinateur a "+ j +" point");
  $('h2').text("L'ordinateur a gagné!!!!!");
  cpt = 4;
  $('.choixdescarte').hide();
return;}
else{$('h2').text('Egalité!!!!!');
cpt = 4;
$('.choixdescarte').hide();
return;}
}
