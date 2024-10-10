import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="p-2" id="root">
      <h3>Welcome Index!</h3>
    </div>
  );
}
