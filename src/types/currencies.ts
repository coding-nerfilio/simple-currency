export type Currency = {
	symbol: string;
	name: string;
};

const Currencies = {
	AED: <Currency>{ symbol: "AED", name: "United Arab Emirates Dirham" },
	AFN: <Currency>{ symbol: "AFN", name: "Afghan Afghani" },
	ALL: <Currency>{ symbol: "ALL", name: "Albanian Lek" },
	AMD: <Currency>{ symbol: "AMD", name: "Armenian Dram" },
	ANG: <Currency>{ symbol: "ANG", name: "Netherlands Antillean Guilder" },
	AOA: <Currency>{ symbol: "AOA", name: "Angolan Kwanza" },
	ARS: <Currency>{ symbol: "ARS", name: "Argentine Peso" },
	AUD: <Currency>{ symbol: "AUD", name: "Australian Dollar" },
	AWG: <Currency>{ symbol: "AWG", name: "Aruban Florin" },
	AZN: <Currency>{ symbol: "AZN", name: "Azerbaijani Manat" },
	BAM: <Currency>{ symbol: "BAM", name: "Bosnia-Herzegovina Convertible Mark" },
	BBD: <Currency>{ symbol: "BBD", name: "Barbadian Dollar" },
	BDT: <Currency>{ symbol: "BDT", name: "Bangladeshi Taka" },
	BGN: <Currency>{ symbol: "BGN", name: "Bulgarian Lev" },
	BHD: <Currency>{ symbol: "BHD", name: "Bahraini Dinar" },
	BIF: <Currency>{ symbol: "BIF", name: "Burundian Franc" },
	BMD: <Currency>{ symbol: "BMD", name: "Bermudan Dollar" },
	BND: <Currency>{ symbol: "BND", name: "Brunei Dollar" },
	BOB: <Currency>{ symbol: "BOB", name: "Bolivian Boliviano" },
	BRL: <Currency>{ symbol: "BRL", name: "Brazilian Real" },
	BDS: <Currency>{ symbol: "BSD", name: "Bahamian Dollar" },
	BTN: <Currency>{ symbol: "BTN", name: "Bhutanese Ngultrum" },
	BWP: <Currency>{ symbol: "BWP", name: "Botswanan Pula" },
	BYR: <Currency>{ symbol: "BYR", name: "Belarusian Ruble" },
	BZD: <Currency>{ symbol: "BZD", name: "Belize Dollar" },
	CAD: <Currency>{ symbol: "CAD", name: "Canadian Dollar" },
	CDF: <Currency>{ symbol: "CDF", name: "Congolese Franc" },
	CHF: <Currency>{ symbol: "CHF", name: "Swiss Franc" },
	CLF: <Currency>{ symbol: "CLF", name: "Chilean Unit of Account (UF)" },
	CLP: <Currency>{ symbol: "CLP", name: "Chilean Peso" },
	CNY: <Currency>{ symbol: "CNY", name: "Chinese Yuan" },
	COP: <Currency>{ symbol: "COP", name: "Colombian Peso" },
	CRC: <Currency>{ symbol: "CRC", name: "Costa Rican Col????n" },
	CUP: <Currency>{ symbol: "CUP", name: "Cuban Peso" },
	CVE: <Currency>{ symbol: "CVE", name: "Cape Verdean Escudo" },
	CZK: <Currency>{ symbol: "CZK", name: "Czech Republic Koruna" },
	DJF: <Currency>{ symbol: "DJF", name: "Djiboutian Franc" },
	DKK: <Currency>{ symbol: "DKK", name: "Danish Krone" },
	DOP: <Currency>{ symbol: "DOP", name: "Dominican Peso" },
	DZD: <Currency>{ symbol: "DZD", name: "Algerian Dinar" },
	EGP: <Currency>{ symbol: "EGP", name: "Egyptian Pound" },
	ETP: <Currency>{ symbol: "ETB", name: "Ethiopian Birr" },
	EUR: <Currency>{ symbol: "EUR", name: "Euro" },
	FJD: <Currency>{ symbol: "FJD", name: "Fijian Dollar" },
	FKP: <Currency>{ symbol: "FKP", name: "Falkland Islands Pound" },
	GBP: <Currency>{ symbol: "GBP", name: "British Pound Sterling" },
	GEL: <Currency>{ symbol: "GEL", name: "Georgian Lari" },
	GHS: <Currency>{ symbol: "GHS", name: "Ghanaian Cedi" },
	GIP: <Currency>{ symbol: "GIP", name: "Gibraltar Pound" },
	GMD: <Currency>{ symbol: "GMD", name: "Gambian Dalasi" },
	GNF: <Currency>{ symbol: "GNF", name: "Guinean Franc" },
	GTQ: <Currency>{ symbol: "GTQ", name: "Guatemalan Quetzal" },
	GYD: <Currency>{ symbol: "GYD", name: "Guyanaese Dollar" },
	HKD: <Currency>{ symbol: "HKD", name: "Hong Kong Dollar" },
	HNL: <Currency>{ symbol: "HNL", name: "Honduran Lempira" },
	HRK: <Currency>{ symbol: "HRK", name: "Croatian Kuna" },
	HTG: <Currency>{ symbol: "HTG", name: "Haitian Gourde" },
	HUF: <Currency>{ symbol: "HUF", name: "Hungarian Forint" },
	IDR: <Currency>{ symbol: "IDR", name: "Indonesian Rupiah" },
	ILS: <Currency>{ symbol: "ILS", name: "Israeli New Sheqel" },
	INR: <Currency>{ symbol: "INR", name: "Indian Rupee" },
	IQD: <Currency>{ symbol: "IQD", name: "Iraqi Dinar" },
	IRR: <Currency>{ symbol: "IRR", name: "Iranian Rial" },
	ISK: <Currency>{ symbol: "ISK", name: "Icelandic Kr????na" },
	JEP: <Currency>{ symbol: "JEP", name: "Jersey Pound" },
	JDM: <Currency>{ symbol: "JMD", name: "Jamaican Dollar" },
	JOD: <Currency>{ symbol: "JOD", name: "Jordanian Dinar" },
	JPY: <Currency>{ symbol: "JPY", name: "Japanese Yen" },
	KES: <Currency>{ symbol: "KES", name: "Kenyan Shilling" },
	KGS: <Currency>{ symbol: "KGS", name: "Kyrgystani Som" },
	KHR: <Currency>{ symbol: "KHR", name: "Cambodian Riel" },
	KMF: <Currency>{ symbol: "KMF", name: "Comorian Franc" },
	KPW: <Currency>{ symbol: "KPW", name: "North Korean Won" },
	KRW: <Currency>{ symbol: "KRW", name: "South Korean Won" },
	KWD: <Currency>{ symbol: "KWD", name: "Kuwaiti Dinar" },
	KYD: <Currency>{ symbol: "KYD", name: "Cayman Islands Dollar" },
	KZT: <Currency>{ symbol: "KZT", name: "Kazakhstani Tenge" },
	LAK: <Currency>{ symbol: "LAK", name: "Laotian Kip" },
	LBP: <Currency>{ symbol: "LBP", name: "Lebanese Pound" },
	LKR: <Currency>{ symbol: "LKR", name: "Sri Lankan Rupee" },
	LRD: <Currency>{ symbol: "LRD", name: "Liberian Dollar" },
	LSL: <Currency>{ symbol: "LSL", name: "Lesotho Loti" },
	LTL: <Currency>{ symbol: "LTL", name: "Lithuanian Litas" },
	LVL: <Currency>{ symbol: "LVL", name: "Latvian Lats" },
	LYD: <Currency>{ symbol: "LYD", name: "Libyan Dinar" },
	MAD: <Currency>{ symbol: "MAD", name: "Moroccan Dirham" },
	MDL: <Currency>{ symbol: "MDL", name: "Moldovan Leu" },
	MGA: <Currency>{ symbol: "MGA", name: "Malagasy Ariary" },
	MKD: <Currency>{ symbol: "MKD", name: "Macedonian Denar" },
	MMK: <Currency>{ symbol: "MMK", name: "Myanma Kyat" },
	MNT: <Currency>{ symbol: "MNT", name: "Mongolian Tugrik" },
	MOP: <Currency>{ symbol: "MOP", name: "Macanese Pataca" },
	MRO: <Currency>{ symbol: "MRO", name: "Mauritanian Ouguiya" },
	MUR: <Currency>{ symbol: "MUR", name: "Mauritian Rupee" },
	MVR: <Currency>{ symbol: "MVR", name: "Maldivian Rufiyaa" },
	MWK: <Currency>{ symbol: "MWK", name: "Malawian Kwacha" },
	MXN: <Currency>{ symbol: "MXN", name: "Mexican Peso" },
	MYR: <Currency>{ symbol: "MYR", name: "Malaysian Ringgit" },
	MZN: <Currency>{ symbol: "MZN", name: "Mozambican Metical" },
	NAD: <Currency>{ symbol: "NAD", name: "Namibian Dollar" },
	NGN: <Currency>{ symbol: "NGN", name: "Nigerian Naira" },
	NIO: <Currency>{ symbol: "NIO", name: "Nicaraguan C????rdoba" },
	NOK: <Currency>{ symbol: "NOK", name: "Norwegian Krone" },
	NPR: <Currency>{ symbol: "NPR", name: "Nepalese Rupee" },
	NZD: <Currency>{ symbol: "NZD", name: "New Zealand Dollar" },
	OMR: <Currency>{ symbol: "OMR", name: "Omani Rial" },
	PAB: <Currency>{ symbol: "PAB", name: "Panamanian Balboa" },
	PEN: <Currency>{ symbol: "PEN", name: "Peruvian Nuevo Sol" },
	PGK: <Currency>{ symbol: "PGK", name: "Papua New Guinean Kina" },
	PHP: <Currency>{ symbol: "PHP", name: "Philippine Peso" },
	PKR: <Currency>{ symbol: "PKR", name: "Pakistani Rupee" },
	PLN: <Currency>{ symbol: "PLN", name: "Polish Zloty" },
	PYG: <Currency>{ symbol: "PYG", name: "Paraguayan Guarani" },
	QAR: <Currency>{ symbol: "QAR", name: "Qatari Rial" },
	RON: <Currency>{ symbol: "RON", name: "Romanian Leu" },
	RSD: <Currency>{ symbol: "RSD", name: "Serbian Dinar" },
	RUB: <Currency>{ symbol: "RUB", name: "Russian Ruble" },
	RWF: <Currency>{ symbol: "RWF", name: "Rwandan Franc" },
	SAR: <Currency>{ symbol: "SAR", name: "Saudi Riyal" },
	SBD: <Currency>{ symbol: "SBD", name: "Solomon Islands Dollar" },
	SRC: <Currency>{ symbol: "SCR", name: "Seychellois Rupee" },
	SDG: <Currency>{ symbol: "SDG", name: "Sudanese Pound" },
	SEK: <Currency>{ symbol: "SEK", name: "Swedish Krona" },
	SGD: <Currency>{ symbol: "SGD", name: "Singapore Dollar" },
	SHP: <Currency>{ symbol: "SHP", name: "Saint Helena Pound" },
	SLL: <Currency>{ symbol: "SLL", name: "Sierra Leonean Leone" },
	SOS: <Currency>{ symbol: "SOS", name: "Somali Shilling" },
	SRD: <Currency>{ symbol: "SRD", name: "Surinamese Dollar" },
	STD: <Currency>{ symbol: "STD", name: "S????o Tom???? and Pr????ncipe Dobra" },
	SVC: <Currency>{ symbol: "SVC", name: "Salvadoran Col????n" },
	SYP: <Currency>{ symbol: "SYP", name: "Syrian Pound" },
	SZL: <Currency>{ symbol: "SZL", name: "Swazi Lilangeni" },
	THB: <Currency>{ symbol: "THB", name: "Thai Baht" },
	TJS: <Currency>{ symbol: "TJS", name: "Tajikistani Somoni" },
	TMT: <Currency>{ symbol: "TMT", name: "Turkmenistani Manat" },
	TND: <Currency>{ symbol: "TND", name: "Tunisian Dinar" },
	TOP: <Currency>{ symbol: "TOP", name: "Tongan Pa?anga" },
	TRY: <Currency>{ symbol: "TRY", name: "Turkish Lira" },
	TTD: <Currency>{ symbol: "TTD", name: "Trinidad and Tobago Dollar" },
	TWD: <Currency>{ symbol: "TWD", name: "New Taiwan Dollar" },
	TZS: <Currency>{ symbol: "TZS", name: "Tanzanian Shilling" },
	UAH: <Currency>{ symbol: "UAH", name: "Ukrainian Hryvnia" },
	UGX: <Currency>{ symbol: "UGX", name: "Ugandan Shilling" },
	USD: <Currency>{ symbol: "USD", name: "United States Dollar" },
	UYU: <Currency>{ symbol: "UYU", name: "Uruguayan Peso" },
	UZS: <Currency>{ symbol: "UZS", name: "Uzbekistan Som" },
	VEF: <Currency>{ symbol: "VEF", name: "Venezuelan Bol????var" },
	VND: <Currency>{ symbol: "VND", name: "Vietnamese Dong" },
	VUV: <Currency>{ symbol: "VUV", name: "Vanuatu Vatu" },
	WST: <Currency>{ symbol: "WST", name: "Samoan Tala" },
	XAF: <Currency>{ symbol: "XAF", name: "CFA Franc BEAC" },
	XCD: <Currency>{ symbol: "XCD", name: "East Caribbean Dollar" },
	XDR: <Currency>{ symbol: "XDR", name: "Special Drawing Rights" },
	XOF: <Currency>{ symbol: "XOF", name: "CFA Franc BCEAO" },
	XPF: <Currency>{ symbol: "XPF", name: "CFP Franc" },
	YER: <Currency>{ symbol: "YER", name: "Yemeni Rial" },
	ZAR: <Currency>{ symbol: "ZAR", name: "South African Rand" },
	ZMK: <Currency>{ symbol: "ZMK", name: "Zambian Kwacha" },
	ZWL: <Currency>{ symbol: "ZWL", name: "Zimbabwean Dollar" },
};

export default Currencies;
