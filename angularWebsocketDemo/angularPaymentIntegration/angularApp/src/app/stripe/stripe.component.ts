import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StripeCardElementOptions, StripeElementsOptions } from '@stripe/stripe-js';
import { StripeCardComponent, StripeService } from 'ngx-stripe';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {
  @ViewChild(StripeCardComponent) card!: StripeCardComponent;
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };

  
  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  stripeForm!: FormGroup;

  constructor(private formBuilder : FormBuilder, private stripService : StripeService) { }

  ngOnInit(): void {
    this.stripeForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
  }

  createToken(): void {
    console.log("creating token");
    const name = this.stripeForm.get("name")?.value;
    this.stripService.createToken(this.card.element, { name })
    .subscribe((result) => {
      if(result.token){
        console.log(result.token.id);
      }else if(result.error){
        console.log(result.error.message)
      }
    });
  }

}
