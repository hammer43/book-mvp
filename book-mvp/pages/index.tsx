import Sidebar from '../components/Sidebar';
import ReadingPane from '../components/ReadingPane';

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ReadingPane />
    </div>
  );
}
