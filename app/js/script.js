let searchBtn = document.querySelector('.btn-search'),
    randomBtn = document.querySelector('.btn-random');
    
searchBtn.addEventListener('click', () => {
  let searchValue = document.querySelector('.search-input').value,
      xhr = new XMLHttpRequest(),
      method = "GET",
      url = `https://en.wikipedia.org/w/api.php?action=query&titles=${searchValue}&origin=*&prop=revisions&rvprop=content&format=json`;

  xhr.open(method, url, true);
  // xhr.setRequestHeader("Origin", "http://localhost:3000/");
  xhr.onreadystatechange = function () {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

      let response = JSON.parse(xhr.responseText);
      console.log(response.query.pages);

    }
  };
  xhr.send();
})