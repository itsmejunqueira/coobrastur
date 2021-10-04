import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CustomerHTTPService } from "../services/customers-http.service";
import Swal from 'sweetalert2'


@Component({
  selector: 'create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})

export class CreateCustomerComponent implements OnInit {
  formCreate: FormGroup;
  hasError = false;
  editMode = false;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerHTTPService,
    private readonly route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loadForm();

    let id = this.route.snapshot.params.id;
    if (id) {
      this.editMode = true;
      this.customerService.GetCustomer(id)
        .subscribe((customer) => {
          this.formCreate.patchValue({
            nome: customer.data.first_name,
            profissao: customer.data.job
          })
        });
    }
  }

  loadForm() {
    this.formCreate = this.fb.group({
      nome: ["", Validators.compose([Validators.required])],
      profissao: ["", Validators.compose([Validators.required])],
    });
  }

  submit() {
    this.hasError = false;
    if (this.formCreate.valid) {
      
      let id = this.route.snapshot.params.id;
      if (id) {
        this.customerService.EditCustomers(this.formCreate.value.nome, this.formCreate.value.profissao)
        .subscribe((user) => {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso!',
            text: 'Cliente editado com sucesso.',
            confirmButtonColor: "#08436F"
          }).then(() => {
            this.router.navigate(['clientes']);
          })
        });
      }
      else{
        this.customerService.SaveCustomers(this.formCreate.value.nome, this.formCreate.value.profissao)
        .subscribe((user) => {
          Swal.fire({
            icon: 'success',
            title: 'Sucesso!',
            text: 'Cliente inserido com sucesso.',
            confirmButtonColor: "#08436F"
          }).then(() => {
            this.router.navigate(['clientes']);
          })
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Ocorreu um erro!',
        text: 'Por favor, Preencha os campos obrigatórios',
        confirmButtonColor: "#08436F"
      })
    }
  }
}