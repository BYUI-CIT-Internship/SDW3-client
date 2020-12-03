<template>
    <v-container>
        <v-card v-model="dbdata">
            <v-card-title>
                The database returned these courses: 
            </v-card-title>
            <v-card-text>{{dbdata}}</v-card-text>
        </v-card>
    </v-container>
</template>



<script>
import SerendipityDataService from '../services/SerendipityDataService';
export default {
    name: "debug",
    data:()=> ({
        dbdata: []
    }),
    methods: {
        getCourses()
        {
            SerendipityDataService.getCourses()
            .then(response => {
            this.dbdata = response.data;
            console.log("Response:" + JSON.stringify(response.data));
        })
        .catch(e => {
          console.log(e);
        });

        }
    },
    mounted(){
        this.getCourses();
        console.log(this.dbdata)
    }
}
</script>