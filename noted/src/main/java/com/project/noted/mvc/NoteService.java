package com.project.noted.mvc;

import com.project.noted.entity.Note;
import com.project.noted.jpa.NoteJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {
    @Autowired
    NoteJpaRepository repository;

    public List<Note> getNoteByUser(String username) {
        return repository.findNotesByUser(username);
    }

    public List<Note> addNote(Note note) {
        return repository.addNote(note);
    }

    public List<Note> getAllNotes() {
        return repository.findAllNotes();
    }

    public List<Note> deleteNote(int id) {
        return repository.deleteNoteById(id);
    }
}
