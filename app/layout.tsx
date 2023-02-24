import './globals.css';

export const metadata = {
	viewport: {
		width: 'device-width',
		initialScale: 1,
	},
	icons: {
		icon: './favicon.png',
		shortcut: './favicon.png',
	},
	title: 'Next.JS 13 Starter Template',
	description: 'Next.JS 13 starter template',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="font-ubuntu text-neutral-800 antialiased">{children}</body>
		</html>
	);
}
