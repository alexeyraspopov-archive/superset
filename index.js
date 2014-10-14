function intersection(a, b){
	return new Set([x for (x of a) if (b.has(x))]);
}

function union(a, b){
	return new Set([...a, ...b]);
}

function difference(a, b){
	return new Set([x for (x of a) if (!b.has(x))]);
}

function product(a, b){
	return new Set([[x, y] for (x of a) for (y of b)]);
}

module.exports = { intersection, union, difference, product };
