document.addEventListener("DOMContentLoaded",()=>{
    const form =document.getElementById("loginform");
    if(form){
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            localStorage.setItem('studentName', document.getElementById('name').value);
            window.location.href="home.html";
        });
    }

    const welcome = document.getElementById('welcome');
    if(welcome){
    welcome.textContent = 'WELCOME, ' + localStorage.getItem('studentName');
    }
});
