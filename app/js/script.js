let searchBtn = document.querySelector('.btn-search'),
    randomBtn = document.querySelector('.btn-random');
    
searchBtn.addEventListener('click', (e) => {
	e.preventDefault();
  let searchValue = document.querySelector('.search-input').value,
      xhr = new XMLHttpRequest(),
      method = "GET",
      url = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=search&gsrsearch=${searchValue}&prop=extracts&exlimit=max&explaintext=1&exintro=1&exsentences=1`;
      console.log(url);
      

  xhr.open(method, url, true);
  // xhr.setRequestHeader("Origin", "http://localhost:3000/");
	let results = document.querySelector('.results');
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

      let response = JSON.parse(xhr.responseText);
			let pages = Object.values(response.query.pages);

			console.table(pages);
			results.removeChild('a');

      for(let i = 0; i < pages.length; i++) {
				let result = document.createElement('a');
				// result.innerHTML = `<h2>${pages[i].title}</h2><p>${pages[i].extract}</p>`;
				result.setAttribute('class', 'result');
				result.setAttribute('href', `https://en.wikipedia.org/?curid=${pages[i].pageid}`);
				result.setAttribute('target', '_blank');
				result.innerHTML = `<h2>${pages[i].title}</h2><p>${pages[i].extract}</p>`;
				results.appendChild(result);
			}
			
    }
  };
  xhr.send();
})
