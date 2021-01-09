// Istruzioni:
// Genera 10 mail tramite api e stampale in una lista
// Usate Vue e Axios.
// La richiesta AJAX per gli indirizzi email inviatela al seguente link:
// https://flynn.boolean.careers/exercises/api/random/mail
// La lista di email va stampata a schermo nella pagina html.

// Bonus (facolativo):
// Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
// Fate una cartella bonus.

let app = new Vue({
    el: '#root',
    data: {
        error: false,
        errorMessage: "",
        mailingList: [],
        length: 10,
    },
    methods:{},
    mounted(){
        for (let index = 0; index < this.length; index++) {
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            
            .then(response => {       
                const email = response.data.response;
                this.mailingList.push(email);
            })

            .catch(error => {
                console.log(error.response);
                const status = error.response.status;
                const statusText = error.response.statusText;
                this.errorMessage = `Error ${status} Page ${statusText}`;
                this.error = true;
            }) 
        }
    }
});
