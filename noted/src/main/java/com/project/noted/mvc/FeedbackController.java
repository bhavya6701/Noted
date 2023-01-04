package com.project.noted.mvc;

import com.project.noted.entity.Feedback;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FeedbackController {
    @Autowired
    private FeedbackService feedbackService;

    //Add a new feedback
    @CrossOrigin
    @RequestMapping(method = RequestMethod.POST, value = "/feedback")
    public void addFeedback(@RequestBody Feedback feedback) {
        feedbackService.addFeedback(feedback);
    }

    //Get all the feedbacks
    @RequestMapping("/feedbacks")
    public List<Feedback> getAllFeedback() {
        return feedbackService.getAllFeedback();
    }
}
