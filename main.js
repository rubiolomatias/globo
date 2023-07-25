const app = Vue.createApp({
    data() {
        return{
            logo:"./assets/img/logo.png",
            usuario:"",
            comentarios: [],

            sobremi: "¡Hola a todos! Soy Jane, y actualmente vivo en la vibrante y emocionante ciudad de Tokio,Japón.Me encanta capturar la esencia de la vida urbana a través de mi lente,explorando el constraste ente la arquitectura moderna y las tradiciones centenarias que conviven en esta metrópolis única.Desde rascacielos deslumbrantes y calles bulliciosas hasta templos serenos y jardines tranquilos, encuentro inspiracion en cada rincón de esta increíble ciudad.",
            
            publicacion: "./assets/img/publicacion.jpeg",

            botonLike: "Me gusta",
            fondoLike: "#f4f4f5",
            textoLike: "#3b82f6",
            likes:201
        } 
    },
    methods:{
        darLike(){
            if(this.botonLike === "Me gusta"){
                this.botonLike = "Quitar Me gusta";
                this.likes += 1;
                this.fondoLike = "#ff0000";
                this.textoLike = "#f4f4f5";

            }else{
                this.fondoLike = "#f4f4f5"
                this.botonLike = "Me gusta";
                this.likes -= 1;
                this.textoLike = "#3b82f6";
            }
        },
        guardarComentario(comentario){
            this.comentarios.push(comentario);
        },
        datasIncompletos(){
            this.$refs.usuario.focus();
        }
    }
});