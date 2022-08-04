const textToUser = document.querySelector('#text-to-user');
const userName = document.querySelector('#user-name');
const buttonSubmit = document.querySelector('#button-submit');

function whatName() {
    nameDefault = userName.value;
    if (
        nameDefault == 'Thaíse' ||
        nameDefault == 'Thaise' ||
        nameDefault == 'thaíse' ||
        nameDefault == 'thaise' ||
        nameDefault == 'taise' ||
        nameDefault == 'Biu' ||
        nameDefault == 'Bio'
    ) {
        textToUser.textContent = 'Minha namorada';
    } else if (
        nameDefault == 'Lucas' ||
        nameDefault == 'lucas' ||
        nameDefault == 'Gabriel silva' ||
        nameDefault == 'Lucas Silva' ||
        nameDefault == 'lucas silva'
    ) {
        textToUser.textContent = 'Meu criador';
    } else if (
        nameDefault == 'Silas' ||
        nameDefault == 'silas' ||
        nameDefault == 'Wenders' ||
        nameDefault == 'wenders'
    ) {
        textToUser.textContent = 'Ele é meu amigo!';
    } else if (
        nameDefault == 'thalyssa' ||
        nameDefault == 'Thalyssa' ||
        nameDefault == 'thaty' ||
        nameDefault == 'Thaty' ||
        nameDefault == 'taty' ||
        nameDefault == 'Taty' ||
        nameDefault == 'thayane' ||
        nameDefault == 'Thayane' ||
        nameDefault == 'thayanne' ||
        nameDefault == 'Thayanne' ||
        nameDefault == 'Vitória'
    ) {
        textToUser.textContent = 'Ela é minha amiga';
    } else if (nameDefault == 0) {
        textToUser.textContent = 'Digite um nome!';
    }
    
    else {
        textToUser.textContent = 'Não sei quem é, Acho que não lembro :[';
    }
}

buttonSubmit.addEventListener('click', whatName);
userName.addEventListener('keyup', whatName);
