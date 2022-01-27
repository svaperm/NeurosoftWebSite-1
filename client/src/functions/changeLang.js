function ChangeLanguage(){
  
    let lang_select = document.querySelector('.lang-select');

    let lang = lang_select.value;

    window.sessionStorage.setItem('lang', lang);

    window.location.reload();

   /* if(lang_select){
      lang_select.addEventListener('change', ChangeLanguage);
    }

    for (let key in langArr) {
      let elem = document.querySelector('.lng-' + key);
      if (elem) {
        elem.innerHTML = langArr[key][lang];
      }
    }*/
  }

  export default ChangeLanguage;