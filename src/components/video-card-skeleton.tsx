export function VideoCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200/50 overflow-hidden">
      <div className="relative animate-pulse">
        <div className="aspect-video w-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200"></div>
        <div className="absolute bottom-3 right-3 bg-gray-300 h-6 w-14 rounded-lg"></div>
      </div>
      <div className="p-4 space-y-3">
        <div className="space-y-2">
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-md animate-pulse"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-md w-3/4 animate-pulse"></div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
            <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
            <div className="h-3 bg-gray-200 rounded w-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function VideoGridSkeleton({ count = 50 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-1">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="animate-in fade-in-0 slide-in-from-bottom-4"
          style={{
            animationDelay: `${Math.min(index * 50, 500)}ms`,
            animationFillMode: "both",
          }}
        >
          <VideoCardSkeleton />
        </div>
      ))}
    </div>
  )
}
