let textArea = document.querySelector('.textArea');
let btn = document.querySelector('.btn');
let simbol = document.querySelector('.simbol');
let word = document.querySelector('.word');
let sentence = document.querySelector('.sentence');
let letter = document.querySelector('.letter'); 


function uniqueChar (text) {
    let uniqueChars = new Set(text);
    return uniqueChars.size; 
}

function countChars(text) {  
    console.log(text.split("").reduce((r, c) => (r[c] = (r[c] || 0) + 1, r), {}));
    return text.split("").reduce((r, c) => (r[c] = (r[c] || 0) + 1, r), {})
}

btn.addEventListener('click', function(){
    const res = String(textArea.value);
    simbol.innerHTML = 'Количество символов: ' + res.length;
    word.innerHTML = 'Количество слов: ' + res.split(' ').length;
    sentence.innerHTML = 'Количество предложений: ' + res.split('.').length;
    let uniqueCharCount = uniqueChar(res);
    letter.innerHTML = 'Количество уникальных букв: ' + uniqueCharCount;
   
      const ctx = document.getElementById('myChart');
      const textData = countChars(res);
      new Chart(ctx, {
          type: 'bar',
          data: {
            labels: Object.keys(textData),
            datasets: [{
              label: '# of Votes',
              data: Object.values(textData),
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }
        });

});





  


 

  
 
  
  
