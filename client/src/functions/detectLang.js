function DetectLanguage(){
    if(!window.sessionStorage.getItem('lang')){
        window.sessionStorage.setItem('lang', 'ru');
      }
    
    return window.sessionStorage.getItem('lang');
}

export default DetectLanguage;