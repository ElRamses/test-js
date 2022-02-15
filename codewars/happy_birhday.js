function wrap(height, width, length){
  const facet1 = height * width; // передняя грань для зрителя
	const facet2 = height * length; // боковая грань от передней грани для зрителя
	const facet3 = width * length; // нижняя грань

	const tapeLengthFacet1 = length * 4 + width * 2 + height * 2 + 20;;
	const tapeLengthFacet2 = length * 2 + width * 4 + height * 2 + 20;;
	const tapeLengthFacet3 = length * 2 + width * 2 + height * 4 + 20;;

  if (facet1 > facet2 && facet1 > facet3) { // facet1 большая грань
		return tapeLengthFacet1;
	}

	if (facet2 > facet1 && facet2 > facet3) { // facet2 большая грань
		return tapeLengthFacet2;
	}

	if (facet3 > facet1 && facet3 > facet1) { // facet3 большая грань
		return tapeLengthFacet3;
	}
	

	if (facet1 === facet2 && facet2 === facet3) {
		return tapeLengthFacet1;
	} // f1 f2 f3

	if (facet1 === facet3) {
		return tapeLengthFacet1;
	} // f1 f3

	if (facet1 === facet2) {
		return tapeLengthFacet1;
	} // f1 f2

	if (facet2 === facet3) {
		return tapeLengthFacet2;
	} // f2 f3
}

// console.log(wrap(17,32,11));
// console.log(wrap(13,13,13));
// console.log(wrap(1,3,1));

// console.log(wrap(10,3,20)); // для facet2
// console.log(wrap(3,20,10)); // для facet3
