package com.example.JokesAssignment.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JokesResponse {
    private String type;
    private String setup;
    private String punchline;
    private int id;
}
