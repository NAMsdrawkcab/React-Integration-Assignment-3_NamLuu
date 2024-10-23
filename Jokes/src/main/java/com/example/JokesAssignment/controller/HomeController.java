package com.example.JokesAssignment.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping(value = {"/", "/types"})
    public String index(){
        return "index";
    }
}
