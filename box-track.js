    const episodes = [
        { title: 'Empregabilidade tecnológica', description: 'Com Luana Alves', image: './img/ep1.svg', audio: 'audio1.mp3' },
        { title: 'Segurança e Privacidade na Web', description: 'Com João Silva', image: './img/ep2.svg', audio: 'audio2.mp3' },
        { title: 'Acessibilidade Digital', description: 'Com Maria Oliveira', image: './img/ep3.svg', audio: 'audio3.mp3' },
        { title: 'Inovação e Criatividade', description: 'Com Carla Santos', image: './img/ep4.svg', audio: 'audio4.mp3' },
        { title: 'Inovação e Criatividade', description: 'Com Carla Santos', image: './img/ep5.svg', audio: 'audio4.mp3' },
        { title: 'Inovação e Criatividade', description: 'Com Carla Santos', image: './img/ep6.svg', audio: 'audio6.mp3' },
        { title: 'Inovação e Criatividade', description: 'Com Carla Santos', image: './img/ep7.svg', audio: 'audio7.mp3' },
        { title: 'Inovação e Criatividade', description: 'Com Carla Santos', image: './img/ep8.svg', audio: 'audio8.mp3' }
    ];

    const upColumns = document.querySelectorAll('.up-column');
    const dowColumns = document.querySelectorAll('.dow-column');

    function createBox(episode) {
        const box = document.createElement('div');
        box.classList.add('box');

        box.innerHTML = `
            <img src="${episode.image}" alt="${episode.title}" class="box-image">
            <div class="box-content">
                <div class="title-box">
                    <p>${episode.title}, ${episode.description}</p>
                </div>
                <div class="complement-box">
                    <audio controls class="box-audio">
                        <source src="${episode.audio}" type="audio/mpeg">
                    </audio>
                </div>
            </div>
        `;

        return box;
    }

    episodes.forEach((episode, index) => {
        const box = createBox(episode);
        if (index % 4 < 2) {
            upColumns[Math.floor(index / 4)].appendChild(box);
        } else {
            dowColumns[Math.floor(index / 4)].appendChild(box);
        }
    });
