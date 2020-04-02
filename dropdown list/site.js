function keyPressOnInput() {
    div = document.getElementsByTagName('div');
    myInput = document.querySelector('.dropInput');
    myUl = document.querySelector('.dropContent');
    //myUl.style.display = 'block';
    myLi = myUl.querySelectorAll('li');
    arr = myUl.querySelectorAll('li');
    let span = document.createElement('span');
    document.body.append(span);
    //let country = '';
    
    for (i = 1; i < arr.length; i++) {
      //country.innerHTML = arr[i].innerHTML;
      span.innerHTML = arr[i].innerHTML;
      //span.innerHTML += arr[i].innerHTML;
      myInput.innerHTML = span.innerHTML;
    }
    
    console.log(span);
  }