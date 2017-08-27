let searchBtn = document.querySelector('.btn-search'),
    randomBtn = document.querySelector('.btn-random');
    
searchBtn.addEventListener('click', () => {
  let searchValue = document.querySelector('.search-input').value,
      xhr = new XMLHttpRequest(),
      method = "GET",
      url = `https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&generator=search&gsrsearch=${searchValue}&prop=extracts&exlimit=max&explaintext=1&exintro=1&exsentences=1`;
      console.log(url);
      

  xhr.open(method, url, true);
  // xhr.setRequestHeader("Origin", "http://localhost:3000/");
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

      let response = JSON.parse(xhr.responseText);
      let pages = Object.values(response.query.pages);
      for(let i = 0; i < pages.length; i++) {
        console.log(pages[i].title);
        console.log(pages[i].extract);
      }
    }
  };
  xhr.send();
})
