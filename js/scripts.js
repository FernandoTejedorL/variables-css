const rootStyles = document.documentElement.style;
const buttonElement = document.getElementById('button');

//rootStyles.setProperty(nombreVariable, nuevoValor)

rootStyles.setProperty('--bg-color', 'blue')

const changeBoxSize = () => {
    const randomWidth = Math.floor(Math.random() * 500);
    const randomHeight = Math.floor(Math.random() * 500);
    rootStyles.setProperty('--box-height', randomHeight + 'px');
    rootStyles.setProperty('--box-width', randomWidth + 'px');
}

buttonElement.addEventListener('click', changeBoxSize);