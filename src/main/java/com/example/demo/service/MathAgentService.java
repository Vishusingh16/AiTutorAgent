package com.example.demo.service;

import com.example.demo.GeminiService;
import com.example.demo.model.AskResponse;
import com.example.demo.tool.CalculatorTool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MathAgentService {

    @Autowired
    private GeminiService geminiService;

    public AskResponse handle(String question) {
        String response = geminiService.callGemini("Solve this math problem: " + question);
        return new AskResponse("Math Agent: " + response);
    }
}

//}package com.example.demo.service;
//
//import com.example.demo.GeminiService;
//import com.example.demo.model.AskResponse;
//import com.example.demo.tool.CalculatorTool;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class MathAgentService {
//
//    @Autowired
//    private GeminiService geminiService;
//
//    public AskResponse handle(String question) {
//        String response = geminiService.callGemini("Solve this math problem: " + question);
//        return new AskResponse("Math Agent: " + response);
//    }
//}

//
//import com.example.demo.GeminiService;
//import com.example.demo.model.AskResponse;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class MathAgentService {
//
//    @Autowired
//    private GeminiService geminiService;
//
//    public AskResponse handle(String question) {
//        String response = geminiService.callGemini("Solve this math problem: " + question);
//        return new AskResponse("Math Agent: " + response);
//    }
//}
