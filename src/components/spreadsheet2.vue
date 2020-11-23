<template>
      <hot-table :settings="hotSettings"></hot-table>
</template>




<script>
import {HotTable} from '@handsontable/vue';
import DatabaseData from '../assets/DatabaseData.json';
import EnrollmentData from "../assets/CITEnrollmentData.json";
export default {
    name: 'Spreadsheet2',
    data: function() {
      return {
        dbdata: DatabaseData,
        hotSettings: {
          licenseKey:'non-commercial-and-evaluation',
          rowHeaders:true,
          search: true,
          colHeaders: [],
          data: EnrollmentData,
          filters: true,
          dropdownMenu: true,
        },

      };
    },
    components: {
      HotTable
    },
    computed: {
      dataSet: {
            set(obj)
            {
              console.log("dbdata" + DatabaseData);
                this.dbdata = obj
            },
            get()
            {
              console.log("dbdata" + DatabaseData);
                return this.dbdata;
            }}
    },
    methods:{
      getHeaderData()
      {
        console.log(DatabaseData)
        var dbdata = EnrollmentData;
        var headers = []
        for(var key in dbdata[0]){

            headers.push(key)
            console.log(dbdata[key])
        }
        console.log(headers)
        return headers;
      } 
    },
    mounted(){
      this.getHeaderData()
    },

    beforeMount(){
      this.hotSettings.colHeaders = this.getHeaderData()
    }
}
</script>


<style href="https://cdn.jsdelivr.net/npm/handsontable@8.2.0/dist/handsontable.full.min.css"></style>