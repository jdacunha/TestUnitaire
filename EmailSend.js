function sendEmail(email, objet, body) {
    //code pour envoi d'email
    console.log(`Email envoyé à ${email} avec comme object: ${objet} et comme contenu ${body}`);
    return true;
};

module.exports = {sendEmail}