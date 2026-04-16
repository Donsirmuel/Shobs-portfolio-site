import { Skeleton } from "@/components/ui/skeleton";

export const ProjectCardSkeleton = () => (
  <div className="rounded-2xl overflow-hidden border border-border">
    <Skeleton className="aspect-[4/3] w-full" />
    <div className="p-6 space-y-3">
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  </div>
);

export const ServiceCardSkeleton = () => (
  <div className="rounded-xl border border-border p-6 space-y-4">
    <Skeleton className="h-12 w-12 rounded-lg" />
    <Skeleton className="h-6 w-1/2" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-3/4" />
  </div>
);

export const BlogCardSkeleton = () => (
  <div className="rounded-xl overflow-hidden border border-border">
    <Skeleton className="aspect-[16/10] w-full" />
    <div className="p-6 space-y-3">
      <Skeleton className="h-5 w-20 rounded-full" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <div className="flex gap-4 pt-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  </div>
);

export const HeroSkeleton = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
      <Skeleton className="h-12 w-12 rounded-full mx-auto" />
      <Skeleton className="h-20 w-full max-w-xl mx-auto" />
      <Skeleton className="h-8 w-64 mx-auto" />
      <Skeleton className="h-6 w-96 mx-auto" />
      <div className="flex gap-4 justify-center pt-4">
        <Skeleton className="h-12 w-40 rounded-lg" />
        <Skeleton className="h-12 w-36 rounded-lg" />
      </div>
    </div>
  </div>
);
