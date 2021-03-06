const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://github.com/rebeccaliiz/gne-spider/prePhoenixFields.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const prePhxVars = request.response;
  populateHeader(prePhxVars);
  showVars(prePhxVars);
}

function populateHeader(obj) {
  const myH1 = document.createElement('h1');
  myH1.textContent = 'PrePhoenix Time/Conc Variables';
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  myPara.textContent = 'Subheader here...';
  header.appendChild(myPara);
}

function showVars(obj) {
  const prePhxVars = obj['variables'];

  for (let i = 0; i < prePhxVars.length; i++) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myList = document.createElement('ul');

    myH2.textContent = prePhxVars[i].variable_name;
    myPara1.textContent = 'Data Type: ' + prePhxVars[i].data_type;
    myPara2.textContent = 'Origin: ' + prePhxVars[i].origin;
    myPara3.textContent = 'CRO Origin:';

    const origins = prePhxVars[i].origin;
    for (let j = 0; j < origins.length; j++) {
      const listItem = document.createElement('li');
      listItem.textContent = origins[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}