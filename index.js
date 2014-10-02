function intersection(a, b){
	return new Set([x for (x of a) if (b.has(x))]);
}
