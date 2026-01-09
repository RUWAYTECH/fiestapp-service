export const config = {
	port: parseInt(process.env.PORT ?? '', 10) || 9500,
	allowedOrigins: (process.env.ALLOWED_ORIGINS || '').split(','),
	db: {
		url: process.env.DATABASE_URL || '',
		host: process.env.DATABASE_HOST,
		port: parseInt(process.env.DATABASE_PORT ?? '', 10) || 5432,
		name: process.env.DATABASE_NAME || '',
		userName: process.env.DATABASE_USERNAME || '',
		password: process.env.DATABASE_PASSWORD || '',
		ssl: process.env.DATABASE_SSL === 'true'
	},
	jwt: {
		secret: process.env.JWT_SECRET || '',
		expirationTime: process.env.JWT_EXPIRATION_TIME || '1h'
	},
	google: {
		clientId: process.env.GOOGLE_CLIENT_ID || '',
		clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
	},
	cloudinary: {
		cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
		apiKey: process.env.CLOUDINARY_API_KEY || '',
		apiSecret: process.env.CLOUDINARY_API_SECRET || ''
	},
	mail: {
		host: process.env.MAIL_HOST || '',
		port: parseInt(process.env.MAIL_PORT ?? '', 10) || 587,
		user: process.env.MAIL_USER || '',
		password: process.env.MAIL_PASSWORD || '',
		fromAddress: process.env.MAIL_FROM || '',
		platformAddress: process.env.MAIL_PLATFORM || ''
	},
	company: {
		logoUrl: process.env.COMPANY_LOGO_URL || ''
	}
};

export const configFn = () => config;
