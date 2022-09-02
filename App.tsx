import Home from './src/Home';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar 
        style='light'
        translucent
        hidden={false}
      />
      <Home />
    </>
  );
}
