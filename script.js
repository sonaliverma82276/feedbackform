const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbxOfHuifft99ADH4h5pJlVZEgbRxjDAdrwleRDIReTuMX8BdkzexUDEuoUIeP9jvJsRpA/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response)
        var inputs = form.getElementsByTagName('input');
        for (var i = 0; i<inputs.length; i++) {
            switch (inputs[i].type) {
                case 'text':
                  case 'email' :
                    inputs[i].value = '';
                    break;
                case 'radio': 
                inputs[i].checked = false;    
            }
        }

        var text= form.getElementsByTagName('textarea');
        for (var i = 0; i<text.length; i++)
            text[i].value= '';
        document.getElementById('confirm').style.display="block";
    
    })
      .catch(error => console.error('Error!', error.message))
  })