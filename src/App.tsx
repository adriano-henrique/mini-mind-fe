import MiniMindPage from './components/MiniMindMainPage';

export default function App() {
  return (
    <div className="w-3/5 h-3/5 text-center px-8 py-6">
      <header>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Mini Mind</span>
          </a>
        </div>
      </header>
      <div className="py-5">
        <MiniMindPage />
      </div>
    </div>
  );
}