var chart_1_flag = 1;
var chart_1_title = "";
var chart_insec_1 = [];
var chart_docs_1 = [];
var chart_2_flag = 1;
var chart_2_title = "";
var chart_insec_2 = [];
var chart_docs_2 = [];
var chart_3_flag = 1;
var chart_3_title = "";
var chart_insec_3 = [];
var chart_docs_3 =[];

function rs_lockHomes(new_state) {
	console.log("Locking Selection to Homes: "+new_state);
	var control_div = document.getElementById("prop-type-control");
	switch (new_state){
		case "off" : control_div.style.visibility = 'visible'; break;
		case "on": control_div.style.visibility = 'hidden'; break;
	}
}

function rs_toggleDIV(selected_div, new_state) {
	console.log("Toggling "+selected_div+" to "+new_state);
	var control_div = document.getElementById(selected_div);
	switch (new_state){
		case "on" : control_div.style.visibility = 'visible'; break;
		case "off": control_div.style.visibility = 'hidden'; break;
	}
}

function rs_setGroup(grouplabel,proptype) {
	console.log("SET "+grouplabel);
	console.log("SET "+proptype);
	var suppress_docs=0;
	switch(grouplabel) {
		case "density" :
			if (proptype="allprop") {
				proptype = "homes";
				rs_lockHomes("on");
			};
			chart_1_flag = 1;
			chart_1_title = "Urban Residents";
			chart_insec_1 = rs_selected_country_data.insecurity[proptype].urban;
			chart_docs_1 = rs_selected_country_data.docs[proptype].urban;
			chart_2_flag = 1;
			chart_2_title = "Rural Residents";
			chart_insec_2 = rs_selected_country_data.insecurity[proptype].rural;
			chart_docs_2 = rs_selected_country_data.docs[proptype].rural;
			chart_3_flag = 0;
			break;
		case "ownership" :
			if (proptype="allprop") {
				proptype = "homes";
				rs_lockHomes("on");
			};
			chart_1_flag = 1;
			chart_1_title = "Home Owners";
			chart_insec_1 = rs_selected_country_data.insecurity[proptype].owner;
			chart_docs_1 = rs_selected_country_data.docs[proptype].owner;
			chart_2_flag = 1;
			chart_2_title = "Renters";
			chart_insec_2 = rs_selected_country_data.insecurity[proptype].renter;
			chart_docs_2 = rs_selected_country_data.docs[proptype].renter;
			chart_3_flag = 1;
			chart_3_title = "Family Member Owns";
			chart_insec_3 = rs_selected_country_data.insecurity[proptype].permission;
			chart_docs_3 = rs_selected_country_data.docs[proptype].permission;			
			break;
		case "gender" :
			rs_lockHomes("off");
			chart_1_flag = 1;
			chart_1_title = "Male";
			chart_insec_1 = rs_selected_country_data.insecurity[proptype].male;
			chart_docs_1 = rs_selected_country_data.docs[proptype].male;
			chart_2_flag = 1;
			chart_2_title = "Female";
			chart_insec_2 = rs_selected_country_data.insecurity[proptype].female;
			chart_docs_2 = rs_selected_country_data.docs[proptype].female;
			chart_3_flag = 0;
			break;
		case "age" :
			rs_lockHomes("off");
			chart_1_flag = 1;
			chart_1_title = "Younger than 25";
			chart_insec_1 = rs_selected_country_data.insecurity[proptype].young;
			chart_docs_1 = rs_selected_country_data.docs[proptype].young;
			chart_2_flag = 1;
			chart_2_title = "Between 25 and 54";
			chart_insec_2 = rs_selected_country_data.insecurity[proptype].adult;
			chart_docs_2 = rs_selected_country_data.docs[proptype].adult;
			chart_3_flag = 1;
			chart_3_title = "55 Years Old And Over";
			chart_insec_3 = rs_selected_country_data.insecurity[proptype].old;
			chart_docs_3 = rs_selected_country_data.docs[proptype].old;
			break;
		case "income" :
			rs_lockHomes("off");
			chart_1_flag = 1;
			chart_1_title = "Comfortable";
			chart_insec_1 = rs_selected_country_data.insecurity[proptype].comfortable;
			chart_docs_1 = rs_selected_country_data.docs[proptype].comfortable;
			chart_2_flag = 1;
			chart_2_title = "Getting By";
			chart_insec_2 = rs_selected_country_data.insecurity[proptype].gettingby;
			chart_docs_2 = rs_selected_country_data.docs[proptype].gettingby;
			chart_3_flag = 1;
			chart_3_title = "Facing Difficulty";
			chart_insec_3 = rs_selected_country_data.insecurity[proptype].difficulty;
			chart_docs_3 = rs_selected_country_data.docs[proptype].difficulty;
			break;
		case "employment" :
			rs_lockHomes("off");
			chart_1_flag = 1;
			chart_1_title = "Full Time";
			chart_insec_1 = rs_selected_country_data.insecurity[proptype].fulltime;
			chart_docs_1 = rs_selected_country_data.docs[proptype].fulltime;
			chart_2_flag = 1;
			chart_2_title = "Part Time";
			chart_insec_2 = rs_selected_country_data.insecurity[proptype].parttime;
			chart_docs_2 = rs_selected_country_data.docs[proptype].parttime;
			chart_3_flag = 1;
			chart_3_title = "Unemployed";
			chart_insec_3 = rs_selected_country_data.insecurity[proptype].unemployed;
			chart_docs_3 = rs_selected_country_data.docs[proptype].unemployed;
			break;
		case "documentation" :
			if (proptype="allprop") {
				proptype = "homes";
				rs_lockHomes("on");
			}
			suppress_docs=1;
			chart_1_flag = 1;
			chart_1_title = "Formal ";
			chart_insec_1 = rs_selected_country_data.insecurity[proptype].formal;

			chart_2_flag = 1;
			chart_2_title = "Informal ";
			chart_insec_2 = rs_selected_country_data.insecurity[proptype].informal;

			chart_3_flag = 1;
			chart_3_title = "No Documents";
			chart_insec_3 = rs_selected_country_data.insecurity[proptype].nodocs;
			console.log("No Docs");
			console.log(rs_selected_country_data.insecurity);
			console.log(chart_insec_3);
			break;
		case "numprops" :
			rs_lockHomes("off");
			chart_1_flag = 1;
			chart_1_title = "One Property";
			chart_insec_1 = rs_selected_country_data.insecurity[proptype].sole;
			chart_docs_1 = rs_selected_country_data.docs[proptype].sole;
			chart_2_flag = 1;
			chart_2_title = "More Than One Property";
			chart_insec_2 = rs_selected_country_data.insecurity[proptype].multiple;
			chart_docs_2 = rs_selected_country_data.docs[proptype].multiple;
			chart_3_flag = 0;
			break;
		
	}//end switch
	console.log("RSSG setting to "+grouplabel);
	console.log(chart_1_title);
	c1_insec.update({
		series: chart_insec_1
	});
	if (suppress_docs) {
		rs_toggleDIV("chart-docs-1","off");
	} else {
		rs_toggleDIV("chart-docs-1", "off");
		c1_docs.update({
			series: [
    			[chart_docs_1[0]],
    			[chart_docs_1[1]],
    			[chart_docs_1[2]],
  			]
		});
	};
	document.getElementById('chart-1-title').innerHTML = chart_1_title;
	c2_insec.update({
		series: chart_insec_2
	});
	if (suppress_docs) {
		rs_toggleDIV("chart-docs-2","off");
	} else {
		rs_toggleDIV("chart-docs-2", "off");
		c2_docs.update({
			series: [
    			[chart_docs_2[0]],
    			[chart_docs_2[1]],
    			[chart_docs_2[2]],
  			]
		});
	};
	document.getElementById('chart-2-title').innerHTML = chart_2_title;
	if (chart_3_flag) {
		console.log("chart 3 is "+chart_3_flag);
		rs_toggleDIV("chart-insec-3", "on");
		c3_insec.update({
			series: chart_insec_3
		});
		rs_toggleDIV("chart-title-3", "on");
		if (suppress_docs) {
			rs_toggleDIV("chart-docs-3","off");
		} else {
			rs_toggleDIV("chart-docs-3", "off");
			c3_docs.update({
			series: [
    			[chart_docs_3[0]],
    			[chart_docs_3[1]],
    			[chart_docs_3[2]],
  			]
		});
		};
		document.getElementById('chart-3-title').innerHTML = chart_3_title;
	} else {
		rs_toggleDIV("chart-docs-3","off");
		rs_toggleDIV("chart-insec-3","off");

		rs_toggleDIV("chart-title-3","off");
	}

}//function
