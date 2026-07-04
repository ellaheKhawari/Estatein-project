
export const EmptyState = ({ onClear }: { onClear: () => void }) => (
    <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-5xl mb-4">🏚️</div>
        <h3 className="text-xl font-semibold mb-2">No properties found</h3>
        <p className="text-text-myGray text-sm mb-6 max-w-xs">
            Try adjusting your search criteria or clearing the filters to see more results.
        </p>
        <button
            onClick={onClear}
            className="bg-[var(--color-primary,#7c3aed)] px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity"
        >
            Clear Filters
        </button>
    </div>
);

