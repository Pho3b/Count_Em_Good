
	//Call on load to setup everything. (Set last parameter to "true")
	count_em_good('notifica_titolo',5,'title_counter',true);
	count_em_good('testo_prova',50,'testo_prova_counter',true);

	
	//Funzione che conta quanti caratteri possono ancora esseri inseriti nei campi titolo e testo della creazione e modifica notifica
	function count_em_good(trigger_id,max_char,counter_id,on_load){
		var max_char = max_char;
		//Taking the elements
		try{
			var text_field_len = document.getElementById(trigger_id).value.length;
		}catch(e){
			console.log("Didn't find any element with this ID: " + trigger_id);
			var text_field_len = 0;
		}
		
		try{
			var element = document.getElementById(counter_id);
		}catch(e){
			var element = null;
		}
		
		
		var diff = max_char - text_field_len;

		
		if(element!= null){
			//Questo pezzo di codice parte solo al caricamento
			if(on_load){
				var element_par = element.previousSibling.innerHTML = 'Max Characters ' + max_char + ' : ';
				element.innerHTML = max_char;
				element.style.color = "#5cb85c";

				first_load = false;
			}
		
		
			if(diff >= 0){
				if(diff > max_char/2){
					element.style.color = "#5cb85c";
				}else if(diff <= ((max_char/2) / 2)){
					element.style.color = "#d9534f";
				}else if(diff <= max_char/2){
					element.style.color = "#f0ad4e";
				}
				element.innerHTML = diff;
			}else{
				var text_field_value = document.getElementById(trigger_id).value;
				document.getElementById(trigger_id).value = text_field_value.substring(text_field_value,max_char);
			}	
		}else{
			console.log("No Elements found");
		}
	}
