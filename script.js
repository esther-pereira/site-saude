const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

document.getElementById('calcular').addEventListener('click', () => {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    if (peso && altura) {
        const imc = peso / (altura * altura);
        let categoria;

        if (imc < 18.5) categoria = 'Abaixo do peso';
        else if (imc < 24.9) categoria = 'Peso Normal';
        else if (imc < 29.9) categoria = 'Acima do peso';
        else categoria = 'Obeso';

        document.getElementById('resultado').innerText = `Seu IMC é ${imc.toFixed(2)}: ${categoria}`;
    } else {
        alert('Insira todas as suas informações e cuidado com a vírgula');
    }

});
