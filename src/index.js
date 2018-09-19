module.exports = function getZerosCount(number, base) {
	var j = 1; 
		i = 2, 
		zeros = 0,
		maxZeros = [],
		primes = [];

	do { 
		if (base % i == 0 && base != 1) { 
		
			primes[j-1] = i; 
			j++; 
			base = base / i; 

		} else { 
			i++; 
		} 

	} while (i < base); 
		primes[j-1] = i; 

	var degree = 1; 
	
	primes.forEach(function(item, i, a) { 
		while (number/Math.pow(primes[i], degree) > 1) { 
			
			zeros += Math.floor(number / Math.pow(primes[i], degree)); 
			degree++; 
		} 
		
		maxZeros.push(zeros); 
		zeros = 0; 
		degree = 1; 
	}); 

	var count = 1; 

	primes.forEach(function(item, i, a) { 
		if (i < primes.length -1) { 
			
			if (primes[i] == primes[i+1]) { 
				count++; 

			} else { 
				maxZeros[i] = Math.floor(maxZeros[i]/count); 
				count = 1; 
			} 
		} else { 
			maxZeros[i] = Math.floor(maxZeros[i]/count); 
			count = 1; 
		} 
	}); 

	var minZeros = maxZeros[0];

	maxZeros.forEach(function(h, i, maxZeros) {
	    if (i < maxZeros.length -1) { 
            if (maxZeros[i] <= maxZeros[i+1]) { 
                minZeros = maxZeros[i];
            }
	    } else {
	        if (maxZeros[i] < minZeros) {
	            minZeros = maxZeros[i];
	        }
	    }            
	});


	return minZeros;
}