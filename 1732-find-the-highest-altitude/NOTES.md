```
const largestAltitude3 = gain => {
	let [max, currentAltitude] = [0, 0];

	for (let i = 0; i < gain.length; i++) {
		currentAltitude = gain[i] + currentAltitude;
		if (currentAltitude > max) max = currentAltitude;
	}

	return max;
};
```
