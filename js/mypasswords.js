const DEFAULT_FILENAME = "passwords.pgp.asc";

let armoredMessage = null,
    filename = null;

async function readArmoredMessage() {
    const file = document.getElementById("in-ciphertext").files[0];
    filename = file.name;
    const reader = new FileReader();
    reader.onload = function (event) {
        armoredMessage = event.target.result;
    };
    reader.readAsText(file);
}

async function decryptArmoredMessage() {
    const encryptedMessage = await openpgp.readMessage({
        armoredMessage: armoredMessage
    });
    const { data: decrypted } = await openpgp.decrypt({
        message: encryptedMessage,
        passwords: document.getElementById('in-password').value,
    });
    document.getElementById("in-cleartext").value = decrypted;
};

async function encryptClearText() {
    const message = await openpgp.createMessage({ text: document.getElementById("in-cleartext").value });
    const encrypted = await openpgp.encrypt({
        message,
        passwords: document.getElementById('in-password').value,
        format: 'armored'
    });
    createAndDownloadBlobFile({
        content: encrypted,
        filename: filename || DEFAULT_FILENAME,
    });
};

function createAndDownloadBlobFile({ content, filename }) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};