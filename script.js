// fonction pour initialiser les repepence
function initialiser() {
  const inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
  inputs.forEach(input => input.checked = false);
  alert("Le quiz a été réinitialisé !");
}

// fonction pour afficher les repence de  coriger
function corriger() {
  let resultat = "";
  let score = 0;
  const total = 5; 


  const capital = document.querySelector('input[name="capital"]:checked');
  if (capital && capital.value === "paris") {
    resultat +=  `<span class="correct">Q1 : La réponse est correcte.</span><br>`;
    score++;
  } else {
     resultat += `<span class="incorrect"> Q1 : La réponse est incorrecte.</span><br>`;
  }


  const os = document.querySelector('input[name="os"]:checked');
  if (os && os.value === "linux") {
   resultat +=  `<span class="correct">Q2 : La réponse est correcte.</span><br>`;
    score++;
  } else {
    resultat += `<span class="incorrect"> Q2 : La réponse est incorrecte.</span><br>`;
  }


  const afrique = document.querySelectorAll('input[name="afrique"]:checked');
  const valeursAfrique = Array.from(afrique).map(el => el.value);
  if (valeursAfrique.includes("maroc") && valeursAfrique.includes("mali") && !valeursAfrique.includes("allemagne")) {
   resultat +=  `<span class="correct">Q3: La réponse est correcte.</span><br>`;
    score++;
  } else {
     resultat += `<span class="incorrect"> Q3 : La réponse est incorrecte.</span><br>`;
  }

  
  const compile = document.querySelectorAll('input[name="compile"]:checked');
  const valeursCompile = Array.from(compile).map(el => el.value);
  if (valeursCompile.includes("c") && valeursCompile.includes("assembly") && !valeursCompile.includes("html")) {
 resultat +=  `<span class="correct">Q4 : La réponse est correcte.</span><br>`;
    score++;
  } else {
    resultat += `<span class="incorrect"> Q4 : La réponse est incorrecte.</span><br>`;
  }


  const interprete = document.querySelectorAll('input[name="interprete"]:checked');
  const valeursInterprete = Array.from(interprete).map(el => el.value);
  if (valeursInterprete.includes("python") && valeursInterprete.includes("javascript") && valeursInterprete.includes("ruby")) {
 resultat +=  `<span class="correct">Q5 : La réponse est correcte.</span><br>`;
    score++;
  } else {
   resultat += `<span class="incorrect">Q5 : La réponse est incorrecte.</span><br>`;
  }


  const fenetre = window.open("", "Résultats du test", "width=500,height=400");
  fenetre.document.writeln(`
    <html>
      <head>
        <title>Résultats</title>
        <style>
          body { font-family: Arial; padding: 20px; line-height: 1.6; }
          h2 { text-align: center; color: #250FEEFF ; }
          p { font-size: 17px; }
          .score { text-align: center; font-weight: bold; margin-top: 15px; font-size: 18px; }
          .correct { color: green; font-weight: bold; }
        .incorrect { color: red; font-weight: bold; }
        </style>
      </head>
      <body>
        <h2>Résultats du test</h2>
        <p>${resultat}</p>
        <div class="score">Votre score : ${score} / ${total}</div>
      </body>
    </html>
  `);
  fenetre.document.close();
  setTimeout(() => {
    fenetre.resizeTo(500, fenetre.document.body.scrollHeight + 100);
  }, 200);
}


function afficherCorrige() {
  const fenetre = window.open("", "Corrigé du test", "width=500,height=400");
  fenetre.document.writeln(`
    <html>
      <head>
        <title>Corrigé</title>
        <style>
          body { font-family: Arial; padding: 20px; line-height: 1.6; }
          h2 { text-align: center; color: #2c3e50; }
          ul { font-size: 17px; }
           strong{
          color: #0EF40EFF;
          }
        </style>
      </head>
      <body>
        <h2>Corrige du test</h2>
        <ul>
          <li>Q1 : Capitale de la France → <strong>Paris</strong></li>
          <li>Q2 : Système open source → <strong>Linux</strong></li>
          <li>Q3 : Pays d’Afrique → <strong>Maroc</strong> et <strong>Mali</strong></li>
          <li>Q4 : Langages compilés → <strong>Assembly</strong> et <strong>C</strong></li>
          <li>Q5 : Langages interprétés → <strong>Java</strong> et <strong>Dart</strong></li>
        </ul>
      </body>
    </html>
  `);
  fenetre.document.close();
  setTimeout(() => {
    fenetre.resizeTo(500, fenetre.document.body.scrollHeight + 100);
  }, 200);
}
