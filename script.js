let domain_name;
var secret = 0;
let secret_value;

document.getElementById("d_n").disabled = true;
document.getElementById("s_v").focus();

function remove_result_text() {	
	if (document.getElementById("d_n").value.length == 0) {
		document.getElementById("result_cal").value = "";
	}
}

function disable_text() {
	if (document.getElementById("s_v").value.length == 2) {
		document.getElementById("d_n").disabled = false;
		document.getElementById("d_n").focus();
	}
	else {
		document.getElementById("d_n").disabled = true;
	}
}

function run(ele){
	var id = ele.id;
	var value = ele.value;
	domain_name = document.getElementById("d_n").value.replace(/ /g,"");
	
	secret_value = document.getElementById("s_v").value.replace(/ /g,"");
	
	const encode_index = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0];
	const encode_string = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","$"];
	
	let store_split_secret;
	store_split_secret = secret_value.split("");
	
	let index_zero;
	let index_one;
	index_zero = encode_string.indexOf(store_split_secret[0]);
	index_one = encode_string.indexOf(store_split_secret[1]);
	
	secret = encode_index[index_zero] + encode_index[index_one];
	
	// e u c e r i n
	let store_split_domain;
	store_split_domain = domain_name.split("");
	
	let site_to_num;
	
	var i = 0;
	var j = 0;
	while (i < domain_name.length) {
		while (j < encode_string.length) {
			if ( store_split_domain[i] == encode_string[j] ) {
				// undefined5213518914
				site_to_num += encode_index[j].toString();
				// reset search index
				j = 0;
				break; 
			}
			j++;
		}
		i++;
	}
	
	// string 5213518914
	let remove_undefine_site_to_num;
	remove_undefine_site_to_num = site_to_num.replace("undefined","");
	
	// string 5 2 1 3 5 1 8 9 1 4
	let split_site_to_num = remove_undefine_site_to_num.split("");
	split_site_to_num = remove_undefine_site_to_num.split("");
	
	let plus_mod;

	var z = 0;
	let plus_mod_secret;
	var m = 0;
	while (z < remove_undefine_site_to_num.length) {
		if (z % 2 == 1) {
			plus_mod_secret = (((parseInt(split_site_to_num[z]) + domain_name.length) % 10) + secret) % 26;
			plus_mod_secret = encode_string[encode_index.indexOf(plus_mod_secret)].toString();
			// string 2i8$2h5f8a
			if (m % 2 == 1) {
				plus_mod += plus_mod_secret.toString().toUpperCase();
			}
			else {
				plus_mod += plus_mod_secret.toString();
			}
			m++;	
		} else {
			// string undefined2980285681
			plus_mod += ((parseInt(split_site_to_num[z]) + domain_name.length) % 10).toString();
		}
		z++;
	}

	let remove_undefine_plus_mod;
	remove_undefine_plus_mod = plus_mod.replace("undefined","");

	if (remove_undefine_plus_mod.length > 16) {
		remove_undefine_plus_mod = remove_undefine_plus_mod.slice(0,16);
	}
	
	// update constant
	document.getElementById("result_cal").value = remove_undefine_plus_mod;
}