package com.example.demo.service;

import com.example.demo.GeminiService;
import com.example.demo.model.AskResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhysicsAgentService {

    @Autowired
    private GeminiService geminiService;

    public AskResponse handle(String question) {
        String response = geminiService.callGemini("Answer this physics question: " + question);
        return new AskResponse("Physics Agent: " + response);
    }
}
