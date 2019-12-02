function numberOfWaysToMakeChange(n, denoms) {
	let ways = {}
	ways[0] = 1;
  for (let denom of denoms) {
		for(let amt = 1; amt < n + 1; amt += 1){
			if(!ways[amt]) {
				ways[amt] = 0;
			}
			if (denom <= amt) {
				ways[amt] += ways[amt - denom]
			}
		}
	}
	return ways[n];
}
