<template>
    <div>
        <table class="table table-hover table-borderless">
            <thead>
                <th style="width:15%;"></th>
                <th style="width:15%;"></th>
                <th v-for="(hora, index) in TableThead" :key="index">{{hora}}</th>
            </thead>
            <tbody v-for="(channel, index) in EventData.channels" :key="index" class="border border-start border-end border-dark">
                <tr v-for="(room, indexRoom) in channel.rooms" :key="indexRoom" >
                    <td v-if="(indexRoom == 0)" :rowspan="channel.rooms.length">{{channel.name}}</td>
                    <td class="border border-start border-end border-dark">{{room.name}}</td>
                    <th v-for="(hora, indexhora) in TableThead" :key="indexhora">
                        <ColumnTable :hora="hora" :Sesiones="room.sessions"></ColumnTable>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import ColumnTable from './columnTable.vue'

export default {
    name : 'TableEvent',
    components : {
        ColumnTable
    },
    data() {
        return {
            OrganizerSlug : this.$route.params.SlugOrganizer,
            EventSlug : this.$route.params.SlugEvent,
            EventData : {},
            TableThead : []
        }
    },
    mounted () {
        this.datosEvento();
    },
    methods : {
        datosEvento () {
            axios.get('organizer/' + this.OrganizerSlug + '/events/' + this.EventSlug)
            .then((response) => {
                console.log(response);
                if (response.status == 200) {
                    this.EventData = response.data;
                    this.HorasEvent();
                }
            })
            .catch((error) => {
                console.log(error);
            })
        },
        HorasEvent() {
            this.EventData.channels.forEach(channel => {
                channel.rooms.forEach(room => {
                    room.sessions.forEach(session => {
                        var hora = session.start.substr(11,2);

                        if (!this.TableThead.includes(hora)){
                            this.TableThead.push(hora);

                        }
                    });
                });
            });
            this.TableThead = this.TableThead.sort((a, b) => a-b);
        }
    }
}
</script>