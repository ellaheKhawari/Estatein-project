export const SkeletonCard = () => (
    <section className="bg-[var(--color-bg,#0f0f1a)] border border-border rounded-xl overflow-hidden animate-pulse">
        <div className="h-48 bg-[var(--color-bg2,#1a1a2e)]"/>
        <div className="p-4 space-y-3">
            <div className="h-5 bg-[var(--color-bg2,#1a1a2e)] rounded w-3/4"/>
            <div className="h-3 bg-[var(--color-bg2,#1a1a2e)] rounded w-full"/>
            <div className="h-3 bg-[var(--color-bg2,#1a1a2e)] rounded w-2/3"/>
            <div className="flex gap-2 mt-4">
                <div className="h-7 bg-[var(--color-bg2,#1a1a2e)] rounded-xl w-24"/>
                <div className="h-7 bg-[var(--color-bg2,#1a1a2e)] rounded-xl w-24"/>
            </div>
            <div className="flex justify-between pt-3 border-t border-[var(--color-border,#2a2a3e)]">
                <div className="h-6 bg-[var(--color-bg2,#1a1a2e)] rounded w-20"/>
                <div className="h-8 bg-[var(--color-bg2,#1a1a2e)] rounded-lg w-32"/>
            </div>
        </div>
    </section>
);