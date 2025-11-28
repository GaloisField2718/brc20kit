import { CardSkeleton, ListSkeleton } from "@/components/loading/page-loader"

export default function Loading() {
  return (
    <div className="container py-8 space-y-8">
      <div className="space-y-2">
        <div className="h-8 w-48 bg-muted rounded animate-pulse" />
        <div className="h-4 w-96 bg-muted rounded animate-pulse" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <CardSkeleton />
        <CardSkeleton />
      </div>

      <div className="space-y-4">
        <div className="h-6 w-32 bg-muted rounded animate-pulse" />
        <ListSkeleton count={4} />
      </div>
    </div>
  )
}
