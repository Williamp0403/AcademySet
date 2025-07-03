import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

export function EmptyState({ message }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-center text-zinc-500 py-8">
      <SentimentDissatisfiedIcon fontSize="large" className="text-zinc-400" />
      <p className="text-base sm:text-lg font-medium">{message}</p>
    </div>
  );
}
