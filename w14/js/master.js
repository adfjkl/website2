const philosophy = ['탈레스', '아낙시만드르로스', '아낙시메네스','헤라클레이토스','제논','멜리소스','데모크리토스','피타고라스','플라톤','소크라테스']
        const images = ['Thalles.jpg','Anaximander.jpg','Anaximenes.jpg','Heraclitus.jpg','Zenon.jpg','Melissus.jpg','Democritus.jpg','피타고라스.jpg','Plato.jpg','Socrates.jpg']
        var i = 0;
  
      while (i < philosophy.length) {
        document.write('<li><a href="https://en.wikipedia.org/wiki/Western_philosophy#Continental_philosophy' + philosophy[i] + '">' + philosophy[i] + '</li>');
          i = i + 1;
        
        document.write('<img src="' + images[i-1] +'">');
        
      }