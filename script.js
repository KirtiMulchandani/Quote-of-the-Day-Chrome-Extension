fetch("https://api.quotable.io/random")
     .then(data => data.json())
     .then(quoteData => {
         const quote = quoteData.content;
         document.getElementById('quoteElement').innerHTML = quote;;
     })