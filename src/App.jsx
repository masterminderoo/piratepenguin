import PiratePenguinCalendar from './components/PiratePenguinCalendar';
import './index.css';

const App = () => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-5 text-center">
        <h1 className="text-3xl">Pirate Penguin Tours</h1>
        <p>Real Food, Real Stories – 4000 HUF per person</p>
      </header>

      <section className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl mb-4">What to Expect</h2>
        <p>See Budapest through the eyes of a local. We visit iconic landmarks, hidden corners, and delicious street food stops (like authentic Lángos!).</p>
        
        <div className="bg-gray-100 p-4 rounded-lg mt-4">
          <ul className="list-disc pl-5">
            <li>2-hour walking tour</li>
            <li>Small groups</li>
            <li>English only</li>
          </ul>
        </div>
      </section>

      <section className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl mb-4">Availability Calendar</h2>
        <PiratePenguinCalendar />
      </section>

      <footer className="text-center p-4 mt-8 text-gray-500">
        <p>&copy; 2025 Pirate Penguin Tours | Private walking tour - No history guide. No tickets included.</p>
      </footer>
    </div>
  );
};

export default App;
