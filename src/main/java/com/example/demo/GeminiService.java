
//
//package com.example.demo;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Service;
//import org.springframework.web.reactive.function.client.WebClient;
//import org.springframework.http.MediaType;
//
//@Service
//public class GeminiService {
//
//    @Value("${gemini.api.key}")
//    private String geminiApiKey;
//
//    private final WebClient webClient;
//
//    public GeminiService(WebClient.Builder webClientBuilder) {
//        this.webClient = webClientBuilder
//                .baseUrl("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent")
//                .build();
//    }
//
//    public String callGemini(String prompt) {
//        String requestBody = """
//            {
//              "contents": [
//                {
//                  "parts": [
//                    {
//                      "text": "%s"
//                    }
//                  ]
//                }
//              ]
//            }
//            """.formatted(prompt);
//
//        try {
//            String response = webClient.post()
//                    .uri(uriBuilder -> uriBuilder.queryParam("key", geminiApiKey).build())
//                    .contentType(MediaType.APPLICATION_JSON)
//                    .bodyValue(requestBody)
//                    .retrieve()
//                    .bodyToMono(String.class)
//                    .block();
//
//            if (response != null || response.contains("text")) {
//                int start = response.indexOf("\"text\":\"") + 8;
//                int end = response.indexOf("\"", start);
//                return response.substring(start, end).replace("\\n", "\n");
//            }
//            return "No valid response from Gemini.";
//        } catch (Exception e) {
//            e.printStackTrace();
//            return "Error calling Gemini API: " + e.getMessage();
//        }
//    }
//}




package com.example.demo;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class GeminiService {

    private final WebClient webClient;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Value("${gemini.api.key}")
    private String geminiApiKey;

    public GeminiService() {
        this.webClient = WebClient.builder()
                .baseUrl("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent")
                .build();
    }

    public String callGemini(String prompt) {
        try {
            String requestBody = """
                {
                  "contents": [
                    {
                      "parts": [
                        {
                          "text": "%s"
                        }
                      ]
                    }
                  ]
                }
                """.formatted(prompt);

            String response = webClient.post()
                    .uri(uriBuilder -> uriBuilder.queryParam("key", geminiApiKey).build())
                    .contentType(MediaType.APPLICATION_JSON)
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            // Parse JSON response
            JsonNode root = objectMapper.readTree(response);
            JsonNode textNode = root.path("candidates").get(0)
                    .path("content").path("parts").get(0)
                    .path("text");

            if (!textNode.isMissingNode()) {
                return textNode.asText();
            } else {
                return "Could not parse Gemini response.";
            }

        } catch (Exception e) {
            e.printStackTrace();
            return "Error calling Gemini API: " + e.getMessage();
        }
    }
}
