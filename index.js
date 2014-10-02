function intersection(a, b){
	return new Set([x for (x of a) if (b.has(x))]);
}

function union(a, b){
	return new Set([...a, ...b]);
}

function difference(a, b){
	return new Set([x for (x of a) if (!b.has(x))]);
}
