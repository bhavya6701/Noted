package com.project.noted.jpa;

import com.project.noted.entity.Note;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Transactional
public class NoteJpaRepository {
    @PersistenceContext
    EntityManager entityManager;

    public List<Note> findNotesByUser(String username) {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Note> query = builder.createQuery(Note.class);
        Root<Note> root = query.from(Note.class);
        query.select(root).where(builder.equal(root.get("username"), username));
        query.orderBy(builder.desc(root.get("date")));
        return entityManager.createQuery(query).getResultList();
    }

    public List<Note> addNote(Note note) {
        entityManager.merge(note);
        return findNotesByUser(note.getUsername());
    }

    public List<Note> findAllNotes() {
        CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Note> query = builder.createQuery(Note.class);
        Root<Note> root = query.from(Note.class);
        query.orderBy(builder.desc(root.get("date")));
        return entityManager.createQuery(query).getResultList();
    }

    public List<Note> deleteNoteById(int id) {
        Note note = entityManager.find(Note.class, id);
        entityManager.remove(note);
        return findNotesByUser(note.getUsername());
    }
}
