export const config = {
	port: parseInt(process.env.PORT ?? '', 10) || 9500,
	allowedOrigins: (process.env.ALLOWED_ORIGINS || '').split(','),
	db: {
		url: process.env.DATABASE_URL || '',
		host: process.env.DATABASE_HOST,
		port: parseInt(process.env.DATABASE_PORT ?? '', 10) || 5432,
		name: process.env.DATABASE_NAME || '',
		userName: process.env.DATABASE_USERNAME || '',
		password: process.env.DATABASE_PASSWORD || ''
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
	}
};

export const configFn = () => config;
