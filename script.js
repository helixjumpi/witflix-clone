
document.addEventListener('DOMContentLoaded', () => {
    console.log("WitFlix sayfası yüklendi!");

   
    const playButtons = document.querySelectorAll('.play-button');

    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            console.log("Play butonuna tıklandı!");
            
        });
    });

});