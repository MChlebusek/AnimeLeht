const vue = Vue.createApp({
    data(){
        return {
            animes: [],
            animeInModal: {name: null},
            /* animeInModal: {release: null},
            animeInModal: {raiting: null}  */
            mangas:[],
            mangaInModal: {title: null},
            users: [],
            userInModal: {username: null},
        };
    },
    async created(){
        this.animes = await (await fetch('http://localhost:8080/animes')).json();
        this.mangas = await (await fetch('http://localhost:8080/mangas')).json();
        this.users = await (await fetch('http://localhost:8080/users')).json();
    },
    methods:{
        getAnime: async function(id){
            this.animeInModal = await (await fetch(`http://localhost:8080/animes/${id}`)).json();
            let animeInfoModal = new bootstrap.Modal(document.getElementById('animeInfoModal'),{})
            animeInfoModal.show();
        },
        getManga: async function(id){
            this.mangaInModal = await (await fetch(`http://localhost:8080/mangas/${id}`)).json();
            let mangaInfoModal = new bootstrap.Modal(document.getElementById('mangaInfoModal'),{})
            mangaInfoModal.show();
        },
        getUser: async function(id){
            this.userInModal = await (await fetch(`http://localhost:8080/users/${id}`)).json();
            let userInfoModal = new bootstrap.Modal(document.getElementById('userInfoModal'),{})
            userInfoModal.show();
        }
    }
}).mount('#app')