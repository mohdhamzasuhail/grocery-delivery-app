import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {

	constructor() {}
	
	userProfile = {
		status      : localStorage.getItem("status"),
		userId      : localStorage.getItem("userId"),
		userName    : localStorage.getItem("userName"),
		userNumber  : localStorage.getItem("userNumber"),
		userEmail   : localStorage.getItem("userEmail"),
		userAddress : localStorage.getItem("userAddress")
	};

	listContent = [];

	createShopListOrders = {
		selectedAddress : localStorage.getItem("selectedAddress")
	};

	showProduct = {
		categoryId    : localStorage.getItem("categoryId"),
		category      : localStorage.getItem("category"),
		subcategoryId : localStorage.getItem("subcategoryId"),
		subcategory   : localStorage.getItem("subcategory")
	};

	cart = [[]];
}