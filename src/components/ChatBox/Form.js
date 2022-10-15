import React from 'react';
import '../../assets/Form.css';

const Form = () => {
    return (
        <div className="Form">
            <label>
                Ecris ton texte
                <input id="text-zone" name="text-zone" placeholder="Ecris ton texte" />
            </label>
            <button type="submit" id="send">Envoyer</button>
        </div>
    );
}

export default Form;