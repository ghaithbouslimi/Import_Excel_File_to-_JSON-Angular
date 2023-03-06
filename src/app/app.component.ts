import { Component } from '@angular/core';
import * as XLSX from 'xlsx'
import jsPDF from 'jspdf';
import  autoTable  from 'jspdf-autotable';
import { InfousService } from 'src/services/infous.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Read-import-excel-file';
  ExportData :any ; 

  constructor ( private info :InfousService){}

  ReadExcel(event:any){
    let file = event.target.files[0]; 
    let fileReader = new FileReader(); 
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e)=>{
      var workBook = XLSX.read(fileReader.result,{type:'binary'});
      var sheetNames = workBook.SheetNames;
      this.ExportData= XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])
       this.info.saveDataToDatabase(this.ExportData[0])
    }
    
  }

  downloadPdf(){
   var doc = new jsPDF(); 
   autoTable(doc,{html:"#test"}); 
   doc.save("testpdf")
  }
} 
