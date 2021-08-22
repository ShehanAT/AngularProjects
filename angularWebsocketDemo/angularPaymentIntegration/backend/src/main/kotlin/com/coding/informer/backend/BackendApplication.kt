package com.coding.informer.backend

import com.coding.informer.backend.controllers.StripeController
import com.stripe.model.Charge
import com.stripe.net.RequestOptions
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class BackendApplication

fun main(args: Array<String>) {
	runApplication<BackendApplication>(*args)

//	RequestOptions requestOptions = RequestOptions.builder()
//			.setStripeAccount("acct_1032D82eZvKYlo2C")
//			.build();
//
//	Charge charge = Charge.retrieve(
//			"ch_3JJTQp2eZvKYlo2C05BxFbvM",
//	requestOptions,
//	);
//
//	charge.save(); // Uses the same account.

}
