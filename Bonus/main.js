// Istruzioni:
// Genera 10 mail tramite api e stampale in una lista
// Usate Vue e Axios.
// La richiesta AJAX per gli indirizzi email inviatela al seguente link:
// https://flynn.boolean.careers/exercises/api/random/mail
// La lista di email va stampata a schermo nella pagina html.

// Bonus (facolativo):
// Generate una Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero
// random da 1 a 9.
// Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
// Fate una cartella bonus.

let app = new Vue({
    el: '#root',
    data: {
        error: false,
        errorMessage: "",
        boxes: [], 
        boxesLength: 36,
        number: 0,
        counter: 0,
    },
    methods:{
        get: function(counter, list) {
            this.counter = counter;
            this.request();
            // Se il counter passato dal click coincide con l'index dell'array, il numero random richiesto viene aggiunto all'array. 
            const newList = list.map((element, index) => {
                if (index === counter) {
                    return element = this.number;
                }
                else{
                    return element;
                }
            })
            //L'array viene aggiornato 
            this.boxes = newList;
            console.log(newList);
        },
        request: function() {
            //request
            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
                
            .then(response => {       
                this.number = response.data.response;
            })
            
            .catch(error => {
                const status = error.response.status;
                const statusText = error.response.statusText;
                this.errorMessage = `Error ${status} Page ${statusText}`;
                this.error = true;
            })
        },
    },
    
    created(){
        //Crea l'array boxes. 
        for (let index = 0; index < this.boxesLength; index++) {
            this.boxes[index] = 0;
        }
    },

    mounted(){
        //Effettua la prima richiesta AJAX al caricamento della pagina.
        this.get(this.counter, this.boxes);
    }
    
});


