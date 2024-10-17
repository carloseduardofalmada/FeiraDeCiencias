// Array com os personagens e suas descrições, agora com os links para as páginas
const characters = [
    {
        name: 'Abdias do Nascimento',
        img: 'abadias.jpg',
        desc: 'Abdias do Nascimento (1914-2011) foi um influente ativista, artista e político brasileiro, nascido em Franca, São Paulo. Ele lutou contra o racismo e a intolerância religiosa, fundando, em 1944, o Teatro Experimental do Negro, que valorizou a cultura afro-brasileira e deu visibilidade a artistas negros, promovendo debates sobre identidade e resistência.',
        link: 'abdias.html' // Página do Abdias
    },
    {
        name: 'Zumbi dos Palmares',
        img: 'zumbi-dos-palmares.jpg',
        desc: 'Zumbi dos Palmares foi um líder quilombola no Brasil colonial, representando a resistência negra contra a escravidão e é um ícone na luta pela liberdade. Ele liderou o Quilombo dos Palmares, uma das mais importantes comunidades negras da época.',
        link: 'zumbi.html' // Página do Zumbi dos Palmares
    },
    {
        name: 'Adhemar Ferreira',
        img: 'adhemar.jpg',
        desc: 'Adhemar Ferreira da Silva foi um atleta brasileiro que deixou um legado inesquecível no atletismo mundial, especialmente no salto triplo. Ele é considerado um dos maiores atletas olímpicos do Brasil e o primeiro brasileiro a conquistar duas medalhas de ouro olímpicas em provas individuais. Seus feitos o transformaram em um ícone do esporte brasileiro, inspirando gerações de atletas.',
        link: 'adhemar.html' // Página do Adhemar Ferreira
    }
];

// Variável para armazenar o índice do personagem atual
let currentIndex = 0;

// Seleciona os elementos HTML pelos IDs
const charImg = document.getElementById('charImg');
const charName = document.getElementById('charName');
const charDesc = document.getElementById('charDesc');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const charLink = document.getElementById('charLink');

// Função que aplica a animação de transição
function fadeOutIn(callback) {
    charImg.style.transition = "opacity 0.6s ease-in-out, transform 0.6s ease-in-out";
    charName.style.transition = "opacity 0.6s ease-in-out";
    charDesc.style.transition = "opacity 0.6s ease-in-out";

    charImg.style.opacity = 0;
    charName.style.opacity = 0;
    charDesc.style.opacity = 0;
    charImg.style.transform = "scale(0.95)";

    setTimeout(() => {
        callback();
        charImg.style.opacity = 1;
        charName.style.opacity = 1;
        charDesc.style.opacity = 1;
        charImg.style.transform = "scale(1)";
    }, 300);
}

// Função que atualiza o conteúdo exibido
function updateCharacter(index) {
    fadeOutIn(() => {
        charImg.src = characters[index].img;
        charName.textContent = characters[index].name;
        charDesc.textContent = characters[index].desc;
        charLink.href = characters[index].link; // Atualiza o link da imagem
    });
}

// Função para ir para o próximo personagem
function nextCharacter() {
    currentIndex = (currentIndex + 1) % characters.length;
    updateCharacter(currentIndex);
}

// Função para voltar ao personagem anterior
function prevCharacter() {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    updateCharacter(currentIndex);
}

// Event listeners para os botões de navegação
nextButton.addEventListener('click', nextCharacter);
prevButton.addEventListener('click', prevCharacter);

// Inicializa com o primeiro personagem
updateCharacter(currentIndex);
