<template>
    <v-container>
        <v-card>
            <v-card-text>{{dbdata}}</v-card-text>
        </v-card>
    </v-container>
</template>



<script>
import SerendipityDataService from '../services/SerendipityDataService';
export default {
    name: "debug",
    data:()=> ({
        dbdata: {}
    }),
    methods: {
        getCourses()
        {
            var tempResponse;
            SerendipityDataService.getCourses()
            .then(response => {
            tempResponse = response.data;
            console.log("Response:" + response.data);
        })
        .catch(e => {
          console.log(e);
        });
        return tempResponse;
        }
    },
    beforeMount(){
        this.dbdata = this.getCourses();
    },
    mounted(){
        this.dbdata = this.getCourses()
    }
}
</script>