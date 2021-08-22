package com.coding.informer.backend.controllers

import com.stripe.Stripe
import com.stripe.exception.StripeException
import com.stripe.model.Charge
import com.stripe.model.Customer
import com.stripe.net.RequestOptions
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod

@Controller
class StripeController {

    @GetMapping("/")
    fun runStripeExample(){
        Stripe.apiKey = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"

        val requestOptions : RequestOptions = RequestOptions.builder()
                .setApiKey("sk_test_4eC39HqLyjWDarjtT1zdp7dc")
                .build();

        val charge : Charge = Charge.retrieve(
                "ch_3JJTQp2eZvKYlo2C05BxFbvM",
        requestOptions,
        )
        charge.capture()
//        charge.save(); // Uses the same API Key.

        val customerMap: MutableMap<String, Any> = HashMap()
        customerMap["description"] = "Example description"
        customerMap["email"] = "test@example.com"
        customerMap["payment_method"] = "pm_card_visa" // obtained via Stripe.js


        try {
            val customer: Customer = Customer.create(customerMap)
            System.out.println(customer)
        } catch (e: StripeException) {
            e.printStackTrace()
        }
    }
}