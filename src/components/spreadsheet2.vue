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
          contextMenu: true,
          columns: []
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
        //console.log(DatabaseData)
        var dbdata = EnrollmentData;
        var headers = []
        for(var key in dbdata[0]){

            headers.push(key)
            console.log(dbdata[key])
        }
        console.log(headers)
        return headers;
      },
      generateUniqueValues(array, columnname)
      {
        var unique = [];
        array.forEach(element => {
          let temparray = element.map((a) => a[columnname]);
          unique = new Set(temparray).sort();
        });
        return unique
      },
      generateColumnInfo()
      {

        //NOTE - For each column do this:
          // COMMENT - iterate through store values in a set
          //Then we store it into an array, then repeat for each column.
          var columnAutoComplete = []
          var numKeys = Object.keys(EnrollmentData[0]).length;
          var keyArray = Object.keys(EnrollmentData[0]);
          for(var i=0; i < numKeys; i++)
          {
            var tempSet = new Set();
            tempSet = tempSet.clear()
            //loop that grabs column unique vals:
            EnrollmentData.forEach(element => {
              
              tempSet.add(element[keyArray[i]])
            })
            columnAutoComplete.push(tempSet);

          }

          //Generate proper JSON: 
          var JSONAutoCompletInfo = columnAutoComplete.forEach(element => {
            var tempObj = {
              type: "autocomplete",
              source: element
            }
            return tempObj
          })

          return JSONAutoCompletInfo;

        // var temparray = new Array(EnrollmentData);
        // var header = this.getHeaderData()
        // console.log(header)
        // header.forEach(element => {
        //   var temp = this.generateUniqueValues(temparray,element)
        //   console.log("temp")
        //   console.log("temp" + temp);
        // })

        //let autoarray = temparray.reduce((acc, it) => [...acc, ...it])
        //console.log("After Flattening: " + autoarray);
        //let autoset = new Set(autoarray);
        //console.log("After set is added: " + JSON.stringify(autoset));
        //var uniqueSubjects = [];
        //var testset = new Set(EnrollmentData);
        //console.log(testset)
        // EnrollmentData.array.forEach(element => {
        //   for(var key in element)
        //   {
        //     let array = this.element.map((a) => a.key);
        //     //array = array.join().split(",");
        //     //Only unique values allowed in ES6 Set. Way of filtering out non-unique values
        //     let uniqueSubjects = new Set(array).sort();
        //   }
        //   autoarray.add

        // });

        // //define set for storing autocomplete values
        // var autoarray = [];
        // //for each object in the json array
        // EnrollmentData.forEach(element => {
        //   //iterate through and store in a set:

        //   for(var key in element){
        //     var index = element.indexOf(key)
        //     console.log("element" + element)
        //     //if the array has a set at the current value move on, else create one.
        //     if(typeof autoarray[index] === 'undefined')
        //     {
        //       var tempset = new Set()
        //       autoarray.add(tempset)
        //     }
        //     autoarray[index].add(element[index])
        //   }
        //   console.log(autoarray);
        //});
        //return autoset
      } 
    },
    mounted(){
      this.getHeaderData()
      this.generateColumnInfo()
    },

    beforeMount(){
      this.hotSettings.colHeaders = this.getHeaderData()
      this.hotSettings.columns = this.generateColumnInfo()

    }
}
</script>


<style href="https://cdn.jsdelivr.net/npm/handsontable@8.2.0/dist/handsontable.full.min.css"></style>