package com.project.noted.mvc;

import com.project.noted.entity.Note;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class NoteController {
    @Autowired
    private NoteService noteService;

    //Get notes by user
    @CrossOrigin
    @RequestMapping(method = RequestMethod.POST, value = "/note/{user}")
    public List<Note> getNotesByUser(@PathVariable("user") String username) {
        return noteService.getNoteByUser(username);
    }

    //Add a new note
    @CrossOrigin
    @RequestMapping(method = RequestMethod.POST, value = "/note")
    public List<Note> addNote(@RequestBody Note note) {
        return noteService.addNote(note);
    }

    //Get all the notes
    @RequestMapping("/notes")
    public List<Note> getAllNotes() {
        return noteService.getAllNotes();
    }

    //Delete a note
    @CrossOrigin
    @RequestMapping(method = RequestMethod.DELETE, value = "/notes/{id}")
    public List<Note> deleteNote(@PathVariable int id) {
        return noteService.deleteNote(id);
    }
}
