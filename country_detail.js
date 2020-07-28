function rs_get_country_name() {
var super_tag = document.getElementsByClassName('page-content')[0];
isolated_country_name = super_tag.getAttribute("data-country");
console.log("This should give me the country name: ");
console.log(isolated_country_name);
return isolated_country_name;
}



function rs_update_country_summary(country_data) {
	document.getElementById('allprop_insecure_pc').innerHTML = country_data.insecurity.allprop.allresp[1];
	document.getElementById('home_insecure_pc').innerHTML = country_data.insecurity.homes.allresp[1];

	var highest_reason_amount = 0;
	var top_reason_text = "";

	if (country_data.reasons.askedtoleave > highest_reason_amount) {
		highest_reason_amount = country_data.reasons.askedtoleave;
		top_reason_text = "The owner or renter asking the individual to leave";
	};
	if (country_data.reasons.companies > highest_reason_amount) {
		highest_reason_amount = country_data.reasons.companies;
		top_reason_text = "Companies potentially seizing the property";
	};	
	if (country_data.reasons.customary > highest_reason_amount) {
		highest_reason_amount = country_data.reasons.customary;
		top_reason_text = "Issues with customary authorities";
	};	
	if (country_data.reasons.death > highest_reason_amount) {
		highest_reason_amount = country_data.reasons.death;
		top_reason_text = "Death of a household member";
	};	
	if (country_data.reasons.family > highest_reason_amount) {
		highest_reason_amount = country_data.reasons.family;
		top_reason_text = "Disagreements with family or relatives";
	};	
	if (country_data.reasons.government > highest_reason_amount) {
		highest_reason_amount = country_data.reasons.government;
		top_reason_text = "The government potentially seizing the property";
	};	
	if (country_data.reasons.money > highest_reason_amount) {
		highest_reason_amount = country_data.reasons.money;
		top_reason_text = "Lack of money or other resources";
	};


	document.getElementById('topreason').innerHTML = top_reason_text;



}
