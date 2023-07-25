app.component('mostrar-comentarios',{
    props:{
        comentarios:{
            type:Array,
            required:true
        },
        usuario:{
            type:String,
            required:true
        }
    },
    template:/*html*/
    `<div v-for="comentario in comentarios" :key="comentario">
        <p>
            <span>{{ usuario }}</span> {{ comentario }}
            <button id="eliminar" @click="eliminarComentario(comentario)">Eliminar</button>
        </p>
    </div>`,
    methods:{
        eliminarComentario(comentario){
            const index = this.comentarios.indexOf(comentario);
            if (index !== -1){
                this.comentarios.splice(index, 1);
            }
        }
    }
})