let itemsData = [
	{
		'name': 'main1',
		'price': '1',
		'selected':"true"
	},
	{
		'name': 'main2',
		'price': '2',
		'selected':"true"
	},
	{
		'name': 'main3',
		'price': '3',
		'selected':"false"
	}
]

// console.log( {...itemsData[0],selected:"true"} );

itemsData = itemsData.map( item=> {
	item = {...item, selected:item.selected==="true"? "false" : "true"};
	return item;
})
console.log(itemsData);