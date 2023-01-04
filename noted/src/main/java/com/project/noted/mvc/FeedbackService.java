package com.project.noted.mvc;

import com.project.noted.entity.Feedback;
import com.project.noted.jpa.FeedbackJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackService {
    @Autowired
    FeedbackJpaRepository repository;

    public void addFeedback(Feedback feedback) {
        repository.addFeedback(feedback);
    }

    public List<Feedback> getAllFeedback() {
        return repository.getAllFeedback();
    }
}
