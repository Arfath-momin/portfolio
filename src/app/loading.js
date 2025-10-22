export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white"></div>
        <p className="mt-4 text-white text-lg">Loading...</p>
      </div>
    </div>
  );
}
