// function myFunction() {
  
// }

function doPost(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    const data = JSON.parse(e.postData.contents);

    sheet.appendRow([
        data.date,
        data.title,
        data.company
    ]);

    return ContentService
        .createTextOutput("Success");
}