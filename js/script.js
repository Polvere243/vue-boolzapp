// controllo la connessione coll'html
console.log("Vue Ok", Vue);

// destrutturo gli oggetti che mi servono

const {user, contacts} = data;

const {createApp} = Vue;

const app = createApp({
    data () {
        return{
            user,
            contacts

        }
    }
})

app.mount("#root");