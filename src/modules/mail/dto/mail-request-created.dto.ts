export interface CompanyInfo {
	name: string;
	phone: string;
	email: string;
	address: string;
	logoUrl: string;
}

export interface MoreInfo {
	icon: string;
	title: string;
	description: string;
}

export interface MailRequestCreatedDto {
	state: {
		color: string;
		label: string;
	};
	date: string;
	items: { name: string; quantity: number; price: number; subtotal: number; comment: string }[];
	subtotal: number;
	total: number;
}
