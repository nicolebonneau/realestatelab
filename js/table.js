$(function() {
////Market Report Table/////

function Property(street, city, state, price, posted) {
	this.constructor.all.push(this);
	this.street = street;
	this.city = city;
	this.state = state;
	this.price = price;
	this.posted = new Date (posted);

	var self = this;

	function isNew(){
		var currentDate = new Date(),
			daysListed = (((((currentDate - self.posted)/1000)/60)/60)/24);
	//this does the math in miliseconds. This is why the /1000 is needed to get to seconds. then times 60 to get muinutes, then times 60 to get hours. then times 24 to get days.
		if (daysListed < Property.maxDays) {
			return '<span class="new">&#9733 </span>';
		}
		else {
			return '';
		}
	}

	this.el = '<tr>'+
				'<td>'+isNew()+this.street+'</td>'+
				'<td>'+this.city+'</td>'+
				'<td>'+this.state+'</td>'+
				'<td>'+this.price+'</td>'+
			   '</tr>';
}

Property.all = []
Property.maxDays = 10;
Property.displayContent = function(){
	$(".property-count").text(Property.all.length);
	$(".max-days").text(Property.maxDays);
	$.each(Property.all, function(i, property){
		$("table").find("tbody").append(property.el);
	});
	$("table").stupidtable();
}

////Create New Properties/////

var property1 = new Property ("2354 Fairview Lane", "Brooklyn", "New York", 1200000, "2015 Jun 10");
var property2 = new Property ("974 Clapton Street", "Queens", "New York", 998000, "2015 Jun 16");
var property3 = new Property ("14A Belmont Way", "Bronx", "New York", 874000, "2014 Mar 28");
var property3 = new Property ("123 Smith Street", "Staten Island", "New York", 555000, "2014 Mar 01");

/*console.log(Property.all);*/
Property.displayContent();




});