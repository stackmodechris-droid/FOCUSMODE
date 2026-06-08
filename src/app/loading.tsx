export default function Loading() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-5 py-20">
      <div className="relative h-12 w-12">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-gray-200" />
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-yellow-400" />
      </div>
      <p className="mt-6 text-sm font-medium tracking-wide text-gray-500">
        Loading...
      </p>
    </div>
  );
}
