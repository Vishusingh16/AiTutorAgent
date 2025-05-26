//package com.example.demo.model;
//
//public class AskRequest {
//    private String question;
//    public String getQuestion() { return question; }
//    public void setQuestion(String question) { this.question = question; }
//}
//


package com.example.demo.model;

public class AskRequest {
    private String question;

    public AskRequest() { }

    public AskRequest(String question) {
        this.question = question;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }
}
