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
        boxesLength: 36,
        number: 1,
        boxes: [], 
        counter: 0,
        color: false,
    },
    methods:{
        request: function(counter, list) {
            let number;
            this.counter = counter;
            console.log("counter "+ counter);
            
            //request
            axios.get('https://flynn.boolean.careers/exercises/api/random/int')
            
            .then(response => {       
                number = response.data.response;
                this.number = number;
            })
            
            .catch(error => {
                console.log(error.response);
                const status = error.response.status;
                const statusText = error.response.statusText;
                this.errorMessage = `Error ${status} Page ${statusText}`;
                this.error = true;
            })
            
            const newList = list.map((element, index) => {
                if (index === counter) {
                    console.log("box " + element);
                    return element = this.number;
                }
            })
            this.boxes = newList;
            console.log(newList);
        },
    },
    
    created(){
        for (let index = 0; index < this.boxesLength; index++) {
            this.boxes[index] = 0;
            //console.log(this.boxesLength);
        }
    },
    
});

// [    0, 0, 0, 0, 0, 0, 0, 0, 0, 
//     0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 0, 0, 0, 0, 0, 0, 0,
// ],

