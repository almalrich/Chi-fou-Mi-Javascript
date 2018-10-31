var choix=0;
var scorecpu=0;
var scoreutilisateur=0;
document.getElementById("pierre").addEventListener("click",
    function() {
            choix = 1;
           var choix_cpu = ordi();
           if (choix_cpu == 1) {
               document.getElementById('cpu').style.backgroundImage = "url('assets/img/Rock-paper-scissors_(rock).png')";
               document.getElementById('resultats').innerHTML="match nul";
           }
           if (choix_cpu==2)  {
               document.getElementById('cpu').style.backgroundImage = "url('assets/img/Rock-paper-scissors_(paper).png')";
               document.getElementById('resultats').innerHTML="cpu win";
               scorecpu++;
               document.getElementById('score cpu').innerHTML='cpu<br>' + scorecpu;
           }
           if (choix_cpu==3)  {
               document.getElementById('cpu').style.backgroundImage = "url('assets/img/Rock-paper-scissors_(scissors).png')";
               document.getElementById('resultats').innerHTML="utilisateur win";
               scoreutilisateur++;
               document.getElementById('score utilisateur').innerHTML='utilisateur<br>' + scoreutilisateur;
           }




    }
        );
document.getElementById("papier").addEventListener("click",
    function() {
        choix = 2;
        choix_cpu = ordi();
       if (choix_cpu==1)  {
           document.getElementById('cpu').style.backgroundImage = "url('assets/img/Rock-paper-scissors_(rock).png')";
           document.getElementById('resultats').innerHTML="utilisateur win";
           scoreutilisateur++;
           document.getElementById('score utilisateur').innerHTML='utilisateur<br>' + scoreutilisateur;
       }
       if (choix_cpu==2)  {
           document.getElementById('cpu').style.backgroundImage = "url('assets/img/Rock-paper-scissors_(paper).png')";
           document.getElementById('resultats').innerHTML="match nul";
       }
       if (choix_cpu==3)  {
           document.getElementById('cpu').style.backgroundImage = "url('assets/img/Rock-paper-scissors_(scissors).png')";
           document.getElementById('resultats').innerHTML="cpu win";
           scorecpu++;
           document.getElementById('score cpu').innerHTML='cpu<br>' + scorecpu;
       }
    }
);
document.getElementById("ciseaux").addEventListener("click",
    function()  {
           choix = 3;
         choix_cpu = ordi();
       if (choix_cpu==1)  {
           document.getElementById('cpu').style.backgroundImage = "url('assets/img/Rock-paper-scissors_(rock).png')";
           document.getElementById('resultats').innerHTML="cpu win";
           scorecpu++;
           document.getElementById('score cpu').innerHTML='cpu<br>' + scorecpu;
       }
       if (choix_cpu==2)  {
           document.getElementById('cpu').style.backgroundImage = "url('assets/img/Rock-paper-scissors_(paper).png')";
           document.getElementById('resultats').innerHTML="utilisateur win";
           scoreutilisateur++;
           document.getElementById('score utilisateur').innerHTML='utilisateur<br>' + scoreutilisateur;
       }
       if (choix_cpu==3)  {
           document.getElementById('cpu').style.backgroundImage = "url('assets/img/Rock-paper-scissors_(scissors).png')";
           document.getElementById('resultats').innerHTML="match nul";
       }
    }
);

function ordi(){
    return Math.floor(Math.random() * 3) + 1;
}