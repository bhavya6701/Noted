package com.project.noted.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Note {
    @Id
    @GeneratedValue
    private int id;
    private String username;
    private String note;
    private Date date;

    public Note(String username, String note, Date date) {
        super();
        this.username = username;
        this.note = note;
        this.date = date;
    }
}
