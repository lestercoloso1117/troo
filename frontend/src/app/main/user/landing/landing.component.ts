import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'mobile_number','id'];
  dataSource = new MatTableDataSource<UserElement>(ELEMENT_DATA);
  loader:boolean = false;
  

 @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private userservice: UserService
  ) { }

  ngOnInit(): void {

    this.getUsers();
 


  }

  getUsers(){
       // call user list
    this.loader = true;
    this.userservice.getUsers().subscribe((e)=>{
      setTimeout(() => {
        this.loader = false;
      },500);

    });
  }

  openUser(id:number = 0){
   

    
    
      let dialogRef:any = this.dialog.open(ProfileComponent, {  
        height: 'auto',
        width: '600px',
        disableClose :false,
        data: {
          id: id,
        },
      });

  
      dialogRef.afterClosed()
      .subscribe((response:any) => {
        // alert();

      });


  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}

export interface UserElement {
  name: string;
  email: string;
  mobile_number: string;
}

const ELEMENT_DATA: UserElement[] = [];