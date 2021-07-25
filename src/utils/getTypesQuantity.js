const GetTypesQuantity = (cart) => {
	let typesObj = {};
	cart.forEach((obj) => {
		obj.types.forEach((el) => {
			const typeName = el.type.name.toUpperCase();
			if (typeName in typesObj) {
				typesObj = {
					...typesObj,
					[typeName]: typesObj[typeName] + obj.quantity,
				};
			} else {
				typesObj = { ...typesObj, [typeName]: obj.quantity };
			}
		});
	});
	return typesObj;
};

export default GetTypesQuantity;
