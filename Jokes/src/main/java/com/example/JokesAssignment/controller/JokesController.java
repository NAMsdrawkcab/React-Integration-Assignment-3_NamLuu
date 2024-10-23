package com.example.JokesAssignment.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.JokesAssignment.domain.JokesResponse;
import com.example.JokesAssignment.service.jokes.JokesService;

@RestController
public class JokesController {
    @Autowired
    private JokesService jokesService;

    @GetMapping("/types") // displays the different types of jokes
    public String[] getTypes(){
        return jokesService.getJokeTypes();
    }

    @GetMapping("/random") // displays a random joke
    public JokesResponse getRandomJoke(){
        return jokesService.getRandom();
    }

    @GetMapping("/randomTypeOptional") // uses ?type=general to determine what kind of joke to display
    public JokesResponse[] getRandomJokeFromTypeRequestParam(@RequestParam("type") String type){ 
        return jokesService.getRandomByType(type);
    }
}
