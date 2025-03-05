import axios from 'axios';

const API_URL = 'http://localhost:5000';


export const getNotes = async () => {
  return await axios.get(`${API_URL}/notes`);
};


export const createNote = async (note) => {
  return await axios.post(`${API_URL}/add-note`, note);
};


export const updateNote = async (id, note) => {
  return await axios.put(`${API_URL}/edit-note/${id}`, note);
};

// Hapus catatan berdasarkan ID
export const deleteNote = async (id) => {
  return await axios.delete(`${API_URL}/delete-note/${id}`);
};
