<template>
    <div>
        <div class="container border border-secondary">
             <div class="container">
                <div class="row" v-for="(event, index) in Events" :key="index">
                    <div class="card text-black border border-secondary mt-3">
                        <div class="card-body">
                            <router-link :to="'/DetailEvent/' + event.organizer.slug + '/' + event.slug"><h3>{{event.name}}</h3></router-link>
                            <div class="d-inline">{{event.organizer.name}}</div>
                            <div class="d-inline p-2">{{event.date}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ListEvent',
    data() {
        return{
            Events : []
        }
    },
    mounted(){
        this.ListaEvents();
    },
    methods : {
        ListaEvents() {
            axios.get('events')
            .then((response) => {
                if (response.status == 200) {
                    this.Events = response.data.events;
                }
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>