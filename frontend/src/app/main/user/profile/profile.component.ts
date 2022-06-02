import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';


    



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  model_data:any = {}
  constructor(
    public dialogRef: MatDialogRef<ProfileComponent>,
    private userservice: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    if(this.data.id){
        this.userservice.getUser(this.data.id).subscribe((e:any) => {
          this.model_data = e.data;
        });
    }else{
      this.model_data = {}
    }
  }

}
