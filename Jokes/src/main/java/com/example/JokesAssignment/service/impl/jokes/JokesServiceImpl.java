package com.example.JokesAssignment.service.impl.jokes;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.JokesAssignment.domain.JokesResponse;
import com.example.JokesAssignment.service.jokes.JokesService;

@Service
public class JokesServiceImpl implements JokesService{

    @Override
    public String[] getJokeTypes() { // I realized that the types are Strings and that we can return arrays from the assignment description
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://official-joke-api.appspot.com/types", String[].class);
    }

    @Override
    public JokesResponse getRandom() {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://official-joke-api.appspot.com/random_joke", JokesResponse.class);
    }

    @Override
    public JokesResponse[] getRandomByType(String type) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://official-joke-api.appspot.com/jokes/" + type + "/random", JokesResponse[].class);
    }

}
