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
	description: 'Automate building of websites and web application projects using Next.JS 13, Tailwind CSS and Typescript.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="font-ubuntu text-neutral-800 antialiased">{children}</body>
		</html>
	);
}
