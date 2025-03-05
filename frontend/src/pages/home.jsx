import NoteList from '../components/NoteList';
import NoteForm from '../components/NoteForm';
import { useState } from 'react';

const Home = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div>
      <h1 className="text-center mt-4 mb-4">📝 Aplikasi Catatan</h1>
      <NoteForm onNoteAdded={() => setRefresh(!refresh)} />
      <NoteList key={refresh} />
      
    </div>
  );
};

export default Home;
