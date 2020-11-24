import http from "../http-common";

class SerendipityDataService
{
    //In here goes every function needed by the front end and must tie to the
    //backend
    getColumnAutocompletes(columnNames)
    {
        console.log("Fetching auto completes for the following columns: ");
        console.log(JSON.stringify(columnNames));
        return http.get(`/serendipity?columns=${columnNames}`);
    }
}