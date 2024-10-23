package com.example.JokesAssignment.service.jokes;

import com.example.JokesAssignment.domain.JokesResponse;

public interface JokesService {
    String[] getJokeTypes();
    JokesResponse getRandom();
    JokesResponse[] getRandomByType(String type);
}
