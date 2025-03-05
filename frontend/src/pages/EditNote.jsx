import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNotes, updateNote } from '../api';

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchNote();
  }, []);

  const fetchNote = async () => {
    try {
      const { data } = await getNotes();
      const noteToEdit = data.find(note => note.id === parseInt(id));
      if (noteToEdit) {
        setTitle(noteToEdit.title);
        setContent(noteToEdit.content);
      }
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateNote(id, { title, content });
      navigate('/');
    } catch (error) {
      console.error("Gagal mengupdate catatan:", error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="col">
        <div className="card shadow p-5">
          <h2 className="mb-3 text-center">📝 Edit Catatan</h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label className="form-label">Judul</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Masukkan judul catatan"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Isi Catatan</label>
              <textarea
                className="form-control form-control-lg"
                rows="4"
                placeholder="Masukkan isi catatan"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success w-100 btn-lg">Simpan Perubahan</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
