<template>
    <div>
        {{titulo}}
    </div>
</template>

<script>
export default {
    name : 'columTable',
    props : {
        hora : String,
        Sesiones : Array
    },
    data() {
        return {
            titulo : ''
        }
    },
    mounted() {
        this.validarSesion();
    },
    methods : {
        validarSesion() {
            this.Sesiones.forEach(sesiones => {
                let horaSesion = sesiones.start.substr(11,2);
                if (horaSesion == this.hora) {
                    this.titulo = sesiones.title;
                }
            });
        }
    }
}
</script>