import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/share/share.service';
import { NgForm, FormGroup } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-menuadd',
  templateUrl: './menuadd.component.html',
  styleUrls: ['./menuadd.component.css']
})
export class MenuaddComponent implements OnInit {
  constructor(private service: ShareService,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      itemid: null,
      name: '',
      description: '',
      Price: null,
      offer: null,
      imageUrl: '',
      comments: ''
    }
  }
  onSubmit(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    if (form.value.id == null)
      this.firestore.collection('menus').add(data);
    else
      this.firestore.doc('menus/' + form.value.id).update(data);
    this.resetForm(form);
    this.toastr.success('Submitted successfully')
  }

}
