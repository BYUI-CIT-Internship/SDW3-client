<template>
      <hot-table  :settings="hotSettings"></hot-table>
</template>




<script>
import {HotTable} from '@handsontable/vue';
export default {
    name: 'Spreadsheet2',
    data: function() {
      return {
        hotSettings: {
          licenseKey:'non-commercial-and-evaluation',
          rowHeaders:true,
          search: true,
          colHeaders: ["Year", "Ford", "Volvo", "Toyota", "Honda"],
          data: [
            ["2016", 10, 11, 12, 13],
            ["2017", 20, 11, 14, 13],
            ["2018", 30, 15, 12, 13]
        ],
        },

      };
    },
    components: {
      HotTable
    }
}
</script>

<style href="https://cdn.jsdelivr.net/npm/handsontable@8.2.0/dist/handsontable.full.min.css"></style>
