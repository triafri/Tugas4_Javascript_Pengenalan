var tb1 = 168
var tb2 = 153
var tb3 =170

if(tb1> tb2){
	if(tb1 > tb3){
		console.log(tb1, " Paling Tinggi")
		if (tb3 > tb2) {
			console.log("Urutan Pendek - Tinggi ", tb2, " ,", tb3, " ,", tb1)
		}
	}else{
		console.log(tb3, " Paling Tinggi")
		console.log("Urutan Pendek - Tinggi ", tb2, " ,", tb1, " ,", tb3)
	}
}else{
	if(tb2 > tb3){
		console.log(tb2, " paling tinggi")
		if(tb3 > tb1){
			console.log("Urutan Pendek - Tinggi ", tb1, " ,", tb3, " ,", tb2)
		}else{
			console.log("Urutan Pendek - Tinggi ", tb3, " ,", tb1, " ,", tb2)
		}
	}else{
		console.log(tb3, " Paling Tinggi")
		console.log("Urutan Pendek - Tinggi ", tb1, " ,", tb2, " ,", tb3)
	}
}