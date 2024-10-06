// Función para crear e insertar la tarjeta dinámicamente
function CardForumInsert({title, body}) {
    // Crear el contenedor principal de la tarjeta
    const card = document.createElement('div');
    card.className = 'card w-75 mb-3';

    // Crear el cuerpo de la tarjeta
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Crear el título de la tarjeta
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = title;

    // Crear el texto de la tarjeta
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = body;

    // Crear el contenedor de botones
    const containerBtnCard = document.createElement('div');
    containerBtnCard.className = 'container-btn-card';

    // Crear el botón de "Ir al sitio"
    const btnIrAlSitio = document.createElement('a');
    btnIrAlSitio.href = '#';
    btnIrAlSitio.className = 'btn btn-primary';
    btnIrAlSitio.textContent = 'Ir al sitio';

    // Crear el enlace de "Mensajes"
    const enlaceMensajes = document.createElement('a');
    enlaceMensajes.href = '#';
    enlaceMensajes.textContent = 'Mensajes';

    // Insertar los elementos en el contenedor de botones
    containerBtnCard.appendChild(btnIrAlSitio);
    containerBtnCard.appendChild(enlaceMensajes);

    // Insertar el título, el texto y el contenedor de botones en el cuerpo de la tarjeta
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(containerBtnCard);

    // Insertar el cuerpo de la tarjeta en la tarjeta
    card.appendChild(cardBody);

    // Insertar la tarjeta en el DOM, por ejemplo, en un contenedor con el id 'contenedor'
    document.getElementById('forum-app').appendChild(card);
}

// Llamar a la función para insertar la tarjeta cuando sea necesario


cardDataForum.forEach(forum => {
    CardForumInsert({
        title: forum.title,
        body: forum.body
    });
    console.log(forum.title);
    
});

