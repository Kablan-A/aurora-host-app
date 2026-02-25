import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { toast } from "sonner";
import emitter from "remote/emitter";

const RemoteHeader = React.lazy(() => import("remote/Header"));
const RemoteForm = React.lazy(() => import("remote/Form"));
const RemoteInput = React.lazy(() => import("remote/Input"));
const RemoteCatalog = React.lazy(() => import("remote/Catalog"));
const RemoteNotificationManager = React.lazy(
	() => import("remote/NotificationManager"),
);

function ErrorFallback({ name }: { name?: string }) {
	return <p style={{ color: "red" }}>Remote {name} unavailable.</p>;
}

function Loading() {
	return <p>Loading...</p>;
}

export default function App() {
	const notificationHandler = React.useCallback(
		(notification: { id: string; message: string; date: string }) => {
			toast(notification.message, {
				description: `Received at: ${notification.date}`,
			});
		},
		[],
	);

	React.useEffect(() => {
		emitter.on("new-notification", notificationHandler);
		return () => emitter.off("new-notification", notificationHandler);
	}, [notificationHandler]);

	return (
		<>
			<ErrorBoundary fallback={<ErrorFallback name='Header' />}>
				<React.Suspense fallback={<Loading />}>
					<RemoteHeader />
				</React.Suspense>
			</ErrorBoundary>

			<main
				style={{
					padding: "0 1rem",
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
				}}
			>
				<div style={{ maxWidth: "20rem" }}>
					<ErrorBoundary fallback={<ErrorFallback name='Form' />}>
						<React.Suspense fallback={<Loading />}>
							<RemoteForm />
						</React.Suspense>
					</ErrorBoundary>
				</div>

				<ErrorBoundary fallback={<ErrorFallback name='Input' />}>
					<React.Suspense fallback={<Loading />}>
						<RemoteInput
							placeholder='Type something...'
							style={{ maxWidth: "20rem" }}
						/>
					</React.Suspense>
				</ErrorBoundary>

				<ErrorBoundary fallback={<ErrorFallback name='Catalog' />}>
					<React.Suspense fallback={<Loading />}>
						<RemoteCatalog />
					</React.Suspense>
				</ErrorBoundary>

				<ErrorBoundary fallback={<ErrorFallback name='Notification Manager' />}>
					<React.Suspense fallback={<Loading />}>
						<RemoteNotificationManager />
					</React.Suspense>
				</ErrorBoundary>
			</main>
		</>
	);
}
