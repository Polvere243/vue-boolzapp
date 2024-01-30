// controllo la connessione coll'html
console.log("Vue Ok", Vue);

// destrutturo gli oggetti che mi servono

const {user, contacts} = data;

const {createApp} = Vue;

const app = createApp({
    data () {
        return{
            user,
            contacts,
            activeId: 0,
            searchText: ""
        }
    },
    computed: {
        // per sapere sempre quale sia l'id attivo
        isActiveID() {
            contacts.forEach(contact => {
                return activeID === this.contact.id;
            })
        },
        filteredContacts() {
            const searchTerm = this.searchText.toLowerCase();
            return this.contacts.filter(contact => 
            contact.name.toLowerCase().includes(searchTerm)
            );
                
        }
    
    },
    
    methods:{
        setActiveId(id) {
            id = this.contacts.id;
            console.log(this.contacts.id)
        } 
    }
})

app.mount("#root");