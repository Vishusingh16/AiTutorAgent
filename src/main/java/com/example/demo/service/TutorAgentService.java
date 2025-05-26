package com.example.demo.service;

import com.example.demo.model.AskResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TutorAgentService {


    @Autowired
    private MathAgentService mathAgent;

    @Autowired
    private PhysicsAgentService physicsAgent;

    public AskResponse delegateQuestion(String question) {
        if (question.toLowerCase().contains("math")) {
            return mathAgent.handle(question);
        } else if (question.toLowerCase().contains("physics")) {
            return physicsAgent.handle(question);
        } else {
            return new AskResponse("Sorry, I can only help with this particular problem");
        }
    }
}
