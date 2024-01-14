# Introduction

`password-manager.js` is a minimalistic password manager. It can encrypt and decrypt passwords (or other text) using AES-256. Because it is written in Javascript, the code runs in your browser and does not send your data to any servers! But don't take my word for it: Check the source code! It is only 50 lines long ;) 

Because `password-manager.js` uses [opengpg.js](https://github.com/openpgpjs/openpgpjs) under the hood it is compatible with other tools, which support the OpenPGP standard (like [GnuPG](https://www.gnupg.org/)). You can decrypt a file encrypted by `password-manager.js` with `GnuPG` using this command: `gpg --no-symkey-cache -o decrypted.txt -d passwords.pgp.asc` (you will be prompted for your master password).

# Why use password-manager.js

- It works on all devices (if they can install a browser).
- It uses well-established standards: AES-265 and OpenPGP.
- It has a single dependency, which is being actively developed and has been audited for security: [opengpg.js](https://github.com/openpgpjs/openpgpjs).
- It is simple: 50 lines of Javascript code plus boilerplate HTML and CSS.
- It is small: 1.5 MB including the non-minified dependency code.
- It is portable: Just copy the repository anywhere you want.

# How to use

To encrypt your passwords:
1. Open `index.html`.
2. Type your passwords (or other text) into the large text box.
3. Write a secure master password (>22 characters; letters, numbers and symbols) into the password field.
4. Click "Encrypt & download".
5. Store the encrypted file on your computer or anywhere in the cloud.

To read your passwords at a later time:
1. Open `index.html`.
2. Click "Browse..." and choose the encrypted file.
3. Type the master password into the password field.
4. Click "Decrypt".

# How it works

`password-manager.js` is merely a graphical user interface. All the cryptography is handled by [opengpg.js](https://github.com/openpgpjs/openpgpjs) (which in turn uses the [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API) if your browser is up-to-date). `openpgp.js` is maintained by [Proton Mail](https://proton.me/blog/openpgpjs-email-encryption) and has undergone two security audits. I personally consider it safe for the use case of storing passwords (when using a secure master password!).

# Disclaimer

This project has not been audited for security. I am not a security researcher and although I am using `password-manager.js` myself, there might be security issues with the code in this project or its dependencies. Make sure to keep a copy of your master password in a secure place. Neither your master password, nor the entered clear text, nor the encrypted data will be sent to any servers. Data WILL be permanently lost if you lose your master password. Use at your own risk!
