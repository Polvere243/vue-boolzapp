// controllo la connessione coll'html
console.log("Vue Ok", Vue);

// destrutturo gli oggetti che mi servono

const { user, contacts } = data;

const { messages } = contacts;
console.log(messages);

// monto l'app Vue 
const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            user,
            contacts,
            activeId: null,
            searchText: "",
            newText: "",
        }


    },
    computed: {

        // per creare il filtro di ricerca tra i contatti
        filteredContacts() {
            const searchTerm = this.searchText.toLowerCase();
            return this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(searchTerm)
            );

        },
        // per sapere sempre quale sia l'id attivo
        isActiveId() {
            return this.activeId = this.Contacts.find(({ id }) => id === contacts.id)

        },

    },

    methods: {
        setActiveId(id) {
            console.log(this.messages);
        },
        // metodo per aggiungere un nuovo messaggio
        createNewMessage() {
            if (!this.newText) return;
            const newMessage = {
                id: new Date().toISOString(),
                status: "sent",
                text: this.newText,
            };
            contacts.messages.push(newMessage);

        }

    },
    created() {
        return this.activeId === contacts[0].id;
    }
}

)

app.mount("#root");