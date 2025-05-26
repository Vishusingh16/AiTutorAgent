package com.example.demo.controller;


import com.example.demo.model.AskRequest;
import com.example.demo.model.AskResponse;
import com.example.demo.service.TutorAgentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/tutor")
//@CrossOrigin(origins = "http://localhost:3000")
public class TutorAgentController {

    @Autowired
    private TutorAgentService tutorAgentService;

    @PostMapping("/ask")
    public AskResponse handleQuestion(@RequestBody AskRequest request) {
        return tutorAgentService.delegateQuestion(request.getQuestion());
    }

}
