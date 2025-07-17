package com.coffee.server.RestController.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoardController {

    @GetMapping("/")
    public String index() {
        return "index"; // This will return the index.html file located in src/main/resources/templates
    }
}
