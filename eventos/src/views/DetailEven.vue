<template>
    <div>
        <div class="container border border-secondary">
             <div class="container">
                <div class="card text-black border border-secondary mt-3 mb-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-8">
                                <h4>{{event.name}}</h4>
                            </div>
                            <div class="col-md-4 d-grid">
                                <button class="btn btn-primary">Register for this event</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <TableEvent :EventData="event"></TableEvent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import TableEvent from '../components/tableEvent.vue'

export default {
    name: 'DetailEven',
    components : {
        TableEvent
    },
    data(){
        return {
            OrganizerSlug : this.$route.params.SlugOrganizer,
            EventSlug : this.$route.params.SlugEvent,
            event : {}
        }
    },
    mounted() {
        this.datosEvento();
    },
    methods : {
        datosEvento () {
            axios.get('organizer/' + this.OrganizerSlug + '/events/' + this.EventSlug)
            .then((response) => {
                if (response.status == 200) {
                    this.event = response.data;
                }
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
}
</script>