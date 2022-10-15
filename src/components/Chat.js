import React from 'react';
import '../assets/Chat.css';
import Form from "./ChatBox/Form";

const Chat = () => {
    return (
        <div className="Chat">
            <h3>TODO LIST</h3>
            <ol>
                <li>Sur la liste des utilisateurs (à gauche - UserList.js), utiliser des props pour mettre des noms différents</li>
                <li>Sur la liste des utilisateurs (à gauche - UserDetail.js), utiliser des states pour mettre la pastille en rouge ou noir (class css active ou inactive)</li>
                <li>Au clic sur le menu burger, réduire la taille de la fenètre de gauche en ne laissant que les icones</li>
                <li>Créer un composant fonctionnel pour la partie qui va recevoir les messages</li>
                <li>Lorsque l'on soumet le formulaire, mettre le contenu du texte de l'input dans la partie chat, positionné à droite</li>
                <li>Lorsque l'on soumet le formulaire, mettre du contenu lorem ipsum, pour simuler une réponse, positionné à gauche</li>
            </ol>


            <Form />
        </div>
    );
}

export default Chat;