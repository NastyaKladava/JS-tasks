function showDropContent(){
    document.querySelector('.dropContent').classList.toggle('show');
  }

  let myButton = document.querySelector('.dropButton');
  let myInput = document.querySelector('.dropInput');
  let myContent = document.querySelector('.dropContent');
  let ul = document.createElement('ul');
  myContent.append(ul);
  ul.innerHTML = '';
  let arr = [
    'Asia',
    'Africa',
    'Europe',
    'North America',
    'South America',
    'Antarctica/Oceania',
    'Austrelia'
  ];

  /*for (let i = 0; i < arr.length; i++) {
      ul.innerHTML += `<li>${arr[i]}</li>`;
      
  };*/

  function onInputPress() {
    ul.innerHTML = '';
    if (myInput.value != '') {
      let filter = myInput.value.toUpperCase();
      let matches = arr.filter(function(item) {
        if (item.startsWith(filter)) {
          return true;
        } else {
          return false;
        }
      });
      if (matches.length > 0) {
        for (let match of matches) {
          let li = document.createElement('li');
          li.innerHTML = match;
          ul.append(li);
          
          li.addEventListener('click', function() {
            myInput.value = li.innerHTML;
            ul.innerHTML = '';
          });
        }
      }
    }
  };